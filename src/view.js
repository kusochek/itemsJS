export function addClassToTdElem() {
    const tdList = document.querySelectorAll('td');
    tdList.forEach(item => item.classList.add('pr-3'));
}

export function createItemsList(items) {
    const itemContent = document.querySelector('.items-scroll');

    return items.forEach(item => {
        const createFlexDivElem = document.createElement('div');
        const createDivElementForName = document.createElement('div');
        const createDivElementForDescription = document.createElement('div');
        const createDivElementForQuality = document.createElement('div');

        createFlexDivElem.classList.add('blockContent', 'row', 'justify-content-between', 'bd-highlight', 'border', 'shadow', 'p-1', 'mb-3', 'bg-white', 'rounded');
        createDivElementForName.classList.add('p-2', 'col-sm-9', 'col-md-4', 'col-lg-2');
        createDivElementForDescription.classList.add('p-2', 'col-sm-9','col-md-4','col-lg-8');
        createDivElementForQuality.classList.add('quality', 'p-2', 'col-sm-9','col-md-4','col-lg-1');

        createDivElementForName.innerText = item.name;
        createDivElementForDescription.innerHTML = item.description;
        createDivElementForQuality.innerText = item.quality;

        itemContent.appendChild(createFlexDivElem);
        createFlexDivElem.appendChild(createDivElementForName);
        createFlexDivElem.appendChild(createDivElementForDescription);
        createFlexDivElem.appendChild(createDivElementForQuality);
    })
}

function setVisible(item) {
    return visible => visible ? item.classList.remove('d-none') : item.classList.add('d-none');
}

function getTextFromName(item) {
    return () => item.innerText.toLowerCase();
}


function getTextFromQuality(item) {
    return () => item.innerText;
}

export function createItemsForSearch() {
    const items = document.querySelectorAll('.blockContent');
    const sliceArr = [].slice.call(items);

    return sliceArr.map(item => {
        const itemChildName = item.querySelector('.p-2', '.col-2');
        const itemChildQual = item.querySelector('.quality');
        return [
            setVisible(item),
            getTextFromName(itemChildName),
            getTextFromQuality(itemChildQual),
        ]
    })
}

export function onSearchInputCase(callback) {
    const searchInput = document.querySelector('#search');

    searchInput.oninput = () => {
        let val = searchInput.value.toLowerCase().trim();
        callback(val);
    }
}


export function onClickFilterCase(callback) {
    const dropDownButton = document.querySelectorAll('.dropdown-item');
    const buttonView = document.querySelector('.btn-secondary');

    dropDownButton.forEach(item => {
        item.onclick = () => {
            const textInButton = item.innerText;
            buttonView.innerText = textInButton;
            callback(textInButton);
        }
    })
}