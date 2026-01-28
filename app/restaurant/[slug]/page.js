"use client";

import { useParams } from "next/navigation";

const Restaurant = () => {
  const { slug } = useParams();
  return <div>Restaurant {slug}</div>;
};

export default Restaurant;
