import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function ObjectiveDescription1() {
    return (

        <><h3>Objective Description</h3><FormGroup>
            <FormControlLabel disabled control={<Checkbox />} label="All" />
            <FormControlLabel disabled control={<Checkbox />} label="Knowledge Of the Job" />
            <FormControlLabel disabled control={<Checkbox />} label="Quality of work" />
            <FormControlLabel disabled control={<Checkbox />} label="Time Management" />
            <FormControlLabel disabled control={<Checkbox />} label="Communication Skills" />
            <FormControlLabel disabled control={<Checkbox />} label="Drive for results" />
            <FormControlLabel disabled control={<Checkbox />} label="Fostering Innovations" />
            <FormControlLabel disabled control={<Checkbox />} label="Teamwork" />
            <FormControlLabel disabled control={<Checkbox />} label="Customer Focus" />
        </FormGroup></>
    )
};
