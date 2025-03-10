"use client";

interface UserInfoProps {
  email: string | null;
}

export function UserInfo({ email }: UserInfoProps) {
  if (!email) return null;

  return <p className="text-xs text-muted-foreground">{email}</p>;
}
