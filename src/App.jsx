import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Main from "./layouts/Main";
import Home, { homeLoader } from "./pages/Home";


const router = createBrowserRouter ([
  {
    path: '/',
    element: <Main />,
    errorElement: <Navigate to="/404" />,
    children: [
      {
        index: true, // sets Home as the default child route
        element: <Home />,
        loader: homeLoader,
        errorElement: <Navigate to="/404" />
      },
    ]
  },
  {
    path: "/404",
    element: <div>404 Not Found</div>
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}
export default App;

// This is the root component of the application. 
// It sets up the router and provides the overall structure of the app. 
// It doesn't contain much logic or UI itself but delegates to other components.
