import React from "react";
import Button from "@mui/material/Button";

function UpdateButton({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Button variant="contained" onClick={onClick}>
      Update Data
    </Button>
  );
}

export default UpdateButton;
