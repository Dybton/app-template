import { Toaster } from "react-hot-toast";

export const Toast = () => {
  return (
    <Toaster
      position='top-right'
      toastOptions={{
        success: {
          duration: 3000,
          style: { background: "green", color: "white" },
        },
        error: {
          duration: 3000,
          style: { background: "red", color: "white" },
        },
      }}
    />
  );
};
