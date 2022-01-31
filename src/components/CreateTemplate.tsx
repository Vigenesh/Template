import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import ObjectiveDescription from "./ObjectiveDescription";
import ObjectiveDescription1 from "./ObjectiveDescription1";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  const [active, setActive] = useState(" ");
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <h3>Objective Type</h3>
        <div>
          <Stack spacing={2}>
            <Item onClick={() => setActive("ObjectiveDescription")}>
              <h4>
                Job Competencies
              </h4>
              <p>Job Objectives</p>
            </Item>
            <Item onClick={() => setActive("ObjectiveDescription1")}>
              <h4>Individual Objectives</h4>
              <p>Job Objectives</p>
            </Item>
            <Item>
              <h4>Core Competencies</h4>
              <p>Behavioural Objectives</p>
            </Item>
            <Item>
              <h4>Job Competencies</h4>
              <p>Behavioural Objectives</p>
            </Item>
          </Stack>
        </div>
      </Grid>
      <Grid item xs={4}>
        {active === "ObjectiveDescription" && <ObjectiveDescription />}
        {active === "ObjectiveDescription1" && <ObjectiveDescription1 />}
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained">Save</Button>
        <Button variant="text">Cancel</Button>
      </Grid>
    </React.Fragment>
  );
}

export default function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}
