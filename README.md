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

Create three components which will use by links:
- Home.js
```angular2html
import React from 'react';

const Home = () => {
    return (
        <div className="container">
            <h1>Home page</h1>
        </div>
    );
}

export default Home;
```
- Team.js
- NewTeam.js 

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
Create Details.js:
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

Render method has <Router> element which has to include <div> which then can include <Route> elements. 

 
## Useful links
- https://github.com/facebook/create-react-app 
- https://reactjs.org/tutorial/tutorial.html
- https://www.nafrontendzie.pl/react-router-wersji-4-wszystko-nowa

