import { auth } from "@/auth";
import { default as ReduxProvider } from "@/provider";

async function CommonLayout({ children }) {
  const getSession = await auth();

  return <ReduxProvider getSession={getSession}>{children}</ReduxProvider>;
}

export default CommonLayout;
