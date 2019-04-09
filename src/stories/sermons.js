import "../App.css"
import React from "react";
import Series from "../sermons/series"
import SeriesList from "../sermons/series-list"
import Sermons from "../sermons"
import SermonsHeader from "../sermons/sermons-header"
import { BrowserRouter } from "react-router-dom"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { storiesOf } from "@storybook/react"


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
      imageUrl: "https://picsum.photos/300/300",
      title: "My Series",
      sermonCount: 0
    }

    return (
      <div style={{ margin: 20, width: 150 }}>
        <Series series={series} />
      </div>
    )
  })
  .add("with 1 sermon", () => {
    const series = {
      imageUrl: "https://picsum.photos/300/300",
      title: "My Series",
      sermonCount: 1
    }

    return (
      <div style={{ margin: 20, width: 150 }}>
        <Series series={series} />
      </div>
    )
  })
  .add("with 4 sermons", () => {
    const series = {
      imageUrl: "https://picsum.photos/300/300",
      title: "My Series",
      sermonCount: 4
    }

    return (
      <div style={{ margin: 20, width: 150 }}>
        <Series series={series} />
      </div>
    )
  })

storiesOf("SermonsHeader", module)
  .add("default state", () => {
    return (
      <BrowserRouter>
        <SermonsHeader onNavBarClick={action("nav bar clicked")} />
      </BrowserRouter>
    )
  })

storiesOf("Sermons", module)
  .add("default state", () => {
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

    return (
      <BrowserRouter>
        <Sermons onNavBarClick={action("nav bar clicked")} series={manySeries} />
      </BrowserRouter>
    )
  })
