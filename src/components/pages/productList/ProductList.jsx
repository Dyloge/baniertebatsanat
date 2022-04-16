import './productList.css';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormControlLabel, IconButton } from '@material-ui/core';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import Switch from '@mui/material/Switch';
import { blue } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';

const MatToggle = ({ index }) => {
  const [status, setStatus] = useState(false);
  const handleToggle = (e) => {
    e.preventDefault();
    console.log(status);
    setStatus(!status);
    axios
      .post('http://webswitch.ir:3000/actors', { actorstatus: 1 })
      .then((response) => {
        console.log('posted', response).catch((error) => console.log(error));
      });
  };

  return (
    <Switch
      defaultChecked
      size='small'
      color='primary'
      onChange={handleToggle}
    />
  );
};

const columns = [
  { field: 'actorid', headerName: 'ID', width: 60 },
  {
    field: 'actorname',
    headerName: 'Actor',
    width: 150,
    flex: 1,
  },
  {
    field: 'actorstatus',
    headerName: 'Status',
    width: 40,
    flex: 1,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    sortable: false,
    width: 180,
    flex: 1,
    disableClickEventBubbling: true,
    renderCell: (params) => {
      return (
        <div style={{ cursor: 'pointer' }}>
          <MatToggle index={params.row.id} />
        </div>
      );
    },
  },
];

export default function ProductList() {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    axios
      .get('http://webswitch.ir:3000/actors')
      .then((response) => {
        setActors(response.data.actors);
      })
      .then((error) => console.log(error));
  }, []);
  return (
    <div style={{ height: 700, width: '78%' }}>
      <DataGrid
        sx={{ color: 'white' }}
        rows={actors}
        columns={columns}
        pageSize={10}
        getRowId={(row) => row.actorid}
      />
    </div>
  );
}
