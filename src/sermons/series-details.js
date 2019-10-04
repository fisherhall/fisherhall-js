import PropTypes from "prop-types"
import React from "react"
import pluralize from "pluralize"
import styled from "styled-components"
import { Grid, Row, Col } from "react-flexbox-grid"
import { Typography } from "antd"
import moment from "moment"
import Theme from "../common/theme"

const { Title } = Typography

export const Container = styled.div`
  .info {
    margin-bottom: ${Theme.spacing.lg};
  }

  .cover {
    width: 100%;
    padding-top: 100%;
    background-size: cover;
  }
`

export const SeriesInfo = ({ series }) => {
  return (
    <div className="info">
      <div
        className="cover"
        style={{
          backgroundImage: "url('https://www.fillmurray.com/640/640')",
        }}
      />
      <p>{pluralize("sermon", series.sermons.length, true)}</p>
      <div className="description">
        <Title level={2}>Notes</Title>
        {series.description}
      </div>
    </div>
  )
}

const SeriesDetails = ({ series }) => {
  return (
    <div>
      <Title level={1}>{series.name}</Title>
      <p className="created-at">
        {moment(series.createdAt).format("MMMM YYYY")}
      </p>
      <ol>
        {series.sermons.map(sermon => (
          <li>{sermon.name}</li>
        ))}
      </ol>
    </div>
  )
}

const SeriesShell = ({ series }) => {
  return (
    <Container>
      <Grid>
        <Row>
          <Col xs={12} md={4}>
            <SeriesInfo series={series} />
          </Col>
          <Col xs={12} md={8}>
            <SeriesDetails series={series} />
          </Col>
        </Row>
      </Grid>
    </Container>
  )
}

export default SeriesShell
