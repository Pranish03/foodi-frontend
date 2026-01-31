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
    <div className="flex sm:flex-row flex-col gap-5 md:py-5 py-2 border-b border-gray-300">
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
        <div className="flex justify-between  flex-wrap">
          <h3 className="md:text-xl text-lg font-semibold text-gray-900">
            {menu.name}
          </h3>
          <span className="font-bold text-gray-900 md:text-lg text-base">
            Rs. {menu.price}
          </span>
        </div>

        <p className="text-gray-700 md:text-lg text-base">{menu.subtitle}</p>

        <div className="flex justify-between gap-4 sm:items-center mt-4">
          <div className="flex sm:gap-6 gap-4 flex-wrap">
            <div>
              <span className="font-semibold text-gray-900 md:text-lg text-base">
                Option:
              </span>
              <select
                value={menu.selectedOption}
                onChange={(e) => updateBagItem(e, "selectedOption")}
                className="ml-2 bg-gray-200 px-2 py-1 rounded-sm text-gray-700 md:text-lg text-base"
              >
                {menu.option?.data.map((opt, i) => (
                  <option key={i} value={opt.option} disabled={!opt.availiable}>
                    {opt.option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <span className="font-semibold text-gray-900 md:text-lg text-base">
                Qty:
              </span>
              <select
                value={menu.quantity}
                onChange={(e) => updateBagItem(e, "quantity")}
                className="ml-2 bg-gray-200 px-2 py-1 rounded-sm text-gray-700 md:text-lg text-base"
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-5 sm:mt-0 mt-1">
            <RiDeleteBin6Line
              onClick={() =>
                dispatch(
                  removeFromBag({
                    id: menu.id,
                    selectedOption: menu.selectedOption,
                  }),
                )
              }
              className="cursor-pointer text-gray-700 hover:text-gray-900 ml-auto"
              size={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagItem;
