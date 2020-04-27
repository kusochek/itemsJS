import { items } from './data/items';
import { createItemsList, onSearchInputCase, addClassToTdElem, onClickFilterCase } from './components/items-list-view'

(async() => {
    await createItemsList(items);

    async function searchElement(itemsSearch, val) {
        if(val != '') {
            itemsSearch.forEach(([setVisible, getText]) => {
                setVisible(getText().search(val) === -1);
            })
        } else {
            itemsSearch.forEach(([setVisible]) => {
                 setVisible(false);
            })
        }
    };

    async function filterElement(itemsFilter, val) {
        if(val) {
            itemsFilter.forEach(([setVisible, getText]) => {
                setVisible(getText().search(val) === -1);
            })
        } else {
            itemsSearch.forEach(([setVisible]) => {
                 setVisible(false);
            })
        }

    }

    addClassToTdElem();

    onSearchInputCase(searchElement);

    onClickFilterCase(filterElement);
})();