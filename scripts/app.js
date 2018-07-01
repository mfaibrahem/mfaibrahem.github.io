// toggle phone menue icon
document.querySelector('.phone-lines').addEventListener('click', togglePhoneMenu);
function togglePhoneMenu() {
  // toggle on-off icon
  document.querySelector('.phone-lines').classList.toggle('phone-lines-off');
  // toggle on-off icon line
  document.querySelectorAll('.phone-line').forEach(function(line) {
    line.classList.toggle('phone-line-off');
  });
  // toggle the x-list
  document.querySelector('li.x-list').classList.toggle('x-list-off');
}


// toggle geography side menu
document.querySelector('.geography-list').addEventListener('click', geographyFun);
function geographyFun() {
  document.querySelector('.ul-geography').classList.add('add-geography');
}
// toggle therapies side menu
document.querySelector('.therapies-list').addEventListener('click', therapiesFun);
function therapiesFun() {
  document.querySelector('.ul-therapies').classList.add('add-therapies');
}
// toggle human side menu
document.querySelector('.human-list').addEventListener('click', humanFun);
function humanFun() {
  document.querySelector('.ul-human').classList.add('add-human');
}
// toggle tourism side menu
document.querySelector('.tourism-list').addEventListener('click', tourismFun);
function tourismFun() {
  document.querySelector('.ul-tourism').classList.add('add-tourism');
}
// toggle chemical side menu
document.querySelector('.chemical-list').addEventListener('click', chemicalFun);
function chemicalFun() {
  document.querySelector('.ul-chemical').classList.add('add-chemical');
}


// hide geography ul when click outsied or when click on <a> therapies or on
// <a> human or on <a> tourism or on <a> chemical
document.body.addEventListener('click', removeGeoUl);
function removeGeoUl(e) {
  if (
      e.target.classList.contains('div-header') ||
      e.target.parentElement.classList.contains('div-header') ||
      e.target.parentElement.parentElement.classList.contains('div-header') ||
      e.target.parentElement.parentElement.parentElement.classList.contains('li-header') ||
      e.target.parentElement.classList.contains('phone-lines') ||
      e.target.parentElement.classList.contains('therapies-list') ||
      e.target.parentElement.classList.contains('human-list') || 
      e.target.parentElement.classList.contains('tourism-list') || 
      e.target.parentElement.classList.contains('chemical-list') ||
      e.target.parentElement.parentElement.classList.contains('ul-geography')
  ) {
    document.querySelector('.ul-geography').classList.remove('add-geography');
  }
} 



// hide therapies ul when click outsied or when click on <a> geography or on
// <a> human or on <a> tourism or on <a> chemical
document.body.addEventListener('click', removeTherpUl);
function removeTherpUl(e) {
  if (
      e.target.classList.contains('div-header') ||
      e.target.parentElement.classList.contains('div-header') ||
      e.target.parentElement.parentElement.classList.contains('div-header') ||
      e.target.parentElement.parentElement.parentElement.classList.contains('li-header') ||
      e.target.parentElement.classList.contains('phone-lines') ||
      e.target.parentElement.classList.contains('geography-list') ||
      e.target.parentElement.classList.contains('human-list') || 
      e.target.parentElement.classList.contains('tourism-list') || 
      e.target.parentElement.classList.contains('chemical-list')
  ) {
    document.querySelector('.ul-therapies').classList.remove('add-therapies');
  }
} 


// hide human ul when click outsied or when click on <a> geography or on
// <a> therapies or on <a> tourism or on <a> chemical
document.body.addEventListener('click', removeHumanUl);
function removeHumanUl(e) {
  if (
      e.target.classList.contains('div-header') ||
      e.target.parentElement.classList.contains('div-header') ||
      e.target.parentElement.parentElement.classList.contains('div-header') ||
      e.target.parentElement.parentElement.parentElement.classList.contains('li-header') ||
      e.target.parentElement.classList.contains('phone-lines') ||
      e.target.parentElement.classList.contains('geography-list') ||
      e.target.parentElement.classList.contains('therapies-list') || 
      e.target.parentElement.classList.contains('tourism-list') || 
      e.target.parentElement.classList.contains('chemical-list')
  ) {
    document.querySelector('.ul-human').classList.remove('add-human');
  }
} 


