import { Button } from "@/components/ui/button";
import { CheckSupabaseConfig } from "@/components/auth/check-supabase-config";

export default async function Home() {
  return (
    <CheckSupabaseConfig>
      <div className="flex items-center text-center flex-col justify-center min-h-screen  ">
        <div className="-mt-20 bg-neutral-100 dark:bg-neutral-800 p-4 pb-5 px-8 rounded-lg shadow-lg border text-muted-foreground">
          <h1 className="text-2xl  text-neutral-600 dark:text-neutral-300 font-bold">
            Officer KD6-3.7
          </h1>

          <p className=" text-xs text-neutral-950 dark:text-muted-foreground dark:font-semibold">
            And blood-black nothingness began to spin...
          </p>
        </div>
      </div>
    </CheckSupabaseConfig>
  );
}
