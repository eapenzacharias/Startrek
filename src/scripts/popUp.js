import { createElement } from './querySelectors.js';

const popUp = () => {
  const loadRocketLocalStorage = sessionStorage.getItem('rocketsData');
  const array = JSON.parse(loadRocketLocalStorage);

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
  modalTitle.innerText = array[0].name;
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
  const imgSRC = array[0].flickr_images[0];
  imgMain.src = imgSRC;
  col1.appendChild(imgMain);

  const rowTitle = createElement('div');
  rowTitle.className = 'row';
  containerFluid.appendChild(rowTitle);
  const bigTitle = createElement('h1');
  bigTitle.className = 'col-12 text-center';
  bigTitle.innerText = array[0].name;
  rowTitle.appendChild(bigTitle);

  const row2 = createElement('div');
  row2.className = 'row';
  containerFluid.appendChild(row2);
  const col21 = createElement('div');
  col21.className = 'col-8';
  col21.innerText = `Propellant: ${array[0].engines.propellant_1}`;
  row2.appendChild(col21);

  const col22 = createElement('div');
  col22.className = 'col-4';
  col22.innerText = `Type: ${array[0].engines.type}`;
  row2.appendChild(col22);

  const row3 = createElement('div');
  row3.className = 'row';
  containerFluid.appendChild(row3);
  const col3 = createElement('div');
  col3.className = 'col-12 red';
  col3.innerText = array[0].description;
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
  txtName.placeholder = 'Your name';
  commentForm.appendChild(txtName);

  const txtComment = createElement('input');
  txtComment.className = 'form-control';
  txtComment.placeholder = 'Your insights';
  commentForm.appendChild(txtComment);

  modalDialog.appendChild(modalContent);
  modalContent.appendChild(modalHeader);
  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(btnClose);
  modalContent.appendChild(modalBody);

  modal.appendChild(modalDialog);

  return modal;
};

export default popUp;