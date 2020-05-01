import { items } from './data/items';
import { createItemsList, onSearchInputCase, addClassToTdElem, onClickFilterCase } from './components/items-list-view'

(async() => {
    await createItemsList(items);

    async function searchElement(itemsSearch, val) {
        if(val) {
            itemsSearch.forEach(([setVisible, getText]) => {
                if(getText().search(val) === -1) {
                    setVisible(true)
                }
            })
        } else  {
            itemsSearch.forEach(([setVisible]) => {
                setVisible(false);
            })
        }
    };

    addClassToTdElem();

    onSearchInputCase(searchElement);

    onClickFilterCase(searchElement);
})();
