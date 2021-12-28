import React from "react";

import { Provider} from "react-redux";
import {store} from "./state/store";

import {AppRouter} from "./router/AppRouter";

export const JournalApp = () => {
  return (
      <Provider store={ store }>
        <AppRouter />
      </Provider>
  );
};