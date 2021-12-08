import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import InternalRoute from "./Route"
import { createBrowserHistory } from 'history';

const App = () => {
  return (
    <Provider store={store} history={createBrowserHistory()}>
      <InternalRoute />
    </Provider>
  );
};

export default App;