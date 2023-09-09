import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", bgcolor: "primary.main", padding: "1rem" }}
    >
      <Grid
        item
        className="Box-shadow"
        xs={3}
        sx={{ backgroundColor: "white", padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          Login
        </Typography>

        <form>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Correo@google.com"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>

          <Grid container spacing sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                type="submit"
                className="btn btn-primary btn-block"
                sx={{ width: "100%" }}
              >
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                type="submit"
                className="btn btn-primary btn-block"
                sx={{ width: "100%" }}
              >
                <Google />
                Login
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction={"row"} justifyContent={"end"}>
            <Link color="inherit" to={"/auth/register"}>
              Crea una cuenta
            </Link>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
