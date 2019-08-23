import React from "react"
import {Grid, Row, Col} from "react-flexbox-grid"
import NavBar from "../nav/nav-bar"
import styled from "styled-components"
import Theme from "../common/theme"

const Container = styled.div`
  .description {
    color: ${Theme.colors.dark.subtle};
    font-size: ${Theme.fontSize.lg};
    line-height: ${Theme.lineHeight.lg};
    padding: ${Theme.spacing.md} 0 ${Theme.spacing.lg} 0;
  
    strong {
      color: ${Theme.colors.dark.primary};
    }
  
    @media (min-width: 576px) {
      font-size: ${Theme.fontSize.xl};
      line-height: ${Theme.lineHeight.xl};
      padding: ${Theme.spacing.lg} 0 ${Theme.spacing.xl} 0;
    }
  }
`

const BulletinHeader = ({ bulletin, onNavBarClick, className }) => {
  return (
    <Container className={className} style={{ backgroundImage: "url(/sermons.jpg)", backgroundSize: "cover" }}>
      <Grid>
        <Row>
          <Col xsOffset={1} xs={10} mdOffset={2} md={8}>
            <NavBar onClick={onNavBarClick} darkMode={true} />
          </Col>
        </Row>
        <Row>
          <Col xsOffset={1} xs={10} mdOffset={2} md={6}>
            <div className="description">
              <strong>{bulletin.name}</strong> — Worship with us every Sunday typically at 9:30AM.
            </div>
          </Col>
        </Row>
      </Grid>
    </Container>
  )
}
export default BulletinHeader;
