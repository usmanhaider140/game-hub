import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
  show: boolean;
  onClose: () => void;
}

const Alert = ({ children, show, onClose }: Props) => {
  return (
    <div
      className={`alert alert-primary alert-dismissible fade ${show && "show"}`}
      role="alert"
    >
      {children}
      <button
        type="button"
        onClick={onClose}
        className="btn-close"
        aria-label="btn-close"
        data-bs-dismiss="alert"
      ></button>
    </div>
  );
};

export default Alert;
