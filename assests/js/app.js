//object for maxLength
let objMaxLength = {
     shortBio:101,
     aboutSummary:501,
     workEditFormDiscription:501,
     educationEditFormDiscription:501
}
//function to show popup box
function ShowEditBox(containerId,boxId){
    containerId.classList.add('show-profile-edit-box');
    boxId.classList.add('show-profile-edit-box');
  }
  //function to hide popup box
function hideEditBox(containerId,boxId){
    containerId.classList.remove('show-profile-edit-box');
    boxId.classList.remove('show-profile-edit-box');
}
//my counter
function myCounter(textareaId,maxLength,saveBtn,counter){
  let strLength = textareaId.value.length;
  counter.textContent = maxLength - strLength;
  saveBtn.classList.add('disabled');
  if(counter.textContent <= -1){
    saveBtn.classList.add('disabled');
   counter.classList.add('red');
  }else{
    saveBtn.classList.remove('disabled');
  }
}
// trim function
function myTrim(Textvalue,textarea){
  let data = Textvalue.textContent;
  let newdata = data.replace(/\s/g,' ');
  textarea.value = newdata.trim();
}
// show menu box
function showMenu(contaienrId,boxId){
  contaienrId.classList.add('show-container');
  boxId.classList.add('show-menu');
}
// hide menu box
function hideMenu(contaienrId,boxId){
  contaienrId.classList.remove('show-container');
  boxId.classList.remove('show-menu');
}

