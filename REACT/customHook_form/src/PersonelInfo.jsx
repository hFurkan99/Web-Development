import React from 'react'
import { useState } from 'react'
import useInput from './useInput';

function PersonelInfo() {
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");

    const [firstName, bindFirstName, resetFirstName] = useInput("");
    const [lastName, bindLastName, resetLatName] = useInput("");


    const submitForm = (e) => {
        e.preventDefault();
        alert(`Merhaba ${firstName} ${lastName}`)
        resetFirstName();
        resetLatName();
    }
    return (
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <label>Ad</label>
                    <input type="text" {...bindFirstName} />
                </div>
                <div>
                    <label>Soyad</label>
                    <input type="text" {...bindLastName} />
                </div>
                <div>
                    <button>
                        Kaydet
                    </button>
                </div>

            </form>
        </div>
    )
}

export default PersonelInfo