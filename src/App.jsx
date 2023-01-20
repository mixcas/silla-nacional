import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Root';
import SillaNacional from './SillaNacional';
import Rain from './Rain';
import Chamba from './Chamba';
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <SillaNacional />
      },
      {
        path: "/yo",
        element: <div>yo</div>,
      },
      {
        path: "/chamba",
        element: <Chamba />
      },
    ],
  }
]);

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
      <Rain />
    </div>
  )
}

export default App
