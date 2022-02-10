import { useRouter } from "next/router";
import Layout from "../../layouts/mainLayout";

export default function ProfilDynamic() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <h1>Profile Detail {id}</h1>
    </Layout>
  );
}
