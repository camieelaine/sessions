import { Route, Switch } from "react-router-dom";

import AllSessionsPage from "./pages/AllSessions";
import NewSessionPage from "./pages/NewSession";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllSessionsPage />
        </Route>
        <Route path="/new-session">
          <NewSessionPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
