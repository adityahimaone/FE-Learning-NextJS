import Link from "next/link";
import AppContext, { useAppContext } from "../../context/appContext";

export default function index() {
  const { context } = useAppContext(AppContext);
  return (
    <header
      className={`p-4  shadow-lg bg-clip-padding bg-opacity-60 border border-gray-200 backdrop-blur-md ${
        context.switchTheme === "dark" ? "bg-gray-900" : "bg-blue-500"
      }`}
    >
      <div className="flex justify-between container mx-auto">
        <div className="mx-4">
          <ul className="flex flex-row gap-4">
            <li className="text-white font-bold hover:text-blue-400">
              <Link href="/">Home</Link>
            </li>
            <li className="text-white font-bold hover:text-blue-400">
              <Link href="/about">About</Link>
            </li>
            <li className="text-white font-bold hover:text-blue-400">
              <Link href="/profile/detail">Profile</Link>s
            </li>
            <li className="text-white font-bold hover:text-blue-400">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="text-white font-bold hover:text-blue-400">
              <Link href="/blog-limit">Blog (Limit)</Link>
            </li>
            <li className="text-white font-bold hover:text-blue-400">
              <Link href="/setting">Setting</Link>
            </li>
          </ul>
        </div>
        <div className="mx-4">
          <span>Hi, {context.user ? context.user.username : "Null"}</span>
        </div>
      </div>
    </header>
  );
}
