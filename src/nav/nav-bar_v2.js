import React from "react"
import styled from "styled-components"
import Theme from "../common/theme"
import { Link } from "react-router-dom"
import { aboutRoute,connectRoute,sermonsRoute,sundayRoute } from "../common/url-helper"

const ClearFix = styled.div`
  clear: both;
`

const Logo = styled.img`
  float: left;
  height: 40px;
  width: 40px;
`

const NavLinks = styled.ul`
  a {
    color: ${Theme.colors.light.primary}
  }

  a:hover {
    color: ${Theme.colors.light.subtle}
  }

  .dark-mode & {
    a { 
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
`

const NavBar = ({ darkMode }) => {
  const className = darkMode ? "dark-mode" : null
  return (
    <nav className={className}>
      <Logo src="/cma.png" />
      <NavLinks>
        <NavItem><Link to={sundayRoute.url()}>Sunday</Link></NavItem>
        <NavItem><Link to={aboutRoute.url()}>About</Link></NavItem>
        <NavItem><Link to={sermonsRoute.url()}>Sermons</Link></NavItem>
        <NavItem><Link to={connectRoute.url()}>Connect</Link></NavItem>
      </NavLinks>
      <ClearFix />
    </nav>
  )
}

export default NavBar