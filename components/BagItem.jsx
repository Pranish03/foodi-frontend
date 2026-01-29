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
    <div className="flex gap-5 py-5 border-b border-gray-300">
      <div className="w-24 h-24 relative">
        <Image
          src={menu.thumbnail.url}
          alt={menu.name}
          width={90}
          height={150}
          className="rounded-lg"
        />
      </div>

      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold text-gray-900">{menu.name}</h3>
          <span className="font-bold text-gray-900">Rs. {menu.price}</span>
        </div>

        <p className="text-gray-700">{menu.subtitle}</p>

        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-6">
            <div>
              <span className="font-semibold text-gray-900">Option:</span>
              <select
                value={menu.selectedOption}
                onChange={(e) => updateBagItem(e, "selectedOption")}
                className="ml-2 bg-gray-200 px-2 py-1 rounded-sm text-gray-700"
              >
                {menu.option?.data.map((opt, i) => (
                  <option key={i} value={opt.option} disabled={!opt.availiable}>
                    {opt.option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <span className="font-semibold text-gray-900">Qty:</span>
              <select
                value={menu.quantity}
                onChange={(e) => updateBagItem(e, "quantity")}
                className="ml-2 bg-gray-200 px-2 py-1 rounded-sm text-gray-700"
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
            className="cursor-pointer text-xl text-gray-700 hover:text-gray-900"
          />
        </div>
      </div>
    </div>
  );
};

export default BagItem;
