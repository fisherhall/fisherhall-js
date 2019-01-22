import "semantic-ui-css/semantic.min.css"
import Footer from "../common/footer"
import NavBar from "../nav/nav-bar"
import React from 'react';
import { BrowserRouter } from "react-router-dom"
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';


storiesOf("NavBar", module)
  .add("default state", () => {
    return <NavBar onClick={action("clicked")} />
  })

storiesOf("Footer", module)
  .add("default state", () => {
    return (
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
  })

