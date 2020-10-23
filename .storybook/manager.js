import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import lesiuTheme from './lesiuTheme';

addons.setConfig({
  //theme: themes.normal,
  //theme: themes.dark
  theme: lesiuTheme
});