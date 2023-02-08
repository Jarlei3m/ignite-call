import { Button, Text, TextArea, TextInput } from "@ignite-ui/react";
import { CalendarBlank, Clock } from "phosphor-react";
import { ConfirmForm, FormActions, FormHeader } from "./styles";

export function ConfirmStep() {
  function HandleConfirmSchedule() {}

  return (
    <ConfirmForm as="form" onSubmit={HandleConfirmSchedule}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          22 de fevereiro de 2023
        </Text>
        <Text>
          <Clock />
          18:00h
        </Text>
      </FormHeader>

      <label>
        <Text size="sm">Nome completo</Text>
        <TextInput placeholder="Seu nome"></TextInput>
      </label>

      <label>
        <Text size="sm">Endereço de e-mail</Text>
        <TextInput type="email" placeholder="jhondoe@example.com"></TextInput>
      </label>

      <label>
        <Text size="sm">Observações</Text>
        <TextArea />
      </label>

      <FormActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>
        <Button type="submit">Confirmar</Button>
      </FormActions>
    </ConfirmForm>
  );
}
