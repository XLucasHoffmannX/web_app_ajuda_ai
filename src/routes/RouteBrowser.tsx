import React, { lazy, Suspense, useContext } from 'react'
import { BrowserRouter as RouterApp, Route, Switch } from 'react-router-dom';
import { ContextState } from '../context/DataProvider';
import { CircularProgress } from '@material-ui/core';

// Components
const Landing = lazy(() => import('../resources/views/Landing/Landing'));
const Options = lazy(() => import('../resources/views/Landing/Options/Options'));
const ConectionTest = lazy(() => import('../resources/views/ConectionTest/ConectionTest'));
const BestSearch = lazy(() => import('../resources/views/BestSearch/BestSearch'));
const RecommendedList = lazy(() => import('../resources/views/BestSearch/RecommendedList/RecommendedList'));
const Satisfaction = lazy(() => import('../resources/views/Satisfaction/Satisfaction'));
const ListProviders = lazy(() => import('../resources/views/Satisfaction/ListProviders/ListProviders'));

export default function RouteBrowser() {
    const state: any = useContext(ContextState);

    return (
        <RouterApp>
            <Suspense fallback={<div><div className="vh-100 d-flex justify-content-center align-items-center"><CircularProgress /></div></div>}>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/options" component={Options} />
                    <Route exact path="/satisfaction" component={Satisfaction} />
                    <Route exact path="/satisfaction/providers" component={ListProviders} />
                    <Route exact path="/test-conection" component={ConectionTest} />
                    <Route exact path="/best-search" component={BestSearch} />
                    <Route exact path="/best-search/result/:type" component={RecommendedList} />
                </Switch>
            </Suspense>
        </RouterApp>
    )
}
