import { items } from './data/items';
import { createItemsList, getItemsForSearch } from './components/items-list-view'

(async() => {
    await createItemsList(items);

    async function searchElement(itemsSearch, val) {
        if(val != '') {
            itemsSearch.forEach(item => {
                const child = item.querySelector('.p-2', '.col-2');
                if(child.innerText.toLowerCase().search(val) === -1) {
                    item.classList.add('d-lg-none');
                } else { 
                    item.classList.remove('d-lg-none');
                }
            })
        } else {
            itemsSearch.forEach(item => {
                 item.classList.remove('d-lg-none');
            })
        }
    };

    await getItemsForSearch(searchElement);
})();
