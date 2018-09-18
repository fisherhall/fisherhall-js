import PropTypes from "prop-types"
import React from "react"
import pluralize from "pluralize"
import { Image, Item } from "semantic-ui-react"

const Series = props => {
  const { series } = props

  return (
    <Item>
      <Item.Content>
        <Image src={series.imageUrl} size="small" rounded bordered />
        <Item.Header as="strong">{series.title}</Item.Header>
        <Item.Meta>{pluralize("sermon", series.sermonCount, true)}</Item.Meta>
      </Item.Content>
    </Item>
  )
}

Series.propTypes = {
  series: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    sermonCount: PropTypes.number.isRequired
  }).isRequired
}

export default Series
