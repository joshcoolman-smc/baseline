import { createClient } from "@/app/(auth)/_supabase/server";
import { ThemeToggle } from "@/components/theme-toggle";
import { AuthNavItems } from "@/components/auth-nav-items";

export async function GlobalNav() {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const isAuthenticated = !!session;
  const email = session?.user?.email ?? null;

  return (
    <nav className="flex justify-between items-center p-4 bg-zinc-200 dark:bg-zinc-900">
      <div className="text-zinc-900 dark:text-zinc-300 text-2xl font-bold">
        Baseline
      </div>
      <div className="flex items-center gap-4">
        <AuthNavItems isAuthenticated={isAuthenticated} email={email} />
        <ThemeToggle />
      </div>
    </nav>
  );
}
