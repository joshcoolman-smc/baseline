import { isSupabaseConfigured } from "@/lib/supabase-utils";
import { MissingCredentials } from "@/components/missing-credentials";
import { ReactNode } from "react";

interface CheckSupabaseConfigProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export async function CheckSupabaseConfig({
  children,
  fallback,
}: CheckSupabaseConfigProps) {
  const configured = isSupabaseConfigured();

  if (!configured) {
    return fallback ?? <MissingCredentials />;
  }

  return children;
}
