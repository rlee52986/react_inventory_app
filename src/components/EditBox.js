import React, { useState } from 'react';
import styled from 'styled-components';

function EditBox({ name, date, description, onClose, type }) {
    const [formName, setFormName] = useState(name || "");
    const [formDate, setFormDate] = useState(date || new Date());
    const [ formDescription, setFormDescription] = useState(description || "");

    return (
        <Container>
            <button onClick={onClose}>X</button>
            <form>
                <FormField>
                    <label htmlFor="formName">Name:</label>
                    <input 
                    id="formName"
                    aria-required="false"
                    type="text" 
                    value={formName} 
                    onChange={(name) => setFormName(name)} 
                    />
                </FormField>
                <FormField>
                    <label htmlFor="formDate">Date:</label>
                    <input 
                    id="formDate"
                    aria-required="false"
                    type="text" 
                    value={formDate} 
                    onChange={(date) => setFormDate(date)} 
                    />
                </FormField>
                <FormField>
                    <label htmlFor="formDescription">Description:</label>
                    <input 
                    id="formDescription"
                    aria-required="false"
                    type="text" 
                    value={formDescription} 
                    onChange={description => setFormDescription(description)} 
                    />
                </FormField>
                <button onSubmit={async () => {
                    await updateData(`https://fakedata.io/api/v1/${type}`, {
                        formName,
                        formDate,
                        formDescription
                    })
                }}>Save</button>
            </form>
        </Container>
    )
};

async function updateData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })

    return response.json()
};

const Container = styled.section`
    border: 1px solid #a39bb0;
    margin: 24px auto 0 auto;
    width: 50%;
`

const FormField = styled.div`
    padding: 12px;

    & * {
        display: block;
        font-size: 16px;
    }
`

export default EditBox;

