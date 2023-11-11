"use client";
import Image from "next/image";
import Block from "./Block";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header1 = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const key = Cookies.get("user");
    if(key){
      setAuth(true);
      return;
    }
    setAuth(false);
  }, [auth]);
  
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("user");
    setAuth(false);
    router.push("/");
  };
  return (
    <div className=" flex justify-between border-b-2 border-gray-300 items-center h-24 px-10">
          {auth ? (
            <h3
              className=" font-bold cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </h3>
          ) : (
            <Link href={"/login"} className=" font-bold">
              Login / Signup
            </Link>
          )}
        </div>
  );
};

export default Header1;
