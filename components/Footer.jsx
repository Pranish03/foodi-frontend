"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 pb-3">
      <Wrapper className="flex justify-between flex-col md:flex-row gap-12.5 md:gap-0">
        <div className="flex gap-12.5 md:gap-18.75 lg:gap-25 flex-col md:flex-row">
          <div className="flex flex-col gap-3 shrink-0">
            <div className="font-oswald font-medium uppercase text-base cursor-pointer">
              Find a restaurant
            </div>
            <div className="font-oswald font-medium uppercase text-base cursor-pointer">
              become a partner
            </div>
            <div className="font-oswald font-medium uppercase text-base cursor-pointer">
              sign up for email
            </div>
            <div className="font-oswald font-medium uppercase text-base cursor-pointer">
              send us feedback
            </div>
            <div className="font-oswald font-medium uppercase text-base cursor-pointer">
              discounts
            </div>
          </div>

          <div className="flex gap-12.5 md:gap-18.75 lg:gap-25 shrink-0">
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-base">
                get help
              </div>
              <div className="text-base text-white/50 hover:text-white cursor-pointer">
                Order Status
              </div>
              <div className="text-base text-white/50 hover:text-white cursor-pointer">
                Delivery
              </div>
              <div className="text-base text-white/50 hover:text-white cursor-pointer">
                Returns
              </div>
              <div className="text-base text-white/50 hover:text-white cursor-pointer">
                Payment Options
              </div>
              <div className="text-base text-white/50 hover:text-white cursor-pointer">
                Contact Us
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-base">
                About us
              </div>
              <div className="text-base text-white/50 hover:text-white cursor-pointer">
                Teams
              </div>
              <div className="text-base text-white/50 hover:text-white cursor-pointer">
                Partners
              </div>
              <div className="text-base text-white/50 hover:text-white cursor-pointer">
                Investors
              </div>
              <div className="text-base text-white/50 hover:text-white cursor-pointer">
                Sustainability
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center md:justify-start">
          <div
            onClick={() => window.open("https://facebook.com", "_blank")}
            className="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center text-black hover:bg-white/50 cursor-pointer"
          >
            <FaFacebookF size={20} />
          </div>
          <Link
            href="https://twitter.com"
            className="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center text-black hover:bg-white/50 cursor-pointer"
          >
            <FaTwitter size={20} />
          </Link>
          <div className="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center text-black hover:bg-white/50 cursor-pointer">
            <FaYoutube size={20} />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center text-black hover:bg-white/50 cursor-pointer">
            <FaInstagram size={20} />
          </div>
        </div>
      </Wrapper>
      <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-2.5 md:gap-0">
        <div className="text-sm text-white/50 hover:text-white cursor-pointer text-center md:text-left">
          © 2026 Food-I, Inc. All Rights Reserved
        </div>
        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          <div className="text-sm text-white/50 hover:text-white cursor-pointer">
            Guides
          </div>
          <div className="text-sm text-white/50 hover:text-white cursor-pointer">
            Terms of Sale
          </div>
          <div className="text-sm text-white/50 hover:text-white cursor-pointer">
            Terms of Use
          </div>
          <div className="text-sm text-white/50 hover:text-white cursor-pointer">
            Privacy Policy
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
