// NetworkToggle.tsx
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";

type NetworkToggleValue = "human" | "celo";

interface NetworkToggleProps {
  value: NetworkToggleValue; // активная часть приходит снаружи
}

const StyledToggleGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  width: 268,
  height: 42,
  padding: 2,
  borderRadius: 4,
  backgroundColor: "#0B1B470D",
  display: "flex",

  "& .MuiToggleButton-root": {
    flex: 1,
    border: "none",
    borderRadius: 4,
    textTransform: "none",
    padding: 0,

    fontFamily: '"Work Sans", sans-serif',
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: "125%",
    letterSpacing: "-0.05em",
    textAlign: "center" as const,

    color: "#0B1B47B8",
    minHeight: 0,
    minWidth: 0,

    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  "& .MuiToggleButton-root.Mui-selected": {
    backgroundColor: "#FFFFFF",
    color: "#0B1B47",
    "&:hover": {
      backgroundColor: "#FFFFFF",
    },
  },

  // чтобы MUI не ломал радиусы у "склеенных" кнопок
  "& .MuiToggleButtonGroup-grouped": {
    borderRadius: 4 + " !important",
  },
  "& .MuiToggleButtonGroup-grouped:not(:first-of-type)": {
    marginLeft: 0,
    borderLeft: "none",
  },
  "& .MuiToggleButtonGroup-grouped:not(:last-of-type)": {
    borderRight: "none",
  },
}));

export function NetworkToggle({ value }: NetworkToggleProps) {
  return (
    <StyledToggleGroup
      value={value}
      exclusive
      // активная часть только через проп value,
      // по клику ничего не меняем
    >
      <ToggleButton value="human">Human Appchain</ToggleButton>
      <ToggleButton value="celo">Celo Network</ToggleButton>
    </StyledToggleGroup>
  );
}
