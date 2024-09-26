"use client";

import { Box, Typography } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";

import rangesApi from "../../../apis/rangesApi";
import { CustomSlider } from "./customSlider";

export default function SuzSlider({ defaultValue = 50, min = 0, max = 100 }) {
  const [value, setValue] = useState(defaultValue);
  const [ranges, setRanges] = useState([]);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#5DBF65");

  useEffect(() => {
    rangesApi.getAll().then((response) => {
      setRanges(response);

      const findValue = response.find(
        (range) => range.min <= defaultValue && defaultValue <= range.max
      );

      setTitle(findValue.title);
      setSubTitle(findValue.subTitle);
      setBackgroundColor(findValue.backgroundColor);
    });
  }, [defaultValue]);

  const marks = useMemo(() => {
    if (!ranges || ranges.length === 0) return [];

    return ranges
      .filter((range) => {
        return (
          (range.max % 20 === 0 && range.max < 50) ||
          (range.min % 20 === 0 && range.min > 50)
        );
      })
      .slice(0, -1)
      .concat(ranges[ranges.length - 1])
      .map((range) => {
        if (range.max < 50) {
          return {
            value: range.max,
          };
        }
        if (range.min > 50 && range !== ranges[ranges.length - 1]) {
          return {
            value: range.min + 5,
          };
        }
        return {
          value: range.min,
        };
      });
  }, [ranges]);

  const handleSetValue = useCallback(
    (value) => {
      setValue(value);

      const findValue = ranges.find(
        (range) => range.min <= value && value <= range.max
      );

      if (findValue !== value) {
        setTitle(findValue.title);
        setSubTitle(findValue.subTitle);
        setBackgroundColor(findValue.backgroundColor);
      }
    },
    [ranges]
  );

  if(ranges.length === 0) return;
  
  return (
    <Box maxWidth={512} pt={2}>
      <CustomSlider
        onChange={(_, v) => handleSetValue(v)}
        min={min}
        value={value}
        max={max}
        marks={marks}
        aria-label="Default"
        valueLabelDisplay="auto"
        color={backgroundColor}
        image="/Leaf.png"
      />
      <Typography
        component="h3"
        variant="h6"
        sx={{
          fontStyle: "italic",
          color: backgroundColor,
          fontWeight: 700,
          letterSpacing: "0.17px",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Typography component='p' sx={{ color: "#65748B", textAlign: "center" }}>
        {subTitle}
      </Typography>
    </Box>
  );
}
