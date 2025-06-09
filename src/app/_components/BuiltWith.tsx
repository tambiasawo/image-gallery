"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import HandyManIcon from "@mui/icons-material/Navigation";
import Image from "next/image";
import { TailwindIcon, TanStackQueryIcon } from "../assets/icons";
import Backdrop from "@mui/material/Backdrop";
const actions = [
  {
    name: "React",
    icon: (
      <Image
        src="/icons/react.svg"
        alt="React"
        width={24}
        height={24}
        unoptimized
      />
    ),
  },
  {
    name: "TailwindCSS",
    icon: <TailwindIcon />,
  },
  {
    name: "TanStackQuery",
    icon: <TanStackQueryIcon />,
  },
  {
    name: "Next.js",
    icon: (
      <Image
        src="/icons/next.svg"
        alt="Next.js"
        width={24}
        height={24}
        unoptimized
      />
    ),
  },
];

export default function BasicSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        height: 320,
        transform: "translateZ(0px)",
        flexGrow: 1,
        position: "fixed",
        bottom: 0,
        right: 0,
      }}
    >
      <Backdrop open={open} />

      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
          height: "1px",
          boxShadow:'none'
        }}
        icon={
          <span className="hover:underline rounded-[32px] !bg-blue-500 w-[150px] flex items-center py-3 px-4 gap-2 bottom-0 absolute right-0 ">
            Built With
            <HandyManIcon />
          </span>
        }

        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
