import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import chaptersAddon from 'react-storybook-addon-chapters';

// Styling
import '../../stories.scss';

// README
import ChromeDoc from '../../docs/repos/chrome/DOC.md';
import ProxyDoc from '../../docs/repos/proxy/DOC.md';
import StarterAppDoc from '../../docs/repos/starterApp/DOC.md';
import { doc }  from 'storybook-readme';

storiesOf('Repos', module)
    .add('Starter App', doc(StarterAppDoc))
    .add('Chrome', doc(ChromeDoc))
    .add('Proxy', doc(ProxyDoc));
