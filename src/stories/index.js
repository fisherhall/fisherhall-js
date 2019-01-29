import "semantic-ui-css/semantic.min.css"
import Footer from "../common/footer"
import NavBar from "../nav/nav-bar_v2"
import React from 'react';
import { BrowserRouter } from "react-router-dom"
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';


storiesOf("NavBar", module)
  .add("default state", () => {
    return (
      <BrowserRouter>
        <NavBar onClick={action("clicked")} />
      </BrowserRouter>
    )
  })

storiesOf("Footer", module)
  .add("default state", () => {
    return (
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
  })

