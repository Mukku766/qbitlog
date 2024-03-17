import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function AllLogs({ logs, onDeleteLog, onUpdateLog }) {
    return (
      <TableContainer>
        <Table>
          <TableHead>
            {/* Table header */}
          </TableHead>
          <TableBody>
            {logs && logs.length > 0 ? (
              logs.map((log, index) => (
                <TableRow key={index}>
                  {/* Table cells */}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7}>No logs found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
export default AllLogs;
