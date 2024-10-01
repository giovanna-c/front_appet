// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import SimpleBlogDescriptionCard from "../SimpleBlogDescriptionCard";
import pet from "assets/images/bg-adocao.webp";

function Animal({ raca, cor, sexo, tipo, nome, porte }) {
  return (
    <Grid item xs={12} md={6} lg={3}>
      <MDBox mb={1.5}>
        <SimpleBlogDescriptionCard
          image={pet}
          title={nome}
          description="Disponivel para adoção!"
          action={{
            type: "internal",
            route: "/pages/profile/profile-overview",
            color: "info",
            label: "Adotar",
          }}
          data={{raca: raca, cor: cor, sexo: sexo, tipo: tipo, nome: nome, porte: porte}}
        />
      </MDBox>
    </Grid>
  );
}

Animal.defaultProps = {
  raca: "",
  cor: "",
  sexo: "",
  tipo: "",
  nome: "",
  porte: ""
};

Animal.propTypes = {
  sexo: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  porte: PropTypes.string.isRequired
};

export default Animal;
