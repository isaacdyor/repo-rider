import { getOctokit } from "@/lib/github";
import { getUser } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ name: string }>;
}

export default async function RepoPage({ params }: PageProps) {
  const { name } = await params;
  const { user } = await getUser();

  const username = user?.user_metadata.user_name as string | undefined;

  if (!username) {
    redirect("/signin");
  }

  const octokit = await getOctokit();

  const { data: repo } = await octokit.rest.repos.get({
    owner: username,
    repo: name,
  });

  const { data: commits } = await octokit.rest.repos.listCommits({
    owner: username,
    repo: name,
  });

  console.log(commits);

  return (
    <div>
      {commits.map((commit) => (
        <div key={commit.sha}>{commit.commit.message}</div>
      ))}
    </div>
  );
}
