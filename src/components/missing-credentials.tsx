"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code } from "lucide-react";

export function MissingCredentials() {
  return (
    <div className="container max-w-3xl mx-auto p-4 space-y-6">
      <Alert variant="destructive">
        <Code className="h-4 w-4" />
        <AlertTitle>Missing Supabase Credentials</AlertTitle>
        <AlertDescription>
          Your application is not properly configured with Supabase credentials.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Setup Required</CardTitle>
          <CardDescription>
            Follow these steps to enable authentication in your application
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-medium">1. Create a Supabase Project</h3>
            <p className="text-sm text-muted-foreground">
              Visit{" "}
              <a
                href="https://supabase.com"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                supabase.com
              </a>{" "}
              and create a new project
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">2. Configure Environment Variables</h3>
            <p className="text-sm text-muted-foreground">
              Create a{" "}
              <code className="px-1 py-0.5 bg-muted rounded">.env.local</code>{" "}
              file in your project root with:
            </p>
            <pre className="p-4 rounded bg-muted text-sm">
              <code>{`NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key`}</code>
            </pre>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">3. Create Users</h3>
            <p className="text-sm text-muted-foreground">
              Go to Authentication &gt; Users in the Supabase dashboard to
              manually add users with email/password
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">4. Restart Your Application</h3>
            <p className="text-sm text-muted-foreground">
              After adding the environment variables, restart your Next.js
              development server
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
