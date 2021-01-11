import {
    CheckboxFormsy,
    FuseChipSelectFormsy,
    RadioGroupFormsy,
    SelectFormsy,
    TextFieldFormsy
} from '@fuse/core/formsy';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';
import Formsy from 'formsy-react';
import React, {useRef, useState} from 'react';

const suggestions = ['Sea', 'Sky', 'Forest', 'Aerial', 'Art'].map(item => ({
    value: item,
    label: item
}));

function SecondForm()
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
        <div className="max-w-sm" style={{border:'5 solid black'}}>
            <Typography className="h2 mb-24">INFORMACION DE CONTACTO</Typography>
            <Formsy
                onValidSubmit={handleSubmit}
                onValid={enableButton}
                onInvalid={disableButton}
                ref={formRef}
                className="flex flex-col justify-center"
            >
                <TextFieldFormsy
                    className="my-16"
                    type="text"
                    name="name-outlined"
                    label="NOMBRES"
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
                    name="email-outlined"
                    label="APELLIDOS"
					validations={{
						isEmail: true,
					}}
					validationErrors={{
						isEmail: "This is not a valid email"
					}}
                    required
                    variant="outlined"
                />
                <TextFieldFormsy
                    className="my-16"
                    type="number"
                    name="name-outlined"
                    label="TELEFONO"
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
                    type="email"
                    name="email-outlined"
                    label="EMAIL"
					validations={{
						isEmail: true,
					}}
					validationErrors={{
						isEmail: "This is not a valid email"
					}}
                    required
                    variant="outlined"
                />
            </Formsy>
        </div>
    );
}

export default SecondForm;