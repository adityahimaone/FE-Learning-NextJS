import Link from "next/link";

export default function index() {
  return (
    <header className="p-4 bg-blue-300 shadow-lg bg-clip-padding bg-opacity-60 border border-gray-200 backdrop-blur-md">
      <ul className="flex flex-row gap-2">
        <li className="text-white font-bold hover:text-blue-400">
          <Link href="/">Home</Link>
        </li>
        <li className="text-white font-bold hover:text-blue-400">
          <Link href="/about">About</Link>
        </li>
        <li className="text-white font-bold hover:text-blue-400">
          <Link href="/profile/detail">Profile</Link>
        </li>
      </ul>
    </header>
  );
}
