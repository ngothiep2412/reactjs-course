import React from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
function createPortalWrapper() {
  const element = document.createElement("div");
  element.id = "portal-wrapper";
  return element;
}
const protalWrapperElement = createPortalWrapper();
const Portal = ({
  containerClassName = "",
  bodyClassName = "",
  containerStyle = {},
  bodyStyle = {},
  onClose = () => {},
  visible = false,
  children,
}) => {
  useEffect(() => {
    document.body.appendChild(protalWrapperElement);
  }, []);
  const renderContent = (
    <div
      className={`fixed inset-0 z-[9999] ${containerClassName}`}
      style={containerStyle}
    >
      <div
        className="overlay absolute inset-0 bg-black bg-opacity-20"
        onClick={onClose}
      ></div>
      <div
        className={`content relative z-10 ${bodyClassName}`}
        style={bodyStyle}
      >
        {children}
      </div>
    </div>
  );
  return createPortal(renderContent, protalWrapperElement);
};
Portal.prototype = {
  containerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  bodyStyle: PropTypes.object,
  onClose: PropTypes.func,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node,
};
export default Portal;
