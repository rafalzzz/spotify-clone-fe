import { notification } from "antd";

export const useDisplayError = () => {
  const [api, contextHolder] = notification.useNotification();

  const displayError = (description: string) => {
    api.error({
      message: null,
      description,
      duration: 3,
      closeIcon: true,
    });
  };

  return { displayError, contextHolder };
};
