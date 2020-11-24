import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import ItemList from '../components/ItemList';
import { ModalContext } from '../layouts/MainLayout';


function Items() {
    const modalFunctions = useContext(ModalContext)
    const [itemsData, setItemsData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await getData("https://fakerapi.it/api/v1/custom?_quantity=7&amount=counter&name=pokemon&date=date&location=word&description=text")
            setItemsData(res.data)
        }
        fetchData()
    }, [])

    const columns = [
        { title: "Items", field: "name"},
        { title: "Amount", field: "amount", type: "numeric" },
        { title: "Get by date", field: "date"},
        { title: "Location", field: "location"}
    ]

    return (
        <ListContainer>
            <ItemList
                columns={columns}
                data={itemsData}
                title="Main List"
                showDetails={(rowData) => {
                    modalFunctions.setIsModalOpen(true)
                    modalFunctions.setItemData(rowData)
                }}
                />
        </ListContainer>
    )
}

    const data = [
        {
            name: "trash bags",
            date: new Date().toLocaleDateString()
        },
        {
            name: "trash bags",
            date: new Date().toLocaleDateString()
        },
        {
            name: "trash bags",
            date: new Date().toLocaleDateString()
        },
        {
            name: "trash bags",
            date: new Date().toLocaleDateString()
        }
    ]

    return(
    <div>
        <ItemList
        columns={columns}
        data={data}
        showDetails={(rowData) => {
            modalFunctions.setIsModalOpen(true)
            modalFunctions.setItemData(rowData)
        }}
        />
    </div>
    )
};

export default Items;