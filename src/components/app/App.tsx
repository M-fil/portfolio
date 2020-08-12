import React from 'react';

import i18n from '../../i18n/i18n';

import Navigation from '../navigation/Navigation';
import About from '../about/About';

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <About />
    </>
  )
}

export default App;

