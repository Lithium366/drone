import { default as React, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

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
    <Router>
      {showHeader && <Header />}
      <p onClick={() => toggleHeader(!showHeader)}>Toggle header</p>

      <Switch>
        <Route exact path="/" component={Page1} />
        <Route path="/another_page" component={Page2} />
      </Switch>
    </Router>
  );
};

export default App;
