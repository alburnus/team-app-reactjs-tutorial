# Quick start to create ReactJs app

## Commands to create a project

Create basic project with simple structure which can be visible on http://localhost:3000
```angular2html
npm create-react-app team-app-reactjs-tutorial
cd team-app-reactjs-tutorial
npm start
```

To build project you need this file:
- public/index.html
- src/index.js
Other files can be deleted or renamed. Files JS and CSS must be located inside src directory.

## Create team app
React have a few different kinds of components e.g.: React.Component.
In tutorial is used JSX in which is possible put a JavaScript - each React element is the JavaScript.

### First components
Create three components which will use by links:
- Home.js
- Team.js
- NewTeam.js 

```angular2html
import React from 'react';

export class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Home page</h1>
            </div>
        );
    }
}

export default Home;
```
#### Routing
Routing is defined in component which has links to other components. In our case App.js has menu with links, so this is 
place where should be defined routes. 

Add routing to ReactJS. First install package react-router-dom
```angular2html
npm install --save react-router-dom
```
or 
```angular2html
yarn add react-router-dom
```

In App.js in import are three imports:
```angular2html
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
```
Router is a main component where is put all routs definition. 
Rout is for definite path to component. 
Link is to open path -> component. 

In App.js add routes:
```angular2html
 <Route exact path="/" component={Home}/>
 <Route exact path="/team" component={Team}/>
 <Route exact path="/team/new" component={NewTeam}/>
``` 
Check what happen when do not add "exact" and try to open this paths :) It is important to connect path with correct component. 

In App.js in a menu add link to routs:
```angular2html
<ul className="navbar-nav">
    <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/team">Team</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/team/new">New team</Link>
    </li>
</ul>
```

It is possible to get parameter from path: http://localhost:3000/team/detail/1

Example create TeamDetails.js as below:
```angular2html
import React from 'react';

export class TeamDetails extends React.Component {
    render() {
        return (
            <h1>Team detail: {this.props.match.params.id}</h1>
        )
    }
}

export default TeamDetails;
```

Method render has <Router> element which has to include element <div> and then we can include <Route> elements. 

#### Different components in component

To enclose different component in component just add component name as element eg.: <TeamMessage/>
To pass parameter value to component do this: <TeamMessage message='Hi' />

```javascript 1.8
import React from 'react';

export class TeamMessage extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Team message : {this.props.message} </h1>
            </div>
        )
    }
}

export default TeamMessage;
```

To store information use state in react: ```this.state```. First in class you need to initialize state in a constructor.
```
class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
    };
  }
  render() {
      return (
        <button
          className="team"
          onClick={() => this.setState({name: 'Team A'})}
        >
          {this.state.name}
        </button>
      );
    }
}
```

After calling this.setState ReactJs re-render Team whenever button is clicked.  
In subclasses we have to always use super in the constructor. To get value from state just write: ```this.state.value```

To collect data from multiple children or communicate between them need share state in a parent component. The parent 
component pass state back down to the children by using props. 

In React, function components can be write instead of class component. They return only render method 
and they don't store state information and base only on what props are on input and return what should be rendered. 

```javascript 1.8
function Team(props) {
    return (
            <button
              className="team"
              onClick={props.onClick}
            >
              {props.name}
            </button>
    )
}

```
 
## Useful links
- https://github.com/facebook/create-react-app 
- https://reactjs.org/tutorial/tutorial.html
- https://www.nafrontendzie.pl/react-router-wersji-4-wszystko-nowa

