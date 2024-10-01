/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

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
      { Header: "nome", accessor: "nome", width: "25%", align: "left" },
      { Header: "email", accessor: "email", align: "left" },
      { Header: "telefone", accessor: "telefone", align: "center" },
      { Header: "ação", accessor: "acao", align: "center" },
    ],

    rows: [
      {
        nome: <Author name="José Carlos" />,
        email: <Job title="josec@hotmail.com" />,
        telefone: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            (79) 9 9174-2856
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
        ),
      },
      {
        nome: <Author name="Alex Junior" />,
        email: <Job title="alex_2024@gmail.com" />,
        telefone: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            (79) 9 8857-4478
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
        ),
      },
      {
        nome: <Author name="Laura Maria" />,
        email: <Job title="lauramaria@gmail.com" />,
        telefone: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            (79) 9 9984-5245
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
        ),
      },
      {
        nome: <Author name="Maria dos Santos" />,
        email: <Job title="maria.santos@hotmail.com" />,
        telefone: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            (79) 9 9658-2548
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
        ),
      },
      {
        nome: <Author name="Ricardo Nascimento" />,
        email: <Job title="ricardo01@hotmail.com" />,
        telefone: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            (79) 9 8155-6688
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
        ),
      },
      {
        nome: <Author name="Miriam de Jesus"/>,
        email: <Job title="miriamjesus@hotmail.com"/>,
        telefone: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            (79) 9 8877-5588
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
        ),
      },
    ],
  };
}
