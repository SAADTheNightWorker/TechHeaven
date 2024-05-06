import React from "react";
import { useContextState } from "../../context/ContextProvider";

const Products = ({ img, name, price, detail, id }) => {
  const [{ basket }, dispatch] = useContextState();
  console.log(id);

  const AddItem = () => {
    dispatch({
      type: "ADD_ITEM",
      item: {
        name: name,
        img: img,
        price: price,
        detail: detail,
        id: id
      },
    });
  };
  return (
    <div
      className="border m-10 flex flex-col items-center justify-end p-[10px]
     max-h-400 max-w-[300px] bg-gray-200/70 z-10 rounded-md max-sm:w-[200px] max-sm:h-[350px]"
    >
      <div className="">
        <p className="price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {/* <div className='rating'>
                <p>*</p>
                <p>*</p>
                <p>*</p>
            </div> */}
      </div>
      <img
        src={img}
        alt="item"
        className="w-full max-h-[600px] object-contain"
      />
      <button
        onClick={AddItem}
        className="w-full transition-all duration-300 bg-gradient-to-r from-violet-500 to-fuchsia-500 mb-5 p-3 
      rounded-md text-[#fff] font-medium hover:from-purple-500 hover:to-pink-500 hover:animate-pulse 
      cursor-pointer"
      >
        {name}
      </button>
    </div>
  );
};

export default Products;
