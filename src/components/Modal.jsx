import { useState } from "react";

export default function Modal({ open, close, children }) {
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
