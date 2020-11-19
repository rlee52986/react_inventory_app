import { Divider } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';

function EditBox({ name, date, description, onClose, type }) {
    const [formName, setFormName] = useState(name || "");
    const [formDate, setFormDate] = useState(date || new Date());
    const [ formDescription, setFormDescription] = useState(description || "");

    return (
        <div>
            <button onClick={onClose}>X</button>
            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" value={formName} onChange={name => setFormName(name)} />
                </div>
                <div>
                    <label>Date:</label>
                    <input type="text" value={formDate} onChange={date => setFormDate(date)} />
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" value={formDescription} onChange={description => setFormDescription(description)} />
                </div>
                <button onSubmit={async () => {
                    await updateData(`https://fakedata.io/api/v1/${type}`, {
                        formName,
                        formDate,
                        formDescription
                    })
                }}>Save</button>
            </form>
        </div>
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
}

export default EditBox;

