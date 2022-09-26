import React from 'react';

const ProposalsList = React.lazy(() =>
  import('components/Proposals' /* webpackChunkName: "proposals" */).then(
    (m) => ({
      default: m.ProposalsList,
    })
  )
);

const SessionsList = React.lazy(() =>
  import('components/Proposals').then((m) => ({
    default: m.SessionsList,
  }))
);

export const SessionRoutes = {
  path: 'sessions',
  children: [{ index: true, element: <SessionsList /> }],
};

export const ProposalsRoutes = {
  path: 'proposals',
  children: [{ index: true, element: <ProposalsList /> }],
};
