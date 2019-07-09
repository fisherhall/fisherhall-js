import NavBar from "../nav/nav-bar"
import React from "react"
import Theme from "../common/theme"
import styled from "styled-components"
import { Button } from "antd"
import { Grid, Row, Col } from "react-flexbox-grid"



const LandingPage = ({ className }) => {
  return (
    <div className={className}>
      <div className="cover">
        <Grid>
          <Row>
            <Col xsOffset={1} xs={10} mdOffset={2} md={8}>
              <NavBar darkMode />
            </Col>
          </Row>
          <Row>
            <Col xsOffset={1} xs={10} mdOffset={2} md={8}>

              <h1>
                Loved, Loving.
              </h1>
          
              <Button ghost>View our latest bulletin</Button>
            </Col>
          </Row>
        </Grid>
      </div>
      <div className="mission-statement">
        <Grid>
          <Row>
            <Col xsOffset={1} xs={10} mdOffset={2} md={8}>
              <p>As a congregation of the Montreal Chinese Alliance Church we believe <strong>because God loves us, we will love Jesus, love His people, and love the world, for Jesus' sake.</strong></p>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
    
  )
}

const StyledLandingPage = styled(LandingPage)`

  .cover {
    background-image: url("/landing.jpg");
    background-size: cover;
    text-align: center;
    padding-bottom: ${Theme.spacing.lg};

    h1 {
      color: ${Theme.colors.dark.primary};
      font-size: ${Theme.fontSize.xxl};
      font-weight: bold;
      padding: ${Theme.spacing.lg} 0 ${Theme.spacing.md};
      font-family: 'Lato', sans-serif;
    }
  }

  .mission-statement {
    background-color: ${Theme.colors.light.subtle};
    font-size: ${Theme.fontSize.lg};
    padding:  ${Theme.spacing.lg} 0 ${Theme.spacing.lg};
    text-align: center;
    


  }
`

export default StyledLandingPage

