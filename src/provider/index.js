"use client";

import Headers from "@/components/header";
import store from "@/store";
import { Provider } from "react-redux";

export default function ReduxProvider({ children, getSession }) {
  return (
    <Provider store={store}>
      <Headers getSession={getSession} />
      {children}
    </Provider>
  );
}
