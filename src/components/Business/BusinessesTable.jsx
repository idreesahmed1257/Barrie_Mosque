'use client'
import { Card } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Link from 'next/link';

export default function BusinessesTable({ businesses }) {
    const columns = [
        { field: 'name', headerName: 'Business Name', flex: 1 },
        { field: 'phone', headerName: 'Phone Number', flex: 1 },
        { field: 'email', headerName: 'Business Email', flex: 1 },
        {
            field: 'website',
            headerName: 'Website',
            flex: 1,
            renderCell: (params) => (
                <Link style={{ color: '#042A29' }} href={params.value || "#"} target="_blank" rel="noopener" color="inherit">
                    {params.value}
                </Link>
            ),
        }, { field: 'details', headerName: 'Details', flex: 2 },
    ];

    return (
        <Card sx={{ height: 400, width: '100%', }}>
            <DataGrid
                rows={businesses}
                columns={columns}
                disableRowSelectionOnClick
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 30,
                        },
                    },
                }}
                getRowId={(row) => row._id}
                checkboxSelection={false}
                sx={{
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: '#e0e0e0',
                        color: '#042A29',
                    },
                    '& .MuiDataGrid-columnHeader': {
                        backgroundColor: '#e0e0e0',
                        color: '#042A29',
                    },
                    '& .MuiDataGrid-columnHeaderTitle': {
                        color: '#042A29',
                    },
                    '& .MuiDataGrid-cell': {
                        color: '#042A29',
                    },
                    '& .MuiDataGrid-row:nth-of-type(odd)': {
                        backgroundColor: '#f5f5f5',
                    },
                    '& .MuiDataGrid-row:hover': {
                        backgroundColor: '#e0e0e0',
                    },
                }}
            />
        </Card>
    );
}
