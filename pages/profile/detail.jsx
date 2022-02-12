import { useRouter } from "next/router";
import Layout from "@/layouts/mainLayout";

export default function detail(props) {
  const { dataUsers } = props;
  const router = useRouter();

  // console.log(dataUsers);
  return (
    <Layout pageTitle="Detail User">
      <div className="w-full mx-auto text-center">
        <h1 className="text-xl m-4 font-semibold">Data User Detail Page</h1>
        <table className="table-auto w-full border-2 rounded-md">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataUsers.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address.city}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      router.push(`/profile/${item.id}`);
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md"
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
