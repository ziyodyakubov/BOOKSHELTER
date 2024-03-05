// "use strict";

// GLOBAL VARIABLES STARTED

let baseURL = 'https://www.googleapis.com/books/v1';
let Searchkey = 'volumes?q=harry&startIndex=2';
let Bookskey = 'volumes?q=computer%20science&startIndex=0&maxResults=39';
let cardWrapper = document.querySelector('.card-wrapper');
let search = document.querySelector('.search');

// GLOBAL VARIABLES ENDED





// IIFE FUNCTION FOR DATA STARTED

(async function () {
    let response = await fetch(`${baseURL}/${Bookskey}`);
    var result = await response.json();
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
            
                                <div class="bg-[#F8FAFD] py-[18px] pl-[20px] pr-[28px] rounded-[5px] ">
                                    <img class="h-[201px] m-auto" src="${el.volumeInfo.imageLinks.thumbnail}" alt="python">
                                </div>

                                <div class="card-title pt-[19px]">
                                    <div class="flex flex-col gap-[2px] pb-[10px]">
                                        <h3 class="text-[18px] font-[600]">${el.volumeInfo.title.length < 80 ? el.volumeInfo.title.substring(0,20) + "..." : el.volumeInfo.title}</h3>
                                        <small class="text-[13px] font-[500] text-[#757881]">${el.volumeInfo.authors[0]}</small>
                                        <small class="text-[13px] font-[500] text-[#757881]">${el.volumeInfo.publishedDate}</small>
                                    </div>

                                    <div class="bookmark-flex pb-[5px] flex items-center justify-between">
                                    <button
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

search.addEventListener('keyup',(e)=>{
    let result3 = e.target.value;

    let SearchResult = result.filter((el)=> el.title.toLowerCase().includes(result3.toLowerCase()));

    cardWrapper.innerHTML = '';
    RenderData(SearchResult);
})



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
    console.log("wadawd");
    body2.classList.toggle('dark23');
})


// DARK MODE ENDED