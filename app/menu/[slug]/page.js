import Wrapper from "@/components/Wrapper";
import MenuDetailsCarousel from "@/components/MenuDetailsCarousel";
import RelatedMenus from "@/components/RelatedMenus";
import MenuActions from "@/components/MenuActions";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/helper";

export default async function MenuPage({ params }) {
  const { slug } = await params;

  console.log(slug);

  const menuRes = await fetchDataFromApi(
    `/api/menus?populate=*&filters[slug][$eq]=${slug}`,
  );

  const menusRes = await fetchDataFromApi(
    `/api/menus?populate=*&filters[slug][$ne]=${slug}`,
  );

  const m = menuRes?.data?.[0];

  if (!m) {
    return <div className="py-20 text-center">Menu not found</div>;
  }

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-12.5 lg:gap-25">
          <div className="w-full md:w-auto flex-[1.5] max-w-125 mx-auto">
            <MenuDetailsCarousel images={m.image} />
          </div>

          <div className="flex-1 py-3">
            <h1 className="text-[34px] font-semibold mb-2">{m.name}</h1>
            <p className="text-lg font-semibold mb-5">{m.subtitle}</p>

            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">Rs. {m.price}</p>
              {m.original_price && (
                <>
                  <p className="text-base line-through">
                    Rs. {m.original_price}
                  </p>
                  <p className="ml-auto text-green-500">
                    {getDiscountedPricePercentage(m.original_price, m.price)}%
                    off
                  </p>
                </>
              )}
            </div>

            <p className="text-black/50 text-sm mb-10">incl. of taxes</p>

            <MenuActions menu={m} />
          </div>
        </div>

        <RelatedMenus menus={menusRes} />
      </Wrapper>
    </div>
  );
}
