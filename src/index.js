import { items } from './data/items';
import { createItemsList, searchElement } from './components/items-list-view'

(async() => {
    await createItemsList(items);
    await searchElement();
})();
