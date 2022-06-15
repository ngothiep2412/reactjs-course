import React from "react";
import Portal from "../Portal";
import { CSSTransition } from "react-transition-group";
const ModalPage = ({ visible, onClose, children, bodyClassName = "" }) => {
  return (
    <>
      <CSSTransition in={visible} timeout={250} unmountOnExit classNames="zoom">
        {(status) => (
          <Portal
            visible={status !== "exited"}
            onClose={onClose}
            containerClassName="flex items-center justify-center"
            bodyStyle={{ transition: "all 250ms" }}
            bodyClassName={bodyClassName}
          >
            {children}
          </Portal>
        )}
      </CSSTransition>
    </>
  );
};

export default ModalPage;
