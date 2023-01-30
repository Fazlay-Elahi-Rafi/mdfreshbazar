const init = {
  sideBar: false,
  filter: false,
};

export const ClickRedu = (state = init, action) => {
   if (action.type === "SHOW_SIDEBAR") {
    return {
      ...state,
      sideBar: true,
    };
  } else if (action.type === "HIDE_SIDEBAR") {
    return {
      ...state,
      sideBar: false,
    };
  } else if (action.type === "SHOW_FILTER") {
    return {
      ...state,
      filter: true,
    };
  } else if (action.type === "HIDE_FILTER") {
    return {
      ...state,
      filter: false,
    };
  } else {
    return state;
  }
};
