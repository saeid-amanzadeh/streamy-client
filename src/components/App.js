import React from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './Header';
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import history from "../history";

const App = () => {
    return (
        <div className='ui container'>

            <Router history={history}>
                <div>
                    <Header />
                    <Route exact path="/">
                        <StreamList />
                    </Route>
                    <Route path="/streams/new">
                        <StreamCreate />
                    </Route>
                    <Route path="/streams/show">
                        <StreamShow />
                    </Route>
                    <Route path="/streams/delete/:id" exact component={StreamDelete} />
                    <Route path="/streams/edit/:id" exact component={StreamEdit} />
                </div>
            </Router>
        </div>
    );
};

export default App;