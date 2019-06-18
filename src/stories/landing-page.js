import LandingPage from "../landing-page/landing-page"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"

storiesOf("Landing Page", module)
  .add("default state", () => {
    return (
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    )
  })

