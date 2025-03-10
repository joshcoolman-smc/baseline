import { Button } from "@/components/ui/button";
import { CheckSupabaseConfig } from "@/components/auth/check-supabase-config";

export default async function Home() {
  return (
    <CheckSupabaseConfig>
      <div className="flex items-center justify-center min-h-screen flex-col gap-8">
        <Button>Hello</Button>
      </div>
    </CheckSupabaseConfig>
  );
}
