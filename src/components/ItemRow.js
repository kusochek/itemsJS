export default class ItemRow {
    constructor(itemData) {
        this.data = itemData;

        this.element = this._createDOM();
    }

    _createDOM() {
        const { name, quality, description } = this.data;
        const createFlexDivElem = document.createElement('div');
        const createDivElementForName = document.createElement('div');
        const createDivElementForDescription = document.createElement('div');
        const createDivElementForQuality = document.createElement('div');

        createFlexDivElem.classList.add('blockContent', 'row', 'justify-content-between', 'bd-highlight', 'border', 'shadow', 'p-1', 'mb-3', 'bg-white', 'rounded');
        createDivElementForName.classList.add('p-2', 'col-sm-9', 'col-md-4', 'col-lg-2');
        createDivElementForDescription.classList.add('p-2', 'col-sm-9','col-md-4','col-lg-8');
        createDivElementForQuality.classList.add('quality', 'p-2', 'col-sm-9','col-md-4','col-lg-1');

        createDivElementForName.innerText = name;
        createDivElementForDescription.innerHTML = description;
        createDivElementForQuality.innerText = quality;

        createFlexDivElem.appendChild(createDivElementForName);
        createFlexDivElem.appendChild(createDivElementForDescription);
        createFlexDivElem.appendChild(createDivElementForQuality);

        return createFlexDivElem;
    }

    append(rootElement) {
        rootElement.appendChild(this.element);
    }

    show() {
        this.element.classList.remove('d-none');
    }

    hide() {
        this.element.classList.add('d-none');
    }

    getName() {
        return this.data.name.toLowerCase();
    }

    getQuality() {
        return this.data.quality;
    }
    
}