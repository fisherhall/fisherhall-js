import React from "react"
import { Dropdown, Menu, Responsive } from "semantic-ui-react"
import { aboutRoute, connectRoute, sermonsRoute, sundayRoute } from "../common/url-helper"

const NavBar = props => {
  const { onClick } = props

  return (
    <Menu secondary>
      <Menu.Item>
        <img src="/cma.png" style={{ width: 40, height: 40 }} />
      </Menu.Item>

      <Responsive as={Menu.Menu} position="right" maxWidth={767}>
        <Menu.Item>
          <Dropdown icon="chevron down">
            <Dropdown.Menu>
              <Dropdown.Item text="Connect" name="connect" onClick={onClick} />
              <Dropdown.Item text="Sermons" name="sermons" onClick={onClick} />
              <Dropdown.Item text="About" name="about" onClick={onClick} />
              <Dropdown.Item text="Sunday" name="sunday" onClick={onClick} />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Responsive>

      <Responsive as={Menu.Menu} position="right" minWidth={768}>
        <Menu.Item name="connect" onClick={onClick} />
        <Menu.Item name="sermons" onClick={onClick} />
        <Menu.Item name="about" onClick={onClick} />
        <Menu.Item name="sunday" onClick={onClick} />
      </Responsive>
    </Menu>
  )
}

export default NavBar
