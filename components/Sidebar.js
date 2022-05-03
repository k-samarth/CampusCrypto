import React, { useState } from 'react'
import styled from 'styled-components'
import CCLogo from '../assets/CAMPUS.png'
import Image from 'next/image'
import {navItems} from '../static/navItems'
const Sidebar = () => {
    const [activeIcon, setActiveIcon] = useState(navItems[0].title)
  return (
    <Wrapper>
        <LogoContainer>
            <Logo>
                <Image src={CCLogo } alt='CampusCrypto Logo'/>
            </Logo>
        </LogoContainer>
        <NavItemsContainer>
            {navItems.map((item,index)=>(
                <NavItem key={index} onClick={()=>setActiveIcon(item.title)}>
                    <NavIcon style={{color: item.title == activeIcon && '#3773f5'}}>
                        {item.icon}
                    </NavIcon>
                    <NavTitle>
                        {item.title}
                    </NavTitle>
                </NavItem>
            ))}
        </NavItemsContainer>
    </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
    height: calc(10vh);
    border-right: 1px solid #282b2f;
    width: calc(22rem - 5px - 5px);
    padding: 0 0 rem;
    margin-left: 0.5px;
`
const LogoContainer = styled.div`
    margin: 0.0rem 0;
`
const Logo = styled.div`
    width:50%;
    object-fit: contain;
    margin-left: 0.0rem;
`
const NavItemsContainer = styled.div`
    margin-top: 1rem;

    &:hover{
        cursor: pointer;
    }
`

const NavItem = styled.div`
    display: flex;
    align-items: center;
    font-size: 1rem;
    border-radius: 500px;
    margin-bottom: 1.5rem;
    height: 2rem;
    
    &:hover{
        background-color : #141519;
    }
`

const NavIcon = styled.div`
    background-color: #141519;
    padding: 0.7rem;
    border-radius: 50%;
    margin: 0 1rem;
    display: grid;
    place-items: center;
`

const NavTitle = styled.div`
    
`