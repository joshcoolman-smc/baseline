import { createClient } from "@/app/(auth)/_supabase/server";
import { ThemeToggle } from "@/components/theme-toggle";
import { AuthNavItems } from "@/components/auth-nav-items";
import { UserInfo } from "@/components/user-info";
import { CheckSupabaseConfig } from "@/components/auth/check-supabase-config";

function GlobalNavContent({
  isAuthenticated,
  email,
}: {
  isAuthenticated: boolean;
  email: string | null;
}) {
  return (
    <nav className="flex justify-between items-center p-4 bg-zinc-200 dark:bg-zinc-900">
      <div>
        <div className="text-zinc-900 dark:text-zinc-300 text-2xl font-bold">
          Baseline
        </div>
        <UserInfo email={email} />
      </div>
      <div className="flex items-center gap-4">
        <AuthNavItems isAuthenticated={isAuthenticated} email={email} />
        <ThemeToggle />
      </div>
    </nav>
  );
}

function GlobalNavFallback() {
  return (
    <nav className="flex justify-between items-center p-4 bg-zinc-200 dark:bg-zinc-900">
      <div>
        <div className="text-zinc-900 dark:text-zinc-300 text-2xl font-bold">
          Baseline
        </div>
        <UserInfo email={null} />
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </nav>
  );
}

export async function GlobalNav() {
  return (
    <CheckSupabaseConfig fallback={<GlobalNavFallback />}>
      <GlobalNavServer />
    </CheckSupabaseConfig>
  );
}

async function GlobalNavServer() {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const isAuthenticated = !!session;
  const email = session?.user?.email ?? null;

  return <GlobalNavContent isAuthenticated={isAuthenticated} email={email} />;
}
