const btn = document.getElementById('btn');
const word = document.getElementById('word');
const get = [];

btn.addEventListener('click', () => {
  getWord();
});

const getWord = () => {
  const requests = [];

  if(!word) {
    for (let i = 0; i < 3; i++) {
      const box = 'box' + (i + 1);
      console.log(box);
      document.getElementById(box).innerText = 'Loading...';
    }
  }

  for (let i = 0; i < 3; i++) {
    requests.push(
      axios.get('https://random-word-api.herokuapp.com/word')
        .then(response => {
          console.log(response);
          console.log(response.data);
          get.push(response.data);
        })
    );
  }


  Promise.all(requests)
    .then(words => {

      if(word) word.innerText = get[0];

      for (let i = 0; i < words.length; i++) {
        const box = 'box' + (i + 1);
        document.getElementById(box).innerText = get[i];
      }
    })
    .catch(error => {
      console.log(error);
    });
}

const email = document.getElementById('email');
const password = document.getElementById('pw');

const Login = () => {
  axios.post('https://reqres.in/api/login', {
    email: email.value,
    password: password.value
  }).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err);
  })
}


//'https://random-word-api.herokuapp.com/word'
//'https://reqres.in/api/login'
