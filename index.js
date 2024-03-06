// "use strict";

// GLOBAL VARIABLES STARTED

let baseURL = 'https://www.googleapis.com/books/v1';
let Searchkey = 'volumes?q=harry&startIndex=20';
let Bookskey = 'volumes?q=computer%20science&startIndex=0&maxResults=39';
let cardWrapper = document.querySelector('.card-wrapper');
let search = document.querySelector('.search');
let resultCount = document.querySelector('.result_count');
let bookmarkParent = document.querySelector('.bookmark-flex');
let bookmarkWrapper = document.querySelector('.bookmark-wrapper');

// GLOBAL VARIABLES ENDED





// IIFE FUNCTION FOR DATA STARTED

(async function () {
    let response = await fetch(`${baseURL}/${Searchkey}`);
    var result = await response.json();
    resultCount.textContent = result.items.length
    console.log(result.items);
    RenderData(result.items);
}())

// IIFE FUNCTION FOR DATA ENDED






// RENDER DATA STARTED

function RenderData(data) {
    if (data.length) {
        data.forEach(el => {
            let div = document.createElement('div');
            div.classList.add('rounded-[5px]', 'border-[1px]', 'border-[#e3e6eb2e]' ,'shadow-md', 'card', 'w-[282px]' ,'pt-[13px]', 'pl-[18px]' ,'pr-[15px]' ,'pb-[13px]');
            div.innerHTML = `
            
                                <div class="bg-transparent py-[18px] pl-[20px] pr-[28px] rounded-[5px] ">
                                    <img class="h-[201px] m-auto" src="${el.volumeInfo.imageLinks.thumbnail}" alt="python">
                                </div>

                                <div class="card-title pt-[19px]">
                                    <div class="flex flex-col gap-[2px] pb-[10px]">
                                        <h3 class="text-[18px] font-[600]">${el.volumeInfo.title.length < 80 ? el.volumeInfo.title.substring(0,20) + "..." : el.volumeInfo.title}</h3>
                                        <small class="text-[13px] font-[500] text-[#757881]">${el.volumeInfo.authors[0]}</small>
                                        <small class="text-[13px] font-[500] text-[#757881]">${el.volumeInfo.publishedDate}</small>
                                    </div>

                                    <div class="bookmark-flex pb-[5px] flex items-center justify-between">
                                    <button data-id='${el.id}'
                                    class="cursor-pointer text-[14px] font-[600] bookmark-btn py-[10px] px-[22px] rounded-[4px] duration-300 bg-[#FFD80D] hover:bg-[#ffd70d97]">
                                    Bookmark
                                    </button>
                                    
                                    <a href='${el.volumeInfo.infoLink}' target="_blank">
                                    <button
                                    class="cursor-pointer more_info text-[14px] text-[#0D75FF] font-[600] bookmark-btn py-[10px] px-[22px] rounded-[4px] bg-[#cedcf16b] duration-300 hover:bg-[#0d76ffe0] hover:text-[#fff]">
                                    More Info
                                    </button>
                                    </a>
                                    </div>
                                    
                                    <a href='${el.volumeInfo.previewLink}' target="_blank">
                                    <button class="cursor-pointer py-[10px] px-[105px] rounded-[4px] bg-[#75828A] text-[#fff] duration-300 hover:bg-[#75828ac5]">Read</button>
                                    </a>
                                </div>
            
            
            `

            cardWrapper.append(div)
        })
    }
}

// RENDER DATA ENDED



// SEARCH PROCESSING STARTED

// search.addEventListener('keyup',(e)=>{
//     let result3 = e.target.value;

//     let SearchResult = result.filter((el)=> el.title.toLowerCase().includes(result3.toLowerCase()));

//     cardWrapper.innerHTML = '';
//     RenderData(SearchResult);
// })



// SEARCH PROCESSING ENDED



// SIGN UP STARTED

// let nameUser = document.querySelector('.username2');
// let parol2 = document.querySelector('.password');

// nameUser.addEventListener('keyup',(e)=>{
//     console.log(e.target.value);
// })

// if(nameUser.value == user.users.username && parol2.value == user.users.password){
//     console.log("True");
// }


// SIGN UP ENDED


// DARK MODE STARTED

let body2 = document.querySelector('body');
let sun = document.querySelector('.bxs-sun');

sun.addEventListener('click',(e)=>{
    body2.classList.toggle('dark23');
})


// DARK MODE ENDED



// BOOKMARK PROCESSING STARTED

let bookmarkList = [];

cardWrapper.addEventListener('click',(e)=>{
    if(e.target.classList.contains('bookmark-btn')){
        let id = e.target.dataset.id;

        localgetData(id);

        // if(!bookmarkList.includes(id)){
        //     bookmarkList.push(id)
        // }
    }
})

// BOOKMARK PROCESSING ENDED


// LOCAL STORAGE FOR BOOKMART STARTED

async function localgetData(id){
    localStorage.setItem('Bookmark',id);
    let bookmark = localStorage.getItem('Bookmark');

    let response = await fetch(`${baseURL}/volumes/${bookmark}`)
    let result = await response.json()
    console.log(result);


    let div = document.createElement('div');
    div.classList.add('bookmark' ,'flex' ,'justify-between', 'py-[15px]' ,'px-[10px]', 'bg-transparent' ,'rounded-[4px]','w-[218px]')
    div.innerHTML = `
                                <div>
                                    <h3 class="text-[16px] font-[600]">${result.volumeInfo.title.length < 100 ? result.volumeInfo.title.substring(0,10) : result.volumeInfo.title }</h3>
                                    <small class="text-[13px] font-[500] text-[#757881]">${result.volumeInfo.authors[0].length < 100 ? result.volumeInfo.authors[0].substring(0,10) : result.volumeInfo.authors[0]}</small>
                                </div>

                                <div class="flex items-center gap-1">
                                    <i class='bx bx-book-open text-[26px] cursor-pointer text-[#75828A]'></i>
                                    <i class='delete-book bx bx-task-x text-[26px] cursor-pointer text-[#FF6231]'></i>
                                </div>
    
    `

        bookmarkWrapper.append(div);

}
    



// LOCAL STORAGE FOR BOOKMART ENDED



bookmarkWrapper.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete-book')){
        e.target.parentNode.innerHTML = ' ';
    }
})
