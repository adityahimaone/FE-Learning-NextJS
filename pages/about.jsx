import Link from "next/link";

export default function about() {
  return (
    <div className="w-full mx-auto">
      <header className="p-4">
        <ul className="flex flex-row gap-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/profile/detail">Profile</Link>
          </li>
        </ul>
      </header>
      <div className="text-center p-4">
        <h1 className="text-2xl text-blue-400">Welcome To About Page</h1>
      </div>
    </div>
  );
}
