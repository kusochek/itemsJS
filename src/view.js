export function getItemsContainer() {
    return document.querySelector('.items-scroll');
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