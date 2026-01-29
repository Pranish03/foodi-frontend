import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { updateBag, removeFromBag } from "@/store/bagSlice";
import { useDispatch } from "react-redux";

const BagItem = ({ menu }) => {
  const dispatch = useDispatch();

  const updateBagItem = (e, key) => {
    dispatch(
      updateBag({
        id: menu.id,
        selectedOption: menu.selectedOption,
        key,
        val: key === "quantity" ? Number(e.target.value) : e.target.value,
      }),
    );
  };

  return (
    <div className="flex gap-5 py-5 border-b">
      <div className="w-24 h-24 relative">
        <Image
          src={menu.thumbnail.url}
          alt={menu.name}
          fill
          className="object-contain"
        />
      </div>

      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">{menu.name}</h3>
          <span className="font-bold">Rs. {menu.price}</span>
        </div>

        <p className="text-sm text-black/50">{menu.subtitle}</p>

        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-6 text-sm">
            <div>
              <span className="font-semibold">Option:</span>
              <select
                value={menu.selectedOption}
                onChange={(e) => updateBagItem(e, "selectedOption")}
                className="ml-2"
              >
                {menu.option?.data.map((opt, i) => (
                  <option key={i} value={opt.option} disabled={!opt.availiable}>
                    {opt.option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <span className="font-semibold">Qty:</span>
              <select
                value={menu.quantity}
                onChange={(e) => updateBagItem(e, "quantity")}
                className="ml-2"
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <RiDeleteBin6Line
            onClick={() =>
              dispatch(
                removeFromBag({
                  id: menu.id,
                  selectedOption: menu.selectedOption,
                }),
              )
            }
            className="cursor-pointer text-xl text-black/50 hover:text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default BagItem;
