import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import {Home, About, Main} from 'pages';

class App extends Component {
    
    render(){
        return (
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/main" component={Main}></Route>

            </div>
        );

    }
    
};

export default App;