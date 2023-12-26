
import { useState } from "react";





function SearchHeader({ search }) {

    const [valueInput, setValue] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault(); // içine gönderilen eventin default özelliklerini önlüyor. submit yüzünden sayfanın sürekli yenilemesini önledik
        search(valueInput);
    };

    const handleChange = (event) => {
        setValue(event.target.value)  //parantez içi inputta girilen değer
    }

    return (<div className="SearchDiv">
        <form onSubmit={handleFormSubmit} className="searchForm">
            <label>Ne arıyorsunuz ?</label>
            <input value={valueInput} onChange={handleChange} type="text" />
        </form>
    </div>);
}

export default SearchHeader;