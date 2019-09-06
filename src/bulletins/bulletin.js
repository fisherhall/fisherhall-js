import React from "react"
import Footer from "../common/footer"
import BulletinHeader from "./bulletin-header"
import styled from "styled-components"
import { Typography } from "antd"
import ReactMarkdown from "react-markdown"
import { Grid, Row, Col } from "react-flexbox-grid"
import Theme from "../common/theme"

const { Title } = Typography

const Container = styled.div`
  .service-order {
    text-align: center;

    ul {
      list-style-type: none;
      padding: 0;
    }

    strong {
      font-size: ${Theme.fontSize.xl};
    }

    li {
      margin-top: ${Theme.spacing.md};
    }
  }

  .announcements {
    margin: ${Theme.spacing.xl} 0;

    li > p {
      margin: 0;
    }

    ul > li {
      padding-bottom: ${Theme.spacing.xs};
    }
  }
`

const Bulletin = ({ className, bulletin }) => {
  return (
    <Container className={className}>
      <BulletinHeader bulletin={bulletin} />
      <Grid>
        <Row>
          <Col xs={12}>
            <ServiceOrder serviceOrder={bulletin.serviceOrder} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Announcements announcements={bulletin.announcements} />
          </Col>
        </Row>
      </Grid>
      <Footer />
    </Container>
  )
}

const ServiceOrder = ({ serviceOrder }) => {
  return (
    <div className="service-order">
      <ReactMarkdown source={serviceOrder} />
    </div>
  )
}

const Announcements = ({ announcements }) => {
  return (
    <div className="announcements">
      <ol>
        {announcements.map(announcement => (
          <li>
            <ReactMarkdown source={announcement.content} />
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Bulletin
