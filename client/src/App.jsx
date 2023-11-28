import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import OnboardingLayout from './layouts/OnboardingLayout.jsx';

import IntroPage from './pages/Onboarding/IntroPage.jsx';
import GetStartedPage from './pages/Onboarding/GetStartedPage.jsx';
import WelcomePage from './pages/Onboarding/WelcomePage.jsx';
import EnableLocationPage from './pages/Onboarding/EnableLocationPage.jsx';
import LocationNotSupportedPage from './pages/LocationNotSupportedPage.jsx';
import RoutesPage from './pages/User/RoutesPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <OnboardingLayout />,
        children: [
            {
                path: '',
                name: 'WelcomePage',
                element: <WelcomePage />,
            },
            {
                path: 'introduction',
                name: 'IntroductionPage',
                element: <IntroPage />,
            },

            {
                path: 'enable-location',
                name: 'EnableLocationPage',
                element: <EnableLocationPage />,
            },
            {
                path: 'getstarted',
                name: 'GetstartedPage',
                element: <GetStartedPage />,
            },
        ],
    },

    {
        path: '/routes',
        name: 'routes',
        element: <RoutesPage />,
    },

    {
        path: '/location-not-supported',
        name: 'LocationNotSupported',
        element: <LocationNotSupportedPage />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
