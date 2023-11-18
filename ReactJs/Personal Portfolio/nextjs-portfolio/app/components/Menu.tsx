import React from 'react'
import NavLink from './NavLink'


interface MenuProps {
    links: Array<{ href: string; title: string }>;
  }

const Menu: React.FC<MenuProps> = ({links}) => {
  return (
    <ul className="flex flex-col py-4 items-center">
        {
            links.map((link, index) =>(
                <li key={index}>
                    <NavLink href={link.href} title={link.title}/>
                </li>
            ))
        }
    </ul>
  )
}

export default Menu