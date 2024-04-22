import { TRegister } from "@/auth/_schema/register";
import { dbAuth } from "@/drizzle/db-auth";
import { user } from "@/drizzle/schema";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

interface TUser {
  id: string;
  email: string;
  name: string;
  password?: string;
}

export const getUserByEmail = async (email: string) => {
  const userSelected = await dbAuth.select({}).from(user).where(eq(user.email, email))
  if (userSelected.length === 0) {
    return null;
  }
  return userSelected[0] as TUser;
};

export const userCreate = async (
  data: TRegister
): Promise< TUser | { error: string }> => {
  try {
    const password = await bcrypt.hash(data.password, 10);
    const userData = {
      id: Math.random().toString(36).substring(10),
      email: data.email,
      name: data.name, 
      password,     
    };
    const userExists = await getUserByEmail(data.email);
    
    if (userExists) {
      return { error: "User already exists" };
    }

    const newUser = await dbAuth.insert(user).values(
      userData,
    )
    return userData as TUser;
  } catch (error) {
    // what object is error?
    //console.log("[error]", Object.prototype.toString.call(error));
    console.log("[error]", error);
    return { error: "Unknown error" };
  }
};
