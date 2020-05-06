import { items } from './data/items';
import { onSearchInputCase, addClassToTdElem, onClickFilterCase, createItemsForSearch, getItemsContainer } from './view';
import { setName, setQuality, getQuality, getName } from './model';
import ItemRow from './components/ItemRow'

function init() {
    const container = getItemsContainer();
    const itemRows = items.map(item => {
        const element = new ItemRow(item);

        element.append(container);

        return element;
    });


    function updateItems() {
        const name = getName();
        const quality = getQuality();

        itemRows.forEach(itemRow => {
            const nameFits = itemRow.getName().search(name) !== -1 || name === '';
            const qualityFits = itemRow.getQuality().search(quality) !== -1 || quality === 'Все';

            if (nameFits && qualityFits) {
                itemRow.show()
            } else {
                itemRow.hide();
            }
        })
    };

    onSearchInputCase((name) => {
        setName(name);
        updateItems();
    });
    onClickFilterCase((quality) => {
        setQuality(quality);
        updateItems();
    });
}

init();