import { items } from './data/items';
import { createItemsList, onSearchInputCase, addClassToTdElem } from './components/view'

(async() => {
    await createItemsList(items);

    async function searchElement(itemsSearch, nam, qual) {
        itemsSearch.forEach(([setVisible, getTextName, getTextQual]) => {
            if( (getTextName().search(nam) === -1 || nam === '') && (getTextQual().search(qual) === -1 || qual === 'Все') ) {
                setVisible(true)
            }
        })
    }

    // async function searchElement(itemsSearch, val) {
    //     if(val !== 'Все' && val !== '') {
    //         itemsSearch.forEach(([setVisible, getText]) => {
    //             if(getText().search(val) === -1) {
    //                 setVisible(true)
    //             }
    //         })
    //     } else  {
    //         itemsSearch.forEach(([setVisible]) => {
    //             setVisible(false);
    //         })
    //     }
    // };

    addClassToTdElem();

    onSearchInputCase(searchElement);

    // onClickFilterCase(searchElement);
})();
