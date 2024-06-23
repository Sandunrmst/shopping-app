"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { loginAction, logoutAction } from "@/actions";

function Headers({ getSession }) {
  async function handleOuthSignOut() {
    await logoutAction();
  }

  async function handleOauthSignIn() {
    await loginAction();
  }
  return (
    <header className="flex shadow-md py-4 px-4 bg-white min-h-[70px] tracking-wide  z-50 sticky top-0">
      <div className="flex flex-wrap items-center justify-between gap-6 w-full">
        <Link href={"/"} className="font-semibold text-2xl">
          Shopping Store
        </Link>
      </div>

      <ul className="flex gap-6 items-center justify-center mr-10">
        <li className="text-lg font-semibold">
          <Link href={"/"}>Products</Link>
        </li>
        <li className="text-lg font-semibold">
          <Link href={"/cart"}>Cart</Link>
        </li>
      </ul>

      <div className="flex space-x-3">
        <form action={getSession?.user ? handleOuthSignOut : handleOauthSignIn}>
          <Button type="submit">{getSession?.user ? "Logout" : "Login"}</Button>
        </form>
      </div>
    </header>
  );
}

export default Headers;
