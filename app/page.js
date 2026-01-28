import HeroBanner from "@/components/HeroBanner";
import MenuCard from "@/components/MenuCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";

export default async function Home() {
  const menus = await fetchDataFromApi("/api/menus?populate=*");

  return (
    <main>
      <HeroBanner />

      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
          {menus?.data?.map((menu) => (
            <MenuCard key={menu?.id} data={menu} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
}