// hide tourism ul when click outsied or when click on <a> geography or on
// <a> therapies or on <a> human or on <a> chemical
document.body.addEventListener('click', removeTourismUl);
function removeTourismUl(e) {
  if (
      e.target.classList.contains('div-header') ||
      e.target.parentElement.classList.contains('div-header') ||
      e.target.parentElement.parentElement.classList.contains('div-header') ||
      e.target.parentElement.parentElement.parentElement.classList.contains('li-header') ||
      e.target.parentElement.classList.contains('phone-lines') ||
      e.target.parentElement.classList.contains('geography-list') ||
      e.target.parentElement.classList.contains('therapies-list') || 
      e.target.parentElement.classList.contains('human-list') || 
      e.target.parentElement.classList.contains('chemical-list')
  ) {
    document.querySelector('.ul-tourism').classList.remove('add-tourism');
  }
}

// hide chemical ul when click outsied or when click on <a> geography or on
// <a> therapies or on <a> human or on <a> tourism
document.body.addEventListener('click', removeChemUl);
function removeChemUl(e) {
  if (
      e.target.classList.contains('div-header') ||
      e.target.parentElement.classList.contains('div-header') ||
      e.target.parentElement.parentElement.classList.contains('div-header') ||
      e.target.parentElement.parentElement.parentElement.classList.contains('li-header') ||
      e.target.parentElement.classList.contains('phone-lines') ||
      e.target.parentElement.classList.contains('geography-list') ||
      e.target.parentElement.classList.contains('therapies-list') || 
      e.target.parentElement.classList.contains('human-list') || 
      e.target.parentElement.classList.contains('tourism-list')
  ) {
    document.querySelector('.ul-chemical').classList.remove('add-chemical');
  }
}


// toggle side panel when clicked
document.querySelector('.ul-header').addEventListener('click', hideSidePanel);
function hideSidePanel(e) {
  if (
      e.target.classList.contains('side-geography-link') ||
      e.target.classList.contains('side-therapies-link') ||
      e.target.classList.contains('side-human-link') ||
      e.target.classList.contains('side-tourism-link') ||
      e.target.classList.contains('side-chemical-link')  
    ) {
       // toggle the side panel (removes it when any link is clicked)
       // but there is a problem after any link on the side panel
       // is clicked it toggles the hide-side-panel class, so its
       // display property is set to none
       // so i can't click it again to toggle and remove the hide-side-panel class
       // SOLUTION
       // make another event listener fires when mouse over any main nav linkes
       // and this event removes the hide-side-panel class from the side panel links
       // because i can't access these linkes as they were displayed to none.
       // so after removing the hide-side-panel class, the side panel retrieved again
       // and the toggle click event fires again after i click any link on the 
       // side panel linkes to remove the entire side panel
       // and so on
      document.querySelector('ul.ul-geography').classList.toggle('hide-side-panel');
      document.querySelector('ul.ul-therapies').classList.toggle('hide-side-panel');
      document.querySelector('ul.ul-human').classList.toggle('hide-side-panel');
      document.querySelector('ul.ul-tourism').classList.toggle('hide-side-panel');
      document.querySelector('ul.ul-chemical').classList.toggle('hide-side-panel');
  }
}

// retrieve side panel when hover over the main nav links
document.querySelector('.ul-header').addEventListener('mouseover', retrieveSidePanel);
function retrieveSidePanel(e) {
  if (e.target.classList.contains('list-off')) {
      document.querySelector('ul.ul-geography').classList.remove('hide-side-panel');
      document.querySelector('ul.ul-therapies').classList.remove('hide-side-panel');
      document.querySelector('ul.ul-human').classList.remove('hide-side-panel');
      document.querySelector('ul.ul-tourism').classList.remove('hide-side-panel');
      document.querySelector('ul.ul-chemical').classList.remove('hide-side-panel');
  }
}

// create slide images

// 1. call the recursive function
let imgIndex = 0;
recursiveFun();

function recursiveFun() {
  const UIslideImgs = document.querySelectorAll('.slide-div');
  UIslideImgs.forEach(function(img) {
    img.style.display = 'none';
  });
  if (imgIndex >= UIslideImgs.length) {
    imgIndex = 0;
  }
  UIslideImgs[imgIndex].style.display = 'block';
  imgIndex++;
  setTimeout(recursiveFun, 3000);
}



