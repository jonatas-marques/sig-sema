import { TextField, Checkbox, FormControlLabel, Button } from '@mui/material';

function FormularioFiscalizacao() {
    return (
      <form>
        <TextField label="Endereço do terreno" />
        <TextField label="Nome do proprietário" />
        <TextField label="Telefone do proprietário" />
        <TextField label="E-mail do proprietário" />
        <FormControlLabel control={<Checkbox />} label="Terreno com lixo acumulado" />
        <FormControlLabel control={<Checkbox />} label="Terreno com mato alto" />
        <FormControlLabel control={<Checkbox />} label="Terreno com entulho" />
        <FormControlLabel control={<Checkbox />} label="Terreno com animais peçonhentos" />
        <Button variant="contained">Enviar</Button>
      </form>
    );
  }
  
  export default FormularioFiscalizacao;
  