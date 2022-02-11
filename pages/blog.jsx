import React from "react";
import Layout from "../layouts/mainLayout";

export default function blog(props) {
  const { blogData } = props;

  return (
    <Layout pageTitle="Blog">
      <div className=" p-4">
        <h1 className="text-center p-4 text-2xl text-blue-400">
          Welcome To Blog Page
        </h1>
        <div className="grid grid-cols-2 gap-4">
          {blogData.map((item) => (
            <div
              key={item.id}
              className="bg-blue-300 rounded-md px-4 py-5 backdrop-blur-xl shadow-xl"
            >
              <h2 className="text-lg text-center font-semibold">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await resp.json();
  return {
    props: {
      blogData: dataBlog,
    },
  };
}
