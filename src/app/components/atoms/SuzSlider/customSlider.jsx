import { Slider } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomSlider = styled(Slider)(({ color, image }) => ({
  "& .MuiSlider-track": {
    height: 8,
    borderRadius: 4,
    backgroundColor: color,
    border: color,
  },
  "& .MuiSlider-thumb": {
    width: 20,
    height: 20,
    backgroundColor: '#5CBF66',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&::before": {
      bottom: "20px",
      left: "-15px",
      width: 100,
      height: 50,
      backgroundImage: `url(${image})`,
      backgroundSize: "contain", 
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      boxShadow: 'none',
    },
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(255, 105, 135, 0.16)",
    },
  },
  "& .MuiSlider-mark": {
    width: "2px",
    height: "16px",
    backgroundColor: "#768599",
    borderRadius: "2px",
  },
  "& .MuiSlider-rail": {
    height: 4,
    borderRadius: 4,
    backgroundColor: "white",
  },
}));
