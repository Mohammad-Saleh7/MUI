import { Container, Typography, TextField, Grid, Button } from "@mui/material";

export default function GridTextFields() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 2,
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        mb={4}
        sx={{
          fontSize: {
            xs: "1.5rem",
            sm: "2rem",
            md: "2.5rem",
          },
          textAlign: "center",
          px: 2,
          wordBreak: "break-word",
        }}
      >
        Create your account
      </Typography>

      <form>
        {" "}
        <Grid container spacing={2}>
          <Grid item lg={4} md={12} sm={12} xl={4} xs={12}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              type="text"
            />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xl={4} xs={12}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              type="text"
            />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xl={4} xs={12}>
            <TextField label="Age" variant="outlined" fullWidth type="number" />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xl={6} xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xl={6} xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
            />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xl={12} xs={12}>
            <TextField
              label="Bio"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
            />
          </Grid>
          <Grid
            item
            sx={{ display: "flex", justifyContent: "center" }}
            lg={12}
            md={12}
            sm={12}
            xl={12}
            xs={12}
          >
            <Button
              type="reset"
              variant="contained"
              sx={{
                backgroundColor: "#60135fff",
                "&:hover": {
                  backgroundColor: "#60135fff",
                },
                width: "50%",
              }}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
