import { ReactNode } from "react";
import IconCrossQuit from "../../atoms/icons/IconCrossQuit";

interface ModalWindowProps {
  modalTitle: string;
  children: ReactNode;
  confirmButton: ReactNode;
  handleCancel: (e: React.MouseEvent) => void;
}

export const ModalWindow: React.FC<ModalWindowProps> = ({
  modalTitle,
  children,
  confirmButton,
  handleCancel,
}) => {
  return (
    <div className="modal-background">
      <div className="modal-window">
        <div className="modal-window__header modal-header">
          <h2 className="modal-header__title">{modalTitle}</h2>
          <button
            onClick={handleCancel}
            className="modal-header__cancel-button"
          >
            <IconCrossQuit />
          </button>
        </div>
        <div className="modal-window__content">{children}</div>
        <div className="modal-window__footer">{confirmButton}</div>
      </div>
    </div>
  );
};
