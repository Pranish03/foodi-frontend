"use client";

import { useParams } from "next/navigation";

const Menu = () => {
  const { id } = useParams();

  return <div>Menu no. {id}</div>;
};

export default Menu;
