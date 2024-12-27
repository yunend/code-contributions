function createCard(cardPath) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card col col-6-md col-3-lg bd-grey';
    
    const iframe = document.createElement('iframe');
    iframe.src = cardPath;
    
    cardDiv.appendChild(iframe);
    document.getElementById('cards-container').appendChild(cardDiv);
}

cardFiles.forEach(cardPath => createCard(`contributors/${cardPath}`));