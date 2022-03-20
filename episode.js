fetch('https://rickandmortyapi.com/api/episode/24,3')
.then((response) => {
    return response.json();
}).then((jsonParsed) => {
    const divEp = document.querySelector('#episodio')

    jsonParsed.forEach(element => {
        const name = element.name;
        const ep = element.episode;

        createDivEp(name, ep, divEp)
    })
    console.log(jsonParsed)
})

function createDivEp(name, ep, divMain) {
    const dPai = document.createElement('div');
    const dFilho = document.createElement('div')
    const textName = document.createElement('text');
    const br = document.createElement('br')
    const textEp = document.createElement('text');

    textName.textContent = name;
    textEp.textContent = ep;

    dFilho.appendChild(textName);
    dFilho.appendChild(br)
    dFilho.appendChild(textEp);
    dPai.appendChild(dFilho);
    divMain.appendChild(dPai)

    dPai.classList.add("episodio")

}
