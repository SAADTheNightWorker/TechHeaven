import React, { useState } from "react";
import { useContextState } from "../../context/ContextProvider";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Basket = ({ img, text, length, index, id }) => {
  const [state, setState] = useState((length = 1));
  const [{ basket }, dispatch] = useContextState();

  const DeleteItem = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="w-full flex justify-between m-2">
      <div className="flex-[0.4] border-b-4 max-sm:border-none rounded-lg max-sm:h-40 max-sm:-translate-x-10 h-60 flex justify-start items-center">
        <img src={img} alt="" className="max-w-52 max-sm:w-20" />
        <p className="font-semibold max-md:text-center max-md:text-sm text-gray-700 capitalize">
          {text}
        </p>
        <button
          className="ml-20 text-red-500 hover:animate-pulse"
          onClick={DeleteItem}
        >
          <DeleteForeverIcon />
        </button>
      </div>
      <div className="flex-[0.4] max-md:hidden flex justify-start items-center gap-4">
        <button
          className="border p-1 m-2 px-4"
          onClick={() => setState(state <= 0 ? 0 : state - 1)}
        >
          -
        </button>
        {state}
        <button
          className="border p-1 m-2 px-4"
          onClick={() => setState(state > 9 ? 0 : state + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Basket;
