import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../pages/NotFound'

import Layout from './Layout'
import BadgesNew from '../pages/BadgesNew';
import Badge from '../pages/Badge';
import HomePage from '../pages/HomePage'

function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badge}/>
                    <Route exact path="/badges/new" component={BadgesNew}/>
                    <Route exact path="/" component={HomePage}/>    
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;