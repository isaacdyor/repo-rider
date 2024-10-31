import { Button } from "@/components/ui/button";
import { env } from "@/env";
import { createClient } from "@/lib/supabase/client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export function GitHubSigninButton() {
  const supabase = createClient();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${env.NEXT_PUBLIC_APP_URL}/auth/callback?next=/dashboard`,
      },
    });
    if (error) {
      console.error("OAuth error", error);
    }
  };
  return (
    <Button
      key={"github"}
      variant="outline"
      className="mb-2 w-full font-normal text-muted-foreground"
      onClick={handleLogin}
    >
      <div className="flex items-center gap-2">
        <GitHubLogoIcon className="h-5 w-5" />
        <p>Continue with GitHub</p>
      </div>
    </Button>
  );
}
