// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
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

  const ong = localStorage.getItem("user");

  const [voluntarios, setVoluntarios] = useState({ voluntarios: [] });

  const getVoluntariosData = async () => {
    const myData = {
      data: {
        type: "users",
        attributes: { "id_ong": ong},
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
    const response = await HttpService.post( "users/filter", myData);
    setVoluntarios(() => ({response}));
  };
  
  useEffect(() => {
    getVoluntariosData();
  }, []);
 
  const rowsList = [];

  for (const key in voluntarios.response) {
    rowsList.push({
      nome: <Author name={voluntarios.response[key].nome} />,
      email: <Job title={voluntarios.response[key].email} />,
      telefone: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {voluntarios.response[key].telefone}
        </MDTypography>
      ),
      acao: (
        <MDBox>
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" mr={2}>
            Editar
            </MDTypography>
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Excluir
            </MDTypography>
        </MDBox>
      )});
  }

  return {
    columns: [
      { Header: "nome", accessor: "nome", width: "25%", align: "left" },
      { Header: "email", accessor: "email", align: "left" },
      { Header: "telefone", accessor: "telefone", align: "center" },
      { Header: "ação", accessor: "acao", align: "center" },
    ],

    rows: rowsList,
  };
}
