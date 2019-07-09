import NavBar from "../nav/nav-bar"
import React from "react"
import Theme from "../common/theme"
import styled from "styled-components"
import { Button } from "antd"
import { Grid, Row, Col } from "react-flexbox-grid"
import Footer from "../common/footer"



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
      <div className="groups">
        <Grid>
          <Row>
            <Col xsOffset={1} xs={10} mdOffset={2} md={8}>
              <p>Want to know more about our church? Check out some of the groups within our church that may interest you.</p>
            
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <div className="group">
                <img src="https://res.cloudinary.com/fisher-hall-dev/image/fetch/c_fill,h_200,r_max,w_200/https://mcac.s3.amazonaws.com/groups/90dbc5af-c2b0-459e-bc58-898c2d1defee.jpg"/>
                <p>45th Anniversary</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="group">
                <img src="https://res.cloudinary.com/fisher-hall-dev/image/fetch/c_fill,h_200,r_max,w_200/https://mcac.s3.amazonaws.com/groups/90dbc5af-c2b0-459e-bc58-898c2d1defee.jpg"/>
                <p>45th Anniversary</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="group">
                <img src="https://res.cloudinary.com/fisher-hall-dev/image/fetch/c_fill,h_200,r_max,w_200/https://mcac.s3.amazonaws.com/groups/90dbc5af-c2b0-459e-bc58-898c2d1defee.jpg"/>
                <p>45th Anniversary</p>
              </div>
            </Col>
          </Row>
        </Grid>
      
      </div>
      <Footer/>
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
      font-family: 'Lato', sans-serif;
      font-size: ${Theme.fontSize.xxl};
      font-weight: bold;
      padding: ${Theme.spacing.lg} 0 ${Theme.spacing.md};
    }
  }
  
  .groups {
    padding: ${Theme.spacing.lg} 0 ${Theme.spacing.lg};
    text-align: center;
    .group {
    
      text-align: center;
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

