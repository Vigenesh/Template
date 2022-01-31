import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function ObjectiveDescription() {
    return (

        <><h3>Objective Description</h3><FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="All" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Knowledge Of the Job" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Quality of work" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Time Management" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Communication Skills" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Drive for results" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Fostering Innovations" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Teamwork" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Customer Focus" />
        </FormGroup></>
    )
};
