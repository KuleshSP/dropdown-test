import React from 'react';
import {Typography} from 'components';
import LanguageDropdown from 'features/LanguageDropdown/components';
import classes from './App.module.css';

const App = (): JSX.Element => {
  return (
    <div className={classes.App}>
      <Typography className={classes.header} variant="p2">
        Язык
      </Typography>

      <LanguageDropdown />
    </div>
  );
};

export default App;
