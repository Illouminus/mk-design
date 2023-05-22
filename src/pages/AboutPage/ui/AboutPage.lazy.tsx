import {lazy} from "react";

export const AboutPageLazy = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // DELETE IN PROD
    setTimeout(() => resolve(import('./AboutPage')), 2000)
}));
