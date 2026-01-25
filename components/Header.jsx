/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Wrapper from "./Wrapper";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import Image from "next/image";
// import { fetchDataFromApi } from "@/utils/api";

import { FiShoppingBag } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
// import { useSelector } from "react-redux";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showResMenu, setShowResMenu] = useState(false);

  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  //   const [resaurant, setRestaurant] = useState(null);

  //   const { cartItems } = useSelector((state) => state.cart);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
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

  //   const fetchCategories = async () => {
  //     const { data } = await fetchDataFromApi("/api/categories?populate=*");
  //     setCategories(data);
  //   };

  //   useEffect( () => {
  //     fetchCategories();
  //   }, []);

  const restaurants = [
    { id: 1, name: "Restaurant 1", doc_count: 11 },
    { id: 2, name: "Restaurant 2", doc_count: 8 },
  ];

  return (
    <header
      className={`w-full h-12.5 md:h-20 bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-15 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/foodi-logo.svg"
            alt=""
            width={110}
            height={100}
            // className="w-10 md:w-15"
          />
        </Link>

        {mobileMenu && (
          <MenuMobile
            showResMenu={showResMenu}
            setShowResMenu={setShowResMenu}
            setMobileMenu={setMobileMenu}
            restaurants={restaurants}
          />
        )}

        <div className="flex items-center gap-6 text-black">
          <Menu
            showResMenu={showResMenu}
            setShowResMenu={setShowResMenu}
            restaurants={restaurants}
          />

          <Link href="/cart" className="relative cursor-pointer">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/5 cursor-pointer relative">
              <FiShoppingBag className="text-[15px] md:text-[24px]" />
              {/* {cartItems.length > 0 && ( */}
              <div className="h-3.5 md:h-4.5 min-w-3.5 md:min-w-4.5 rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-0.5 md:px-1.25">
                {/* {cartItems.length} */}
                10
              </div>
              {/* )} */}
            </div>
          </Link>

          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/5 cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
