import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Container, IconButton } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

export default function Form() {
  const [dataSolicitacao, setDataSolicitacao] = useState(null);
  const [dataVistoria, setDataVistoria] = useState(null);
  //const today = dayjs();

  return (
    <Container>
      <Box>
        <h1>Ficha de Vistoria</h1>
        <div>
          <DatePicker
            label="Data da Solicitação"
            value={dataSolicitacao}
            onChange={(newDataSolicitacao) =>
              setDataSolicitacao(newDataSolicitacao)
            }
            slotProps={{
              textField: {
                helperText: "DD/MM/AAAA",
              },
            }}
            format="DD/MM/YYYY"
          />
          <DatePicker
            label="Data da Vistoria"
            defaultValue={0}
            value={dataVistoria}
            onChange={(newDataVistoria) => setDataVistoria(newDataVistoria)}
            slotProps={{
              textField: {
                helperText: "DD/MM/AAAA",
              },
            }}
            format="DD/MM/YYYY"
            readOnly
          />

          <TimePicker label="Horário da vistoria" />
        </div>
        <br></br>
        <div>
          <TextField
            id="nome-solicitante"
            label="Solicitante"
            variant="outlined"
          />
          <TextField
            id="fone-solicitante"
            label="Telefone"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="E-mail" variant="outlined" />
        </div>
        <br></br>
        <div>
          <TextField id="pmb" label="Processo PMB" variant="outlined" />
        </div>
        <br></br>
        <div>
          <TextField
            fullWidth
            id="local"
            label="Endereço completo"
            variant="outlined"
          />
        </div>
        <br></br>

        <div>
          <h3>Infração relacionada</h3>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Terreno (limpeza)"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Terreno (passeio)"
            />
            <FormControlLabel control={<Checkbox />} label="Terreno (muro)" />
            <FormControlLabel
              control={<Checkbox />}
              label="Esgoto/saneamento"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Atividades irregulares"
            />
          </FormGroup>
        </div>
        <div>
          <h3>Providências</h3>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Notificação (limpeza)"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Notificação (passeio)"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Notificação (muro)"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Notificação (esgoto/saneamento)"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Notificação (atividades irregulares)"
            />
          </FormGroup>
        </div>
        <div>
          <h3>Relatório</h3>
          <TextField
            fullWidth
            required
            multiline
            maxRows={4}
            rows={4}
            placeholder="Relato de vistoria"
            label="Obrigatório"
          />
        </div>
        <div>
          <IconButton aria-label="Fotos" variant="contained">
            <PhotoCameraIcon color="blue"/>
          </IconButton>
        </div>
      </Box>
    </Container>
  );
}
