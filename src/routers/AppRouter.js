import React, { Suspense } from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { SuspenseLoaderGlobal } from "../components/global/suspenseLoader.global";

import { AuthRouter } from './AuthRouter';
const Home = React.lazy(()=> import('../components/home/Home'));

export const AppRouter = () => {
    return (
        <Router>
          <Suspense fallback={<SuspenseLoaderGlobal />}>
              <Switch>
                  <Route path="/auth" component={AuthRouter} />
                  <Route exact path="/" component={ Home } />

                  <Redirect to="/auth/login" />

              </Switch>
           </Suspense>
        </Router> 
    )
}
