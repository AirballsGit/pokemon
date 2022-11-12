const h1 = document.querySelector('h1');
const btn = document.querySelector('button');
btn.addEventListener('click', async function getPokemon() {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    const info = res.data.results;
    console.log('***************POKEMONS******************');
    let newArr = [];
    for(let i of info){
        console.log(i.name);
        newArr.push(i.name.toUpperCase());
    }
    const getPoke = pick(newArr);
    h1.innerText = getPoke;
    newArr = [];
    console.log('*************BERRIES: *******************')
    const nextChars = await axios.get('https://pokeapi.co/api/v2/berry/'); 
    const berries = nextChars.data.results;
    for(let b of berries){
        console.log(b.name.toUpperCase());
    }
})


function pick(arr){
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
};