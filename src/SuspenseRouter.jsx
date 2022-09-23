import { useTransition } from 'react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

// https://github.com/ntucker/anansi/tree/master/packages/router
// https://stackoverflow.com/questions/66039626/react-lazy-suspens-react-router-dont-change-route-until-component-is-fetched
// https://stackoverflow.com/questions/69859509/cannot-read-properties-of-undefined-reading-pathname-when-testing-pages-in

const SuspenseRouter = ({ children, history, ...config }) => {
  const [isPending, startTransition] = useTransition(config);
  const { push, replace, go } = history;

  history.push = (...args) => {
    startTransition(() => {
      push.apply(history, args);
    });
  };
  history.replace = (...args) => {
    startTransition(() => {
      replace.apply(history, args);
    });
  };
  history.go = (...args) => {
    startTransition(() => {
      go.apply(history, args);
    });
  };

  history.isPending = isPending;

  return <HistoryRouter history={history}>{children(isPending)}</HistoryRouter>;
};

export default SuspenseRouter;
