const quotes1 = [
  "Being inspired is awesome. Those moments when you feel all is just right with the world. GREAT. Now go forth and keep conquering…!!!",
  "The difference between ordinary and extraordinary is that little bit …extra.",
  "Logic will get you from A to B. Imagination will take you everywhere.",
  "Your time is limited, so do not waste it.",
  "Believe you can and you are halfway there.",
  "Only people who are crazy enough to think they can change the world, are the ones who usually do.",
  "The only way to do great work is to love what you do.",
  "If you want to live a happy life, tie it to a goal, not to people or things.",
  "Channel your inspiration into your creativity and you will always have a reason to feel inspired.",
  "You are ONE in a billion. There is only YOU!",
];

const quotes2 = [
  "Done is better than perfect.",
  "Anyone who has never made a mistake has never tried anything new.",
  "Old ways will not open new doors.",
  "Just take it one day at a time.",
  "No one said it was gonna be easy, but it will get better with each day you keep trying.",
  "Mistakes are signposts to try something different.",
  "To ask the right question is already half the solution to a problem.",
  "Always try to finish what you started.",
  "Sometimes, a BOLD MOVE is what is required, to push through a block.",
  "You can't have a rainbow without the rain",
  "Remember.…it is not done until it ships..!!",
];

const quotes3 = [
  "It's okay to be scared. Being scared means you are about to do something really, really brave",
  "Thinking will not overcome fear but action will.",
  "Fear is but a state of mind. Control your mind. Control your fears.",
  "We often fear the things we want the most.",
  "Do the things that scares you the most and the fear will disappear.",
  "Never be afraid to sit and think a while on your fears.",
  "You are stronger than your fears.",
  "I have never known any distress that an hour's reading did not relieve.",
  "Remember, on the other side of fear, is FREEDOM.",
  "Just take it one day at a time.",
];

const quotes4 = [
  "YOU ARE WORTHY of feeling HAPPY.",
  "You don't have to be productive to see value in yourself.",
  "Everything will work out PERFECT for YOU, and you will watch it unfold.",
  "You have made it this far... don't stop now.",
  "Be resilient in the face of any challenge.",
  "You are STRONG. You can OVERCOME any obstacle in your life.",
  "The littlest move is better than no move. Keep moving. You will get there!",
  "Rememebr that great work is done only by people who are not afraid to be great",
  "Crying is not a sign of weakness",
  "Never suffer in silence. Reach out to someone.",
];

const quotes5 = [
  "To increase your happiness, make others happy.",
  "Happiness is Thankfulness.",
  "You create happiness by accepting every part of yourself.",
  "Following your joy reveals the path to your best life.",
  "YOU have the POWER to shape your reality.",
  "YOU ARE WORTHY of feeling happy.",
  "You are in charge of your energy, and you are the only one who can choose how you feel.",
  "May the little things of life, let you enjoy 'happily ever after' on a daily basis.",
  "If you want happiness for a lifetime—help someone else.",
  "Happiness lies in the joy of achievement, in the thrill of creative effort.",
];

function displayQuote() {
  hideAllQuotes();
  const randomIndex = Math.floor(Math.random() * quotes1.length);
  document.getElementById("quote1").innerHTML = quotes1[randomIndex];
  document.getElementById("quote1").classList.add("show");
}

function displayQuote2() {
  hideAllQuotes();
  const randomIndex = Math.floor(Math.random() * quotes2.length);
  document.getElementById("quote2").innerHTML = quotes2[randomIndex];
  document.getElementById("quote2").classList.add("show");
  // document.getElementById("quote2").classList.remove("show");
}

function displayQuote3() {
  hideAllQuotes();
  const randomIndex = Math.floor(Math.random() * quotes3.length);
  document.getElementById("quote3").innerHTML = quotes3[randomIndex];
  document.getElementById("quote3").classList.add("show");
}

function displayQuote4() {
  hideAllQuotes();
  const randomIndex = Math.floor(Math.random() * quotes4.length);
  document.getElementById("quote4").innerHTML = quotes4[randomIndex];
  document.getElementById("quote4").classList.add("show");
}

function displayQuote5() {
  hideAllQuotes();
  const randomIndex = Math.floor(Math.random() * quotes5.length);
  document.getElementById("quote5").innerHTML = quotes5[randomIndex];
  document.getElementById("quote5").classList.add("show");
}

function hideAllQuotes() {
  let allQuotes = document.querySelectorAll(".quote");
  allQuotes.forEach((element) => element.classList.remove("show"));
}
