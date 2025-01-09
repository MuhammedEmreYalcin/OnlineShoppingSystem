import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import rootReducer from "./rootReducer";

export function configureStore() {
  // Erstelle den Store mit dem Root Reducer und DevTools Enhancer
  return createStore(rootReducer, devToolsEnhancer());
}
