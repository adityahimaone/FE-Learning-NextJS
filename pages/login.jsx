import React from "react";
import Layout from "@/layouts/mainLayout";

export default function Login() {
  return (
    <Layout pageTitle="Login">
      <div className="flex w-full justify-center items-center h-full">
        <div className="flex flex-col max-w-md border bg-blue-200 p-10 rounded-lg">
          <h1 className="text-center text-xl text-blue-700 font-bold mb-4">
            Login Page
          </h1>
          <div className="">
            <form action="/login" method="post">
              <div className="mb-4">
                <span>Username</span>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <button
                  type="button"
                  className="w-full bg-blue-500 rounded-md py-1 text-white"
                  onClick={() => {
                    document.cookie = "username=John Doe";
                    document.cookie = "password=12345";
                    document.cookie = "isLoggedIn=true";
                    document.cookie = "token=12345; path=/";
                  }}
                >
                  <span>Login</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
