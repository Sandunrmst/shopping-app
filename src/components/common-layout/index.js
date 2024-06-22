import { default as ReduxProvider } from "@/provider";

async function CommonLayout({ children }) {
  return <ReduxProvider>{children}</ReduxProvider>;
}

export default CommonLayout;
