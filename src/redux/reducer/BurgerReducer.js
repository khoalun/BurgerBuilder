const burgerState = {
  burger: { salad: 1, beef: 1, cheese: 1 },
  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },
  total: 85,
};

export const BurgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case "ADD_BREAD": {
      let { amount, propsBurger } = action;
      if (amount === -1 && state.burger[propsBurger] < 1) {
        return { ...state };
      }
      let burgerUpdate = { ...state.burger };
      burgerUpdate[propsBurger] += amount;
      state.burger = burgerUpdate;
      state.total += amount * state.menu[propsBurger];
      return { ...state };
    }
    default:
      return { ...state };
  }
};
