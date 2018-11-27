import "./styles.scss"
import React from "react"
import { Container } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { loginRoute } from "./url-helper"

const Footer = props => {
  return (
    <footer className="footer">
      <Container textAlign="center">
        <img src="/cma.png" style={{ width: 40, height: 40, marginBottom: 25 }} />
        <div style={{ textTransform: "uppercase" }}>
          Montreal Chinese Alliance Church
        </div>
        <a href="https://www.google.ca/maps/place/13+Rue+Finchley,+Hampstead,+QC+H3X+2Z4/@45.4791032,-73.6348992,17z/data=!3m1!4b1!4m2!3m1!1s0x4cc917507e7efe21:0x334fc9316d4951e3">13 Finchley, Hampstead, Québec H3X 2Z4</a> |&nbsp;
        <a href="tel:5144822703">514.482.2703</a><br />
        <a href="http://montreal-cac.org/">滿地可華人宣道會</a> |&nbsp;
        <a href="http://mcac-m.blogspot.ca/">教会网站</a> |&nbsp;
        <Link to={loginRoute.url()}>Login</Link><br />
        <div style={{ margin: "25px 0", fontStyle: "italic" }}>
          Because God loves us, we will love Jesus, love His people, and love the world, for Jesus' sake.
        </div>
      </Container>
    </footer>
  )
}

export default Footer
