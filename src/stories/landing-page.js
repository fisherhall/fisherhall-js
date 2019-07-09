import LandingPage from "../landing-page/landing-page"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"

const groups = [
  { id: "1", name: "45th Anniversary", bannerUrl: "https://res.cloudinary.com/fisher-hall-dev/image/fetch/c_fill,h_200,r_max,w_200/https://mcac.s3.amazonaws.com/groups/90dbc5af-c2b0-459e-bc58-898c2d1defee.jpg" },
  { id: "2", name: "Children's Church", bannerUrl: "https://res.cloudinary.com/fisher-hall-dev/image/fetch/c_fill,h_200,r_max,w_200/https://mcac.s3.amazonaws.com/groups/90dbc5af-c2b0-459e-bc58-898c2d1defee.jpg" },
  { id: "3", name: "English Service", bannerUrl: "https://res.cloudinary.com/fisher-hall-dev/image/fetch/c_fill,h_200,r_max,w_200/https://mcac.s3.amazonaws.com/groups/90dbc5af-c2b0-459e-bc58-898c2d1defee.jpg" },
  { id: "4", name: "Worship Team", bannerUrl: "https://res.cloudinary.com/fisher-hall-dev/image/fetch/c_fill,h_200,r_max,w_200/https://mcac.s3.amazonaws.com/groups/90dbc5af-c2b0-459e-bc58-898c2d1defee.jpg" },
  { id: "5", name: "ELT", bannerUrl: "https://res.cloudinary.com/fisher-hall-dev/image/fetch/c_fill,h_200,r_max,w_200/https://mcac.s3.amazonaws.com/groups/90dbc5af-c2b0-459e-bc58-898c2d1defee.jpg" }
]

storiesOf("Landing Page", module)
  .add("default state", () => {
    return (
      <BrowserRouter>
        <LandingPage groups={groups} />
      </BrowserRouter>
    )
  })
  .add("with an alert", () => {
    return (
      <BrowserRouter>
        <LandingPage groups={groups} alert="No service today" />
      </BrowserRouter>
    )
  })

