function createCard(contributor) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card col col-6-md col-3-lg bd-grey';
    
    const iframe = document.createElement('iframe');
    iframe.src = `contributors/${contributor}`;
    iframe.title = contributor
    
    cardDiv.appendChild(iframe);
    document.getElementById('cards-container').appendChild(cardDiv);
}

contributorFiles.forEach(contributor => createCard(contributor));