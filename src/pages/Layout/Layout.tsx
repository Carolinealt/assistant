import { FC, Suspense } from "react";
import AppBar from "../../components/AppBar/AppBar";
import css from "./Layout.module.css";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <AppBar />
      <div className={css.mainContainer}>
        <Suspense fallback={null}>{children}</Suspense>
      </div>
    </div>
  );
};

export default Layout;
