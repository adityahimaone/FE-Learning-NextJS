import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col py-10 justify-center items-center">
      <h1 className="text-2xl">Login Cookie Middleware</h1>
      <button
        type="button"
        className="bg-blue-400 px-2 rounded-md text-white w-fit hover:bg-blue-700"
        onClick={() => {
          document.cookie = "username=John Doe";
          document.cookie = "password=12345";
          document.cookie = "isLoggedIn=true";
          document.cookie = "token=12345; path=/";
        }}
      >
        Login
      </button>
    </div>
  );
}
