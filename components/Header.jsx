/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { FiShoppingBag } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { fetchDataFromApi } from "@/utils/api";
import Wrapper from "./Wrapper";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [showRestaurantOptions, setShowRestaurantOptions] = useState(false);

  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const [restaurants, setRestaurants] = useState(null);

  const { bagItems } = useSelector((state) => state.bag);

  const controlNavbar = () => {
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
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const fetchRestaurants = async () => {
    const { data } = await fetchDataFromApi("/api/restaurants?populate=*");
    setRestaurants(data);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <header
      className={`w-full h-12.5 md:h-20 bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
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

        <div className="flex items-center gap-6 text-black">
          <Nav
            showRestaurantOptions={showRestaurantOptions}
            setShowRestaurantOptions={setShowRestaurantOptions}
            restaurants={restaurants}
          />

          <Link href="/cart" className="relative cursor-pointer">
            <FiShoppingBag className="text-[15px] md:text-[24px] text-gray-900" />
            {bagItems.length > 0 && (
              <div className="h-3.5 md:h-4.5 min-w-3.5 md:min-w-4.5 rounded-full bg-red-600 absolute -top-1.5 -right-2.5 text-white text-[10px] md:text-[12px] flex justify-center items-center px-0.5 md:px-1.25">
                {bagItems.length}
              </div>
            )}
          </Link>

          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/5 cursor-pointer relative -mr-2">
            {mobileNav ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileNav(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
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
