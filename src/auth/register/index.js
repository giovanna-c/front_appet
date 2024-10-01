import { useContext, useState } from "react";
// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayoutLanding from "layouts/authentication/components/BasicLayoutLanding";
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-adocao.webp";

import AuthService from "services/auth-service";
import { AuthContext } from "context";
import { InputLabel } from "@mui/material";

function Register() {
  const authContext = useContext(AuthContext);

  const [inputs, setInputs] = useState({
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    tipo: "",
    id_ong: "",
    is_ong: false
  });

  const [errors, setErrors] = useState({
    nomeError: false,
    emailError: false,
    telefoneError: false,
    senhaError: false,
    error: false,
    errorText: "",
  });

  const changeHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const changeCheckHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.checked,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (inputs.nome.trim().length === 0) {
      setErrors({ ...errors, nomeError: true });
      return;
    }

    if (inputs.telefone.trim().length === 0) {
      setErrors({ ...errors, telefoneError: true });
      return;
    }

    if (inputs.email.trim().length === 0 || !inputs.email.trim().match(mailFormat)) {
      setErrors({ ...errors, emailError: true });
      return;
    }

    if (inputs.senha.trim().length < 8) {
      setErrors({ ...errors, senhaError: true });
      return;
    }

    // here will be the post action to add a user to the db
    const novoUsuario = {
      nome: inputs.nome, email: inputs.email, telefone: inputs.telefone,
      senha: inputs.senha, tipo: inputs.is_ong == false ? 'usuario' : 'ong', id_ong: null
    };
    
    const myData = {
      data: {
        type: "users",
        attributes: { ...novoUsuario, confirmacao_senha: novoUsuario.senha },
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

    try {
      const response = await AuthService.register(myData);
      authContext.login(response.access_token, response.refresh_token);

      setInputs({
        nome: "",
        email: "",
        telefone: "",
        senha: "",
        tipo: "",
        id_ong: "",
        is_ong: false
      });

      setErrors({
        nomeError: false,
        emailError: false,
        telefoneError: false,
        senhaError: false,
        error: false,
        errorText: "",
      });
    } catch (err) {
      setErrors({ ...errors, error: true, errorText: err.message });
      console.error(err);
    }
  };

  return (
    <BasicLayoutLanding image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-7}
          p={1}
          mb={2}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Olá!
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Preencha seus dados para se registrar.
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" method="POST" onSubmit={submitHandler}>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Nome"
                variant="standard"
                fullWidth
                name="nome"
                value={inputs.nome}
                onChange={changeHandler}
                error={errors.nomeError}
                inputProps={{
                  autoComplete: "nome",
                  form: {
                    autoComplete: "off",
                  },
                }}
              />
              {errors.nomeError && (
                <MDTypography variant="caption" color="error" fontWeight="light">
                  O nome deve ser preenchido.
                </MDTypography>
              )}
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Telefone"
                variant="standard"
                fullWidth
                name="telefone"
                value={inputs.telefone}
                onChange={changeHandler}
                error={errors.telefoneError}
                inputProps={{
                  autoComplete: "telefone",
                  form: {
                    autoComplete: "off",
                  },
                }}
              />
              {errors.telefoneError && (
                <MDTypography variant="caption" color="error" fontWeight="light">
                  O telefone deve ser preenchido.
                </MDTypography>
              )}
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                variant="standard"
                fullWidth
                value={inputs.email}
                name="email"
                onChange={changeHandler}
                error={errors.emailError}
                inputProps={{
                  autoComplete: "email",
                  form: {
                    autoComplete: "off",
                  },
                }}
              />
              {errors.emailError && (
                <MDTypography variant="caption" color="error" fontWeight="light">
                  O email deve ser válido.
                </MDTypography>
              )}
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Senha"
                variant="standard"
                fullWidth
                name="senha"
                value={inputs.senha}
                onChange={changeHandler}
                error={errors.senhaError}
              />
              {errors.senhaError && (
                <MDTypography variant="caption" color="error" fontWeight="light">
                  A senha deve ter pelo menos 8 caracteres.
                </MDTypography>
              )}
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox name="is_ong" id="is_ong" onChange={changeCheckHandler} />
              <InputLabel
                variant="standard"
                fontWeight="regular"
                color="text"
                sx={{ lineHeight: "1.5", cursor: "pointer" }}
                htmlFor="is_ong"
              >
                &nbsp;&nbsp;Perfil de ong&nbsp;
              </InputLabel>
            </MDBox>
            {errors.error && (
              <MDTypography variant="caption" color="error" fontWeight="light">
                {errors.errorText}
              </MDTypography>
            )}
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth type="submit">
                Registrar
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Já tem uma conta?{" "}
                <MDTypography
                  component={Link}
                  to="/auth/login"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  LogIn
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayoutLanding>
  );
}

export default Register;
