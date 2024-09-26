import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header>
      <Box
        pt={4}
        pl={4}
        pb={2}
        display={"flex"}
        bgcolor={"rgba(4, 120, 53, 0.08)"}
        alignItems='center'
        gap={1}
        borderBottom='1px solid #047835'
      >
        <Image src="/Leaf.png" alt="Logo" width={20} height={18} />
        <Typography
          textTransform={"uppercase"}
          component="h1"
          variant="h6"
          fontWeight={700}
          letterSpacing="0.17px"
          lineHeight='26.6px'
          color="#047835"
        >
          avaliação de performance
        </Typography>
      </Box>
    </header>
  );
}
