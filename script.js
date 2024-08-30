let phrases = [
    { text: 'send your bestie a funny gif', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
    { text: 'browse flight ticket offers', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
    { text: 'find out what rappers are singing about', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
    { text: 'start a vlog', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
    { text: 'sort all your books by color', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
    { text: 'google San Francisco salaries', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
    { text: 'read the news and get stressed', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
    { text: 'listen to sad music and remember all the things that went wrong in your life', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
    { text: 'find a random show and watch the whole season', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
    { text: 'check your messengers', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  let delayInMilliseconds = 1000;

  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    // smoothly(image, 'src', randomElement.image);
    image.src = randomElement.image;
    smoothly(phrase, 'textContent', randomElement.text);
    
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });
  


 setTimeout(function(){
    for (let i=0; i<=2; i=i+1) {
        smoothly(phrase, 'textContent', phrases[i].text);
        smoothly(image, 'src', phrases[i].image);
    }
 },delayInMilliseconds); 