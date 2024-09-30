import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid'; // Data grid component
import { TextField } from '@mui/material';   // Search input field
import data from './data.json';              // Import the data
import './App.css';                          // Import the CSS file

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  // Function to filter data based on search term
  useEffect(() => {
    const filtered = data.filter((row) => {
      // Check if any field in the row contains the search term
      return Object.values(row).some((value) => {
        return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
      });
    });

    setFilteredData(filtered);
  }, [searchTerm]);

  // Define the columns for the data grid
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'customer', headerName: 'Customer Name', width: 200 },
    { field: 'lastSeen', headerName: 'Last Seen', width: 150 },
    { field: 'orders', headerName: 'Orders', width: 100 },
    { field: 'totalSpent', headerName: 'Total Spent', width: 150 },
    { field: 'latestPurchase', headerName: 'Latest Purchase', width: 150 },
    { field: 'news', headerName: 'Subscribed to News', width: 150 },
    { field: 'segments', headerName: 'Segment', width: 150 }
  ];

  return (
    <div className="container">
      <div className="datagrid-header">Customer Data</div>

      {/* Search Input */}
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
        style={{ marginBottom: '20px' }}
      />

      {/* Data Grid */}
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={filteredData} columns={columns} pageSize={5} />
      </div>
    </div>
  );
}

export default App;

