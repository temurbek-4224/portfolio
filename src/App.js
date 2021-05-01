import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from 'react-router-dom';
import HomePage from './components/homepage/homepage.component';
import Resume from "./components/resume/Resume.component";
import Portfolio from './components/portfolio/portfolio.component';
import Contacts from './components/contact/contact.component';

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path='/' component={HomePage} />
      <Route path='/resume' component={Resume} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/contacts' component={Contacts} />
    </>
  );
}

export default App;