// hide button
const UIShowMoreBtn = document.querySelector('.hide-button');
UIShowMoreBtn.addEventListener('click', revealFun);
function revealFun() {
  document.querySelector('.hidden-text').classList.toggle('revealed-text');
  // toggle the animation on the show more div
  UIShowMoreBtn.classList.toggle('animate-btn');
  // toggle the inner text inside the show more div 
  document.querySelector('.more').classList.toggle('hide');
  document.querySelector('.less').classList.toggle('view');
}

// how early stages hidden text
const UIshowMoreEarly = document.querySelector('.hide-text-early');
UIshowMoreEarly.addEventListener('click', revealEarlyFun);
function revealEarlyFun() {
  document.querySelector('.hidden-text-early').classList.toggle('revealed-text-early');
  document.querySelector('.more-early').classList.toggle('hide');
  document.querySelector('.less-early').classList.toggle('view');
}

// show water resources hidden text
const UIshowMoreWater = document.querySelector('.hide-text-water');
UIshowMoreWater.addEventListener('click', revealWaterFun);
function revealWaterFun() {
  document.querySelector('.hidden-text-water').classList.toggle('revealed-text-water');
  document.querySelector('.more-water').classList.toggle('hide');
  document.querySelector('.less-water').classList.toggle('view');
}

// show rock sink holes hidden text
const UIshowMoreRock = document.querySelector('.hide-text-rock');
UIshowMoreRock.addEventListener('click', revealRockFun);
function revealRockFun() {
  document.querySelector('.hidden-text-rock').classList.toggle('revealed-text-rock');
  document.querySelector('.more-rock').classList.toggle('hide');
  document.querySelector('.less-rock').classList.toggle('view');
}

// show therapies hidden text
const UIshowMoreTherapies = document.querySelector('.hide-text-therapies');
UIshowMoreTherapies.addEventListener('click', revealTherapiesFun);
function revealTherapiesFun() {
  document.querySelector('.hidden-text-therapies').classList.toggle('revealed-text-therapies');
  document.querySelector('.more-therapies').classList.toggle('hide');
  document.querySelector('.less-therapies').classList.toggle('view');
}



// triggar modal

const UItriggarModalBiblical = document.querySelector('.modal-triggar-biblical');
const UIxBiblicalModal = document.querySelector('.x-biblical-modal');
UIxBiblicalModal.addEventListener('click', toggleBiblicalModalFun);
UItriggarModalBiblical.addEventListener('click', toggleBiblicalModalFun);

function toggleBiblicalModalFun() {
  document.querySelector('.modal-biblical').classList.toggle('toggle-modal');
}

const UItriggarModalGreek = document.querySelector('.modal-triggar-greek');
const UIxGreekModal = document.querySelector('.x-greek-modal');
UItriggarModalGreek.addEventListener('click', toggleGreekModalFun);
UIxGreekModal.addEventListener('click', toggleGreekModalFun);
function toggleGreekModalFun() {
  document.querySelector('.modal-greek').classList.toggle('toggle-modal');
}








// ********************************************************
// ******************animate on scroll*********************
// *******************************************************
let isScrolling = false;
window.addEventListener('scroll', throttleScroll);
function throttleScroll() {
  if (isScrolling == false) {
    requestAnimationFrame(function() {
      scrolling();
      isScrolling = false;
    });
  }
  isScrolling = true;
}

// document.addEventListener('DOMLoadedContent', scrolling);

