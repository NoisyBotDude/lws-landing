import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: 'u007fwie',
    dataset: 'production',
    apiVersion: '2025-10-21',
    useCdn: true,
});