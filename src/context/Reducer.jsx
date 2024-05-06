export const initialState = {
  basket: [],
  User: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      }

      return {
        ...state,
        basket: newBasket,
      };
      case "SET_USER": 
      return {
       ...state,
        User: action.user,
      }
    default:
      return state;
  }
};
