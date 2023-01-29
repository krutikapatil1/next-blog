import Notification from "../ui/notification";
import MainNavigation from "./main-navigation";
import { useContext } from "react";
import NotificationContext from "../../store/notification-context";

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification: any = notificationCtx.notification;
  return (
    <>
      <MainNavigation></MainNavigation>
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
};

export default Layout;
