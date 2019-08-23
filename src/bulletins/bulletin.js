import React from "react"
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
    }

    strong {
      font-size: ${Theme.fontSize.xl};
    }

    li {
      margin-top: ${Theme.spacing.md};
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
            <ServiceOrder bulletin={bulletin} />
          </Col>
        </Row>
      </Grid>
    </Container>
  )
}

const ServiceOrder = ({ bulletin }) => {
  return (
    <div className="service-order">
      <ReactMarkdown source={bulletin.serviceOrder} />
    </div>
  )
}

export default Bulletin
