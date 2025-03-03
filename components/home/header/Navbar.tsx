"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../../ui/button";
import SearchInput from "./search-input";
import ModeToggle from "./toggle";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full border border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Link href={"/"} className="flex items-center space-x-2">
              <span className="font-bold text-2xl">
                <span className="bg-gradient-to-r from-purple-600 to bg-indigo-600 dark:from-purple-300 dark:to-indigo-400 bg-clip-text text-transparent">
                  Node
                </span>
                <span>Notes</span>
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-7">
            <div className="flex gap-7">
              <Link
                href={"/articles"}
                className={
                  "text-sm font-medium text-foreground transition-colors hover:text-foreground "
                }
              >
                Articles
              </Link>
              <Link
                href={"/tutorial"}
                className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
              >
                Tutorial
              </Link>
              <Link
                href={"/about"}
                className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
              >
                About
              </Link>
              <Link
                href={"/dashboard"}
                className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
              >
                Dashboard
              </Link>
            </div>

            {/* Right section */}
            <div className="flex items-center gap-4">
              <SearchInput />
              <ModeToggle />

              <SignedIn>
                <UserButton />
              </SignedIn>

              <SignedOut>
                <div className="hidden md:flex items-center gap-2">
                  <SignInButton>
                    <Button variant={"outline"}>Login</Button>
                  </SignInButton>
                  <SignUpButton>
                    <Button>Signup</Button>
                  </SignUpButton>
                </div>
              </SignedOut>
            </div>
          </div>

          {/* Mobile View - Dark Mode Toggle on the Right */}
          <div className="md:hidden flex items-center gap-2">
            <SearchInput />
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
