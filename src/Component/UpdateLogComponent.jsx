import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WorkIcon from "@mui/icons-material/Work";
import Box from "@mui/material/Box";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


const projects = [
  {
    value: "project1",
    label: "QBit Logs",
  },
  {
    value: "project2",
    label: "QBit Suite",
  },
  {
    value: "project3",
    label: "Ragnar",
  },
];

const logTypes = [
  {
    value: "work",
    label: "Work",
  },
  {
    value: "office",
    label: "Office",
  },
  {
    value: "meeting",
    label: "Meeting",
  },
  {
    value: "leave",
    label: "Leave",
  },
];

function UpdateLogsComponent() {
  const [duration, setDuration] = React.useState("");
  const [project, setProject] = React.useState("");
  const [logDescription, setLogDescription] = React.useState("");
  const [logType, setLogType] = React.useState("");

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleProjectChange = (event) => {
    setProject(event.target.value);
  };

  const handleLogDescriptionChange = (event) => {
    setLogDescription(event.target.value);
  };

  const handleLogTypeChange = (event) => {
    setLogType(event.target.value);
  };

  const handleAddLog = () => {
    // Check if all fields are filled
    if (duration && project && logDescription && logType) {
      // Logic to add log
      console.log("Log added:", { duration, project, logDescription, logType });
  
      // Reset fields
      setDuration("");
      setProject("");
      setLogDescription("");
      setLogType("");
    } else {
      alert("Please fill in all fields.");
    }
  };
  

  // Determine if the button should be disabled
  const isButtonDisabled = !(duration && project && logDescription && logType);

  return (
    <Box p={3} mt={10} ml={2} mr={2} boxShadow={6} borderRadius={4} style={{ backdropFilter: "blur(12px)" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="duration"
            label="Log Duration"
            variant="outlined"
            autoComplete="off"
            value={duration}
            onChange={handleDurationChange}
            InputProps={{
              startAdornment: <AccessTimeIcon />,
              style: { color: "white" },
            }}
            InputLabelProps={{ style: { color: "white" } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            fullWidth
            id="project"
            label="Project Name"
            variant="outlined"
            value={project}
            onChange={handleProjectChange}
            SelectProps={{
              IconComponent: () => <ArrowDropDownIcon style={{ color: "white" }} />,
            }}
            InputProps={{
              startAdornment: <WorkIcon />,
              style: { color: "white" },
            }}
            InputLabelProps={{ style: { color: "white" } }}
          >
            {projects.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
        <div style={{ maxHeight: "150px", overflow: "auto" }}>
  <TextField
    fullWidth
    id="log-description"
    label="Log Description"
    multiline
    rows={3}
    autoComplete="off"
    variant="outlined"
    value={logDescription}
    onChange={handleLogDescriptionChange}
    InputProps={{
      style: { color: "white", paddingTop: "25px" },
    }}
    InputLabelProps={{ style: { color: "white" } }}
  />
</div>
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            fullWidth
            id="log-type"
            label="Log Type"
            
            variant="outlined"
            value={logType}
            onChange={handleLogTypeChange}
            SelectProps={{
              IconComponent: () => <ArrowDropDownIcon style={{ color: "white" }} />,
            }}
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{ style: { color: "white" } }}
          >
            {logTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddLog}
        disabled={isButtonDisabled}
        sx={{ mt: 2, backgroundColor: "#0CAF60" }}
      >
        Add Log
      </Button>
    </Box>
  );
}

export default UpdateLogsComponent;
