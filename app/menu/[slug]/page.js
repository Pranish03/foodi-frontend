import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Wrapper from "@/components/Wrapper";
import MenuDetailsCarousel from "@/components/MenuDetailsCarousel";
import RelatedMenus from "@/components/RelatedMenus";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/helper";
import richTextToMarkdown from "@/utils/richTextToMarkdown";
import MenuClient from "./MenuClient";
import BreadCrumbs from "@/components/BreadCrumbs";

export default async function MenuPage({ params }) {
  const { slug } = await params;

  const menuRes = await fetchDataFromApi(
    `/api/menus?populate=*&filters[slug][$eq]=${slug}`,
  );

  const menusRes = await fetchDataFromApi(
    `/api/menus?populate=*&filters[slug][$ne]=${slug}`,
  );

  const menu = menuRes?.data?.[0];

  if (!menu) notFound();

  const markdown = richTextToMarkdown(menu.description);

  const breadCrumbArr = [
    {
      title: menu.restaurant.name,
      link: `/restaurant/${menu.restaurant.slug}`,
    },
    { title: menu.slug },
  ];

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <BreadCrumbs items={breadCrumbArr} />

        <div className="flex flex-col lg:flex-row md:px-10 gap-5 lg:gap-25">
          <div className="w-full md:w-auto flex-[1.5] max-w-125 mx-auto">
            <MenuDetailsCarousel images={menu.image} />
          </div>

          <div className="flex-1 py-3">
            <h1 className="md:text-4xl text-3xl font-semibold md:mb-2 mb-1 text-gray-900">
              {menu.name}
            </h1>
            <p className="md:text-xl text-lg font-semibold md:mb-5 mb-4 text-gray-900">
              {menu.subtitle}
            </p>

            <div className="flex items-center">
              <p className="mr-2 md:text-lg text-base font-semibold text-gray-900">
                Rs. {menu.price}
              </p>
              {menu.original_price && (
                <>
                  <p className="md:text-base text-sm line-through text-gray-700">
                    Rs. {menu.original_price}
                  </p>
                  <p className="ml-auto md:text-base text-sm text-green-600">
                    {getDiscountedPricePercentage(
                      menu.original_price,
                      menu.price,
                    )}
                    % off
                  </p>
                </>
              )}
            </div>

            <p className="text-gray-700 md:text-base text-sm md:mb-10 mb-4">
              incl. of taxes
            </p>

            <MenuClient menu={menu} />

            <div className="md:mt-10 mt-6">
              <h2 className="md:text-xl text-lg font-bold md:mb-5 mb-2 text-gray-900">
                Menu Details
              </h2>
              <div className="markdown md:text-lg text-base md:mb-5 mb-2 text-justify text-gray-800">
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
