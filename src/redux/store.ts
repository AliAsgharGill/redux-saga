import { createStore } from "redux";
// import reducer from "./reducer";

// export default createStore(reducer);

// const dummyReducer = (state = {}, action) => state;
const dummyReducer = () => {
  return 100;
};

const store = createStore(dummyReducer);

export default store;
