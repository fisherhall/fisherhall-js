import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
  require('../src/stories/landing-page');
  require('../src/stories/sermons');
}

configure(loadStories, module);
