import Header from "./Header/Header";
import { Suspense } from "react";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
}

export default Layout;
