import React, { createContext, useState, useEffect } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: (notificationData: any) => {},
  hideNotification: () => {},
});

interface NotificationContextProviderProps {
  children: any;
}

export const NotificationContextProvider: React.FC<
  NotificationContextProviderProps
> = (props: NotificationContextProviderProps) => {
  const [activeNotification, setActiveNotification] = useState(null);

  const showNotificationHandler = (notificationData: any) => {
    setActiveNotification(notificationData);
  };

  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  useEffect(() => {
    if (activeNotification) {
      const timeout = setTimeout(() => {
        hideNotificationHandler();
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [activeNotification]);

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
