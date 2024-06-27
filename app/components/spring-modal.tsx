"use client";

import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";

export default function SpringModal({
  anchorClassName,
  anchorContent,
  className,
  children,
  state: [open, setOpen],
}: {
  anchorClassName?: string;
  className?: string;
  anchorContent?: string | React.ReactElement;
  children?: React.ReactNode;
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        className={`${anchorClassName}`}
        onClick={handleOpen}
      >
        {anchorContent}
      </button>
      <Modal
        sx={{
          backdropFilter: "blur(1.5px)",
          display: "flex",
          flexDirection: "column",
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
      >
        <div style={{ zIndex: 999 }} className={`${className}`}>
          {children}
        </div>
      </Modal>
    </>
  );
}
