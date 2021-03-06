import React from 'react';
import MaterialTable from 'material-table';
import styled from 'styled-components';

function ItemList({ columns, data, title, showDetails }) {
    return (
        <FullWidth>
        <MaterialTable
        columns={columns} data={data} title={title} 
        actions={[
            {
                icon: () => <ViewIcon />,
                tooltip: "View Details",
                onClick: (_event, rowData) => showDetails(rowData)
            }
        ]} /> 
        </FullWidth>
    )   
};

const FullWidth = styled.div`
max-width: 100%;
`

const ViewIcon = styled.div`
    background-color: #D2BBA2;
    height: 20px;
    width: 50px;
`

export default ItemList;