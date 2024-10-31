"use client";

import { GitHubSigninButton } from "@/components/github-signin-button";

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Sign in</h1>
        <GitHubSigninButton />
      </div>
    </div>
  );
}
