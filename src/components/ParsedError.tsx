import { forwardRef, useEffect, useState } from 'react';
import { NetworkError } from 'rest-hooks';
import { Alert } from 'react-bootstrap';

export function ParsedError({ error }: { error: NetworkError }) {
  const [json, setJson] = useState<Record<string, any>>({});

  useEffect(() => {
    setJson({});
    error.response
      ?.clone()
      .json()
      .then((jsonTmp) => setJson(jsonTmp))
      .catch((err) => console.log('Couldnt load json', err));
  }, [error]);

  if (error.status === 422) {
    const errors =
      Array.isArray(json.detail) &&
      json.detail?.map((error: Record<string, any>) => (
        <li key={error.loc.join('.')}>
          {error.loc.join('.')}: {error.msg}
        </li>
      ));

    return <span>Validation error(s): {errors}</span>;
  }

  if (json.detail) {
    return (
      <span>
        {error.message} &raquo; {json.detail}
      </span>
    );
  }
  return <span>An error occured: {error.message}</span>;
}

const WrappedParsedError = forwardRef(
  ({ error }: { error?: NetworkError }, ref: any) => {
    return (
      <>
        {error !== undefined && (
          <Alert variant="danger" ref={ref}>
            <ParsedError error={error} />
          </Alert>
        )}
      </>
    );
  }
);

export default WrappedParsedError;
