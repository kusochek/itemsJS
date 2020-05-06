import { items } from './data/items';
import { createItemsList, onSearchInputCase, addClassToTdElem, onClickFilterCase, createItemsForSearch } from './view';
import { setName, setQuality, getQuality, getName } from './model';

createItemsList(items);

function searchElement(itemsSearch, nam, qual) {
    itemsSearch.forEach(([setVisible, getTextName, getTextQual]) => {
        if( (getTextName().search(nam) !== -1 || nam === '') && (getTextQual().search(qual) !== -1 || qual === 'Все') ) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    })
}

const itemsForSearch = createItemsForSearch();

function updateItems() {
    const name = getName();
    const quality = getQuality();

    searchElement(itemsForSearch, name, quality);
};

onSearchInputCase((name) => {
    setName(name);
    updateItems();
});
onClickFilterCase((quality) => {
    setQuality(quality);
    updateItems();
});
addClassToTdElem();


    // onClickFilterCase(searchElement);

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
