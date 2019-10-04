import React from "react"
import Theme from "../common/theme"
import { Typography } from "antd"
import moment from "moment"
import Markdown from "react-markdown"
const { Title } = Typography

const Sermon = ({ sermon }) => {
  return (
    <div>
      <Title level={1}>{sermon.name}</Title>
      <p className="published-at">{moment(sermon.publishedAt).fromNow()}</p>
      <p>{sermon.speaker}</p>
      <audio controls src={sermon.audioUrl}></audio>
      <p>
        <Markdown source={sermon.notes} />
      </p>
    </div>
  )
}
export default Sermon
