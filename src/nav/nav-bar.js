import React, { useState } from "react"
import styled from "styled-components"
import Theme from "../common/theme"
import { Link } from "react-router-dom"
import { aboutRoute,connectRoute,sermonsRoute,sundayRoute } from "../common/url-helper"
import {Button, Drawer, Divider, Icon } from 'antd';

const ClearFix = styled.div`
  clear: both;
`

const Logo = styled.img`
  float: left;
  height: 40px;
  width: 40px;
`

const NavLinks = styled.ul`
  a, .ghost-button {
    color: ${Theme.colors.light.primary}
  }

  a:hover {
    color: ${Theme.colors.light.subtle}
  }

  .dark-mode & {
    a, .ghost-button { 
      color: ${Theme.colors.dark.primary}
    }

    a:hover {
      color: ${Theme.colors.dark.subtle}
    }
  }
`
const NavItem = styled.li`
  display: inline;
  float: right;
  line-height: ${Theme.lineHeight.xl};
  margin-left: ${Theme.spacing.sm};

  &.expanded {
    display: none;
  }

  &.show-drawer {
    display: inline;
  }

  .nav-drawer & {
    display: block;
    float: none;
  }

  @media (min-width: 576px) {
    &.expanded {
      display: inline;
    }

    &.show-drawer {
      display: none;
    }
  }
`

const NavBar = ({ darkMode }) => {
  const [drawerVisible, setDrawerVisible] = useState(false)

  const showDrawer = () => {
    setDrawerVisible(true)
  }
  
  const onClose = () => {
    setDrawerVisible(false)
  }

  const className = darkMode ? "dark-mode" : null
  return (
    <nav className={`navbar ${className}`}>
      <Logo src="/cma.png" />
      <NavLinks>
        <NavItem className="expanded"><Link to={sundayRoute.url()}>Sunday</Link></NavItem>
        <NavItem className="expanded"><Link to={aboutRoute.url()}>About</Link></NavItem>
        <NavItem className="expanded"><Link to={sermonsRoute.url()}>Sermons</Link></NavItem>
        <NavItem className="expanded"><Link to={connectRoute.url()}>Connect</Link></NavItem>
        <NavItem className="show-drawer"><StyledGhostButton icon="ellipsis" onClick={showDrawer}/></NavItem>
      </NavLinks>
      <ClearFix />
      <Drawer
        className="nav-drawer"
        width={280}
        placement="right"
        closable={true}
        onClose={onClose}
        visible={drawerVisible}>
        <NavLinks>
          <NavItem><Link to={sundayRoute.url()}>Sunday</Link></NavItem>
          <NavItem><Link to={aboutRoute.url()}>About</Link></NavItem>
          <NavItem><Link to={sermonsRoute.url()}>Sermons</Link></NavItem>
          <NavItem><Link to={connectRoute.url()}>Connect</Link></NavItem>
        </NavLinks>
      </Drawer>
    </nav>
  )
}

const GhostButton  = ({ icon, onClick, className }) => {
  return(
    <div className={`ghost-button ${className}`} onClick={onClick}>
      <Icon type={icon} />
    </div>
  )
}

const StyledGhostButton = styled(GhostButton)`
  cursor : pointer;
  padding: 0 ${Theme.spacing.sm};

`

export default NavBar