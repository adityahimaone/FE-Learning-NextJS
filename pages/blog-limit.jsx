import React, { useState } from "react";
import Layout from "@/layouts/mainLayout";

export default function BlogLimit(props) {
  const { posts: initialPosts } = props;

  const [posts, setPosts] = useState(initialPosts.slice(0, 10));
  const [start, setStart] = useState(20);

  const limitPosts = () => {
    setPosts(initialPosts.slice(0, start));
    setStart(start + 10);
  };

  return (
    <Layout pageTitle="Blog">
      <div className=" p-4">
        <h1 className="text-center p-4 text-2xl text-blue-400">
          Welcome To Blog Page
        </h1>
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-2 gap-4">
            {posts.map((item) => (
              <article
                key={item.id}
                className="bg-blue-300 rounded-md px-4 py-5 backdrop-blur-xl shadow-xl"
              >
                <h2 className="text-lg text-center font-semibold">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.body}</p>
              </article>
            ))}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 my-5 hover:bg-blue-700"
            onClick={limitPosts}
          >
            Load More
          </button>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await resp.json();
  return {
    props: {
      posts,
    },
  };
}
