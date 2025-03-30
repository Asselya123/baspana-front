import { Modal } from "antd";
import { FC } from "react";
import mockEsp from "@/assets/esp-mock.webp";

interface MockEspModalProps {
  open: boolean;
  onClose: () => void;
}

export const MockEspModal: FC<MockEspModalProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onCancel={onClose} footer={null} closeIcon={null}>
      <img src={mockEsp} alt="mock-esp" onClick={onClose} />
    </Modal>
  );
};
