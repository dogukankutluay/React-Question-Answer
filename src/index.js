import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import 'alertifyjs/build/css/alertify.min.css';

import { BrowserRouter} from "react-router-dom";


ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <App />
      
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);

reportWebVitals();
