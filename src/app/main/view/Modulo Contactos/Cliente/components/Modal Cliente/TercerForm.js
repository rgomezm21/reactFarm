import {
    SelectFormsy,
} from '@fuse/core/formsy';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Formsy from 'formsy-react';
import React, {useRef, useState} from 'react';

const suggestions = ['Sea', 'Sky', 'Forest', 'Aerial', 'Art'].map(item => ({
    value: item,
    label: item
}));

function TercerForm()
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
            <Typography className="h2 mb-24">INFORMACION ADICIONAL</Typography>
            <Formsy
                onValidSubmit={handleSubmit}
                onValid={enableButton}
                onInvalid={disableButton}
                ref={formRef}
                className="flex flex-col justify-center"
            >
                <SelectFormsy
                    className="my-16"
                    name="related-outlined"
                    label="Grupo"
                    value="none"
                    validations="equals:none"
                    validationError="Must be None"
                    variant="outlined"
                >
                    <MenuItem value="none">
                        <em>Seleccionar</em>
                    </MenuItem>
                    <MenuItem value="hai">Hai</MenuItem>
                    <MenuItem value="olivier">Olivier</MenuItem>
                    <MenuItem value="kevin">Kevin</MenuItem>
                </SelectFormsy>
                <SelectFormsy
                    className="my-16"
                    name="related-outlined"
                    label="Genero"
                    value="none"
                    validations="equals:none"
                    validationError="Must be None"
                    variant="outlined"
                >
                    <MenuItem value="none">
                        <em>Seleccionar</em>
                    </MenuItem>
                    <MenuItem value="hai">Hai</MenuItem>
                    <MenuItem value="olivier">Olivier</MenuItem>
                    <MenuItem value="kevin">Kevin</MenuItem>
                </SelectFormsy>
            </Formsy>
        </div>
    );
}

export default TercerForm;