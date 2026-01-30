"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { FiShoppingBag, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { fetchDataFromApi } from "@/utils/api";
import { selectTotalBagItems } from "@/store/bagSlice";
import Wrapper from "./Wrapper";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [showRestaurantOptions, setShowRestaurantOptions] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [restaurants, setRestaurants] = useState(null);

  const totalItems = useSelector(selectTotalBagItems);

  const controlNavbar = useCallback(() => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileNav) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY, mobileNav]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const { data } = await fetchDataFromApi("/api/restaurants?populate=*");
      setRestaurants(data);
    };
    fetchRestaurants();
  }, []);

  return (
    <header
      className={`w-full h-15 md:h-20 bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-15 flex justify-between items-center">
        <Link href="/">
          <Image src="/foodi-logo.svg" alt="" width={110} height={100} />
        </Link>

        {mobileNav && (
          <MobileNav
            showRestaurantOptions={showRestaurantOptions}
            setShowRestaurantOptions={setShowRestaurantOptions}
            setMobileNav={setMobileNav}
            restaurants={restaurants}
          />
        )}

        <Nav
          showRestaurantOptions={showRestaurantOptions}
          setShowRestaurantOptions={setShowRestaurantOptions}
          restaurants={restaurants}
        />

        <div className="flex items-center gap-6 text-black">
          <div className="cursor-pointer">
            <FiSearch className="text-[20px] md:text-[24px] text-gray-900" />
          </div>

          <Link href="/bag" className="relative cursor-pointer">
            <FiShoppingBag className="text-[20px] md:text-[24px] text-gray-900" />
            {totalItems > 0 && (
              <div className="h-3.5 md:h-4.5 min-w-3.5 md:min-w-4.5 rounded-full bg-red-600 absolute -top-1.5 -right-2.5 text-white text-[10px] md:text-[12px] flex justify-center items-center px-0.5 md:px-1.25">
                {totalItems}
              </div>
            )}
          </Link>

          <div className="block md:hidden">
            {mobileNav ? (
              <FiX
                className="text-[22px] text-gray-900"
                onClick={() => setMobileNav(false)}
              />
            ) : (
              <FiMenu
                className="text-[22px] text-gray-900"
                onClick={() => setMobileNav(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
