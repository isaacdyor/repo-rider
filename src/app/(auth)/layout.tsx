import { Logo } from "@/components/logo";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const RootLayout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  return (
    <>
      <div className="absolute top-0 z-40 w-full bg-transparent px-4 lg:px-24 xl:px-36">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </div>

      <div className="flex min-h-screen items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="space-y-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Sign in with your GitHub account
              </p>
            </div>
            {children}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default RootLayout;
