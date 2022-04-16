import './userList.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
// import { Button, Link } from '@material-ui/core';
import EdgesensorHighIcon from '@mui/icons-material/EdgesensorHigh';
import { FormControlLabel, IconButton } from '@material-ui/core';

import { red } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';

const RedIcon = ({ index }) => {
  return (
    <FormControlLabel
      control={
        <IconButton color='secondary'>
          <EdgesensorHighIcon style={{ color: red[500] }} />
        </IconButton>
      }
    />
  );
};
const BlueIcon = ({ index }) => {
  return (
    <FormControlLabel
      control={
        <IconButton color='secondary'>
          <EdgesensorHighIcon style={{ color: blue[500] }} />
        </IconButton>
      }
    />
  );
};

export default function UserList() {
  const [sensors, setSensors] = useState([]);
  useEffect(() => {
    axios
      .get('http://webswitch.ir:3000/sensors')
      .then((response) => {
        console.log(response.data.sensors);

        for (const property in response.data.sensors) {
          setSensors(response.data.sensors);
          console.log(response.data.sensors[property].sensortype);
        }
      })
      .then((error) => console.log(error));
  }, []);
  const columns = [
    { field: 'sensorid', headerName: 'ID', width: 60 },
    {
      field: 'sensorname',
      headerName: 'Sensor',
      width: 250,
      flex: 1,
    },
    {
      field: 'sensordata',
      headerName: 'Data',
      width: 70,
      flex: 1,
    },
    {
      field: 'sensortype',
      headerName: 'Type',
      width: 70,
      flex: 1,
    },
    {
      field: 'icon',
      headerName: 'Icon',
      sortable: false,
      width: 140,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <div>
            {1 === 2 ? (
              <RedIcon index={params.row.id} />
            ) : (
              <BlueIcon index={params.row.id} />
            )}
          </div>
        );
      },
    },
  ];
  return (
    <div style={{ height: 700, width: '78%' }}>
      <DataGrid
        sx={{ color: 'white' }}
        rows={sensors}
        columns={columns}
        pageSize={10}
        getRowId={(row) => row.sensorid}
      />
    </div>
  );
}
