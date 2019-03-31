$(function () {
    let row = 1;  //  show one row

    $.ajax({
        url: '/getImages',
        cache: true,
        contentType: 'application/json',
        success: function (data) {
            getTitle(data);

            function getTitle(data) {
                let step = 0;  //  start  step
                let arr = [];  // new arr
                let minusStep = 0; // middle step
                for (let i = 0; step < data.length; i++) {
                    step += 4;
                    minusStep = step - 4;
                    arr[i] = data.slice(minusStep, step); // copy to arr 0,1,2,3
                }
                /////////////////////////////////////
                for (let j = 0; j < arr.length; j++) {  // loop  for  arr
                    if (j < row) {
                        for (let k = 0; k < arr[j].length; k++) { //  loop for arr row
                            let item = arr[j][k]; // add to item 4 images
                            $('#image__block').prepend(`<li>  
                          <a href="#" class="image__link-wrapper">
                          <a href="#" class="description">${item.description}</a>
                          <a href="#" class="btn_delete js_delete">Delete</a>
                          </a>
                         <img src=${item.url}>
                         </li>`);

                            $('.js_delete').on('click', function (event) {
                                let target = event.target;  // clicked  element
                                $(target).parent().remove();  // remove clicked  element
                                $('#button__download').removeClass('disabled');  // remove class disabled on button
                            })
                        }
                    }
                    if (row === arr.length) {
                        $('#button__download').addClass('disabled');  //  add class disabled
                    }
                }
                return row++;
            }
            //////////////////////////////////////////////////////////////
            $('#button__download').on('click', function () {
                $('#image__block li').remove();  //  clean row and  add row
                getTitle(data);
            });
        }
    });
});
