import React from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

export default function Component() {
  // let match = useRouteMatch();
  return (
    <div>
      <h1>Component</h1>

      {/* <ul>
        <li>
          <Link to={`${match.url}/0`}>Component 0</Link>
        </li>
        <li>
          <Link to={`${match.url}/1`}>Component 1</Link>
        </li>
      </ul> */}

      {/* The Topics page has its own <Switch> with more routes
        that build on the /topics URL path. You can think of the
        2nd <Route> here as an "index" page for all topics, or
        the page that is shown when no topic is selected */}
      {/* <Switch>
        <Route path={`${match.path}/:compId`}>
          <Components />
        </Route>

        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch> */}
    </div>
  );
}

// function Components() {
//   let { compId } = useParams();
//   return <h3>Requested topic ID: {compId}</h3>;
// }
