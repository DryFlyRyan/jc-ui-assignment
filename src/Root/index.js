/**
 * 
 * This will let us add theme providers from Styled components as well as any
 * dev tools we'd want to add on later and just have it all wrapped up nicely.
 * 
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
// import theme from '../../services/root/theme';
import { Provider } from 'react-redux';

export const Root = ({ store }) => {
  return (
    <Provider store={store}>
    </Provider>
  );
};

export default Root;