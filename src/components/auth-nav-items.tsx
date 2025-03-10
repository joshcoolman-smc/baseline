"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/app/(auth)/_supabase/client";

interface AuthNavItemsProps {
  email: string | null;
  isAuthenticated: boolean;
}

export function AuthNavItems({ email, isAuthenticated }: AuthNavItemsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await supabase.auth.signOut();
      // Ensure router refresh completes before navigation
      await Promise.all([
        new Promise((resolve) => {
          router.refresh();
          // Give the refresh some time to complete
          setTimeout(resolve, 100);
        }),
      ]);
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isAuthenticated) {
    return (
      <>
        <p className="text-sm font-medium text-sky-300">{email}</p>
        <Button
          variant="ghost"
          className={
            pathname === "/dashboard" ? "underline underline-offset-4" : ""
          }
          asChild
        >
          <Link href="/dashboard">Dashboard</Link>
        </Button>
        <Button
          variant="ghost"
          onClick={handleLogout}
          disabled={isLoading}
          className="text-red-400 disabled:opacity-50"
        >
          {isLoading ? "Signing out..." : "Logout"}
        </Button>
      </>
    );
  }

  return (
    <Button variant="ghost" asChild>
      <Link href="/login">Login</Link>
    </Button>
  );
}
