import React, { useState } from 'react';
import loadable from '@loadable/component';
import { Switch, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Header = loadable(() =>
  import(/* webpackChunkName: 'Header' */ './components/Header')
);
const Page1 = loadable(() =>
  import(/* webpackChunkName: 'Page1' */ './components/Page1')
);
const Page2 = loadable(() =>
  import(/* webpackChunkName: 'Page2' */ './components/Page2')
);

const App = () => {
  const [showHeader, toggleHeader] = useState<boolean>(false);

  return (
    <div>
      {showHeader && <Header />}
      <Button
        variant="contained"
        color="primary"
        onClick={() => toggleHeader(!showHeader)}
      >
        Toggle header
      </Button>
      <Switch>
        <Route exact path="/">
          <Page1 greetings="Page1" />
        </Route>
        <Route path="/another_page">
          <Page2 greetings="Page2" />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
