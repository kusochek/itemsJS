function createItemsList(items) {
    const itemContent = document.querySelector('items-scroll');

    const createFlexDivElem = document.createElement('div');
    const createDivElementForName = document.createElement('div');
    const createDivElementForDescription = document.createElement('div');
    const createDivElementForQuality = document.createElement('div');

    createFlexDivElem.classList.add('d-flex bd-highlight');
    createDivElementForName.classList.add('p-2 flex-grow-1 border bd-highlight');
    createDivElementForDescription.classList.add('p-2 bd-highlight border');
    createDivElementForQuality.classList.add('p-2 bd-highlight border');

    return items.map(item => {
        createDivElementForName.innerText = item.name;
        createDivElementForDescription.innerText = item.description;
        createDivElementForQuality.innerText = item.quality;

        itemContent.appendChild(createFlexDivElem);
        createFlexDivElem.appendChild(createDivElementForName);
        createFlexDivElem.appendChild(createDivElementForDescription);
        createFlexDivElem.appendChild(createDivElementForQuality);
    })
}