import "semantic-ui-css/semantic.min.css"
import NavBar from "../nav/nav-bar"
import React from 'react';
import Series from "../sermons/series"
import SeriesList from "../sermons/series-list"
import { Button, Welcome } from '@storybook/react/demo';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';

storiesOf("SeriesList", module)
  .add("with no series", () => {
    return <SeriesList series={[]} />
  })
  .add("with multiple series", () => {
    const series = [
      {
        imageUrl: "https://via.placeholder.com/300x300",
        title: "My Series 1",
        sermonCount: 0
      },
      {
        imageUrl: "https://via.placeholder.com/300x300",
        title: "My Series 2",
        sermonCount: 1
      },
      {
        imageUrl: "https://via.placeholder.com/300x300",
        title: "My Series 3",
        sermonCount: 2
      }
    ]

    const manySeries = series.concat(series).concat(series).concat(series[0])

    return <SeriesList series={manySeries} />
  })

storiesOf("Series", module)
  .add("with no sermons", () => {
    const series = {
      imageUrl: "https://via.placeholder.com/300x300",
      title: "My Series",
      sermonCount: 0
    }

    return <Series series={series} />
  })
  .add("with 1 sermon", () => {
    const series = {
      imageUrl: "https://via.placeholder.com/300x300",
      title: "My Series",
      sermonCount: 1
    }

    return <Series series={series} />
  })
  .add("with 4 sermons", () => {
    const series = {
      imageUrl: "https://via.placeholder.com/300x300",
      title: "My Series",
      sermonCount: 4
    }

    return <Series series={series} />
  })

storiesOf("NavBar", module)
  .add("default state", () => {
    return <NavBar onClick={action("clicked")} />
  })