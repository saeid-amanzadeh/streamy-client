import React from 'react';
import {
    BrowserRouter as Router, Route} from 'react-router-dom';
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";

const App = () => {
    return (
        <Router>
            <div>
                <Route exact path="/">
                    <StreamList />
                </Route>
                <Route path="/streams/new">
                    <StreamCreate />
                </Route>
                <Route path="/streams/show">
                    <StreamShow />
                </Route>
                <Route path="/streams/delete">
                        <StreamDelete />
                    </Route>
                <Route path="/streams/edit">
                        <StreamEdit />
                    </Route>
            </div>
        </Router>
    );
};

export default App;