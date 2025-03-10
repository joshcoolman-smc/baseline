import { createClient } from "@/app/(auth)/_supabase/server";
import { redirect } from "next/navigation";
import { CheckSupabaseConfig } from "@/components/auth/check-supabase-config";
import { LoginForm } from "../_components/login-form";

export default async function Login({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <CheckSupabaseConfig>
      <LoginContent searchParams={searchParams} />
    </CheckSupabaseConfig>
  );
}

async function LoginContent({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const supabase = await createClient();

  // Check if user is already logged in
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    redirect("/dashboard");
  }

  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      return redirect("/login?message=Please provide both email and password");
    }

    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect(`/login?message=${encodeURIComponent(error.message)}`);
    }

    return redirect("/dashboard");
  };

  const resolvedParams = await searchParams;
  const message = resolvedParams?.message
    ? Array.isArray(resolvedParams.message)
      ? resolvedParams.message[0]
      : resolvedParams.message
    : null;

  return <LoginForm onSubmit={signIn} errorMessage={message} />;
}
