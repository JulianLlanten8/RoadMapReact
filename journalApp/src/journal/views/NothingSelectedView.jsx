import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        borderRadius: 3,
      }}
    >
      <Grid size={{ xs: 12, md: 6 }}>
        <StarOutline sx={{ fontSize: 200, color: "primary.light" }} />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="h4" color="primary.light">
          Seleccione o crea una nota
        </Typography>
      </Grid>
    </Grid>
  );
};
