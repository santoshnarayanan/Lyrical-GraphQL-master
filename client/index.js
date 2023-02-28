import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Switch>
          <Route path="/songs" exact component={() => <SongList />} />
          <Route path="/song/new" exact component={() => <SongCreate />} />
        </Switch>
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
