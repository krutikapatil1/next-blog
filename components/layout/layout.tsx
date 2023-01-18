import MainNavigation from "./main-navigation";

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
      <MainNavigation></MainNavigation>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
