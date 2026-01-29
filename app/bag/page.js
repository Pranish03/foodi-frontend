"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import BagItem from "@/components/BagItem";
import { useSelector } from "react-redux";
import { makePaymentRequest } from "@/utils/api";

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
        <div className="flex flex-col items-center py-20">
          <Image src="/empty-bag.jpg" alt="" width={300} height={300} />
          <h2 className="text-xl font-bold mt-4">Your cart is empty</h2>
          <Link
            href="/"
            className="mt-6 px-8 py-4 bg-black text-white rounded-full"
          >
            Continue Shopping
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <div className="md:py-20">
      <Wrapper>
        <h1 className="text-center text-3xl font-semibold mb-10">Bag</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-2">
            {bagItems.map((item) => (
              <BagItem key={`${item.id}-${item.selectedOption}`} menu={item} />
            ))}
          </div>

          <div className="flex-1">
            <div className="p-5 bg-black/5 rounded-xl">
              <div className="flex justify-between text-lg font-medium">
                <span>Subtotal</span>
                <span>Rs. {subTotal}</span>
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="w-full mt-5 py-4 bg-black text-white rounded-full flex justify-center gap-2"
            >
              Checkout
              {loading && (
                <Image src="/spinner.svg" alt="..." width={24} height={24} />
              )}
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
