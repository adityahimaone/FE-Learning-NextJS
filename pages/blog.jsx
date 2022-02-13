import React, { useState } from "react";
import Layout from "@/layouts/mainLayout";

export default function Blog(props) {
  const { posts: initialPosts } = props;

  const [start, setStart] = useState(10);
  const [posts, setPost] = useState(initialPosts);

  const loadMore = async () => {
    const resp = await fetch(
      ` https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=10`
    );
    const newPots = await resp.json();
    setPost([...posts, ...newPots]);
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
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const resp = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10"
  );
  const posts = await resp.json();
  return {
    props: {
      posts,
    },
  };
}
