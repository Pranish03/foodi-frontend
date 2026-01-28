import Wrapper from "@/components/Wrapper";
import RestaurantClient from "./RestaurantClient";
import { fetchDataFromApi } from "@/utils/api";

const maxResult = 4;

export default async function RestaurantPage({ params }) {
  const { slug } = await params;

  const restaurantRes = await fetchDataFromApi(
    `/api/restaurants?filters[slug][$eq]=${slug}&populate[menus][populate]=*`,
  );

  const restaurant = restaurantRes?.data?.[0];

  if (!restaurant) {
    return <div className="text-center py-20">Restaurant not found</div>;
  }

  const initialMenus = restaurant.menus || [];

  return (
    <div className="w-full md:py-20 relative">
      <Wrapper>
        <div className="text-center max-w-200 mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight text-gray-900">
            {restaurant.name}
          </div>
        </div>

        <RestaurantClient
          slug={slug}
          initialMenus={initialMenus}
          maxResult={maxResult}
        />
      </Wrapper>
    </div>
  );
}
