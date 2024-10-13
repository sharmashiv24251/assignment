import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function RoleSelector({ userRole, setUserRole }) {
  const handleChange = (event, newRole) => {
    if (newRole !== null) {
      setUserRole(newRole);
    }
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={userRole}
      exclusive
      onChange={handleChange}
      aria-label="User Role"
      sx={{ mb: 2, alignSelf: "center" }}
    >
      <ToggleButton value="sender">Sender</ToggleButton>
      <ToggleButton value="receiver">Receiver</ToggleButton>
    </ToggleButtonGroup>
  );
}
