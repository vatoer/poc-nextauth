"use server";
import * as z from "zod";

import { LoginSchema } from "@/auth/_schema/login";
import { signIn } from "@/auth/auth";
import { DEFAULT_ROUTE_AFTER_LOGIN } from "@/routes";
import { AuthError } from "next-auth";
type TLogin = z.infer<typeof LoginSchema>;

export const login = async (data: TLogin) => {
  console.log(data);
  const validateFields = LoginSchema.safeParse(data);

  if (!validateFields.success) {
    return { error: "Invalid data", data: validateFields.error };
  }

  const { email, password } = validateFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_ROUTE_AFTER_LOGIN,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin": {
          console.log(error);
          return { error: "Invalid credentials" };
        }
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }
};
