//====================================ADD BUTTON JS VARIABLES START=========================================
let addBtn = document.querySelector('#add-btn');
let addMenuContainer =document.querySelector('#add-menu-container');
let addMenuBox = document.querySelector('#add-menu-box');
let closeMenuBtn = document.querySelector('#close-menu-btn');
//====================================ADD BUTTON JS VARIABLES END=========================================
// =========================================top profile js start here=============================
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
let bioCounter = document.querySelector('#letter-count');
// profile navbar variables
let profileAllNavLinks = document.querySelectorAll('.profile-nav-link');

//add button functionality
addBtn.addEventListener('click',()=>{
  showMenu(addMenuContainer,addMenuBox);
});


// variable for bio length desc
let bioMaxLength = objMaxLength.shortBio;
bioCounter.textContent = bioMaxLength;

// changing background image
bgFileInput.addEventListener('change',function(e){
  const [file] = bgFileInput.files;
  bgSaveProfilePicBtn.classList.remove('d-none');
  bgImg.src = URL.createObjectURL(file);

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
//showing all edit box background image, profile-pic,bio
profileEditBtn.addEventListener('click',()=>{
  allEditBox.forEach(box =>{
    box.classList.remove('d-none');
  });
  ShowEditBox(profileEditContainer,profileEditBox);
  bio.textContent = "";
  myTrim(shortDiscriptionText,editShortDiscriptionValue);
  myCounter(editShortDiscriptionValue,bioMaxLength,editShortDiscriptionBtn,bioCounter);
});

//showing only bio edit box
shortDiscriptionBox.addEventListener('dblclick',()=>{
 allEditBox.forEach(box =>{
    box.classList.add('d-none');
 });
 ShowEditBox(profileEditContainer,profileEditBox);
 bio.textContent = "";
 myTrim(shortDiscriptionText,editShortDiscriptionValue);
 myCounter(editShortDiscriptionValue,bioMaxLength,editShortDiscriptionBtn,bioCounter);

});
// leastening for counter on editing in textarea box
editShortDiscriptionValue.addEventListener('keyup',()=>{
  myCounter(editShortDiscriptionValue,bioMaxLength,editShortDiscriptionBtn,bioCounter);

});
//hiding  editing box and updating  bio on save btn click
editShortDiscriptionBtn.addEventListener('click',()=>{
  shortDiscriptionText.textContent = editShortDiscriptionValue.value;
   hideEditBox(profileEditContainer,profileEditBox);
   hideAfterEditBoxClose();
});
//hiding editing box on close btn
profileEditCloseBtn.addEventListener('click',()=>{
  hideEditBox(profileEditContainer,profileEditBox);
  hideAfterEditBoxClose();
});
//profile navbar start here
profileAllNavLinks.forEach(link => {
  link.addEventListener('click',function(){
    profileAllNavLinks.forEach(btn => btn.classList.remove('active'));
  this.classList.add('active');
 });
});
//================================================top profile js end here=====================================
//===============================================profile body js start here===================================


// function for showing data on profile or not =========GLOABAL FUNCTIONS START=======================
function showOnProfile(body,boxToShowHide){
  if(!body.textContent.trim()){
    boxToShowHide.classList.add('d-none');
  }else{
    boxToShowHide.classList.remove('d-none');
  }
}
// function for showing data on profile or not =========GLOABAL FUNCTIONS  END=======================

// =======================summary section start here======================================================
//for summary section variables
let mySummaryBox = document.querySelector('#mysummary');
let summaryText = document.querySelector('#summary-text');
// for summary edit variables
let editSummaryBtn = document.querySelector('#edit-summary-btn');
let editSummaryContainer = document.querySelector('#summary-edit-container');
let editSummaryBox = document.querySelector('#summary-edit-box');
let summaryCloseBtn = document.querySelector('#summary-edit-close-btn');
//varibles for summary only
let summaryTextarea = document.querySelector('#summary-value');
let summarySaveBtn =document.querySelector('#summary-save-btn');
let summaryCounter = document.querySelector('#summaryCounter');
//hiding about section while empty
showOnProfile(summaryText,mySummaryBox);
let summaryMaxLength = objMaxLength.aboutSummary;
summaryCounter.textContent = summaryMaxLength;

function showSummaryEditBox(){
  ShowEditBox(editSummaryContainer,editSummaryBox);
  myTrim(summaryText,summaryTextarea);
  myCounter(summaryTextarea,summaryMaxLength,summarySaveBtn,summaryCounter);
}
editSummaryBtn.addEventListener('click',()=>{
  showSummaryEditBox();
});
summaryCloseBtn.addEventListener('click',(e)=>{
  e.preventDefault();
   hideEditBox(editSummaryContainer,editSummaryBox);
});
//on summary edit btn

// listing to summary keyup events
summaryTextarea.addEventListener('keyup',()=>{
  myCounter(summaryTextarea,summaryMaxLength,summarySaveBtn,summaryCounter);
});
//on save btn click
summarySaveBtn.addEventListener('click',()=>{
  summaryText.textContent = summaryTextarea.value;
  hideEditBox(editSummaryContainer,editSummaryBox);
});

// add summary btn
let summaryAddBtn = document.querySelector('#summary-add-btn');
summaryAddBtn.addEventListener('click',()=>{
  showSummaryEditBox();
});

// ============================================summary section end here===========================================

// ===================function for managing WORK EDUCATION SKILL PROJECT CONTACT start here===============================
function aboutBodyContent(itemEditBtnId,itemEditContainerId,itemEditBoxId,itemCloseBtn,itemBodyId,itemBoxId,itemAddBtn){
   // show work on profile or not
   showOnProfile(itemBodyId,itemBoxId);

   itemEditBtnId.addEventListener('click',()=>{
      ShowEditBox(itemEditContainerId,itemEditBoxId);
   });
   itemCloseBtn.addEventListener('click',(e)=>{
     e.preventDefault();
      hideEditBox(itemEditContainerId,itemEditBoxId);
    });

   // add work btn
    itemAddBtn.addEventListener('click',()=>{
     ShowEditBox(itemEditContainerId,itemEditBoxId);
    });
 }
 // ===================function for managing WORK EDUCATION SKILL PROJECT CONTACT end here===============================
// =============================================work section start here==========================================
// for work edit popup variables on profile
let workEditBtn = document.querySelector('#edit-work-btn');// on profile
let workEditContainer = document.querySelector('#work-edit-container');//outer container on edit form popup
let workEditBox = document.querySelector('#work-edit-box');//inner container on  edit form popup
let workCloseBtn = document.querySelector('#work-edit-close-btn');//close btn on edit form poup
let workBody = document.querySelector('#work-body'); //on profile
let workBox = document.querySelector('#mywork'); //on profile
let workAddBtn = document.querySelector('#work-add-btn'); // on bottom to top slider
let workAddNewBtn = document.querySelector('#add-new-work-btn'); // on  edit form popup
let workUpdateBtn = document.querySelectorAll('.update-work-btn');//on edit form to update work detail
let workDeleteBtn = document.querySelectorAll('.delete-work-btn');//on edit form to delete a work detail

// work form variables
let workEditFormContainer = document.querySelector('#work-edit-form-container');//outer container
let workEditFormBox = document.querySelector('#work-edit-form-box');//inner container
let workFormCloseBtn = document.querySelector('#work-edit-form-close-btn');// close btn
let workAllInput = document.querySelectorAll('.my-work-form-container input');//workAllInput
let workDiscriptionFormTextarea = document.querySelector('#work-discription-input');//discription textarea
let workDiscriptionCounter = document.querySelector('#work-discription-counter');//discription counter
let workFormSaveBtn = document.querySelector('#work-form-save-btn');//formSaveBtn
let workFormUpdateBtn = document.querySelector('#work-form-update-btn');//formUpdateBtn

//function to show data
aboutBodyContent(workEditBtn,workEditContainer,workEditBox,workCloseBtn,workBody,workBox,workAddBtn);

// work discription max length
let workDiscriptionMaxLength = objMaxLength.workEditFormDiscription;
workDiscriptionCounter.textContent = workDiscriptionMaxLength;

//on update button click opening form and setting value to input  in form
workUpdateBtn.forEach(btn => {
 btn.addEventListener('click',() => {
  workFormSaveBtn.classList.add('d-none');
  workFormUpdateBtn.classList.remove('d-none');
  let collegeNameElement = btn.parentElement.previousElementSibling.parentElement.firstElementChild;
  let courseNameElement = collegeNameElement.nextElementSibling.firstElementChild;
  let branchName = courseNameElement.nextElementSibling;
  let workStartDateElement = branchName.nextElementSibling.firstElementChild;
  let workEndDateElement = workStartDateElement.nextElementSibling;
  let workDiscriptionElement = branchName.nextElementSibling.nextElementSibling.nextElementSibling;
  ShowEditBox(workEditFormContainer,workEditFormBox);
     workAllInput[0].value =   collegeNameElement.textContent.trim();
     workAllInput[1].value =   courseNameElement.textContent.trim();
     workAllInput[2].value =  branchName.textContent.trim();
     workAllInput[3].value =  workStartDateElement.textContent.trim();
     workAllInput[4].value = workEndDateElement.textContent.trim();
     let workDiscription =    workDiscriptionElement;
  myTrim(workDiscription,workDiscriptionFormTextarea);
  myCounter(workDiscriptionFormTextarea,workDiscriptionMaxLength,workFormSaveBtn,workDiscriptionCounter);

});
});

// add new work btn on footer on edit popup
workAddNewBtn.addEventListener('click',()=>{
  workFormSaveBtn.classList.remove('d-none');
  workFormUpdateBtn.classList.add('d-none');
  ShowEditBox(workEditFormContainer,workEditFormBox);
 workAllInput.forEach(input =>{
    input.value = "";
 });
  workDiscriptionFormTextarea.value = "";
});
//leasting to  textarea input of form to count maxLength
workDiscriptionFormTextarea.addEventListener('keyup',()=>{
  myCounter(workDiscriptionFormTextarea,workDiscriptionMaxLength,workFormSaveBtn,workDiscriptionCounter);
});
// on work form btn click
workFormUpdateBtn.addEventListener('click',()=>{

});
// on work save form btn click for adding new work
workFormSaveBtn.addEventListener('click',()=>{

});
//closing form on click
workFormCloseBtn.addEventListener('click',()=>{
  hideEditBox(workEditFormContainer,workEditFormBox);
});

// =================================================work section end here================================================

// =============================================education section start here==========================================
// for education edit popup variables variables => see all refrence in work  variable section to better understand
let educationEditBtn = document.querySelector('#edit-education-btn');
let educationEditContainer = document.querySelector('#education-edit-container');
let educationEditBox = document.querySelector('#education-edit-box');
let educationCloseBtn = document.querySelector('#education-edit-close-btn');
let educationBody = document.querySelector('#education-body');
let educationBox = document.querySelector('#myeducation');
let educationAddBtn = document.querySelector('#education-add-btn');
let educationAddNewBtn = document.querySelector('#add-new-education-btn'); // on  edit form popup
let educationUpdateBtn = document.querySelectorAll('.update-education-btn');//on edit form to update work detail
let educationDeleteBtn = document.querySelectorAll('.delete-education-btn');//on edit form to delete a work detail

// work form variables
let educationEditFormContainer = document.querySelector('#education-edit-form-container');//outer container
let educationEditFormBox = document.querySelector('#education-edit-form-box');//inner container
let educationFormCloseBtn = document.querySelector('#education-edit-form-close-btn');// close btn
let educationAllInput = document.querySelectorAll('.my-education-form-container input');//workAllInput
let educationDiscriptionFormTextarea = document.querySelector('#education-discription-input');//discription textarea
let educationDiscriptionCounter = document.querySelector('#education-discription-counter');//discription counter
// for ajax request to save data on server
let educationFormSaveBtn = document.querySelector('#education-form-save-btn');//formSaveBtn
let educationFormUpdateBtn = document.querySelector('#education-form-update-btn');//formUpdateducation


aboutBodyContent(educationEditBtn,educationEditContainer,educationEditBox,educationCloseBtn,educationBody,educationBox,educationAddBtn);

// education discription max length
let educationDiscriptionMaxLength = objMaxLength.educationEditFormDiscription;
educationDiscriptionCounter.textContent = educationDiscriptionMaxLength;

//on update button click opening form and setting value to input  in form
educationUpdateBtn.forEach(btn => {
 btn.addEventListener('click',() => {
  educationFormSaveBtn.classList.add('d-none');
  educationFormUpdateBtn.classList.remove('d-none');
  let collegeNameElement = btn.parentElement.previousElementSibling.parentElement.firstElementChild;
  let courseNameElement = collegeNameElement.nextElementSibling.firstElementChild;
  let branchName = courseNameElement.nextElementSibling;
  let educationStartDateElement = branchName.nextElementSibling.firstElementChild;
  let educationEndDateElement = educationStartDateElement.nextElementSibling;
  let educationDiscriptionElement = branchName.nextElementSibling.nextElementSibling.nextElementSibling;
  ShowEditBox(educationEditFormContainer,educationEditFormBox);
     educationAllInput[0].value =   collegeNameElement.textContent.trim();
     educationAllInput[1].value =   courseNameElement.textContent.trim();
     educationAllInput[2].value =  branchName.textContent.trim();
     educationAllInput[3].value =  educationStartDateElement.textContent.trim();
     educationAllInput[4].value = educationEndDateElement.textContent.trim();
     let educationDiscription =    educationDiscriptionElement;
  myTrim(educationDiscription,educationDiscriptionFormTextarea);
  myCounter(educationDiscriptionFormTextarea,educationDiscriptionMaxLength,educationFormSaveBtn,educationDiscriptionCounter);

});
});

// add new education btn on footer on edit popup
educationAddNewBtn.addEventListener('click',()=>{
  educationFormSaveBtn.classList.remove('d-none');
  educationFormUpdateBtn.classList.add('d-none');
  ShowEditBox(educationEditFormContainer,educationEditFormBox);
 educationAllInput.forEach(input =>{
    input.value = "";
 });
  educationDiscriptionFormTextarea.value = "";
});
//leasting to  textarea input of form to count maxLength
educationDiscriptionFormTextarea.addEventListener('keyup',()=>{
  myCounter(educationDiscriptionFormTextarea,educationDiscriptionMaxLength,educationFormSaveBtn,educationDiscriptionCounter);
});
// on education form btn click
educationFormUpdateBtn.addEventListener('click',()=>{

});
// on education save form btn click for adding new work
educationFormSaveBtn.addEventListener('click',()=>{

});
//closing form on click
educationFormCloseBtn.addEventListener('click',()=>{
  hideEditBox(educationEditFormContainer,educationEditFormBox);
});
// =================================================education section end here================================================
// =============================================skill section start here==========================================
// for skill edit variables
let skillEditBtn = document.querySelector('#edit-skill-btn');
let skillEditContainer = document.querySelector('#skill-edit-container');
let skillEditBox = document.querySelector('#skill-edit-box');
let skillCloseBtn = document.querySelector('#skill-edit-close-btn');
//for skill variables on profile
let skillBody = document.querySelector('#skill-body');
let skillBox = document.querySelector('#myskill');
let skillAddBtn = document.querySelector('#skill-add-btn');
aboutBodyContent(skillEditBtn,skillEditContainer,skillEditBox,skillCloseBtn,skillBody,skillBox,skillAddBtn);

// =================================================skill section end here================================================
// =============================================project section start here==========================================
// for project edit variables
let projectEditBtn = document.querySelector('#edit-project-btn');
let projectEditContainer = document.querySelector('#project-edit-container');
let projectEditBox = document.querySelector('#project-edit-box');
let projectCloseBtn = document.querySelector('#project-edit-close-btn');
//for project variables on profile
let projectBody = document.querySelector('#project-body');
let projectBox = document.querySelector('#myproject');
let projectAddBtn = document.querySelector('#project-add-btn');
aboutBodyContent(projectEditBtn,projectEditContainer,projectEditBox,projectCloseBtn,projectBody,projectBox,projectAddBtn);

// =================================================project section end here================================================
// =============================================contact section start here==========================================
// for contact edit variables
let contactEditBtn = document.querySelector('#edit-contact-btn');
let contactEditContainer = document.querySelector('#contact-edit-container');
let contactEditBox = document.querySelector('#contact-edit-box');
let contactCloseBtn = document.querySelector('#contact-edit-close-btn');
//for contact variables on profile
let contactBody = document.querySelector('#contact-body');
let contactBox = document.querySelector('#mycontact');
let contactAddBtn = document.querySelector('#contact-add-btn');
aboutBodyContent(contactEditBtn,contactEditContainer,contactEditBox,contactCloseBtn,contactBody,contactBox,contactAddBtn);
// =================================================contact section end here================================================
 

//close menu funtianlity
closeMenuBtn.addEventListener('click',()=>{
  hideMenu(addMenuContainer,addMenuBox);
  // for about section
  showOnProfile(summaryText,mySummaryBox);
  // show work on profile or not
  showOnProfile(workBody,myWorkBox);
// show education on profile or not
 showOnProfile(educationBody,myEducationBox);
 // show skill on profile or not
showOnProfile(skillBody,skillBox);
// show project on profile or not
showOnProfile(projectBody,projectBox);
// show contact on profile or not
showOnProfile(contactBody,contactBox);
});

