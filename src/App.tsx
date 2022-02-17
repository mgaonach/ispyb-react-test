import { Suspense } from 'react';
import {NetworkErrorBoundary } from 'rest-hooks'
import { Routes, Route } from 'react-router-dom';

import 'App.css';
import Header from 'components/Header';
import LabContactList from 'components/LabContacts/LabContactList';
import ViewLabContact from 'components/LabContacts/ViewLabContact';
import CreateLabContact from 'components/LabContacts/CreateLabContact';

function Loading() {
  return <div>Loading...</div>;
}

function Home() {
  return <div>Home</div>;
}

function ErrorPage(props: any) {
  console.log("Error PAge", props)
  return (<span>An error occured</span>)
}

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Loading />}>
      <NetworkErrorBoundary fallbackComponent={ErrorPage}>
        <section className="App-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contacts" element={<LabContactList />} />
            <Route path="contacts/view/:id" element={<ViewLabContact />} />
            <Route path="contacts/new" element={<CreateLabContact />} />
          </Routes>
        </section>
        </NetworkErrorBoundary>
      </Suspense>
    </div>
  );
}

export default App;
