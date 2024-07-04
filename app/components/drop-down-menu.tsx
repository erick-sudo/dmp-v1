"use client"

import * as React from "react";
import Menu from "@mui/material/Menu";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export interface DropDownMenuProps {
  anchorContent?: string | React.ReactElement;
  anchorClassName?: string;
  children?: React.ReactNode;
}

export function DropDownMenu({ anchorContent, anchorClassName, children }: DropDownMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <button
        onClick={handleClick}
        className={`${anchorClassName} flex items-center gap-2`}
      >
        {anchorContent}
        <span className={`${open ? "rotate-0" : "rotate-90"} duration-200`}>
          <ChevronRightIcon height={20} />
        </span>
      </button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {children}
      </Menu>
    </React.Fragment>
  );
}
