const jokesList = document.querySelector('#jokesList');
const jokesCategories = document.querySelector('#jokesCategories');

fetch('https://api.chucknorris.io/jokes/categories')
    .then(data => data.json())
    .then(categories => {categories.forEach(category => {
      const option = document.createElement('option');

      
      // console.log(option)
      option.value = category;
      option.text = category;
      document.querySelector('#jokesCategories').appendChild(option);
    });
  });
      
    jokesCategories.addEventListener('change', () => {
        const category = jokesCategories.value;
        const url = `https://api.chucknorris.io/jokes/random?category=${category}`;

        const categoryJoke = document.createElement('li');
        const nameCategory = document.createElement('p');
        const jokeText = document.createElement('p');
        const removeButton = document.createElement('button');
      
fetch(url)
      .then(data => data.json())
      .then(joke => {

        nameCategory.innerHTML = `Category: <b>${category}</b>`;
        jokeText.textContent = joke.value;
        removeButton.textContent = 'Remove joke';

        let selectedOption = document.querySelector('#jokesCategories option:checked');
        selectedOption.disabled = true;

        removeButton.addEventListener('click', () => {
          categoryJoke.remove();
          
          selectedOption.disabled = false;       
        });

        console.log('click')

        categoryJoke.append(nameCategory, jokeText, removeButton);
        jokesList.appendChild(categoryJoke);
        

      });
      
  });
