import { Box, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";

export default function Footer() {
  return (
    <footer style={{height: '100%'}}>
      <Box
        pt={5}
        pl={4}
        pb={3}
        display={"flex"}
        bgcolor={"#f7f4eb"}
        gap={1}
        justifyContent="center"
        height={'100%'}
      >
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIcon style={{ fontSize: '24px', fontWeight: 400 }} />}
          sx={{
            bgcolor: "#1DC25A",
            width: "132px",
            height: "48px",
            fontWeight: 700,
          }}
        >
          Enviar
        </Button>
      </Box>
    </footer>
  );
}
