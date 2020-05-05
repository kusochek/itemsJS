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

        createFlexDivElem.classList.add('blockContent', 'd-flex', 'justify-content-between', 'bd-highlight', 'border', 'shadow', 'p-1', 'mb-3', 'bg-white', 'rounded');
        createDivElementForName.classList.add('p-2', 'col-2');
        createDivElementForDescription.classList.add('p-2', 'col-8');
        createDivElementForQuality.classList.add('quality', 'p-2', 'col-1');

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
    return visible => visible ? item.classList.add('d-lg-none') : item.classList.remove('d-lg-none');
}

function getTextFromName(item) {
    return () => item.innerText.toLowerCase();
}
document.g


function getTextFromQuality(item) {
    return () => item.innerText;
}

function createItemsForSearch() {
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

const itemsForSearch = createItemsForSearch();

export function getItemsForSearch() {
    return itemsForSearch;
}

export function onSearchInputCase(callback) {
    const buttonView = document.querySelector('.btn-secondary');
    const dropDownButton = document.querySelectorAll('.dropdown-item');
    const searchInput = document.querySelector('#search');

    searchInput.oninput = () => {
        let val = searchInput.value.toLowerCase().trim();
        callback(сallback, val);
    }

    dropDownButton.forEach(item => {
        item.onclick = () => {
            const textInButton = item.innerText;
            buttonView.innerText = textInButton;
            callback(callback, textInButton);
        }
    })
}


// export function onClickFilterCase(callback) {
//     const dropDownButton = document.querySelectorAll('.dropdown-item');
//     const buttonView = document.querySelector('.btn-secondary');

//     const items = document.querySelectorAll('.blockContent');
//     const sliceArr = [].slice.call(items);


//     const itemsForFilter = sliceArr.map(item => {
//         const itemChild = item.querySelector('.quality');
//         return [
//             setVisible(item),
//             getTextFromQuality(itemChild),
//         ]
//     })

//     dropDownButton.forEach(item => {
//         item.onclick = () => {
//             const textInButton = item.innerText;
//             buttonView.innerText = textInButton;
//             callback(itemsForFilter, textInButton);
//         }
//     })
// }