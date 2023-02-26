import { Fragment, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./layouts/layoutClient/Index";
import Login from "./pages/Login";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Index />}>
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
