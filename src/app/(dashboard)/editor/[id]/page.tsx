import { api } from "@/trpc/server";

export default async function EditorPage() {
  const article = await api.articles.getById({
    id: "9ab5eb45-1676-4fa0-a72c-4ddc2791d6c3",
  });
  return (
    <div>
      <p>{article?.title}</p>
      <p>{article?.content}</p>
    </div>
  );
}
