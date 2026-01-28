import ReactMarkdown from "react-markdown";
import Wrapper from "@/components/Wrapper";
import MenuDetailsCarousel from "@/components/MenuDetailsCarousel";
import RelatedMenus from "@/components/RelatedMenus";
import MenuActions from "@/components/MenuActions";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/helper";
import richTextToMarkdown from "@/utils/richTextToMarkdown";

export default async function MenuPage({ params }) {
  const { slug } = await params;

  const menuRes = await fetchDataFromApi(
    `/api/menus?populate=*&filters[slug][$eq]=${slug}`,
  );

  const menusRes = await fetchDataFromApi(
    `/api/menus?populate=*&filters[slug][$ne]=${slug}`,
  );

  const menu = menuRes?.data?.[0];

  if (!menu) {
    return <div className="py-20 text-center">Menu not found</div>;
  }

  const markdown = richTextToMarkdown(menu.description);

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-12.5 lg:gap-25">
          <div className="w-full md:w-auto flex-[1.5] max-w-125 mx-auto">
            <MenuDetailsCarousel images={menu.image} />
          </div>

          <div className="flex-1 py-3">
            <h1 className="text-[34px] font-semibold mb-2 text-gray-900">
              {menu.name}
            </h1>
            <p className="text-lg font-semibold mb-5 text-gray-900">
              {menu.subtitle}
            </p>

            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold text-gray-900">
                Rs. {menu.price}
              </p>
              {menu.original_price && (
                <>
                  <p className="text-base line-through text-gray-700">
                    Rs. {menu.original_price}
                  </p>
                  <p className="ml-auto text-green-600">
                    {getDiscountedPricePercentage(
                      menu.original_price,
                      menu.price,
                    )}
                    % off
                  </p>
                </>
              )}
            </div>

            <p className="text-gray-700 text-sm mb-10">incl. of taxes</p>

            <MenuActions menu={menu} />

            <div className="mt-10">
              <h2 className="text-lg font-bold mb-5 text-gray-900">
                Menu Details
              </h2>
              <div className="markdown text-md mb-5 text-justify text-gray-800">
                <ReactMarkdown>{markdown}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>

        <RelatedMenus menus={menusRes} />
      </Wrapper>
    </div>
  );
}
