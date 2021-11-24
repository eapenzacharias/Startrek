import { create } from 'lodash';
import { createElement, getElement } from './querySelectors.js';

const popUp = (item) => {
  const modal = createElement('div');
  modal.className = 'modal fade ';
  modal.id = 'staticBackdrop';

  const modalDialog = createElement('div');
  modalDialog.className = 'modal-dialog modal-xl ';

  const modalContent = createElement('div');
  modalContent.className = 'modal-content transparent';

  const modalHeader = createElement('div');
  modalHeader.className = 'modal-header';

  const modalTitle = createElement('h5');
  modalTitle.className = 'modal-title';
  modalTitle.id = 'staticBackdropLabel';
  modalTitle.innerText = item.name;
  const btnClose = createElement('button');
  btnClose.className = 'btn-close white';
  btnClose.id = 'btnClose';

  const modalBody = createElement('div');
  modalBody.className = 'modal-body ';

  const containerFluid = createElement('div');
  containerFluid.className = 'container-fluid';
  modalBody.appendChild(containerFluid);

  const row1 = createElement('div');
  row1.className = 'row';
  containerFluid.appendChild(row1);
  const col1 = createElement('div');
  col1.className = 'col-12 red text-center';
  row1.appendChild(col1);
  const imgMain = createElement('img');
  imgMain.className = 'img-fluid ';
  const imgSRC = item.flickr_images[0];
  imgMain.src = imgSRC;
  col1.appendChild(imgMain);

  const rowTitle = createElement('div');
  rowTitle.className = 'row';
  containerFluid.appendChild(rowTitle);
  const bigTitle = createElement('h1');
  bigTitle.className = 'col-12 text-center';
  bigTitle.innerText = item.name;
  rowTitle.appendChild(bigTitle);

  const row2 = createElement('div');
  row2.className = 'row';
  containerFluid.appendChild(row2);
  const col21 = createElement('div');
  col21.className = 'col-8';
  col21.innerText = `Propellant: ${item.engines.propellant_1}`;
  row2.appendChild(col21);

  const col22 = createElement('div');
  col22.className = 'col-4';
  col22.innerText = `Type: ${item.engines.type}`;
  row2.appendChild(col22);

  const row3 = createElement('div');
  row3.className = 'row';
  containerFluid.appendChild(row3);
  const col3 = createElement('div');
  col3.className = 'col-12 red';
  col3.innerText = item.description;
  row3.appendChild(col3);

  const numbersComments = createElement('div');
  numbersComments.className = 'row';
  containerFluid.appendChild(numbersComments);
  const numbersCommentsTitle = createElement('h4');
  numbersCommentsTitle.className = 'col-12 text-center';
  numbersCommentsTitle.innerText = 'Comments(2)';
  numbersComments.appendChild(numbersCommentsTitle);

  const row4 = createElement('div');
  row4.className = 'row';
  containerFluid.appendChild(row4);
  const col4 = createElement('div');
  col4.className = 'col-12 justify-content-center blue ';
  row4.appendChild(col4);

  const allComments = createElement('div');
  allComments.className = 'd-flex justify-content-center py-2';
  allComments.id='allComments';
  col4.appendChild(allComments);
  const singleCommentContainer = createElement('div');
  singleCommentContainer.className = '';
  allComments.appendChild(singleCommentContainer);
  const lblComment = createElement('span');
  lblComment.className = 'text1';
  lblComment.innerText = 'Ths is the first hard comment';
  singleCommentContainer.appendChild(lblComment);

  const addComment = createElement('div');
  addComment.className = 'row';
  containerFluid.appendChild(addComment);
  const addCommentTitle = createElement('h4');
  addCommentTitle.className = 'col-12 text-center';
  addCommentTitle.innerText = 'Add a comment';
  addComment.appendChild(addCommentTitle);

  const commentForm = createElement('div');
  commentForm.className = 'row';
  containerFluid.appendChild(commentForm);
  const nameContent = createElement('div');
  nameContent.className = 'col-12';
  commentForm.appendChild(nameContent);
  const txtName = createElement('input');
  txtName.className = 'form-control mb-3 col-6';
  txtName.id='txtName';
  txtName.placeholder = 'Your name';
  commentForm.appendChild(txtName);

  const txtComment = createElement('input');
  txtComment.className = 'form-control';
  txtComment.placeholder = 'Your insights';
  txtComment.id='txtComment ';
  commentForm.appendChild(txtComment);

  const btnComment=createElement('button');
  btnComment.className='';
  btnComment.id='btnComment',
  btnComment.innerText='Comment',
  btnComment.addEventListener('click', ()=>{
    sendComment(item.id, txtName.value,txtComment.value);
  });
  
  containerFluid.appendChild(btnComment);


  modalDialog.appendChild(modalContent);
  modalContent.appendChild(modalHeader);
  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(btnClose);
  modalContent.appendChild(modalBody);

  modal.appendChild(modalDialog);

  return modal;
};


export const sendComment= async (id,user,comment)=>{
  try{
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/F7stpUzdG6g4vBIK95rU/comments',{
      method: 'POST',
      body: JSON.stringify(
        {
          item_id: id,
          username: user,
          comment: comment,         
        }
      ),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    document.getElementById('txtName').value='';
    document.getElementById('txtComment').value='';    
  }catch(error){
    console.log("ERROR: "+error);
  }

};

export const ReceiveComments=async()=>{
  let items;
  try{
    const URL = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/F7stpUzdG6g4vBIK95rU/comments?item_id=5e9d0d95eda69955f709d1eb',{
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    items=await URL.json();
    console.log(items);
  }catch(error){
    console.log('ERROR IN GET: '+error);
  }

  let arrCommentsResult=[];
  arrCommentsResult=items;
  console.log(arrCommentsResult);
  const allCommentsContainer=document.getElementById('allComments');
  
  const ulComments=createElement('ul');
  ulComments.id='ulComments'
  // ulComments.innerHTML ='';
  ulComments.className='';
  // allCommentsContainer.appendChild(ulComments);
  
  if(arrCommentsResult.length){
    for(let j=0; j<arrCommentsResult.length; j+=1){
      const lsComments=createElement('li');
      lsComments.innerText=arrCommentsResult[j].comment;
      ulComments.appendChild(lsComments);
      console.log('call GET');
      console.log(arrCommentsResult[j].comment);      
    }
  console.log(ulComments);
  
  
  } else{
    console.log('NO COMMENTS');
  }
  
};

ReceiveComments();
export default popUp;