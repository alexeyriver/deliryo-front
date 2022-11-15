import React from 'react';
import { AppRoutes, RoutePath } from './routePaths';

const routeConfig = [
    { path: RoutePath[AppRoutes.MAIN], element: <>hello</> },
    { path: RoutePath[AppRoutes.SIGNUP], element: <>SIGNUP</> },
    { path: RoutePath[AppRoutes.SIGNIN], element: <>SIGNIN</> },
];

export default routeConfig;
