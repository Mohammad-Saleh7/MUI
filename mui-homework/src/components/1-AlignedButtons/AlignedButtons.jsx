import { Button, Stack } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

export default function AlignedButtons() {
  const [disable, setDisable] = useState(false);

  return (
    <div>
      <Stack direction={"row"} spacing={2}>
        <Button
          variant="text"
          color="info"
          sx={{ paddingY: "0.5rem", paddingX: "2rem" }}
          onClick={() => setDisable(true)}
          disabled={disable}
        >
          Click me
        </Button>
        <Button
          variant="contained"
          startIcon={<PersonIcon />}
          color="secondary"
          sx={{ paddingY: "0.5rem", paddingX: "2rem" }}
        >
          Click me
        </Button>
        <Button
          variant="outlined"
          color="success"
          sx={{ paddingY: "0.5rem", paddingX: "2rem" }}
          onClick={() => window.open("https://mui.com", "_blank")}
        >
          Click me
        </Button>
      </Stack>
    </div>
  );
}
