const init = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

export const FilterReducer = (state = init, action) => {
  if (action.type === "FILTER_REQ") {
    return {
      ...state,
      loading: true,
    };
  } else if (action.type === "FILTER_REQ_OUT") {
    return {
      ...state,
      loading: false,
    };
  } else if (action.type === "SET_GRIDVIEW") {
    return {
      ...state,
      grid_view: true,
    };
  } else if (action.type === "SET_LISTVIEW") {
    return {
      ...state,
      grid_view: false,
    };
  } else if (action.type === "LOAD_PRODUCTS") {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  } else if (action.type === "UPDATE_SORT") {
    return {
      ...state,
      sort: action.payload,
    };
  } else if (action.type === "SORT_PRODUCTS") {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];

    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      });
    }
    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return {
      ...state,
      filtered_products: tempProducts,
    };
  } else if (action.type === "UPDATE_FILTERS") {
    const { name, value } = action.payload;
    return {
      ...state,
      filters: { ...state.filters, [name]: value },
    };
  } else if (action.type === "FILTER_PRODUCTS") {
    const { all_products } = state;
    const { text, category, company, color, price, shipping } = state.filters;

    let tempProducts = [...all_products];

    // filtering
    // text
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }
    // category
    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }

    // company
    if (company !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      );
    }
    // colors
    if (color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => c === color);
      });
    }
    // price
    tempProducts = tempProducts.filter((product) => product.price <= price);
    // shipping
    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
    }

    return {
      ...state,
      filtered_products: tempProducts,
    };
  } else if (action.type === "CLEAR_FILTERS") {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  } else if (action.type === "SET_ERROR") {
    return {
      ...state,
      error: true,
    };
  } else if (action.type === "CLEAR_ERROR") {
    return {
      ...state,
      error: false,
    };
  } else {
    return state;
  }
};
