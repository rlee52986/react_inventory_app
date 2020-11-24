import React from 'react';
import styled from 'styled-components';

function QuickView({ itemData, onClose }) {
    return (
    <Modal>        
        <Details>
            <CloseButton role="button" onClick={onClose}>X</CloseButton>
            <p>Name: {itemData.name}</p>
            <p>Amount: {itemData.amount}</p>
            <p>Get By: {itemData.date}</p>
            <p>Location: {itemData.location}</p>
            <p>Description: {itemData.description}</p>
        </Details>
    </Modal>
    )
};

const CloseButton = styled.button`
float: right;
`

const Details = styled.div`
    background-color: #A39BB0;
    font-size: 18px;
    left: 250px;
    margin: 0 auto;
    padding: 24px;
    position: absolute;
    top: 250px;
    width: 30%;
`

const Modal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
`


export default QuickView;