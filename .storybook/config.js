import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Learn to Frontend',
  url: '#',
  showAddonPanel: false,
  sidebarAnimations: false,
})

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
