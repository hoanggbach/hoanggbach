var Ptg1_arrays = [
    {
        name: "One Pillar Pagoda",
        image:"Inside/img/Ptg/onepillarpagoda.jpg",
        address: "Ha Noi",
    },
    {
        name: "Ho Chi Minh Mausoleum",
        image:"Inside/img/Ptg/langbac.jpg",
        address: "Ha Noi",
    },
    {
        name: "Hue ancient capital",
        image:"Inside/img/Ptg/codohue.png",
        address: "Hue",
    },
    {
        name: "Hoi An Ancient Town",
        image:"Inside/img/Ptg/hoian.jpg",
        address: "Hoi An",
    },
    {
        name: "Ha Long Bay",
        image:"Inside/img/Ptg/halongbay.jpg",
        address: "Ha Long",
    },
    {
        name: "Phong Nha Cave",
        image:"Inside/img/Ptg/cave.jpeg",
        address: "Quang Binh",
    },
    {
        name: "Landmark 81 tower",
        image:"Inside/img/Ptg/lm81.jpeg",
        address: "Ho Chi Minh City",
    },
    {
        name: "Phu Quoc Island",
        image:"Inside/img/Ptg/phuquoc.jpg",
        address: "Phu Quoc Island",
    },
];

function createHTML(Ptg1){
    return `
        <div class="col-3">
            <div class="p-2 holder">
                <img src="${Ptg1.image}" alt="" class="places-pic">
                <h4>${Ptg1.name}</h4>
                <p>${Ptg1.address}</p>
            </div>
        </div>
    `;
}

function renderPtg1() {
    const listElement = document.getElementById('Ptg1');
    listElement.innerHTML = Ptg1_arrays.map(createHTML).join('');
}