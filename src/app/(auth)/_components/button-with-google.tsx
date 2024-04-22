"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

interface IButtonWithGoogleProps {
  callbackUrl?: string;
  disabled?: boolean;
}

export const ButtonWithGoogle = ({
  callbackUrl = "/",
  disabled = false,
}: IButtonWithGoogleProps) => {
  const handleLoginWithGoogle = () => {
    signIn("google", { callbackUrl, redirect: false });
  };
  return (
    <Button
      type="button"
      onClick={handleLoginWithGoogle}
      variant={"outline"}
      className="flex justify-center items-center gap-x-2"
    >
      <FcGoogle className="h-5 w-5" />
      <span className="text-slate-600">Login dengan Google</span>
    </Button>
  );
};
