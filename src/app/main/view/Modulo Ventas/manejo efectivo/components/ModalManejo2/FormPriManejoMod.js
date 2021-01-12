import {
  SelectFormsy,
  TextFieldFormsy
} from '@fuse/core/formsy';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Formsy from 'formsy-react';
import React, {useRef, useState} from 'react';

const suggestions = ['Sea', 'Sky', 'Forest', 'Aerial', 'Art'].map(item => ({
  value: item,
  label: item
}));

function FormPriManejoMod()
{
  const [isFormValid, setIsFormValid] = useState(false);
  const formRef = useRef(null);

  function disableButton()
  {
      setIsFormValid(false);
  }

  function enableButton()
  {
      setIsFormValid(true);
  }

  function handleSubmit(model)
  {
      console.info('submit', model);
  }

  return (
      <div className="max-w-sm">
          <Formsy
              onValidSubmit={handleSubmit}
              onValid={enableButton}
              onInvalid={disableButton}
              ref={formRef}
              className="flex flex-col justify-center"
          >
              <TextFieldFormsy
                  className="my-16"
                  type="number"
                  name="valor"
                  label="Valor"
                  validations={{
                      minLength: 4
                  }}
                  validationErrors={{
                      minLength: 'Min character length is 4'
                  }}
                  required
                  variant="outlined"
              />

              <TextFieldFormsy
                  className="my-16"
                  type="text"
                  name="detalles"
                  label="Detalles"
        validations={{
          isEmail: true,
        }}
        validationErrors={{
          isEmail: "This is not a valid email"
        }}
                  required
                  variant="outlined"
              />
              <SelectFormsy
                  className="my-16"
                  name="tipo-gasto"
                  label="Tipo de Gasto"
                  value="none"
                  validations="equals:none"
                  validationError="Must be None"
                  variant="filled"
              >
                  <MenuItem value="none">
                      <em>None</em>
                  </MenuItem>
                  <MenuItem value="hai">Hai</MenuItem>
                  <MenuItem value="olivier">Olivier</MenuItem>
                  <MenuItem value="kevin">Kevin</MenuItem>
              </SelectFormsy>
              <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="mx-auto mt-32 mb-80"
                  aria-label="LOG IN"
                  disabled={!isFormValid}
              >
                  Guardar
              </Button>
          </Formsy>
      </div>
  );
}

export default FormPriManejoMod;