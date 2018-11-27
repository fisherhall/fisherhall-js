import "./styles.scss"
import NavBar from "../nav/nav-bar"
import PropTypes from "prop-types"
import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
import styled from "styled-components"

const Description = styled.div`
  line-height: 40px;
  padding-bottom: 40px;
`

const SermonsHeader = props => {
  const { onNavBarClick } = props

  return (
    <div className="sermons-header" style={{ backgroundImage: "url(/sermons.jpg)", backgroundSize: "cover" }}>
      <Grid>
        <Row>
          <Col xsOffset={0} xs={12} mdOffset={2} md={8}>
            <NavBar onClick={onNavBarClick} />
          </Col>
        </Row>
        <Row>
          <Col xsOffset={0} xs={12} mdOffset={2} md={6}>
            <Description>
              <strong>Sermons</strong> — Every Sunday we get together to read God’s
              Word (the Bible) and to talk about how what Jesus has done radically
              transforms our lives and our world.
            </Description>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

SermonsHeader.propTypes = {
  onNavBarClick: PropTypes.func.isRequired
}

export default SermonsHeader
