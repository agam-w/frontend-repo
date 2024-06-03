import React from "react";
import Button from "@mui/material/Button";

function UpdateButton({
  onClick,
  disabled,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}) {
  return (
    <Button variant="contained" onClick={onClick} disabled={disabled}>
      Update Data
    </Button>
  );
}

export default UpdateButton;
