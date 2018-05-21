      var list = document.querySelector('ul');
      var input = document.querySelector('input');
      var button = document.querySelector('button');
      button.onclick = function() {
        var Name = input.value;
        input.value = '';
        var listItem = document.createElement('li');
        var listText = document.createElement('span');
        var listBtn = document.createElement('button');
        var comment = document.createElement('input');
        var commentBtn = document.createElement('button');
        var edit = document.createElement('input');
        var editBtn = document.createElement('button');
        var rating = document.createElement('form');
        var select = document.createElement('select');
        var rating1 = document.createElement('option');
        var rating2 = document.createElement('option');
        var rating3 = document.createElement('option');
        var rating4 = document.createElement('option');
        var rating5 = document.createElement('option');
        rating.setAttribute('id','form1');
        rating1.innerHTML= 1;
        rating2.innerHTML= 2;  
        rating3.innerHTML= 3;  
        rating4.innerHTML= 4;  
        rating5.innerHTML= 5;  
        rating1.value = '1';
        rating2.value = '2';
        rating3.value = '3';
        rating4.value = '4';
        rating5.value = '5';
        rating.appendChild(select);
        select.appendChild(rating1);
        select.appendChild(rating2);
        select.appendChild(rating3);
        select.appendChild(rating4);
        select.appendChild(rating5);  
        comment.setAttribute('id','comment')
        listItem.appendChild(rating);
        listItem.appendChild(listText);
        listText.textContent = Name;
        listItem.appendChild(listBtn);
        listBtn.textContent = 'Delete';
        listItem.appendChild(comment);
        listItem.appendChild(commentBtn);
        editBtn.textContent = 'Edit';
        commentBtn.textContent = 'Add Comment';
        list.appendChild(listItem);
                commentBtn.onclick = function(p) {
            var Comment = comment.value;
            comment.value = '';
            var para = document.createElement('p');
            listItem.appendChild(para);
            para.textContent = Comment;
            listItem.appendChild(edit);
            listItem.appendChild(editBtn);
            editBtn.onclick = function(q) {
               var Edit = edit.value;
                edit.value='';
                para.textContent=Edit;
                
                
            }
        }
        
        listBtn.onclick = function(e) {
          list.removeChild(listItem);
        }
        input.focus();
      }
      