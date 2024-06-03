import { getUserData } from "@/apis/userApi";
import UserdataForm from "@/components/UserdataForm";
import StoreProvider from "./StoreProvider";

async function getData() {
  const res = await getUserData();
  return res;
}

// opting out nexjs caching
export const revalidate = 0;

export default async function Home() {
  const data = await getData();
  console.log(data);
  const user = data.data;

  return (
    <div className="container py-12">
      <p className="text-3xl font-bold mb-4">User Data</p>
      <StoreProvider>
        <UserdataForm data={user} />
      </StoreProvider>
    </div>
  );
}
