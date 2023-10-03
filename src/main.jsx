import React from 'react'
import ReactDOM from 'react-dom/client'
import { Main } from './pages/main/component';
import "./index.css";


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Main></Main>
);

