import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { X } from "@phosphor-icons/react";
const useModal = (
  content: React.ReactElement
): [boolean, () => void, React.ReactElement | null] => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const toggleModal = () => {
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
