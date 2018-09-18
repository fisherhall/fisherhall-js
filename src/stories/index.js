import "semantic-ui-css/semantic.min.css"
import React from 'react';
import Series from "../sermons/series"
import { Button, Welcome } from '@storybook/react/demo';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';

storiesOf("Series", module)
  .add("with no sermons", () => {
    const series = {
      imageUrl: "https://via.placeholder.com/300x300",
      title: "My Series",
      sermonCount: 0
    }

    return <Series series={series} />
  })
  .add("with 1 sermon", () => {
    const series = {
      imageUrl: "https://via.placeholder.com/300x300",
      title: "My Series",
      sermonCount: 1
    }

    return <Series series={series} />
  })
  .add("with 4 sermons", () => {
    const series = {
      imageUrl: "https://via.placeholder.com/300x300",
      title: "My Series",
      sermonCount: 4
    }

    return <Series series={series} />
  })
