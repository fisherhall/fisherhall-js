import Footer from "../common/footer"
import NavBar from "../nav/nav-bar"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { storiesOf } from "@storybook/react"
import BulletinHeader from "../bulletins/bulletin-header"
import Bulletin from "../bulletins/bulletin"

storiesOf("BulletinHeader", module).add("default state", () => {
  const bulletin = {
    name: "Sunday Worship Service",
    publishedAt: "2019-07-21T13:30:00+00:00",
  }

  return (
    <BrowserRouter>
      <BulletinHeader
        bulletin={bulletin}
        onNavBarClick={action("nav bar clicked")}
      />
    </BrowserRouter>
  )
})

storiesOf("Bulletin", module).add("default state", () => {
  const bulletin = {
    name: "Sunday Worship Service",
    publishedAt: "2019-07-21T13:30:00+00:00",
    serviceOrder: ` - **Call to Worship**
 - **Praise & Worship**
 - **Pray with our Children**
 - **[Announcements](#announcements)**
 - **Offering**
 - **Missions Moment**
 - **Sermon**  
   Abraham and Sarah: The People God Calls  
   Genesis 11:27-12:03  
   Rev. Marshall Davis
 - **Doxology**
 - **Benediction**`,
  }

  return (
    <BrowserRouter>
      <Bulletin bulletin={bulletin} />
    </BrowserRouter>
  )
})
