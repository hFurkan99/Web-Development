import React from 'react'
import Banner from "../assets/banner.png";
import "../styles/Contact.css"

export const Contact = () => {
    return (
        <div className='contact'>
            <div className='leftSide' style={{ backgroundImage: `url(${Banner})` }}>
            </div>
            <div className='rightSide'>
                <h1>Bizimle İletişime Geçiniz</h1>
                <form>
                    <label>Ad Soyad</label>
                    <input type="text" name="name" placeholder='Lütfen adınızı ve soyadınızı giriniz...' />
                    <label>E-mail</label>
                    <input type="email" name="email" placeholder='Lütfen email adresinizi giriniz...' />
                    <label>Mesaj</label>
                    <textarea name="message" cols="30" rows="6" placeholder='Lütfen mesajınızı giriniz'></textarea>
                    <button>Gönder</button>

                </form>
            </div>
        </div>
    )
}
