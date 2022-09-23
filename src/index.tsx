import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserHistory } from 'history';
import { CacheProvider } from 'rest-hooks';
// import './index.css';
import SuspenseRouter from './SuspenseRouter';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import './scss/main.scss';

const history = createBrowserHistory();

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <CacheProvider>
      <SuspenseRouter history={history} timeoutMs={2000}>
        {(isPending: boolean) => <App pending={isPending} />}
      </SuspenseRouter>
    </CacheProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
