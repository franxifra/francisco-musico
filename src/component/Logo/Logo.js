import React from 'react'
import musicImage from '../../assets/img/musica.svg'
import './Logo.css'


const Logo = () => {
    return (
        <>
        <img
          src={musicImage}
          alt="decorative music icon"
          className="musicIcon"
        />
        <h1 className="logo">
          <span className="logoFrancisco">Francisco</span> <br />
          <span className="logoXifra">Xifra</span>
        </h1>
      </>
    )
}

export default Logo
