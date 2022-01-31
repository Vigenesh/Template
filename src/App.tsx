import * as React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import CreateTemplate from "./components/CreateTemplate";
import Header from './components/Header'
import EditTemplate from "./components/EditTemplate"
import ViewTemplate from "./components/ViewTemplate"
import { CtreateTemplate } from "./pages";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="template/create-template" element={<CreateTemplate />} />
        <Route path="template/edit-template" element={<EditTemplate />} />
        <Route path="template/view-template" element={<ViewTemplate />} />
        <Route path="/temp" element={<CtreateTemplate/>} />
      </Routes>
    </>
  );
};

export default App;
