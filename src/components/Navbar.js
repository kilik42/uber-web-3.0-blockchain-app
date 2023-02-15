import React from 'react'
import Image from 'next/image';
import avatar from '../temp/avatar.jpg';

const Navbar = () => {
    const style ={
        wrapper: `h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20`,
        leftMenu: `flex gap-3`,
        logo: `text-3xl text-white flex cursor-pointer mr-16`,
        menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
        rightMenu: `flex gap-3 items-center`,


    }
  return (
    <div className={style.wrapper}>
      <h1>navbar</h1>
      <div className={style.leftMenu}>
      <div className={style.logo}>uber </div>
        <div className={style.menuItem}>ride</div>
        <div className={style.menuItem}>drive</div>
        <div className={style.menuItem}>more</div>
      </div>
      <div className={style.rightMenu}>
        <div className={style.menuItem}>Help</div>
        <div className={style.menuItem}>Lance</div>
        <div className={style.userImageContainer}>
          <Image src={avatar} width={40} height={40}/>

        </div>
        <div>0x00000....0000</div>
      </div>
    </div>
  )
}

export default Navbar
