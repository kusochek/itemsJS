import { items } from './data/items';
import { createItemsList, getItemsForSearch } from './components/items-list-view'

(async() => {
    await createItemsList(items);

    function searchElement(items) {
        let val = this.value.toLowerCase().trim();

        if(val != '') {
            items.forEach(item => {
                const child = item.querySelector('.p-2', '.col-2');
                if(child.innerText.toLowerCase().search(val) === -1) {
                    item.classList.add('d-lg-none');
                } else { 
                    item.classList.remove('d-lg-none');
                }
            })
        } else {
            items.forEach(item => {
                 item.classList.remove('d-lg-none');
            })
        }
    };
    
    await getItemsForSearch(searchElement);
})();
