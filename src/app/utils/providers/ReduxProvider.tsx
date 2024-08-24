"use client";

import React from "react";
import { Provider } from "react-redux";
import { AppStore, makeStore } from "@/app/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = React.useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }
  let persistor = persistStore(storeRef.current);

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
