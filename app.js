const jokeBox = document.getElementById('joke');
const generateJokeButton = document.getElementById('generate-joke');

const url = 'https://icanhazdadjoke.com/';
const config = { headers: { Accept: 'application/json' } };

const getJoke = async () => {
    try {
        const res = await axios.get(url, config);
        createJoke(res);
    } catch (error) {
        console.log(`Oops! The request failed with error: ${error}`);
    }
};

const createJoke = (res) => {
    const p = document.getElementById('joke-text');
    const joke = res.data.joke;
    p.innerText = joke;
};

generateJokeButton.addEventListener('click', getJoke);
getJoke();
