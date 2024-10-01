import * as React from 'react';
// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
''
// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import Box from '@mui/material/Box';
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function SimpleBlogDescriptionCard({ image, title, description, action, data }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card>
      <MDBox position="relative" borderRadius="lg" mt={-3} mx={2}>
        <MDBox
          component="img"
          src={image}
          alt={title}
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="relative"
          zIndex={1}
        />
        <MDBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top="3%"
          sx={{
            backgroundImage: `url(${image})`,
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </MDBox>
      <MDBox p={3}>
        <MDTypography display="inline" variant="h3" textTransform="capitalize" fontWeight="bold">
          {title}
        </MDTypography>
        <MDBox mt={2} mb={3}>
          <MDTypography variant="body2" component="p" color="text">
            {description}
          </MDTypography>
        </MDBox>
        <MDBox mt={2} mb={3}>
          <MDBox mb={1} lineHeight={0}>
            <MDTypography variant="caption" color="text">
            Animal:&nbsp;&nbsp;&nbsp;
              <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                {data.tipo}
              </MDTypography>
            </MDTypography>
          </MDBox>
          <MDBox mb={1} lineHeight={0}>
            <MDTypography variant="caption" color="text">
              Sexo:&nbsp;&nbsp;&nbsp;
              <MDTypography variant="caption" fontWeight="medium">
                {data.sexo}
              </MDTypography>
            </MDTypography>
          </MDBox>
          <MDBox mb={1} lineHeight={0}>
            <MDTypography variant="caption" color="text">
            Porte:&nbsp;&nbsp;&nbsp;
              <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                {data.porte}
              </MDTypography>
            </MDTypography>
          </MDBox>
          <MDBox mb={1} lineHeight={0}>
            <MDTypography variant="caption" color="text">
            Cor:&nbsp;&nbsp;&nbsp;
              <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                {data.cor}
              </MDTypography>
            </MDTypography>
          </MDBox>
          <MDBox mb={1} lineHeight={0}>
            <MDTypography variant="caption" color="text">
            Raça:&nbsp;&nbsp;&nbsp;
              <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                {data.raca}
              </MDTypography>
            </MDTypography>
          </MDBox>
        </MDBox>

        {action.type === "external" ? (
          <MuiLink href={action.route} target="_blank" rel="noreferrer">
            <MDButton color={action.color ? action.color : "dark"}>{action.label}</MDButton>
          </MuiLink>
        ) : (
          <Button variant="contained" onClick={handleClickOpen}>Adotar</Button>
        )}
      </MDBox>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Deseja adotar Spyke?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <MDBox
              variant="gradient"
              bgColor="grey-100"
              borderRadius="lg"
              coloredShadow="dark"
              sx={{m:"5px"}}
            >
              <p>
                <b>&nbsp;Animal:</b> Cachorro&nbsp;&nbsp;&nbsp;
                <b>&nbsp;Sexo:</b> Macho&nbsp;&nbsp;&nbsp;
                <b>&nbsp;Porte:</b> Grande&nbsp;&nbsp;&nbsp;
                <b>&nbsp;Cor:</b> Amarelo&nbsp;&nbsp;&nbsp;
              </p>
              <p>
                <b>&nbsp;Raça:</b> Labrador&nbsp;&nbsp;&nbsp;
                <b>&nbsp;Vacinado:</b> Sim&nbsp;&nbsp;&nbsp;
                <b>&nbsp;Castrado:</b> Não&nbsp;&nbsp;&nbsp;
                <b>&nbsp;Idade:</b> 1 Ano&nbsp;&nbsp;&nbsp;
                </p>
                <p><b>&nbsp;Data de Nascimento:</b> 06/08/2023&nbsp;&nbsp;&nbsp;
                <p><b>&nbsp;Observações:</b> O spyke toma rédios controlados e possui problema na &nbsp;visão.</p>
                <p> </p>
              </p>
            </MDBox>
          </DialogContentText>
          <MDBox
            variant="gradient"
            bgColor="grey-100"
            borderRadius="lg"
            coloredShadow="info"
          >
            <h3>&nbsp;Confirme seus dados:</h3>
            <Box
              component="form"
              sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            >
              <div>
              <TextField required id="cep" name="cep" label="CEP" type="text" variant="standard" />
              <TextField required id="cidade" name="cidade" label="Cidade" type="text" width="20%" variant="standard" />
              <TextField required id="estado" name="estado" label="Estado" type="text"  variant="standard" />
              <TextField required id="bairro" name="bairro" label="Bairro" type="text"  variant="standard" />
              <TextField required id="logradouro" name="logradouro" label="Logradouro" type="text" width="20%" variant="standard" />
              <TextField required id="numero" name="numero" label="Número" type="number" width="5%" variant="standard" />
              <TextField id="complemento" name="complemento" label="Complemento" type="text" width="30%" variant="standard" />
              <TextField required id="email" name="email" label="Email" type="email" width="40%" variant="standard" />
              <TextField required id="telefone" name="telefone" label="Telefone" type="text" width="20%" variant="standard" />
              </div>
            </Box>
          </MDBox>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose} autoFocus>
            Solicitar
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

// Typechecking props for the SimpleBlogCard
SimpleBlogDescriptionCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
      "default",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    tipo: PropTypes.string.isRequired,
    raca: PropTypes.string,
    cor: PropTypes.string,
    sexo: PropTypes.string.isRequired,
    porte: PropTypes.string.isRequired,
  }).isRequired,
};

export default SimpleBlogDescriptionCard;
