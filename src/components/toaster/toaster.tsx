import type { FC } from "react";
import { Toaster } from "react-hot-toast";

const CustomToaster: FC = () => {
  return (
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      toastOptions={{
        duration: 4000,
        style: {
          background: "#262629",
          color: "#fafafa",
        },
      }}
    />
  );
};

export default CustomToaster;
