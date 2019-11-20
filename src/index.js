import React, { Suspense, Fragment } from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from './components/ErrorBoundary'
 
import "./styles.css";
import Avatars from "./components/Avatars"
import { fetchData } from "./api";

const resource = fetchData()

function App() {
  
  return (
    <Fragment>
      <h1>Fetch random user</h1>
      <ErrorBoundary>
        <Suspense fallback={<p>loading....</p>}>
          <Avatars resource={resource}/>
        </Suspense>
      </ErrorBoundary>
    </Fragment>
  );
}

const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootEl)
const root = ReactDOM.createRoot(rootElement)
root.render(<App />)
