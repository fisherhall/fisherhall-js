import PropTypes from "prop-types"
import React from "react"
import Series from "./series" 
import { Grid, List } from "semantic-ui-react"

const SeriesList = props => {
  const { series } = props

  if (series.length === 0) {
    return <div>There are currently no series available.</div>
  }

  return (
    <Grid doubling columns={4}>
      {series.map(s => <Series key={Math.random()} series={s} />)}
    </Grid>
  )
}

SeriesList.propTypes = {
  series: PropTypes.arrayOf(Series.propTypes.series).isRequired
}

export default SeriesList
