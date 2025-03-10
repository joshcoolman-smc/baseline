"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SubmitButton } from "./submit-button";

interface LoginFormProps {
  onSubmit: (formData: FormData) => Promise<void>;
  errorMessage?: string | null;
}

export function LoginForm({ onSubmit, errorMessage }: LoginFormProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-24">
      <div className="w-full max-w-md space-y-6">
        <Card className="border bg-zinc-50 dark:bg-zinc-700">
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-black dark:text-zinc-200"
                  >
                    Email address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="border-zinc-500 bg-zinc-50/5 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-300 placeholder:text-zinc-700 dark:placeholder:text-zinc-400 py-5 px-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="text-zinc-900 dark:text-zinc-300"
                  >
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    required
                    className="border-zinc-500 bg-zinc-50/5 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-300 placeholder:text-zinc-700 dark:placeholder:text-zinc-400 py-5 px-4"
                  />
                </div>

                <SubmitButton
                  formAction={onSubmit}
                  pendingText="Signing in..."
                  className="w-full bg-zinc-200 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-800 cursor-pointer"
                >
                  Sign in
                </SubmitButton>
              </div>
            </form>
          </CardContent>
        </Card>

        {errorMessage && (
          <Alert
            variant="destructive"
            className="bg-red-950/20 border-red-900/20"
          >
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}

        <div className="text-center">
          <Button
            variant="link"
            asChild
            className="text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-300"
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