function scrolling() {
  const UIh2Geography = document.querySelector('h2#geography-id');
  const UIh3GreatRift = document.querySelector('h3#great-rift-id');
  const UIh3EarlyStages = document.querySelector('h3#early-stages-id');
  const UIh3Climate = document.querySelector('h3#climate-id');
  const UIh3Rain = document.querySelector('h3#rain-id');
  const UIh3Water = document.querySelector('h3#water-id');
  const UIh3RockSink = document.querySelector('h3#rock-sink-id');
  const UIh2Teherapies = document.querySelector('h2#therapies-id');
  const UIh3Psoriasis = document.querySelector('h3#psoriasis-id');
  const UIh2Human = document.querySelector('h2#human-id');

  // scroll through geography container elements
  if (isFullyVisible(UIh2Geography)) {
    document.querySelector('h2#geography-id + p').classList.add('active-text');
    document.querySelector('div.geo-col-img').classList.add('active-img');
  }
  else {
    document.querySelector('h2#geography-id + p').classList.remove('active-text');
    document.querySelector('div.geo-col-img').classList.remove('active-img');
  }

  if (isFullyVisible(UIh3GreatRift)) {
    document.querySelector('div.geo-col-2 p').classList.add('active-text');
  }
  else {
    document.querySelector('div.geo-col-2 p').classList.remove('active-text');    
  }

  if (isFullyVisible(UIh3EarlyStages)) {
    document.querySelector('div.geo-col-3 p').classList.add('active-text');
  }
  else {
    document.querySelector('div.geo-col-3 p').classList.remove('active-text');    
  }

  if (isFullyVisible(UIh3Climate)) {
    document.querySelector('div.geo-col-4 p').classList.add('active-text');
  }
  else {
    document.querySelector('div.geo-col-4 p').classList.remove('active-text');    
  }

  if (isFullyVisible(UIh3Rain)) {
    document.querySelector('div.geo-col-5 p').classList.add('active-text');
  }
  else {
    document.querySelector('div.geo-col-5 p').classList.remove('active-text');    
  }

  if (isFullyVisible(UIh3Water)) {
    document.querySelector('div.geo-col-6 p').classList.add('active-text');
  }
  else {
    document.querySelector('div.geo-col-6 p').classList.remove('active-text');    
  }

  if (isFullyVisible(UIh3RockSink)) {
    document.querySelector('div.geo-col-7 p').classList.add('active-text');
  }
  else {
    document.querySelector('div.geo-col-7 p').classList.remove('active-text');    
  }

  // scroll through therapies container elements
  if (isFullyVisible(UIh2Teherapies)) {
    document.querySelector('h2#therapies-id + p').classList.add('active-text');
    document.querySelector('div.therapies-col-img').classList.add('active-img');
  }
  else {
    document.querySelector('h2#therapies-id + p').classList.remove('active-text');
    document.querySelector('div.therapies-col-img').classList.remove('active-img');
  }

  if (isFullyVisible(UIh3Psoriasis)) {
    document.querySelector('.therapies-col-2').classList.add('slide-right-text');
    document.querySelector('.therapies-col-3').classList.add('slide-right-text');
    document.querySelector('.therapies-col-4').classList.add('slide-right-text');
  }
  else {
    document.querySelector('.therapies-col-2').classList.remove('slide-right-text');
    document.querySelector('.therapies-col-3').classList.remove('slide-right-text');
    document.querySelector('.therapies-col-4').classList.remove('slide-right-text');
  }

  if (isFullyVisible(UIh2Human)) {
    document.querySelector('.human-text').classList.add('slid-bottom-text');
  }
  else {
    document.querySelector('.human-text').classList.remove('slid-bottom-text');
  }

}

    
function isPartiallyVisible(UIelement) {
  let elementBoundry = UIelement.getBoundingClientRect();
  let UIelementTop = elementBoundry.top;
  let UIelementBottom = elementBoundry.bottom;
  // let UIelementRight = elementBoundry.right;
  // let UIelementLeft = elementBoundry.left;
  // let UIelementWidth = elementBoundry.width;
  // let UIelementHeight = elementBoundry.height;
    return(window.innerHeight < UIelementBottom 
      && window.innerHeight > UIelementTop);
}

function isFullyVisible (UIelement) {
  let elementBoundry = UIelement.getBoundingClientRect();
  let UIelementTop = elementBoundry.top;
  let UIelementBottom = elementBoundry.bottom;
  // let UIelementRight = elementBoundry.right;
  // let UIelementLeft = elementBoundry.left;
  // let UIelementWidth = elementBoundry.width;
  // let UIelementHeight = elementBoundry.height;
    return(window.innerHeight > UIelementBottom);
}

// ************************************************************
// ****************end Animate on Scroll***********************
// ************************************************************




// // media queries

// // creating a media query list object
// let mql = window.matchMedia("(min-width: 769px)");
// // event listener which fires when a change is detected
// mql.addListener(mqFunction);
// //  call the handler directly after defining the event — this will 
// // ensure your code can initialize itself during or after the page has loaded

// mqFunction(mql);
// function mqFunction(x) {
//   // if (x.matches) {
//   //   document.querySelector('.ul-header > li:first-child').style.display = 'none';
//   // } else {
//   //   document.querySelector('.ul-header > li:first-child').style.display = 'block';
//   // }
// }






