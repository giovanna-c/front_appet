import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

import HttpService from "services/htttp.service";

function formVoluntary() {
  const ong = localStorage.getItem("user");

  const [inputs, setInputs] = useState({
    nome: "", email: "", senha: "", telefone: "", tipo: "voluntário", id_ong: ong
  });

  const [errors, setErrors] = useState({
    nomeError: false,
    emailError: false,
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
  
  const [successSB, setSuccessSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Voluntário cadastrado com sucesso!"
      content="Acesse a página de voluntários para verificar."
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const renderErrorSB = (
    <MDSnackbar
      color="error"
      icon="warning"
      title="Erro ao cadastrar voluntário!"
      content="Ocorreu um erro ao cadastrar o usuário, tente novamente."
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );

  const submitHandler = async (e) => {
    e.preventDefault();
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (inputs.nome.trim().length === 0 ) {
      setErrors({ ...errors, nomeError: true });
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

    const newUser = { 
      nome: inputs.nome, email: inputs.email, senha: inputs.senha, id_ong: inputs.id_ong, tipo: inputs.tipo
    };
    
    const myData = {
      data: {
        type: "users",
        attributes: { ...newUser},
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
      const response = await  HttpService.post("users/register", myData);
      openSuccessSB();

      setInputs({
        nome: "", email: "", senha: "", telefone: "", tipo: "voluntário", id_ong: ong
      });

      setErrors({
        nomeError: false,
        emailError: false,
        senhaError: false,
        errorText: "",
      });
    } catch (err) {
      openErrorSB();
      setErrors({ ...errors, error: true, errorText: err.message });
      console.error(err);
    }
  };

  return (
    <Card sx={{ boxShadow: "none"}}>
      <MDBox pt={4} pb={3} px={3}>
        <MDBox component="form" role="form" method="POST" onSubmit={submitHandler}>
          <MDInput type="hidden" label="id_ong" variant="standard" name="id_ong" value={ong} />
          <MDInput type="hidden" label="tipo" variant="standard" name="tipo" value="voluntário" />
          <MDBox mb={2} alignItems="center">
            <MDInput
              type="text"
              label="Nome"
              variant="standard"
              sx={{width: "45%", mr:3, ml:25 }}
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
                O nome é obrigatório.
              </MDTypography>
            )}
          </MDBox>
          <MDBox mb={2}>
            <MDInput
                type="email"
                label="Email"
                variant="standard"
                sx={{width: "45%", mr:3, ml:25 }}
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
                sx={{width: "45%", mr:3, ml:25 }}
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
          <MDBox mt={4} mb={1} textAlign="center">
            <MDButton variant="gradient" color="info" sx={{width: "45%", mr:3}} type="submit">
              Cadastrar
            </MDButton>
            {renderSuccessSB}
            {renderErrorSB}
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default formVoluntary;
