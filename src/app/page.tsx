import { Button } from "@/components/ui/button";
import { CheckSupabaseConfig } from "@/components/auth/check-supabase-config";
import { HomeBadge } from "@/components/home-badge";

export default async function Home() {
  return (
    <CheckSupabaseConfig>
      <div className="flex items-center text-center flex-col justify-center min-h-screen">
        <HomeBadge
          title="Officer KD6-3.7"
          subtitle="And blood-black nothingness began to spin..."
        />
      </div>
    </CheckSupabaseConfig>
  );
}
