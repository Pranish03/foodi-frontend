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
        <h1 className="md:text-3xl text-2xl font-bold text-gray-900 md:mt-10 mt-8">
          Featured Menus
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:mt-10 mt-5 md:mb-14 mb-12">
          {menus?.data?.map((menu) => (
            <MenuCard key={menu?.id} data={menu} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
}
