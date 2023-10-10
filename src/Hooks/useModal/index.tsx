import React, { useState } from "react";
import styles from "./style.module.scss";
import { X } from "@phosphor-icons/react";

interface IToggleModal {
  (): void;
}
const useModal = (
  content: React.ReactElement
): [boolean, () => void, React.ReactElement | null] => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal: IToggleModal = () => {
    if (isOpen) {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    } else {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    }
    setIsOpen((v) => !v);
  };

  const Modal = isOpen ? (
    <div className={styles.container} onClick={toggleModal}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <span className={styles.closeModalBtn} onClick={toggleModal}>
          <X />
        </span>

        {content}
      </div>
    </div>
  ) : null;

  return [isOpen, toggleModal, Modal];
};

export default useModal;
