import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
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
            <Item onClick={() => setActive("ObjectiveDescription1")}>
              <h4>Job Competencies</h4>
              <p>Job Objectives</p>
            </Item>
            <Item onClick={() => setActive("ObjectiveDescription")}>
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
        {active === "ObjectiveDescription1" && <ObjectiveDescription1 />}
        {active === "ObjectiveDescription" && <ObjectiveDescription />}
      </Grid>
      <Grid item xs={4}>
        <h3>Templates</h3>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Manager" />
            </ListItemButton>
          </ListItem>
          <ListItemButton>
            <ListItemText primary="Developer" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Designer" />
          </ListItemButton>
        </List>
        <Button variant="contained">Create Mapping</Button>
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
