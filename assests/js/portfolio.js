//portfolio js start here
let barsBtn = document.querySelector('#bars-btn');
let barsBtnClose = document.querySelector('#bars-btn-close');
let navLinksContainer = document.querySelector('#nav-links-container');
let allNavLinks = document.querySelectorAll('.my-nav-link');
// navbar js start here
barsBtn.addEventListener('click',()=>{
   navLinksContainer.classList.add('visible-links-container');
    barsBtn.classList.add('d-none');
    barsBtnClose.classList.remove('d-none');
});
function closeNav(){
    navLinksContainer.classList.remove('visible-links-container');
    barsBtn.classList.remove('d-none');
    barsBtnClose.classList.add('d-none');
}
barsBtnClose.addEventListener('click',()=>{
   closeNav();
});
allNavLinks.forEach(link => {
  link.addEventListener('click',function(){
  allNavLinks.forEach(btn => btn.classList.remove('active'));
  this.classList.add('active');
    closeNav();
  });
});
//navbar js end here