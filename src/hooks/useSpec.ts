import { useResource } from 'rest-hooks';
import { OpenAPIResource } from 'api/resources/OpenAPI';

export function useSpec() {
  return useResource(OpenAPIResource.detail(), { id: '' });
}

export function useSchema(schema: string, title: string) {
  const spec = useSpec();
  return {
    $ref: `#/components/schemas/${schema}`,
    components: {
      ...spec.components,
    },
    title: title,
  };
}
