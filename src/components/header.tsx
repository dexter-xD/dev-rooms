"use client";

import { signIn, useSession } from "next-auth/react";
import { ModeToggle } from "./mode-toggle";
import AccountDropDownMenu from "./account-menu";
import { Button } from "./ui/button";
import { LogInIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const session = useSession();
  const isLoggedIn = !!session.data;

  return (
    <header className="bg-gray-100 dark:bg-gray-900 container mx-auto py-3">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="flex gap-2 items-center text-xl font-bold dark:hover:text-gray-400 hover:text-blue-500"
        >
          <Image src="/icon2.png" width="50" height="50" alt="logo" />
          Dev Rooms
        </Link>

        <div className="flex items-center gap-4 max-sm:gap-1">
          {isLoggedIn ? (
            <AccountDropDownMenu session={session} />
          ) : (
            <Button
              onClick={() => signIn("google")}
              className="h-14 max-sm:h-9"
            >
              <LogInIcon className="mr-2" />
              <div className="max-sm:hidden">Sign in</div>
            </Button>
          )}

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
