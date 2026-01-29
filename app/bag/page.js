"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import BagItem from "@/components/BagItem";
import { useSelector } from "react-redux";
import { makePaymentRequest } from "@/utils/api";
import BreadCrumbs from "@/components/BreadCrumbs";

export default function BagPage() {
  const [loading, setLoading] = useState(false);
  const { bagItems } = useSelector((state) => state.bag);

  const subTotal = useMemo(() => {
    return bagItems.reduce((total, item) => total + item.price, 0);
  }, [bagItems]);

  const handlePayment = async () => {
    try {
      setLoading(true);

      const res = await makePaymentRequest("/api/orders", {
        menus: bagItems,
      });

      if (!res?.stripeSession?.url) {
        throw new Error("Stripe session URL missing");
      }

      window.location.href = res.stripeSession.url;
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  if (bagItems.length === 0) {
    return (
      <Wrapper>
        <div className="md:py-20 flex flex-col items-center text-center">
          <Image src="/empty-bag.jpg" alt="" width={350} height={350} />
          <h2 className="text-xl font-bold my-2 text-gray-900">
            Your bag is empty
          </h2>

          <p className="text-gray-700 mb-7">
            Looks like you have not added anything in your bag.
            <br />
            Go ahead and explore some menus.
          </p>
          <Link
            href="/"
            className="bg-green-700 hover:bg-green-700/95 text-lg text-white px-4 py-2.5 rounded-lg cursor-pointer"
          >
            Continue Ordering
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <div className="md:py-20">
      <Wrapper>
        <BreadCrumbs items={[{ title: "Bag" }]} />

        <h1 className="text-center text-3xl font-semibold mb-10 text-gray-900">
          Menu Bag
        </h1>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-2">
            <h1 className="mb-4 font-semibold text-xl text-gray-900">
              Bag Items
            </h1>

            {bagItems.map((item) => (
              <BagItem key={`${item.id}-${item.selectedOption}`} menu={item} />
            ))}
          </div>

          <div className="flex-1">
            <h1 className="mb-4 font-semibold text-xl text-gray-900">
              Summary
            </h1>
            <div className="p-5 bg-black/5 rounded-lg">
              <div className="flex justify-between text-lg font-medium text-gray-900 border-b border-gray-300 pb-3 mb-5">
                <span>Subtotal</span>
                <span>Rs. {subTotal}</span>
              </div>
              <p className="text-gray-700 pb-5">
                The subtotal is the total cost of your order before discounts.
                It includes taxes and duties, but does not include delivery
                charges or international transaction fees.
              </p>
            </div>

            <button
              onClick={handlePayment}
              className="bg-green-700 hover:bg-green-700/95 text-lg text-white mt-5 w-full py-2.5 rounded-lg cursor-pointer flex items-center justify-center"
            >
              {loading ? (
                <Image src="/spinner.svg" alt="..." width={28} height={28} />
              ) : (
                "Checkout"
              )}
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
