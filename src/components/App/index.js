import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//  App components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Schedule from '../../components/Views/Schedule';
import Questions from '../../components/Views/Questions';
import Feedback from '../../components/Views/Feedback';
import Help from '../../components/Views/Help';

// css
import '../../index.css';

const App = ()=> (
  <BrowserRouter>
    <div className="b-container">
      <Header />
        <Switch>
          <Route path="/schedule" component={Schedule} />
          <Route path="/questions" component={Questions} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/help" component={Help} />
        </Switch>
      <Footer />
    </div>
  </BrowserRouter>
)

export default App;