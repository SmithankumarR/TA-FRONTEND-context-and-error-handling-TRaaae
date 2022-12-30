import React from "react";
import Header from "./Header";
import Main from "./Main";
import ErrorBoundary from "./ErrorBoundaries";
class App extends React.Component {
  state ={
    isDarkMode : true
  }
  render() {
    let { isDarkMode } = this.state;
    return (
      <ErrorBoundary>
        <Header isDarkMode={isDarkMode} />
        <Main isDarkMode={isDarkMode} />
      </ErrorBoundary>
    );
  }
}

export default App;
