document.getElementById('addSectionBtn').addEventListener('click', addSection);

function addSection() {
    const section = document.createElement('section');

    const title = prompt('日記のタイトルを入力してください:');
    const text = prompt('日記の文章を入力してください:');
    
    const photo1Url = prompt('写真1のURLを入力してください :');
    const photo2Url = prompt('写真2のURLを入力してください (省略可能):');

    section.innerHTML = `
        <h2>${title}</h2>
        <p>${text}</p>
        <div class="photos">
            ${photo1Url ? `<img src="${photo1Url}" alt="Photo 1">` : ''}
            ${photo2Url ? `<img src="${photo2Url}" alt="Photo 2">` : ''}
        </div>
    `;

    document.getElementById('diary').appendChild(section);
}
