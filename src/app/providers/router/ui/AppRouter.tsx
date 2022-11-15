import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routeConfig from '../config/routeConfig';

function AppRouter() {
    return (
        <Routes>
            {routeConfig.map(({ element, path }) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    );
}

export default AppRouter;
