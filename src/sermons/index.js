import Footer from "../common/footer"
import React from "react"
import SermonsHeader from "./sermons-header"
import SeriesList from "./series-list"
import { Container, Divider, Header } from "semantic-ui-react"

const Sermons = props => {
  const { series, onNavBarClick } = props

  return (
    <div>
      <SermonsHeader onNavBarClick={onNavBarClick} />
      <Container text style={{ margin: "50px 0" }}>
        <div style={{ margin: "50px 0" }}>
          <Header size="tiny">Sermon Series Archive</Header>
          <Divider />
        </div>
        <SeriesList series={series} />
      </Container>
      <Footer />
    </div>
  )
}

export default Sermons
