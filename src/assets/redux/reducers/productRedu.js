import { Products } from "../../components/06-Sells/data";

const initState = {
  products: Products,
  //   item: Items,
};

const ProductRedu = (state = initState, action) => {
  if (action.type === "GET_PRODUCT_BY_ID") {
    return {
      ...state,
      product: state.products.find(
        (product) => product.id === parseInt(action.id)
      ),
    };
  }
  //    else if (action.type === "ADD_ITEMS") {
  //     return {
  //       ...state,
  //       product: state.item.find((product) => product.id === parseInt(action.id)),
  //     };
  //   }
  else {
    return state;
  }
};

export default ProductRedu;
