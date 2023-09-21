import { Link } from "react-router-dom";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "@hooks";

const formData = {
  displayName: "example",
  email: "example@gmail.com",
  password: "12345",
};

export const Register = () => {
  const { displayName, email, password, onInputChange, formState } =
    useForm(formData);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <AuthLayout title={"Crear cuenta"}>
      <form onSubmit={onSubmit}>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Nombre completo"
            type="text"
            placeholder="Nombre completo"
            fullWidth
            name="displayName"
            value={displayName}
            onChange={onInputChange}
          />
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Correo"
            type="email"
            placeholder="Correo@google.com"
            fullWidth
            name="email"
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
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </Grid>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              type="submit"
              className="btn btn-primary btn-block"
              sx={{ width: "100%" }}
            >
              <Typography sx={{ ml: 1 }}>Crear una cuenta</Typography>
            </Button>
          </Grid>
        </Grid>

        <Grid container direction={"row"} justifyContent={"end"}>
          <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
          <Link color="inherit" to={"/auth/login"}>
            Ingresar
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
