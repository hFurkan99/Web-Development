import React from 'react'
import { Data } from "../helpers/Data";
import MenuItem from '../components/MenuItem';
import "../styles/Menu.css";

export const Menu = () => {  //rafc  diğeri rfce
    return (
        <div className='menu'>
            <h1 className='menuTitle'>Burgerlerimiz</h1>
            <div className='menuList'>
                {Data.map((menuItem, index) => {
                    return (
                        <MenuItem
                            image={menuItem.image}
                            name={menuItem.name}
                            content={menuItem.content}
                            price={menuItem.price}
                            key={index}
                        />
                    )
                })}
            </div>
        </div>
    )
}



