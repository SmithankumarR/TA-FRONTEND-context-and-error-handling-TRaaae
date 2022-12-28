import { Route, Switch } from "react-router-dom";
import Article from "./Article";
// import Articles from "./Articles";
// import Books from "./Books";
// import People from "./People";
import Help from "./Help";
import Home from "./Home";
import NotFound from "./NotFound";
import EnhancedArticles from "./Articles"
import EnhancedPeoples from "./People";
import EnhancedBooks from "./Books";
function Main() {
  return (
    <div className="page-content">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="/articles" exact>
          {/* <Articles /> */}
          <EnhancedArticles />
        </Route>
        <Route path="/people">
          {/* <People /> */}
          <EnhancedPeoples />
        </Route>
        <Route path="/books">
          {/* <Books /> */}
          <EnhancedBooks />
        </Route>
        <Route path="/articles/:slug">
          <Article />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
