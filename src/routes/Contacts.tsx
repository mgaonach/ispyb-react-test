import LabContactList from 'components/LabContacts/LabContactList';
import ViewLabContact from 'components/LabContacts/ViewLabContact';
import CreateLabContact from 'components/LabContacts/CreateLabContact';

const ContactRoutes = {
  path: 'contacts',
  children: [
    { index: true, element: <LabContactList /> },
    { path: 'new', element: <CreateLabContact /> },
    { path: 'view/:id', element: <ViewLabContact /> },
  ],
};

export default ContactRoutes;
