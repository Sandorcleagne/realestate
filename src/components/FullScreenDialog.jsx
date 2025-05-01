import * as React from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Link from "next/link";
import { navbarItems } from "@/lib/contants";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div className="flex justify-around items-center">
          <Link href="/" className="!no-underline">
            <p className="text-black font-bold uppercase leading-1">
              Sharma Properties
            </p>
          </Link>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </div>

        <ul className="list-disc p-10">
          {navbarItems.map((items) => (
            <Link href={items?.link} key={items?.id}>
              <li className="border-b-2 p-4" onClick={handleClose}>
                {items?.name}
              </li>
            </Link>
          ))}
        </ul>
      </Dialog>
    </React.Fragment>
  );
}
