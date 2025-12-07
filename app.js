console.log('Funguju!');

const items = document.querySelectorAll('li');
        
const textPozpatku = (text) => {
    return text.split('').reverse().join('');
};

items.forEach ((li) => {
    const raw = li.textContent.trim().toLowerCase();   //text v odrážce - odstraním mezery na začátku a konci, převedu na malá písmena
    const text = raw.replace(/\s+/g, ""); // odstranění mezer uvnitř slovních spojení

    if (text === textPozpatku(text)) {  //pokud jde o palindrom, přidej mu třídu 'palindrom'
        li.classList.add('palindrom');
  }
});


    // textPozpatku('Ahoj světe') // 'etěvs johA'
    // textPozpatku('Kajak') // 'kajaK'