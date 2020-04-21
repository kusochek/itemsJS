export function createItemsList(items) {
    const itemContent = document.querySelector('.items-scroll');

    return items.forEach(item => {
        const createFlexDivElem = document.createElement('div');
        const createDivElementForName = document.createElement('div');
        const createDivElementForDescription = document.createElement('div');
        const createDivElementForQuality = document.createElement('div');

        createFlexDivElem.classList.add('d-flex', 'justify-content-between', 'bd-highlight', 'border', 'shadow', 'p-1', 'mb-3', 'bg-white', 'rounded');
        createDivElementForName.classList.add('p-2', 'col-2');
        createDivElementForDescription.classList.add('p-2', 'col-8');
        createDivElementForQuality.classList.add('p-2', 'col-1');

        createDivElementForName.innerText = item.name;
        createDivElementForDescription.innerHTML = item.description;
        createDivElementForQuality.innerText = item.quality;

        itemContent.appendChild(createFlexDivElem);
        createFlexDivElem.appendChild(createDivElementForName);
        createFlexDivElem.appendChild(createDivElementForDescription);
        createFlexDivElem.appendChild(createDivElementForQuality);
    })
}

export function searchElement() {
    document.querySelector('#search').oninput = function() {
        let val = this.value.trim();
        const items = document.querySelectorAll('.d-flex');

        if(val != '') {
            items.forEach(item => {
                if(item.innerText.search(val) === -1) {
                   return item.classList.add('d-lg-none');
                } else { 
                   return item.classList.remove('d-lg-none');
                }
            })
        } else {
            items.forEach(item => {
                return item.classList.remove('d-lg-none');
            })
        }
    }
}