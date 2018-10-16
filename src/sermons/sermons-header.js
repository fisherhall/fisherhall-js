import "./styles.css"
import NavBar from "../nav/nav-bar"
import PropTypes from "prop-types"
import React from "react"
import { Container } from "semantic-ui-react"

const SermonsHeader = props => {
  const { onNavBarClick } = props

  return (
    <div className="sermons-header" style={{ backgroundImage: "url(/sermons.jpg)", backgroundSize: "cover" }}>
      <Container>
        <NavBar onClick={onNavBarClick} />
        <p>
          <strong>Sermons</strong> — Every Sunday we get together to read God’s
          Word (the Bible) and to talk about how what Jesus has done radically
          transforms our lives and our world.
        </p>
      </Container>
    </div>
  )
}

SermonsHeader.propTypes = {
  onNavBarClick: PropTypes.func.isRequired
}

export default SermonsHeader
