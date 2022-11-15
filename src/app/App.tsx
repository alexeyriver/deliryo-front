import { checkPhone } from 'helpers/grpcGate';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'shared/config/i18n/i18n';
import { AppRouter } from './providers/router';

import { GlobalStyles } from './styles/global';

function App() {
    checkPhone();

    return (
        <Suspense fallback="">
            <BrowserRouter>
                <GlobalStyles />
                <AppRouter />
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
