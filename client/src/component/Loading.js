import { Box, LinearProgress } from "@mui/material";
import React from "react";

export default function Loading () {
    return (
      <Box
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#191919",
            position: "fixed",
            inset: 0,
            zIndex: 999,
        }}
      >
        <Box sx={{ width: "40%" }}>
          <h1 style={{ textAlign: "center", color: "white" }}>Loading...</h1>
          <LinearProgress />
        </Box>
      </Box>
    )
  }