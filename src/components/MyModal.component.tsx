import {
  Modal
} from "@mantine/core";
import React from "react";

interface IMyModalProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: React.ReactNode;
  maxWidth?: number;
  onClose?: () => void;
}

const MyModal = ({
  opened,
  setOpened,
  title,
  children,
  maxWidth = 900,
  onClose=()=>{},
}: IMyModalProps) => {
  return (
    <Modal
      opened={opened}
      onClose={() => {
        setOpened(false);
        onClose();
      }}
      centered
      title={title}
      padding={30}
      styles={{
        modal: {
          maxWidth: `${maxWidth}px`,
          width: "100%",
          borderRadius: "6px",
        },
        title: {
          fontSize: 20,
          color: "#334155",
          fontWeight: 700,
          fontFamily: "Poppins",
          '@media (min-width: 800px)': {
            fontSize: 24
          },
        },
      }}
    >
      <div className="py-2">{children}</div>
    </Modal>
  );
};

export default MyModal;
