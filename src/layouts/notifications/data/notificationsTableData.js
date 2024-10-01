import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Icon from "@mui/material/Icon";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function data() {
  const Author = ({ name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "solicitante", accessor: "solicitante", width: "25%", align: "left" },
      { Header: "animal", accessor: "animal", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "ação", accessor: "acao", align: "center" },
    ],

    rows: [
      {
        solicitante: <Author name="José Carlos" />,
        animal: <Job title="Spyke" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            <Alert severity="warning">Pendente</Alert>
          </MDTypography>
        ),
        acao: (
          <MDBox>
              <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" mr={2}>
                <Icon fontSize="small" > forum </Icon>
              </MDTypography>
              <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" mr={2}>
                <Icon fontSize="small" > email </Icon>
              </MDTypography>
              <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                <Icon fontSize="small" > contact_phone </Icon>
              </MDTypography>
          </MDBox>
        ),
      },
      {
        solicitante: <Author name="Maria dos Santos" />,
        animal: <Job title="ted" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            <Alert severity="warning">Pendente</Alert>
          </MDTypography>
        ),
        acao: (
          <MDBox>
              <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" mr={2}>
                <Icon fontSize="small" > forum </Icon>
              </MDTypography>
              <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" mr={2}>
                <Icon fontSize="small" > email </Icon>
              </MDTypography>
              <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                <Icon fontSize="small" > contact_phone </Icon>
              </MDTypography>
          </MDBox>
        ),
      },
      {
        solicitante: <Author name="Luiza da Silva" />,
        animal: <Job title="Spyke" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="error">Reprovada</Alert>
          </MDTypography>
        ),
        acao: (
          <MDBox>
              <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" mr={2}>
                <Icon fontSize="small" > forum </Icon>
              </MDTypography>
              <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" mr={2}>
                <Icon fontSize="small" > email </Icon>
              </MDTypography>
              <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                <Icon fontSize="small" > contact_phone </Icon>
              </MDTypography>
          </MDBox>
        ),
      },
      {
        solicitante: <Author name="Miguel de Jesus" />,
        animal: <Job title="Tótó" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            <Alert severity="success">Aprovada</Alert>
          </MDTypography>
        ),
        acao: (
          <MDBox>
              <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" mr={2}>
                <Icon fontSize="small" > forum </Icon>
              </MDTypography>
              <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" mr={2}>
                <Icon fontSize="small" > email </Icon>
              </MDTypography>
              <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                <Icon fontSize="small" > contact_phone </Icon>
              </MDTypography>
          </MDBox>
        ),
      },
      {
        solicitante: <Author name="Luana maria" />,
        animal: <Job title="Nino" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text">
            <Alert  severity="info">Aguardando</Alert>
          </MDTypography>
        ),
        acao: (
          <MDBox>
              <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" mr={2}>
                <Icon fontSize="small" > forum </Icon>
              </MDTypography>
              <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" mr={2}>
                <Icon fontSize="small" > email </Icon>
              </MDTypography>
              <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                <Icon fontSize="small" > contact_phone </Icon>
              </MDTypography>
          </MDBox>
        ),
      },
    ],
  };
}
