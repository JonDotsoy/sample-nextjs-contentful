import { createClient } from 'contentful';
import getConfig from 'next/config';

export const { publicRuntimeConfig } = getConfig();

export const client = createClient({
  accessToken: publicRuntimeConfig.contentful.accessToken,
  space: publicRuntimeConfig.contentful.space,
  environment: publicRuntimeConfig.contentful.environment,
});
