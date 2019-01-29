import Theme from "../common/theme.js"
import NavBar from "../nav/nav-bar"
import PropTypes from "prop-types"
import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
import styled from "styled-components"

const Description = styled.div`
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
`

const SermonsHeader = props => {
  const { onNavBarClick } = props

  return (
    <div className="sermons-header" style={{ backgroundImage: "url(/sermons.jpg)", backgroundSize: "cover" }}>
      <Grid>
        <Row>
          <Col xsOffset={1} xs={10} mdOffset={2} md={8}>
            <NavBar onClick={onNavBarClick} darkMode={true} />
          </Col>
        </Row>
        <Row>
          <Col xsOffset={1} xs={10} mdOffset={2} md={6}>
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
