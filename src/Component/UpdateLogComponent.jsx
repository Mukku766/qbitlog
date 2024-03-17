import React, { useState } from 'react'; // Import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const projects = [
  {
    value: 'QBit Logs',
    label: 'QBit Logs',
  },
  {
    value: 'QBit Suite',
    label: 'QBit Suite',
  },
  {
    value: 'Ragnar',
    label: 'Ragnar',
  },
];
const logTypes = [
  {
    value: 'work',
    label: 'Work',
  },
  {
    value: 'office',
    label: 'Office',
  },
  {
    value: 'meeting',
    label: 'Meeting',
  },
  {
    value: 'leave',
    label: 'Leave',
  },
];

function UpdateLogsComponent() {
  const [logDate, setLogDate] = useState('');
  const [logType, setLogType] = useState('');
  const [project, setProject] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [logDescription, setLogDescription] = useState('');
  const [logs, setLogs] = useState([]);
  const [selectedLogIndex, setSelectedLogIndex] = useState(null);

  const handleLogDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to start of day for comparison
    if (selectedDate > today) {
      // If the entered date is beyond current date, set it to the current date
      setLogDate(today.toISOString().split('T')[0]);
    } else {
      setLogDate(selectedDate.toISOString().split('T')[0]);
    }
  };

  const handleLogTypeChange = (event) => {
    setLogType(event.target.value);
  };

  const handleProjectChange = (event) => {
    setProject(event.target.value);
  };

  const handleHoursChange = (event) => {
    setHours(event.target.value);
  };

  const handleMinutesChange = (event) => {
    setMinutes(event.target.value);
  };

  const handleLogDescriptionChange = (event) => {
    setLogDescription(event.target.value);
  };

  const handleAddLog = () => {
    const newLog = {
      logDate,
      logType,
      project,
      hours,
      minutes,
      logDescription,
    };

    if (selectedLogIndex !== null) {
      const updatedLogs = [...logs];
      updatedLogs[selectedLogIndex] = newLog;
      setLogs(updatedLogs);
      setSelectedLogIndex(null);
    } else {
      setLogs([...logs, newLog]);
    }

    clearInputFields();
  };

  const handleDeleteLog = (index) => {
    const updatedLogs = [...logs];
    updatedLogs.splice(index, 1);
    setLogs(updatedLogs);
  };

  const handleEditLog = (index) => {
    if (index >= 0 && index < logs.length) {
      const selectedLog = logs[index];
      setLogDate(selectedLog.logDate);
      setLogType(selectedLog.logType);
      setProject(selectedLog.project);
      setHours(selectedLog.hours);
      setMinutes(selectedLog.minutes);
      setLogDescription(selectedLog.logDescription);
      setSelectedLogIndex(index);
    }
  };

  const clearInputFields = () => {
    setLogDate('');
    setLogType('');
    setProject('');
    setHours('');
    setMinutes('');
    setLogDescription('');
  };
  const calculateTotalTimeInTable = () => {
    let total = 0;
    logs.forEach(log => {
      total += parseInt(log.hours) + parseInt(log.minutes) / 60;
    });
    return total;
  };
  
  const handleSubmitLogs = () => {
    // Calculate total time before submitting logs
    const totalTimeInTable = calculateTotalTimeInTable();

    // Your logic for submitting logs

    console.log('Submitting logs...');
  };

  // You can define isButtonDisabled here if it's used outside this component
  const isButtonDisabled = !(
    logDate &&
    logType &&
    project &&
    hours &&
    minutes &&
    logDescription
  );
  const isButtonDisabledd = !(logDate && logType && project && calculateTotalTimeInTable() >= 8);

  return (
    <Container>
      <Box
        p={3}
        mt={15}
        ml={2}
        mr={2}
        boxShadow={6}
        borderRadius={4}
        style={{ backdropFilter: 'blur(12px)' }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography color={'#858BC5'} sx={{ my: 1 }}>
              Log Date
            </Typography>
            <TextField
              fullWidth
              id="log-date"
              type="date"
              variant="standard"
              autoComplete="off"
              value={logDate}
              onChange={handleLogDateChange}
              
              inputProps={{
                style: { color: 'white' },
                max: new Date().toISOString().split("T")[0],
              }}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography color={'#858BC5'} sx={{ my: 1 }}>
              Hours
            </Typography>
            <TextField
              select
              fullWidth
              id="hours"
              variant="standard"
              value={hours}
              onChange={handleHoursChange}
              SelectProps={{
                style: { color: 'white' }, // Set the color of the select text to white
              }}
            >
              {[...Array(24).keys()].map((hour) => (
                <MenuItem key={hour} value={hour}>
                  {hour}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography color={'#858BC5'} sx={{ my: 1 }}>
              Minutes
            </Typography>
            <TextField
              select
              fullWidth
              id="minutes"
              variant="standard"
              value={minutes}
              onChange={handleMinutesChange}
              SelectProps={{
                style: { color: 'white' }, // Set the color of the select text to white
              }}
            >
              {[...Array(60).keys()].map((minute) => (
                <MenuItem key={minute} value={minute}>
                  {minute}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6} md={6}>
            <Typography color={'#858BC5'} sx={{ my: 1 }}>
              Log Type
            </Typography>
            <TextField
              select
              fullWidth
              id="log-type"
              variant="standard"
              value={logType}
              onChange={handleLogTypeChange}
              SelectProps={{
                style: { color: 'white' }, // Set the color of the select text to white
              }}
            >
              {logTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={6} md={6}>
            <Typography color={'#858BC5'} sx={{ my: 1 }}>
              Project Name
            </Typography>
            <TextField
              select
              fullWidth
              id="project"
              variant="standard"
              value={project}
              onChange={handleProjectChange}
              SelectProps={{
                style: { color: 'white' }, // Set the color of the select text to white
              }}
            >
              {projects.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <Typography color={'#858BC5'} sx={{ my: 1 }}>
              Log Description
            </Typography>
            <TextField
              fullWidth
              id="log-description"
              multiline
              rows={2}
              variant="standard"
              value={logDescription}
              onChange={handleLogDescriptionChange}
              inputProps={{
                style: { color: 'white' }, // Set the input text color to white
              }}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddLog}
          disabled={isButtonDisabled}
          sx={{ mt: 2, mr: 2, borderRadius: '50px', bgcolor: '#858BC5' }}
        >
          {selectedLogIndex !== null ? 'Update Log' : 'Add Log'}
        </Button>

        
      </Box>
      <Box
        p={3}
        mt={10}
        ml={2}
        mr={2}
        boxShadow={6}
        borderRadius={4}
        style={{ backdropFilter: 'blur(12px)' }}
      >
        <TableContainer component={Box}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell style={{ color: '#858BC5' }}>Log Date</TableCell>
        <TableCell style={{ color: '#858BC5' }}>Hours</TableCell>
        <TableCell style={{ color: '#858BC5' }}>Minutes</TableCell>
        <TableCell style={{ color: '#858BC5' }}>Log Type</TableCell>
        <TableCell style={{ color: '#858BC5' }}>Project Name</TableCell>
        <TableCell style={{ color: '#858BC5' }}>Log Description</TableCell>
        <TableCell style={{ color: '#858BC5' }}>Action</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {logs.map((log, index) => (
        <TableRow key={index}>
          <TableCell style={{ color: 'white' }}>{log.logDate}</TableCell>
          <TableCell style={{ color: 'white' }}>{log.hours}</TableCell>
          <TableCell style={{ color: 'white' }}>{log.minutes}</TableCell>
          <TableCell style={{ color: 'white' }}>{log.logType}</TableCell>
          <TableCell style={{ color: 'white' }}>{log.project}</TableCell>
          <TableCell style={{ color: 'white' }}>{log.logDescription}</TableCell>
          <TableCell>
            <IconButton style={{ color: 'white' }} onClick={() => handleDeleteLog(index)}>
              <DeleteIcon />
            </IconButton>
            <IconButton style={{ color: 'white' }} onClick={() => handleEditLog(index)}>
              <EditIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmitLogs}
          disabled={isButtonDisabledd}
          sx={{ mt: 2, borderRadius: '50px', bgcolor: '#858BC5' }}
        >
          Submit Logs
        </Button>
      </Box>
    </Container>
  );
}

export default UpdateLogsComponent;
