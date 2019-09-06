import React from "react"
import { BrowserRouter } from "react-router-dom"
import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"
import SeriesDetails from "../sermons/series-details"

storiesOf("SeriesDetails", module).add("default state", () => {
  const series = {
    id: "1",
    description: "This is a test series",
    createdAt: "2019-07-21T13:30:00+00:00",
    name: "Test Series",
    sermons: [
      { id: "1", name: "Test Sermon 1", speaker: "Test Speaker" },
      { id: "2", name: "Test Sermon 2", speaker: "Test Speaker" },
      { id: "3", name: "Test Sermon 3", speaker: "Test Speaker" },
    ],
  }

  return (
    <BrowserRouter>
      <SeriesDetails series={series} />
    </BrowserRouter>
  )
})
