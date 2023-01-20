import logo from './logo.png';
import './App.css';
import Home from "./Home"
import Pokemon from "./Pokemon"
import Charizard from "./components/Charizard"
import JSONCards from "./JSONCards"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokemon",
    element: <Pokemon />,
  },
  {
    path: "/charizard",
    element: <Charizard />,
  },
  {
    path: "/json",
    element: <JSONCards />,
  }
]);

function App() {
  return (
    <RouterProvider
    router={router}
    fallbackElement={<Home />}
    />
  );
}

export default App;
