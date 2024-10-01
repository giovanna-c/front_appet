import { Link } from "react-router-dom";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDInput from "components/MDInput";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";
import mapa from "assets/images/mapa.jpg";

const UserManagement = () => {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Encontre seu novo amigo(a)!
                </MDTypography>

              </MDBox>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="grey-100"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDBox>
                  <MDInput
                    type="text"
                    label="Tipo"
                    variant="standard"
                    sx={{width: "15%", mr:3 }}
                    name="tipo"
                  />
                  <MDInput
                    type="text"
                    label="Raça"
                    variant="standard"
                    sx={{width: "15%", mr:3 }}
                    name="raca"
                  />
                  
                  <MDInput
                    type="text"
                    label="Cor"
                    variant="standard"
                    sx={{width: "15%", mr:3 }}
                    name="cor"
                  />
                  <MDInput
                    type="text"
                    label="Idade"
                    variant="standard"
                    sx={{width: "10%", mr:3 }}
                    name="idade"
                  />
                  <FormControl variant="standard" sx={{ width: "15%", mr:2, padding: "4px 0 5px", mt: "5px"}}>
                    <InputLabel id="input_idade">Meses ou Ano?</InputLabel>
                    <Select
                      labelId="input_idade"
                      id="tipo_idade"
                      label="Meses ou Ano?"
                      name="tipo_idade"
                    >
                      <MenuItem value=""><em>Selecione</em></MenuItem>
                      <MenuItem value="mês">Mês</MenuItem>
                      <MenuItem value="ano">Ano</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl variant="standard" sx={{ width: "15%", mr:2, padding: "4px 0 5px", mt: "5px"}}>
                    <InputLabel id="input_sexo">Sexo</InputLabel>
                    <Select
                      labelId="input_sexo"
                      id="sexo"
                    >
                      <MenuItem value=""><em>Selecione</em></MenuItem>
                      <MenuItem value="macho">Macho</MenuItem>
                      <MenuItem value="femea">Fêmea</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl variant="standard" sx={{ width: "15%", mr:2, padding: "4px 0 5px"}}>
                    <InputLabel id="input_sexo">Cidade</InputLabel>
                    <Select
                      labelId="input_sexo"
                      id="sexo"
                    >
                      <MenuItem value=""><em>Selecione</em></MenuItem>
                      <MenuItem value="macho">Macho</MenuItem>
                      <MenuItem value="femea">Fêmea</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl variant="standard" sx={{ width: "15%", mr:2, padding: "4px 0 5px"}}>
                    <InputLabel id="input_sexo">Estado</InputLabel>
                    <Select
                      labelId="input_sexo"
                      id="sexo"
                    >
                      <MenuItem value=""><em>Selecione</em></MenuItem>
                      <MenuItem value="macho">Macho</MenuItem>
                      <MenuItem value="femea">Fêmea</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl variant="standard" sx={{ width: "15%", mr:2, padding: "4px 0 5px"}}>
                    <InputLabel id="input_sexo">Vacinado?</InputLabel>
                    <Select
                      labelId="input_sexo"
                      id="sexo"
                    >
                      <MenuItem value=""><em>Selecione</em></MenuItem>
                      <MenuItem value="macho">Macho</MenuItem>
                      <MenuItem value="femea">Fêmea</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl variant="standard" sx={{ width: "15%", mr:2, padding: "4px 0 5px"}}>
                    <InputLabel id="input_sexo">Castrado?</InputLabel>
                    <Select
                      labelId="input_sexo"
                      id="sexo"
                    >
                      <MenuItem value=""><em>Selecione</em></MenuItem>
                      <MenuItem value="macho">Macho</MenuItem>
                      <MenuItem value="femea">Fêmea</MenuItem>
                    </Select>
                  </FormControl>
                  <MDButton variant="outlined" color="info" size="small" sx={{mt: "10px"}}>
                    <Icon fontSize="small"> search </Icon>
                    Buscar animal
                  </MDButton>
                </MDBox>
              </MDBox>
              <MDBox pt={3} ml={25}>
                <MDBox
                  component="img"
                  src={mapa}
                  alt="Animais encontrados"
                  borderRadius="lg"
                  shadow="md"
                  width="80%"
                  height="70%"
                  position="relative"
                  zIndex={1}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
};

export default UserManagement;
