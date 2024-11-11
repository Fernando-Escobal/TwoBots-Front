import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/main-sections/header/Header";
import Characters from "./components/main-sections/characters/Characters";
import Content from "./components/main-sections/content/Content";
import CreateCharacter from "./components/main-sections/create-character/CreateCharacter";
import CreateSituation from "./components/main-sections/create-situation/CreateSituation";
import SituationGrid from "./components/main-sections/situation-grid/SituationGrid";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <div className="main-container">
          <Characters />
          <Content>
            <SituationGrid />
          </Content>
        </div>
      </>
    ),
  },
  {
    path: "/create-character",
    element: (
      <>
        <Header />
        <div className="main-container">
          <Characters />
          <Content>
            <CreateCharacter />
          </Content>
        </div>
      </>
    ),
  },
  {
    path: "/create-situation",
    element: (
      <>
        <Header />
        <div className="main-container">
          <Characters />
          <Content>
            <CreateSituation />
          </Content>
        </div>
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
