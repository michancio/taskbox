import { create } from '@storybook/theming/create';
import logo from '../src/logo.svg';

export default create({
  base: 'light',
  brandTitle: 'Fabbook',
  brandUrl: 'https://fabrity.pl',
  brandImage: `/${logo}`,
});