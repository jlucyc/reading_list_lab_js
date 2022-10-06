document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  function handleFormSubmit(){
    event.preventDefault();
    const resultParagraph = document.querySelector('#reading-list');
    // resultParagraph.textContent = `Author: ${event.target.author.value}`
    const newListItem = document.createElement('li');
    newListItem.textContent = `Title: ${event.target.title.value} Author: ${event.target.author.value} Category: ${event.target.category.value}`;
    newListItem.classList.add('Author');

    const list = document.querySelector('ul');
    list.appendChild(newListItem);

    document.getElementById('new-item-form').reset();
  };


})
