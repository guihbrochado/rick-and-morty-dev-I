fetch('https://rickandmortyapi.com/api/character/9,17')
.then((response) => {
    return response.json();
}).then((jsonParse) => {
    const divcharacter = document.querySelector('#personagem');

    jsonParse.forEach(element => {
        const img = element.image;
        const name = element.name;
        const status = element.status;
        const location = element.location.name;
        
        createDivCharacter(img, name, status, location, divcharacter);
    })
    console.log(jsonParse)
})

function createDivCharacter(image, nameCharacter, status, characterLocation, divMain) {
    const dPai = document.createElement('div');
    const dFilho = document.createElement('div');
    const tName = document.createElement('text');
    const br = document.createElement('br');
    const tStatus = document.createElement('text');
    const br0 = document.createElement('br');
    const tLocation = document.createElement('text');
    const img = document.createElement('img');

    tName.textContent = nameCharacter;
    tStatus.textContent = status;
    tLocation.textContent = characterLocation;
    img.src = image;

    dFilho.appendChild(img);
    dFilho.appendChild(tName);
    dFilho.appendChild(br);
    dFilho.appendChild(tStatus);
    dFilho.appendChild(br0);
    dFilho.appendChild(tLocation);
    dPai.appendChild(dFilho);
    divMain.appendChild(dPai);

    dPai.classList.add("personagem")
}