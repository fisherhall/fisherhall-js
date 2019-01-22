import PropTypes from "prop-types"
import React from "react"
import Series from "./series" 
import styled from "styled-components"
import { Grid, Row, Col } from "react-flexbox-grid"

const StyledSeries = styled(Series)`
  &.ant-card {
    margin-bottom: 10px;
  }
`

const SeriesList = props => {
  const { series } = props

  if (series.length === 0) {
    return <div>There are currently no series available.</div>
  }

  return (
    <Grid>
      <Row>
        {series.map(s => (
          <Col key={Math.random()} sm={6} md={3}>
            <StyledSeries key={Math.random()} series={s} />
          </Col>
        ))}
      </Row>
    </Grid>
  )
}

SeriesList.propTypes = {
  series: PropTypes.arrayOf(Series.propTypes.series).isRequired
}

export default SeriesList
