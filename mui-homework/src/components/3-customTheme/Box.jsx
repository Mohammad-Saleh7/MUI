import { Container, Box } from "@mui/material";

export default function BoxComponent() {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Box
        bgcolor={"primary.main"}
        sx={{ width: "200px", height: "200px" }}
      ></Box>
      <Box
        bgcolor={"secondary.main"}
        sx={{ width: "200px", height: "200px" }}
      ></Box>
      <Box
        bgcolor={"success.main"}
        sx={{ width: "200px", height: "200px" }}
      ></Box>
    </Container>
  );
}
