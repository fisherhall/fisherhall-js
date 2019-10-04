import "../App.css"
import React from "react"
import Series from "../sermons/series"
import SeriesList from "../sermons/series-list"
import Sermons from "../sermons"
import SermonsHeader from "../sermons/sermons-header"
import { BrowserRouter } from "react-router-dom"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { storiesOf } from "@storybook/react"
import Sermon from "../sermons/sermon"
import { Container, SeriesInfo } from "../sermons/series-details"
import { Grid, Row, Col } from "react-flexbox-grid"

storiesOf("SeriesList", module)
  .add("with no series", () => {
    return <SeriesList series={[]} />
  })
  .add("with multiple series", () => {
    const series = [
      {
        imageUrl: "https://via.placeholder.com/300x300",
        title: "My Series 1",
        sermonCount: 0,
      },
      {
        imageUrl: "https://via.placeholder.com/300x300",
        title: "My Series 2",
        sermonCount: 1,
      },
      {
        imageUrl: "https://via.placeholder.com/300x300",
        title: "My Series 3",
        sermonCount: 2,
      },
    ]

    const manySeries = series
      .concat(series)
      .concat(series)
      .concat(series[0])

    return <SeriesList series={manySeries} />
  })

storiesOf("Series", module)
  .add("with no sermons", () => {
    const series = {
      imageUrl: "https://picsum.photos/300/300",
      title: "My Series",
      sermonCount: 0,
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
      sermonCount: 1,
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
      sermonCount: 4,
    }

    return (
      <div style={{ margin: 20, width: 150 }}>
        <Series series={series} />
      </div>
    )
  })

storiesOf("SermonsHeader", module).add("default state", () => {
  return (
    <BrowserRouter>
      <SermonsHeader onNavBarClick={action("nav bar clicked")} />
    </BrowserRouter>
  )
})

storiesOf("Sermons", module).add("default state", () => {
  const series = [
    {
      imageUrl: "https://via.placeholder.com/300x300",
      title: "My Series 1",
      sermonCount: 0,
    },
    {
      imageUrl: "https://via.placeholder.com/300x300",
      title: "My Series 2",
      sermonCount: 1,
    },
    {
      imageUrl: "https://via.placeholder.com/300x300",
      title: "My Series 3",
      sermonCount: 2,
    },
  ]

  const manySeries = series
    .concat(series)
    .concat(series)
    .concat(series[0])

  return (
    <BrowserRouter>
      <Sermons onNavBarClick={action("nav bar clicked")} series={manySeries} />
    </BrowserRouter>
  )
})

storiesOf("Sermons/Sermon", module).add("default state", () => {
  const sermon = {
    id: "1",
    audioUrl:
      "https://mcac.s3.amazonaws.com/bulletins/728f70ca-74ca-4aa4-84a5-18c963726d70.mp3",
    bannerUrl: null,
    name: "Connected Spirituality: Don't go at it alone!",
    notes:
      "Jesus never stopped talking about the Holy Spirit.↵↵Luke’s writings: Luke & Acts↵↵[The Holy Spirit is the mediator](https://www.bible.com/100/luk.1.35.nasb)↵↵Where the Holy Spirit moves, the unexpected happens.↵↵[Jesus himself is baptized, anointed, by the Holy Spirit](https://www.bible.com/59/luk.3.22.esv)↵↵The presence of the Holy Spirit is a reminder how much Jesus is loved by the Father.↵↵[Jesus baptizes his followers with the Holy Spirit.](https://www.bible.com/59/luk.3.15-16.esv)↵↵And Jesus, **full of the Holy Spirit**, returned from the Jordan and was **led by the Spirit** in the wilderness for forty days, being tempted by the devil. And he ate nothing during those days. And when they were ended, he was hungry. ‭‭[Luke‬ ‭4:1-2‬ ‭ESV‬‬](https://www.bible.com/59/luk.4.1-2.esv)↵↵Jesus does not move alone. [He is always accompanied by the Holy Spirit.](https://www.bible.com/59/luk.4.14.esv)↵↵[Jesus’ first words in Acts:](https://www.bible.com/59/luk.4.18.esv) The Spirit of the Lord is upon me, because he has anointed me to proclaim good news to the poor.↵↵Search me, O God, and know my heart! Try me and know my thoughts! And see if there be any grievous way in me, and lead me in the way everlasting! [Psalms‬ ‭139:23-24‬ ‭ESV‬‬](https://www.bible.com/59/ psa.139.23-24.esv)",
    publishedAt: "2019-09-29T13:30:00+00:00",
    series: null,
    speaker: "Dr. Jean Martin",
    tags: [],
  }

  const series = {
    id: "1",
    description: "This is a test series",
    createdAt: "2019-07-21T13:30:00+00:00",
    name: "Test Series",
    sermons: [
      { id: "1", name: "Test Sermon 1", speaker: ["Test Speaker"] },
      { id: "2", name: "Test Sermon 2", speaker: ["Test Speaker"] },
      { id: "3", name: "Test Sermon 3", speaker: ["Test Speaker"] },
    ],
  }

  return (
    <Container>
      <Grid>
        <Row>
          <Col xs={12} md={4}>
            <SeriesInfo series={series} />
          </Col>
          <Col xs={12} md={8}>
            <Sermon sermon={sermon} />
          </Col>
        </Row>
      </Grid>
    </Container>
  )
})
