import { useState } from 'react';
import { useNavigate } from 'react-router';
import { NetworkError, useController } from 'rest-hooks';

interface SubmitData {
  /**
   * The resource to create
   */
  resource: any;
  /**
   * Any initial form parameters
   */
  initialFormData: {};
  /**
   * A reference to an alert box to show errors
   */
  alertRef: any;
  /**
   * Url to redirect
   */
  redirect?: string;
  /**
   * Primary key to append to the url when redirecting
   */
  redirectKey?: string;
}

/**
 * Create a new resource in an informative way
 *  * Set pending state
 *  * Catch errors
 *  * Redirect
 * @param {SubmitData}
 * @returns
 */
export function useInformativeSubmit({
  resource,
  initialFormData,
  alertRef,
  redirect,
  redirectKey,
}: SubmitData) {
  const [lastFormData, setLastFormData] = useState<Record<string, any>>({
    ...initialFormData,
  });
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<NetworkError>();

  const navigate = useNavigate();
  const { fetch } = useController();

  const onSubmit = ({ formData }: { formData: {} }) => {
    setPending(true);
    setError(undefined);
    setLastFormData(formData);

    fetch(resource.create(), {}, formData)
      .then((response: any) => {
        setTimeout(() => setPending(false), 500);
        if (redirect && redirectKey)
          navigate(`${redirect}/${response[redirectKey]}`);
      })
      .catch((err: NetworkError) => {
        setTimeout(() => {
          setPending(false);
          setError(err);
          setTimeout(() => {
            alertRef.current?.scrollIntoView(true);
          }, 500);
        }, 500);
      });
  };
  return { onSubmit, pending, error, lastFormData };
}
