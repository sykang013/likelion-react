import classes from './App.module.scss';

/* Pages -------------------------------------------------------------------- */
// import Home from '@/pages/Home/Home';
// import SignIn from '@/pages/SignIn/SignIn';
import SignUp from '@/pages/SignUp/SignUp';
import { GlobalStateProvider } from '../contexts/GlobalState';

/* Component ---------------------------------------------------------------- */

function App() {
  return (
    <GlobalStateProvider>
     <div className={classes.App}>
      <SignUp />
    </div>
    </GlobalStateProvider>

  );
}

export default App;
