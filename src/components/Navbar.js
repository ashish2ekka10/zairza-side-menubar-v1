import React,{useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {SideMenuData, SideMenuSocials} from './SideMenu'
import './Navbar.css'

function Navbar() {
    const [sidemenu, setSidemenu] = useState(false)

    const showSidemenu = () => setSidemenu(!sidemenu)

  return (
    <>
        <div className='navbar' onClick={showSidemenu}>
            <button className='bar-button'><FaIcons.FaBars  /></button>  
        </div>    
        <div>
            <nav className={sidemenu ? 'nav-menu active':'nav-menu'}>
                <ul className='nav-menu-items' >
                    <li className='navmenu-toggle'>
                        <button className='menu-close-button'onClick={showSidemenu}>
                            <div className='menu-close-position'><AiIcons.AiOutlineClose/></div>
                        </button> 
                    </li>
                    {SideMenuData.map((item,index) =>{
                        return(
                            <li key={index} className={item.cName}>
                                <a><span>{item.title}</span></a>
                            </li>
                        )
                    })}
                    <div className='socials-div'>
                    {
                    SideMenuSocials.map((item,index) =>{
                        return(
                            <li key={index} className={item.cName} style={{display:'inline-block'}}>
                                <a>
                                <button className='menu-socials-button'>
                                <div className='menu-socials-position'>{item.icon}</div>
                                </button>
                                </a>
                                
                            </li>
                        )
                    })}
                    </div>
                </ul>
                
            </nav>
        </div>
    </>
  )
}

export default Navbar