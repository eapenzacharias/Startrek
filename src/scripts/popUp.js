import { createElement, getElement } from './querySelectors.js';

export const sendComment = async (id, user, comment) => {
  try {
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/F7stpUzdG6g4vBIK95rU/comments', {
      method: 'POST',
      body: JSON.stringify(
        {
          item_id: id,
          username: user,
          comment,
        },
      ),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => {
      if (response.ok === false) {
        throw new Error('Something went wrong');
      }
    });
  } catch (error) {
    const alert = createElement('div');
    alert.className = 'alert alert-danger';
    alert.setAttribute('role', 'alert');
    alert.innerText = 'ERROR';
    getElement('#staticBackdrop').appendChild(alert);
  }
};

const CountComments = (obj) => obj.length;

export const ReceiveComments = async (id) => {
  let items = [];
  try {
    await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/F7stpUzdG6g4vBIK95rU/comments?item_id=${id}`)
      .then(async (response) => {
        if (response.ok === false) {
          if (response.status === 400) {
            throw new Error('400');
          }
          throw new Error('Something went wrong');
        } else {
          items = await response.json();
        }
      });
  } catch (error) {
    if (error.message !== '400') {
      const alert = createElement('div');
      alert.className = 'alert alert-danger';
      alert.setAttribute('role', 'alert');
      alert.innerText = 'ERROR';
      getElement('#staticBackdrop').appendChild(alert);
    }
  }

  const allCommentsContainer = document.getElementById('allComments');
  allCommentsContainer.innerHTML = '';
  const ulComments = createElement('div');
  ulComments.id = 'ulComments';
  ulComments.className = '';

  if (items.length) {
    for (let j = 0; j < items.length; j += 1) {
      const lsComments = createElement('div');
      ulComments.appendChild(lsComments);

      const figure = createElement('figure');
      figure.className = 'text-left';
      lsComments.appendChild(figure);

      const blockquoteItem = createElement('blockquote');
      blockquoteItem.className = 'blockquote';
      figure.appendChild(blockquoteItem);

      const commentText = createElement('p');
      commentText.className = 'alert alert-dark h6';
      commentText.innerText = items[j].comment;
      blockquoteItem.appendChild(commentText);

      const figcaption = createElement('figcaption');
      figcaption.className = 'footer text-light h6  smallText';
      figure.appendChild(figcaption);
      figcaption.innerText = `${items[j].creation_date} Comment by:  ${items[j].username}`;
    }
    allCommentsContainer.appendChild(ulComments);
    const numbersComments = CountComments(items);
    getElement('#numbersCommentsTitle').innerHTML = `Comments  (${numbersComments})`;
  }
  return items.length;
};

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
  btnClose.className = 'btn-close btn-close-white';
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
  row2.className = 'row table-responsive';
  containerFluid.appendChild(row2);

  const detailTable = createElement('table');
  detailTable.className = 'table table-dark table-borderless table-sm';
  row2.appendChild(detailTable);

  const thead = createElement('thead');
  thead.className = '';
  detailTable.appendChild(thead);

  const trHead = createElement('tr');
  trHead.className = 'table-dark ';
  thead.appendChild(trHead);

  const thHead1 = createElement('th');
  thHead1.scope = 'col';
  thHead1.innerText = 'First Flight';
  trHead.appendChild(thHead1);

  const thHead2 = createElement('th');
  thHead2.scope = 'col';
  thHead2.innerText = 'Active';
  trHead.appendChild(thHead2);

  const thHead3 = createElement('th');
  thHead3.scope = 'col';
  thHead3.innerText = 'Check details';
  trHead.appendChild(thHead3);

  const tbody = createElement('tbody');
  detailTable.appendChild(tbody);

  const trBody = createElement('tr');
  trBody.className = 'table-dark table-active';
  tbody.appendChild(trBody);

  const col21 = createElement('th');
  col21.className = 'col-4 table-dark"';
  col21.innerText = item.first_flight;
  trBody.appendChild(col21);

  const col22 = createElement('td');
  col22.className = 'col-4 table-dark"';
  col22.innerText = item.active;
  trBody.appendChild(col22);

  const col23 = createElement('td');
  col23.className = 'col-4 table-dark"';

  trBody.appendChild(col23);

  const anchorWiki = createElement('a');

  anchorWiki.setAttribute('href', item.wikipedia);
  anchorWiki.setAttribute('target', '_blank');
  anchorWiki.className = 'btn btn-light btn-sm';
  anchorWiki.innerText = 'Show official information';
  col23.appendChild(anchorWiki);

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
  numbersCommentsTitle.id = 'numbersCommentsTitle';

  const row4 = createElement('div');
  row4.className = 'row';
  containerFluid.appendChild(row4);
  const col4 = createElement('div');
  col4.className = 'col-12 justify-content-center blue ';
  row4.appendChild(col4);

  const allComments = createElement('div');
  allComments.className = 'd-flex justify-content-center py-2';
  allComments.id = 'allComments';
  ReceiveComments(item.id);
  numbersCommentsTitle.innerText = 'Comments(0)';
  numbersComments.appendChild(numbersCommentsTitle);

  col4.appendChild(allComments);
  const singleCommentContainer = createElement('div');
  singleCommentContainer.className = '';
  allComments.appendChild(singleCommentContainer);

  const addComment = createElement('div');
  addComment.className = 'row';
  containerFluid.appendChild(addComment);
  const addCommentTitle = createElement('h4');
  addCommentTitle.className = 'col-12 text-center';
  addCommentTitle.innerText = 'Add a comment';
  addComment.appendChild(addCommentTitle);

  const commentForm = createElement('div');
  commentForm.className = 'col-12 col-lg-10 ';
  containerFluid.appendChild(commentForm);

  const nameContent = createElement('div');
  nameContent.className = 'input-group mb-3 col-4';
  commentForm.appendChild(nameContent);

  const spanForm = createElement('span');
  spanForm.className = 'input-group-text btn btn-dark';
  spanForm.innerText = '@';
  nameContent.appendChild(spanForm);

  const txtName = createElement('input');
  txtName.className = 'span-4';
  txtName.id = 'txtName';
  txtName.placeholder = 'Your name';
  nameContent.appendChild(txtName);

  const commentContent = createElement('div');
  commentContent.className = 'input-group mb-3';
  commentForm.appendChild(commentContent);

  const txtComment = createElement('textarea');
  txtComment.className = 'form-control col-4';
  txtComment.placeholder = 'Your insights';
  txtComment.id = 'txtComment ';
  commentContent.appendChild(txtComment);

  const btnComment = createElement('button');
  btnComment.className = 'btn btn-dark';
  btnComment.id = 'btnComment';
  btnComment.innerText = 'Comment';
  btnComment.addEventListener('click', async () => {
    if (txtName.value.length > 0 && txtComment.value.length > 0) {
      await sendComment(item.id, txtName.value, txtComment.value)
        .then(() => ReceiveComments(item.id));
      txtName.value = '';
      txtComment.value = '';
    }
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

export default popUp;