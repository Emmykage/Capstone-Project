const menuBtn = document.querySelector('.menu-bar');

function showMenu() {
  const logo = document.querySelector('.mobile .logo');
  const links = document.querySelector('.links-2');
  const toggle = document.querySelector('.open');

  if (links.style.left === '-120%') {
    links.style.left = '0';
    toggle.classList.add('fa-times');
    toggle.classList.remove('fa-bars');
    logo.style.display = 'none';
  } else {
    links.style.left = '-120%';
    toggle.classList.add('fa-bars');
    toggle.classList.remove('fa-times');
    logo.style.display = 'block';
  }
}
menuBtn.addEventListener('click', showMenu);

// function showMenu() {

//   const link = document.querySelector('nav .links-2');
//   const toggle = document.querySelector('.open');
//   const logo = document.querySelector('.logo a');

//   if (link.style.display === 'block') {
//     link.style.display = 'none';
//     toggle.classList.remove('fa-times');
//     toggle.classList.add('fa-bars');
//     logo.style.display = 'block';
//   } else {
//     link.style.display = 'block';
//     toggle.classList.remove('fa-bars');
//     toggle.classList.add('fa-times');
//     logo.style.display = 'none';
//   }
// }

const speakers = [{
  name: 'Engr Philip Coleman',
  caption: 'MIT Professor of Robotics and Artificial intellegience',
  info: 'philip has worked in the field of robotic and artificial intelligence for over 30 years and published several studies over the years',
  image: './images/speakers/Enoch-F-Sam.jpg',
}, {
  name: 'stacey bent',
  caption: 'Chemical Engineering, TomKat Center for Sustainable Energy',
  info: 'philip has worked in the field of robotic and artificial intelligence for over 30 years and published several studies over the years',
  image: './images/speakers/stacey-bent.jfif',
},
{
  name: 'Sarah Billington',
  caption: 'UPS Foundation Professor and Senior Fellow at the Woods Institute for the Environment',
  info: 'We are interested in how building management systems can be extended beyond providing energy savings, thermal comfort, and security to support and maintain a broader set of human ',
  image: './images/speakers/sarah-billington-1600-1.jpg',
},
{
  name: 'Prof ANDREI G. FEDOROV',
  caption: 'Petit Institute for Bioengineering and Bioscience',
  info: 'He is a mechanical engineering professor at Georgia Tech, investigates C02 capture and utilization among other research topics',
  image: './images/speakers/ANDREI-FEDOROV.jpg',
},
{
  name: 'Robert Souliere',
  caption: 'MIT Professor of Robotics and Artificial intellegience',
  info: 'Experienced in renewable energy and automotive with over eight years of experience in the automotive industry',
  image: './images/speakers/robert_souliere.jpg',
},
{
  name: 'DANIEL M. KAMMEN',
  caption: 'Professor in the Energy and Resources Group Energy and Resources Group (ERG)',
  info: 'Kammen is the founding director of the Renewable and Appropriate Energy Laboratory (RAEL), Co-Director of the Berkeley Institute of the Environment, and Director of the Transportation Sustainability Research Center.',
  image: './images/speakers//ANDREI-FEDOROV.jpg',
},
];

const boardO = document.getElementById('speaker-div');
const header = document.createElement('h2');
const newdiv = document.createElement('div');

header.innerHTML = 'Featured Speakers';
boardO.appendChild(header);
header.classList.add('center');
boardO.appendChild(newdiv);
newdiv.classList.add('row');

for (let i = 0; i < speakers.length; i += 1) {
  const coldiv = document.createElement('div');
  const speakerImg = document.createElement('img');
  const colInner = document.createElement('div');
  const h6 = document.createElement('h6');
  const smallDetail = document.createElement('small');
  const hr = document.createElement('hr');
  const paragraph = document.createElement('p');

  coldiv.classList.add('col');
  newdiv.appendChild(coldiv);

  coldiv.appendChild(speakerImg);
  speakerImg.setAttribute('alt', speakers[i].name);

  speakerImg.src = speakers[i].image;
  coldiv.appendChild(colInner);
  colInner.classList.add('col-in');

  colInner.appendChild(h6);
  colInner.appendChild(smallDetail);
  colInner.appendChild(hr);

  h6.innerHTML = speakers[i].name;
  smallDetail.innerHTML = `<em>${speakers[i].caption}</em>`;

  colInner.appendChild(paragraph);
  paragraph.innerHTML = speakers[i].info;
}
const btn = document.createElement('button');
boardO.appendChild(btn);
btn.setAttribute('type', 'button');
btn.innerHTML = 'MORE  <i class="fa arrow fa-arrow-down"></i>';

function showMore() {
  const numbers = document.querySelectorAll('.col');

  for (let i = 2; i < numbers.length; i += 1) {
    if (numbers[i].style.display === 'none') {
      numbers[i].style.display = 'flex';
      btn.innerHTML = 'LESS <i class="fa arrow fa-arrow-down"></i>';
    } else {
      numbers[i].style.display = 'none';
      btn.innerHTML = 'MORE <i class="fa arrow fa-arrow-up"></i>';
    }
  }
}
btn.addEventListener('click', showMore);
