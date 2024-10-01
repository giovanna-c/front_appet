import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDSnackbar from "components/MDSnackbar";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import HttpService from "services/htttp.service";

function formPet() {
  const user = localStorage.getItem("user");

  const [inputs, setInputs] = useState({
    nome: "",
    raca: "",
    cor: "",
    sexo: "",
    idade: "",
    tipo_idade: "",
    tipo: "",
    data_nascimento: "",
    porte: "",
    status: "disponível",
    observcao: "",
    id_usuario: user,
    vacinado: false,
    castrado: false,
  });

  const [errors, setErrors] = useState({
    sexoError: false,
    tipoError: false,
    porteError: false,
    vacinadoError: false,
    castradoError: false,
    tipoIdadeError: false,
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
      title="Animal cadastrado com sucesso!"
      content="Acesse a página de adoção para verificar."
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
      title="Erro ao cadastrar animal!"
      content="Ocorreu um erro ao cadastrar o animal, tente novamente."
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );

  const submitHandler = async (e) => {
    e.preventDefault();

    if (inputs.sexo.trim().length === 0 ) {
      setErrors({ ...errors, sexoError: true });
      return;
    }

    if (inputs.tipo.trim().length === 0 ) {
       setErrors({ ...errors, tipoError: true });
       return;
    }

    if (inputs.porte.trim().length === 0 ) {
      setErrors({ ...errors, porteError: true });
      return;
    }

    if (inputs.idade.trim().length > 0 && inputs.tipo_idade.trim().length == 0) {
      setErrors({ ...errors, tipoIdadeError: true });
      return;
    }

    const newPet = { 
      nome: inputs.nome, raca: inputs.raca, cor: inputs.cor, sexo: inputs.sexo, idade: inputs.idade, tipo_idade: inputs.tipo_idade, tipo: inputs.tipo,
      data_nascimento: inputs.data_nascimento, porte: inputs.porte, status: inputs.status, vacinado: inputs.vacinado,
      castrado: inputs.castrado, observcao: inputs.observcao, id_usuario: inputs.id_usuario
    };
    
    const myData = {
      data: {
        type: "animal",
        attributes: { ...newPet},
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
      const response = await  HttpService.post("animal/register", myData);
      openSuccessSB();

      setInputs({
        nome: "",
        raca: "",
        cor: "",
        sexo: "",
        idade: "",
        tipo_idade: "",
        tipo: "",
        data_nascimento: "",
        porte: "",
        status: "disponível",
        observcao: "",
        id_usuario: user,
        vacinado: false,
        castrado: false,
      });

      setErrors({
        sexoError: false,
        tipoError: false,
        tipoIdadeError: false,
        porteError: false,
        vacinadoError: false,
        castradoError: false,
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
      <MDBox pt={4} pb={3} px={6}>
        <MDBox component="form" role="form" method="POST" onSubmit={submitHandler}>
          <MDInput type="hidden" label="usuario" variant="standard" name="id_usuario" value={user} />
          <MDInput type="hidden" label="status" variant="standard" name="status" value="disponivel" />
            
          <MDBox mb={2} >
            <MDInput
              type="text"
              label="Nome"
              variant="standard"
              sx={{width: "45%", mr:3 }}
              name="nome"
              value={inputs.nome}
              onChange={changeHandler}
              inputProps={{
                autoComplete: "nome",
                form: {
                  autoComplete: "off",
                },
              }}
            />
            
            <MDInput
              type="text"
              label="Raça"
              variant="standard"
              sx={{width: "45%", mr:3 }}
              name="raca"
              value={inputs.raca}
              onChange={changeHandler}
              inputProps={{
                autoComplete: "raca",
                form: {
                  autoComplete: "off",
                },
              }}
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              type="text"
              label="Cor"
              variant="standard"
              sx={{width: "45%", mr:3 }}
              name="cor"
              value={inputs. cor}
              onChange={changeHandler}
              inputProps={{
                autoComplete: "cor",
                form: {
                  autoComplete: "off",
                },
              }}
            />
            <MDInput
              type="text"
              label="Idade"
              variant="standard"
              sx={{width: "20%", mr:3 }}
              name="idade"
              value={inputs.idade}
              onChange={changeHandler}
              inputProps={{
                autoComplete: "idade",
                form: {
                  autoComplete: "off",
                },
              }}
            />
            <FormControl variant="standard" sx={{ width: "25%", mr:2, padding: "4px 0 5px"}}>
              <InputLabel id="input_idade">Meses ou Ano?</InputLabel>
              <Select
                labelId="input_idade"
                id="tipo_idade"
                value={inputs.tipo_idade}
                onChange={changeHandler}
                label="Meses ou Ano?"
                name="tipo_idade"
              >
                <MenuItem value=""><em>Selecione</em></MenuItem>
                <MenuItem value="mês">Mês</MenuItem>
                <MenuItem value="ano">Ano</MenuItem>
              </Select>
            </FormControl>
          </MDBox>
          <MDBox mb={2}>
            <FormControl variant="standard" sx={{ width: "45%", mr:2, padding: "4px 0 5px"}}>
              <InputLabel id="input_sexo">Sexo</InputLabel>
              <Select
                labelId="input_sexo"
                id="sexo"
                value={inputs.sexo}
                onChange={changeHandler}
                label="Sexo"
                name="sexo"
                error={errors.sexoError}
              >
                <MenuItem value=""><em>Selecione</em></MenuItem>
                <MenuItem value="macho">Macho</MenuItem>
                <MenuItem value="femea">Fêmea</MenuItem>
              </Select>
            </FormControl>
              {errors.sexoError && (
                <MDTypography variant="caption" color="error" fontWeight="light">
                  O sexo é obrigatório.
                </MDTypography>
              )}
            
            <MDInput
              type="text"
              label="Tipo"
              variant="standard"
              sx={{width: "45%", mr:3 }}
              name="tipo"
              value={inputs.tipo}
              onChange={changeHandler}
              error={errors.tipoError}
              inputProps={{
                autoComplete: "tipo",
                form: {
                  autoComplete: "off",
                },
              }}
            />
            {errors.tipoError && (
              <MDTypography variant="caption" color="error" fontWeight="light">
                O tipo é obrigatório.
              </MDTypography>
            )}
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              type="text"
              label="Data de Nascimento"
              variant="standard"
              sx={{width: "45%", mr:3 }}
              name="data_nascimento"
              value={inputs.data_nascimento}
              onChange={changeHandler}
              inputProps={{
                autoComplete: "data_nascimento",
                form: {
                  autoComplete: "off",
                },
              }}
            />
            
            <MDInput
              type="text"
              label="Porte"
              variant="standard"
              sx={{width: "45%", mr:3 }}
              name="porte"
              value={inputs.porte}
              onChange={changeHandler}
              error={errors.porteError}
              inputProps={{
                autoComplete: "porte",
                form: {
                  autoComplete: "off",
                },
              }}
            />
            {errors.porteError && (
              <MDTypography variant="caption" color="error" fontWeight="light">
                O porte é obrigatório.
              </MDTypography>
            )}
          </MDBox>
          <MDBox mb={2}>
            <FormControl variant="standard" sx={{ width: "45%", mr:2, p: "4px 0 5px"}}>
              <InputLabel id="input_vacinado">Vacinado?</InputLabel>
              <Select
                labelId="input_vacinado"
                id="vacinado"
                value={inputs.vacinado}
                onChange={changeHandler}
                label="Vacinado?"
                name="vacinado"
                error={errors.vacinadoError}
              >
                <MenuItem value=""><em>Selecione</em></MenuItem>
                <MenuItem value={true}>Sim</MenuItem>
                <MenuItem value={false}>Não</MenuItem>
              </Select>
            </FormControl>
            {errors.vacinadoError && (
              <MDTypography variant="caption" color="error" fontWeight="light">
                O campo é obrigatório.
              </MDTypography>
            )}
            <FormControl variant="standard" sx={{ width: "45%", mr:2, p: "4px 0 5px"}}>
              <InputLabel id="input_castrado">Castrado?</InputLabel>
              <Select
                labelId="input_castrado"
                id="castrado"
                value={inputs.castrado}
                onChange={changeHandler}
                label="Castrado?"
                name="castrado"
                error={errors.castradoError}
              >
                <MenuItem value=""><em>Selecione</em></MenuItem>
                <MenuItem value={true}>Sim</MenuItem>
                <MenuItem value={false}>Não</MenuItem>
              </Select>
            </FormControl>
            {errors.castradoError && (
              <MDTypography variant="caption" color="error" fontWeight="light">
                O campo é obrigatório.
              </MDTypography>
            )}
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              type="text"
              label="Observações"
              variant="standard"
              fullWidth
              name="observacao"
              value={inputs.observcao}
              onChange={changeHandler}
              inputProps={{
                autoComplete: "observacao",
                form: {
                  autoComplete: "off",
                },
              }}
            />
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

export default formPet;
