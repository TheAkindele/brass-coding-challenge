import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {Layout} from "./screens/Layout"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Switch>
       <Route path="/" component={Layout} />
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
