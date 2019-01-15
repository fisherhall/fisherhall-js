import "./styles.scss"
import React from "react"
import { Link } from "react-router-dom"
import { loginRoute } from "./url-helper"
import { Grid, Row, Col } from "react-flexbox-grid"
import styled from "styled-components"
import Theme from "./theme"

const UnstyledFooter = props => {
  const { className } = props

  return (
    <footer className={`footer ${className}`}>
      <Grid>
        <Row>
          <Col xs={12}>
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
`

export default Footer
