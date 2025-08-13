import { SaveAltOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      sx={{ mb: 1 }}
    >
      <Grid size={{xs : 12, md: 6}} >
        <Typography fontSize={39} fontWeight="light">
          28 de agosto 2023
        </Typography>
      </Grid>

      <Grid>
        <Button color="primary" sx={{ p: 2 }}>
          <SaveAltOutlined xs={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          label="Título"
          fullWidth
          placeholder="Ingrese un título"
          sx={{ boder: "none", mb: 1 }}
        ></TextField>

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué pasó hoy?"
          minRows={5}
          sx={{ boder: "none", mb: 1 }}
        >
        </TextField>

        <ImageGallery />
      </Grid>
    </Grid>
  );
};
