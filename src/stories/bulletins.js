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
    announcements: [
      {
        id: 1,
        content:
          "Welcome friends and visitors. We invite you to make MCAC your **spiritual home**. Please let us know how we can be of help to you.",
      },
      {
        id: 2,
        content: `**MISSIONS:**
 - **STM Madrid:** $1321 was raised from last week’s Bake Sale. Thank you for everyone’s support. Please continue to pray for Pastor Marshall's passport!
      `,
      },
      {
        id: 3,
        content:
          "[**Kairos Course**](http://kairoscourse.org/courses) is designed to educate, inspire and challenge Christians to engage in world Christian mission. It focuses on 4 dimensions of mission: Biblical, Historical, Strategic and Cultural. A new course is going to be offered in November (12, 14, 16, 26 & 30) at [Laval Christian Fellowship](https://lavalchristianfellowship.com). For more info & registration, click [here](http://kairoscourse.org/courses).",
      },
    ],
  }

  position: 2
  url: null

  return (
    <BrowserRouter>
      <Bulletin bulletin={bulletin} />
    </BrowserRouter>
  )
})
