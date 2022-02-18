import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import 'App.css';
import Header from 'components/Header';

import LabContactList from 'components/LabContacts/LabContactList';
import ViewLabContact from 'components/LabContacts/ViewLabContact';
import CreateLabContact from 'components/LabContacts/CreateLabContact';

import SamplesList from 'components/Samples/SamplesList';

import EventsList from 'components/Events/EventsList';

function Loading() {
  return <div>Loading...</div>;
}

function Home() {
  return <div>Home</div>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Loading />}>
        <section className="App-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="events" element={<EventsList />} />

            <Route path="samples" element={<SamplesList />} />

            <Route path="contacts" element={<LabContactList />} />
            <Route path="contacts/view/:id" element={<ViewLabContact />} />
            <Route path="contacts/new" element={<CreateLabContact />} />
          </Routes>
        </section>
      </Suspense>
    </div>
  );
}

export default App;
