import { NetworkErrorBoundary, NetworkError } from 'rest-hooks';

function ErrorPageFactory({ message }: { message?: string }) {
  return function ({ error }: { error: NetworkError }) {
    console.log('Error Page', error);
    return error.status === 404 ? (
      <span>{message}</span>
    ) : (
      <span>An error occured: {error.message}</span>
    );
  };
}

export default function NetworkErrorPage({
  children,
  message,
}: {
  children: JSX.Element;
  message?: string;
}) {
  return (
    <NetworkErrorBoundary fallbackComponent={ErrorPageFactory({ message })}>
      {children}
    </NetworkErrorBoundary>
  );
}
