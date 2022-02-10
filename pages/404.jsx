import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  const [textCount, setCount] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [textCount]);


  return (
    // div tailwind  classnmae item in center page
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col text-center">
        <h1 className="text-2xl text-blue-500">Oppps!! Page is Not Found</h1>
        <div className="w-full border-b-4 border-l-indigo-700 rounded-sm" />
        <h2 className="text-xl text-blue-400">404</h2>
        <p className="text-black font-semibold">
          Redirecting to Home in {textCount} seconds ...
        </p>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full"
        >
          <Link href="/">Go Back</Link>
        </button>
      </div>
    </div>
  );
}
