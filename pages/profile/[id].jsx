import { useRouter } from "next/router";
import Layout from "../../layouts/mainLayout";

export default function ProfilDynamic(props) {
  const { UserData } = props;
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <h1 className="text-center text-xl font-semibold p-4">
        Profile Detail {id}
      </h1>
      <div className="m-4 p-2 backdrop-blur-sm bg-blue-300 rounded-md text-white">
        <div className="flex">
          <p>Name </p>
          <p>: {UserData.name}</p>
        </div>
        <div className="flex">
          <p>Email </p>
          <p>: {UserData.email}</p>
        </div>
        <div className="flex">
          <p>Phone </p>
          <p>: {UserData.phone}</p>
        </div>
        <div className="flex">
          <p>Address </p>
          <p>: {UserData.address.city}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => {
            router.push("/profile/detail");
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md"
        >
          Back
        </button>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  const paths = dataUsers.map((item) => ({
    params: {
      id: item.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const users = await res.json();
  return {
    props: {
      UserData: users,
    },
  };
}
