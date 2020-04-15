import items from './data/items';
import createItemsList from './components/items-list-view'

(async() => {
    await createItemsList(items);
})();
