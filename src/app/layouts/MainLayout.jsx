import Header from "@/widgets/header/Header";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
