import React from "react";
import AppContext, { useAppContext } from "../context/appContext";

export default function setting() {
  const context = useAppContext(AppContext);
  return (
    <div>
      <h1 className="text-center text-xl font-bold p-4">Setting User</h1>
      <div>
        <div className="flex justify-center gap-4">
          <span>Change Username</span>
          <input
            type="text"
            onChange={(e) => {
              context.setuser({ ...context.user, username: e.target.value });
            }}
            className="px-1 rounded-md border-2 border-gray-400"
            name="username"
            placeholder="Change Username"
            value={context.user.username ?? ""}
          />
        </div>
      </div>
    </div>
  );
}
