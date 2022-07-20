import { nav } from './nav';
import { body } from './body';
import { footer } from './footer';

const pageLoad = function() {
    nav();
    body();
    footer();
}

export { pageLoad };