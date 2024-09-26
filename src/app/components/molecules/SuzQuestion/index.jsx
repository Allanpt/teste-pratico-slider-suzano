import { Box, Divider, Typography } from "@mui/material";
import SuzSlider from "../../atoms/SuzSlider";

export default function SuzQuestion({ question }) {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        p={6}
        mx={"auto"}
        maxWidth={1152}
        sx={{
          flexDirection: { md: "row", xs: "column" },
          alignItems: { md: "baseline", xs: "center" },
          gap: { md: "30", sm: "50px", xs: "120px" },
        }}
      >
        <Box display="flex">
          <Typography
            component="h2"
            color="#047835"
            fontWeight={700}
            fontSize={"32px"}
            pr={"8px"}
          >
            {question.id}
          </Typography>
          <Box
            display="flex"
            height={"75px"}
            maxWidth={"453px"}
            flexDirection={"column"}
            gap={"8px"}
            pl={"8px"}
            borderLeft={"2px solid"}
            borderColor={"#047835"}
          >
            <Typography
              component="h2"
              color="#047835"
              fontWeight={700}
              fontSize={"24px"}
              lineHeight={"28.8px"}
              letterSpacing={"0.17px"}
            >
              {question.question}
            </Typography>
            <Typography component="p" lineHeight={"19.2px"}>
              {question.description}
            </Typography>
          </Box>
        </Box>
        <SuzSlider max={100} />
      </Box>
      <Divider
        sx={{ borderStyle: "dashed", height: "1px", borderColor: "#1DC25A" }}
      />
    </>
  );
}
