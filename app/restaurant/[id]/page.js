"use client";

import { useParams } from "next/navigation";

const Restaurant = () => {
  const { id } = useParams();
  return <div>Restaurant {id}</div>;
};

export default Restaurant;
