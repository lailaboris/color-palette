const baseColors = [ 
    '#9e0142',
    '#d53e4f',
    '#f46d43',
    '#fdae61',
    '#fee08b',
    '#abdda4',
    '#66c2a5',
    '#3288bd',
    '#5e4fa2'
  ];




  createTiles()



// denne funktion skal skabe dom elementer til styling så du kan få det resultat, din underviser hat vist dig.
function createTiles(){

  const myAppElement=document.getElementById("app");

  const colorHeadline = document.createElement('h1');
  colorHeadline.innerText = 'Color Palette';
  myAppElement.appendChild(colorHeadline);



  const myColorElement = document.createElement('section');
  myColorElement.id="color"

  myAppElement.appendChild(myColorElement);


//du kan bruge denne array funktion til at loope gennem din array for at skabe dom elementer til hver farve.
 baseColors.forEach(color => {
      const colorBox = document.createElement('div');
      colorBox.classList.add('color-box');
      colorBox.style.backgroundColor = color;
      colorBox.textContent = color;
      myColorElement.appendChild(colorBox);
      
      });
  }
