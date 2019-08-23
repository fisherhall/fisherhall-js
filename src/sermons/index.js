import Footer from "../common/footer"
import React from "react"
import SermonsHeader from "./sermons-header"
import SeriesList from "./series-list"
import { Typography, Divider } from "antd"
import { Grid, Row, Col } from "react-flexbox-grid"
import styled from "styled-components"
import Theme from "../common/theme"

const { Title } = Typography

const Sermons = ({ className, series, onNavBarClick }) => {
  return (
    <div className={className}>
      <SermonsHeader onNavBarClick={onNavBarClick} />
      <Grid>
        <Row>
          <Col xsOffset={1} xs={10} mdOffset={2} md={8}>
            <div className="header">
              <Title level={2}>Sermon Series Archive</Title>
              <Divider />
            </div>
            <SeriesList series={series} />
          </Col>
        </Row>
      </Grid>
      <Footer />
    </div>
  )
}

const StyledSermons = styled(Sermons)`
  .container {
    margin: ${Theme.spacing.md} auto;
  }

  .header {
    margin-bottom: 50px;
  }
`

export default StyledSermons
