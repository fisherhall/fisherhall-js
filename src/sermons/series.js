import React from "react"
import { Image, Item } from "semantic-ui-react"

const Series = props => {
  const { series } = props

  return (
    <Item>
      <Item.Content>
        <Image src={series.imageUrl} size="small" rounded bordered />
        <Item.Header as="strong">{series.title}</Item.Header>
        <Item.Meta>{series.sermonCount} Sermons</Item.Meta>
      </Item.Content>
    </Item>
  )
}

export default Series
