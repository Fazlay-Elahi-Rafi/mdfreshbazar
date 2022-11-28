const init = {
  sideBar: false,
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
  } else {
    return state;
  }
};
