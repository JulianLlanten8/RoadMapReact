import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { checkingAuthentication, startGoogleSignIn } from "@store/auth";

import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

export const Login = () => {
  const dispatch = useDispatch();

  const { email, password, onInputChange, formState } = useForm({
    email: "hugojulian@gmail.com",
    password: "12345",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    dispatch(checkingAuthentication());
  };

  const onGoogleLogin = () => {
    console.log("Login con google");
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title={"Login"}>
      <form onSubmit={onSubmit}>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Correo"
            type="email"
            placeholder="Correo@google.com"
            fullWidth
            name={email}
            value={email}
            onChange={onInputChange}
          />
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            fullWidth
            name={password}
            value={password}
            onChange={onInputChange}
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
              onClick={onGoogleLogin}
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
