import React from "react"
import { Link } from "react-router-dom"
import { loginRoute } from "./url-helper"
import { Grid, Row, Col } from "react-flexbox-grid"
import styled from "styled-components"
import Theme from "./theme"
import { connectRoute, sermonsRoute, aboutRoute, sundayRoute } from "../common/url-helper"

const Nav = styled.ul`
  color: ${Theme.colors.dark.primary};
  list-style-type: none;
  padding: 0;

  li:last-of-type:after {
    content: ""
  }
`

const NavItem = styled.li`
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: ${Theme.fontSize.sm};
  color: ${Theme.colors.dark.subtle};

  &:after {
    content: "/";
    margin: 0 6px;
  }

  a {
    color: rgba(255, 255, 255, .8);
  }

  a:hover {
    opacity: .7;
  }
`

const UnstyledFooter = props => {
  const { className } = props

  return (
    <footer className={`footer ${className}`}>
      <Grid>
        <Row>
          <Col xsOffset={2} xs={8}>
            <Nav>
              <NavItem><Link to={connectRoute.url()}>Connect</Link></NavItem>
              <NavItem><Link to={sermonsRoute.url()}>Sermons</Link></NavItem>
              <NavItem><Link to={aboutRoute.url()}>About</Link></NavItem>
              <NavItem><Link to={sundayRoute.url()}>Sunday</Link></NavItem>
            </Nav>
            <div>
              Montreal Chinese Alliance Church is located in Hampstead<br />
              at <a href="https://www.google.ca/maps/place/13+Rue+Finchley,+Hampstead,+QC+H3X+2Z4/@45.4791032,-73.6348992,17z/data=!3m1!4b1!4m2!3m1!1s0x4cc917507e7efe21:0x334fc9316d4951e3">13 Finchley</a> in Montreal, QC<br />
              with congregations in <a href="http://montreal-cac.org/">Cantonese</a>, <a href="https://mcac.chuch">English</a> and <a href="http://mcac-m.blogspot.ca/">Mandarin</a>.
            </div>
          </Col> 
        </Row>
      </Grid>
    </footer>
  )
}

const Footer = styled(UnstyledFooter)`
  font-size: ${Theme.fontSize.sm};
  background-color: ${Theme.colors.dark.background};
  color: ${Theme.colors.dark.subtle};
  line-height: ${Theme.lineHeight.md};
  font-size: ${Theme.fontSize.md};
  padding: ${Theme.spacing.lg} 0;

  a {
    color: ${Theme.colors.dark.primary};
  }
`

export default Footer
