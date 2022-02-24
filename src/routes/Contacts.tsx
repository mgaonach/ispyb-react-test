import React from 'react';

const LabContactList = React.lazy(() =>
  import('components/LabContacts' /* webpackChunkName: "contacts" */).then(
    (m) => ({
      default: m.LabContactList,
    })
  )
);

const ViewLabContact = React.lazy(() =>
  import('components/LabContacts').then((m) => ({
    default: m.ViewLabContact,
  }))
);

const CreateLabContact = React.lazy(() =>
  import('components/LabContacts').then((m) => ({
    default: m.CreateLabContact,
  }))
);

const ContactRoutes = {
  path: 'contacts',
  children: [
    { index: true, element: <LabContactList /> },
    { path: 'new', element: <CreateLabContact /> },
    { path: 'view/:id', element: <ViewLabContact /> },
  ],
};

export default ContactRoutes;
