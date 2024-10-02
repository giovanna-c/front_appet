import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Icon from "@mui/material/Icon";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import HttpService from "../../../services/htttp.service";
import { useState, useEffect } from "react";

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

  const [solicitacoes, setSolicitacoes] = useState({ solicitacoes: [] });
  const rowsList = [];

  const getSolicitacoesData = async () => {
    const myData = {
      data: {
        type: "solicitacao",
        attributes: {},
        relationships: {
          roles: {
            data: [
              {
                type: "roles",
                id: "1",
              },
            ],
          },
        },
      },
    };
    const response = await HttpService.get("solicitacao");
    setSolicitacoes(() => ({response}));
  };
  
  useEffect(() => {
    getSolicitacoesData();
  }, []);

  for (const key in solicitacoes.response) {
    rowsList.push({
      solicitante: <Author name={solicitacoes.response[key].usuario} />,
      animal: <Job title={solicitacoes.response[key].animal} />,
      status: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          <Alert>{solicitacoes.response[key].status}</Alert>
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
    
    });
  }

  return {
    columns: [
      { Header: "solicitante", accessor: "solicitante", width: "25%", align: "left" },
      { Header: "animal", accessor: "animal", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "ação", accessor: "acao", align: "center" },
    ],

    rows: rowsList,
  };
}
