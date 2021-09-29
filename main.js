
const button = document.querySelector('#button');

function clickBtn() {
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then(res => {
        console.log(res.data)
        for(let i=0; i < res.data.length; i++) {
            let residents = i[9]
            return residents
        }
    })
    .catch(err => {console.log(err)})
};

document.addEventListener('click', clickBtn());

