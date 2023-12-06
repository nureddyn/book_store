import { useState, useEffect } from "react";

export default function Modal({ open, close, children }) {
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        close();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscKey);
    };

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [open, close]);

  if (!open) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={close}>
          X
        </button>
        {children}
      </div>
    </div>
  )
}
