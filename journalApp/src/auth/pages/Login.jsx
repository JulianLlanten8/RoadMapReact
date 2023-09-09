import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const Login = () => {
  return (
    <AuthLayout title={"Login"}>
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

        <Grid container spacing={2} sx={{ mt: 2 }}>
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
    </AuthLayout>
  );
};
