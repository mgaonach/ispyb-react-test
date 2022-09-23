import { useState } from 'react';
import { useNavigate } from 'react-router';
import { NetworkError, useController } from 'rest-hooks';

interface SubmitData {
  resource: any;
  initialFormData: {};
  alertRef: any;
  redirect?: string;
  redirectKey?: string;
}

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
