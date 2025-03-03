import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import Home from "./page";



export const dynamic = "force-dynamic";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();

  // console.log("Current Clerk User:", user);

  if (!user) return null;

  const loogedInUser = await prisma.user.findUnique({
    where: {
      clerkUserID: user.id,
    },
  });

  // console.log("Logged In DB User:", loogedInUser);

  if (!loogedInUser) {
    const newUser = await prisma.user.create({
      data: {
        name: user.fullName as string,
        clerkUserID: user.id,
        email: user.emailAddresses[0].emailAddress,
        imageUrl: user.imageUrl,
      },
    });
    //   console.log("Created New User:", newUser);
  }

  return (
    <div>
      <Home />
    </div>
  );
};

export default Layout;
