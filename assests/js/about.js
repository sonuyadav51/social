// popup show hide variables
let profileEditContainer =document.querySelector('#profile-edit-container');
let profileEditBox =document.querySelector('#profile-edit-box');

// profile edit button next to profile pic
let profileEditBtn = document.querySelector('#profile-edit-btn');
//popup close button
let profileEditCloseBtn = document.querySelector('#profile-edit-close-btn');
//background img upload variables
let bgFileBtnUpload = document.querySelector('#background-file-btn-upload');
let bgFileInput = document.querySelector('#background-file-input');
let bgSaveProfilePicBtn = document.querySelector('#save-background-pic-btn');
let bgImg = document.querySelector('#background-img');
//profile pic upload variables
let fileBtnUpload = document.querySelector('#file-btn-upload');
let fileInput = document.querySelector('#file-input');
let saveProfilePicBtn = document.querySelector('#save-profile-pic-btn');
let profilePic = document.querySelector('#profile-pic');
// profile short discription button
let shortDiscriptionText = document.querySelector('#short-discription-text');
let shortDiscriptionBox = document.querySelector('#short-discription');
let editShortDiscriptionValue = document.querySelector('#edit-short-discription-value');
let editShortDiscriptionBtn = document.querySelector('#edit-short-discription-btn');
//all edit box xcept bio box in popup
let allEditBox = document.querySelectorAll('.edit-img-box');
let bio = document.querySelector('.bio');
let allSaveBtn = document.querySelector('#all-save');
let counter = document.querySelector('#letter-count');

let maxLength = 151;
counter.textContent = maxLength;

// changing background image
bgFileInput.addEventListener('change',function(e){
  const [file] = bgFileInput.files;
  bgSaveProfilePicBtn.classList.remove('d-none');
  bgImg.src =URL.createObjectURL(file);

 });

//changing profile pic
fileInput.addEventListener('change',function(e){
 const [file] = fileInput.files;
 saveProfilePicBtn.classList.remove('d-none');
 profilePic.src =URL.createObjectURL(file);

});


//function fire after popup edit boxclose
function hideAfterEditBoxClose(){
  if(editShortDiscriptionValue.value === ""){
    bio.textContent ="double click to add bio...";
    profilePic.src ="./img/profile.jpg";
    saveProfilePicBtn.classList.add('d-none');
    bgImg.src ="./img/address.png";
    bgSaveProfilePicBtn.classList.add('d-none');
 }
}
//FUNCTIONS FOR BIO UPDATE
function myCounter(){
  let strLength = editShortDiscriptionValue.value.length;
  counter.textContent = maxLength - strLength;
  editShortDiscriptionBtn.classList.add('disabled');
  if(counter.textContent <= -1 || strLength === 0 ){
   editShortDiscriptionBtn.classList.add('disabled');
   counter.classList.add('red');
  }else{
    editShortDiscriptionBtn.classList.remove('disabled');
  }
}
function counterDesc(){
  //triming dataof bio
  let data = shortDiscriptionText.textContent;
  let newdata = data.replace(/\s/g,' ');
  editShortDiscriptionValue.value = newdata.trim();
  myCounter();
}


//showing all edit box background image, profile-pic,bio
profileEditBtn.addEventListener('click',()=>{
  allEditBox.forEach(box =>{
    box.classList.remove('d-none');
  });
  ShowEditBox(profileEditContainer,profileEditBox);
  bio.textContent = "";
  counterDesc();
});

//showing only bio edit box
shortDiscriptionBox.addEventListener('dblclick',()=>{
 allEditBox.forEach(box =>{
    box.classList.add('d-none');
 });
 ShowEditBox(profileEditContainer,profileEditBox);
 bio.textContent = "";
 counterDesc();

});
// leastening for counter on editing in textarea box
editShortDiscriptionValue.addEventListener('keyup',()=>{
  myCounter();

});
//hiding  editing box and updating  bio on save btn click
editShortDiscriptionBtn.addEventListener('click',()=>{
  shortDiscriptionText.textContent = editShortDiscriptionValue.value;
   hideEditBox(profileEditContainer,profileEditBox);
   hideAfterEditBoxClose();
});
//hiding editing boxon close btn
profileEditCloseBtn.addEventListener('click',()=>{
  hideEditBox(profileEditContainer,profileEditBox);
  hideAfterEditBoxClose();
});
