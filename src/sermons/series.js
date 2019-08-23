import PropTypes from "prop-types"
import React from "react"
import pluralize from "pluralize"
import { Card } from "antd"

const { Meta } = Card

const Series = props => {
  const { series, className } = props

  return (
    <Card
      className={className}
      cover={<img src={series.imageUrl} alt="Sermon Series" />}
    >
      <Meta
        title={series.title}
        description={pluralize("sermon", series.sermonCount, true)}
      />
    </Card>
  )
}

Series.propTypes = {
  className: PropTypes.string.isRequired,
  series: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    sermonCount: PropTypes.number.isRequired,
  }).isRequired,
}

export default Series
