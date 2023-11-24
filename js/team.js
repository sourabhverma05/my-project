fetch('./data.json')
  .then(response => response.json())
  .then(data => {

    const showInhtml = data.map((item) => {

      const card = document.getElementById('card');
      const mainDiv = document.createElement('div');
      mainDiv.classList.add('main__div');
      card.appendChild(mainDiv);
      const divElement = document.createElement('div');
      divElement.classList.add('cardDetails');
      mainDiv.appendChild(divElement);
      const cardImage = document.createElement('img');
      cardImage.classList.add('card__image');
      cardImage.src = item?.picture;
      divElement.appendChild(cardImage);
      const nameElement = document.createElement('h3');
      nameElement.classList.add('cardName');
      nameElement.innerHTML = item?.name;
      divElement.appendChild(nameElement);
      const aboutElement = document.createElement('p');
      aboutElement.classList.add('cardAbout');
      aboutElement.innerHTML = item?.about.substring(0, 65);
      divElement.appendChild(aboutElement);
      const buttonDiv = document.createElement('div');
      buttonDiv.classList.add('button');
      divElement.appendChild(buttonDiv);
      const button = document.createElement('button');
      button.classList.add('card__button');
      button.innerHTML = 'View';
      buttonDiv.appendChild(button);

      button.addEventListener("click", function () {
        localStorage.setItem("item", JSON.stringify(item));
        window.location.href = ("http://127.0.0.1:5500/Team_Details.html");
      });
    });
  });