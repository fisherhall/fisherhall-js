import { configure } from "@storybook/react"

function loadStories() {
  require("../src/stories")
  require("../src/stories/bulletins")
  require("../src/stories/landing-page")
  require("../src/stories/sermons")
  require("../src/stories/series-details")
}

configure(loadStories, module)
