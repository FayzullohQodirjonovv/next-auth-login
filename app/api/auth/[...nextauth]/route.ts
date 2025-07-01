import { authOptions } from "@/config";
import NextAuth from "next-auth";

export const hendler = NextAuth(authOptions);
export{hendler as GET ,hendler as POST}