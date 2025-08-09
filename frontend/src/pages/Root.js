import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        {/* <Outlet> renders the matched child route's element inside the parent layout */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
