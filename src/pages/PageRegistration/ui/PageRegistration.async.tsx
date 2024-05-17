import { lazy } from 'react';

export const PageRegistrationAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-expect-error imitation of loading the page
            setTimeout(() => resolve(import('./PageRegistration')), 1500);
        }),
);
