// "use strict";

// GLOBAL VARIABLES STARTED

let baseURL = 'https://www.googleapis.com/books/v1';
let Searchkey = 'volumes?q=harry&startIndex=2';
let Bookskey = 'volumes?q=computer%20science&startIndex=0&maxResults=30';
let cardWrapper = document.querySelector('.card-wrapper');

// GLOBAL VARIABLES ENDED





// IIFE FUNCTION FOR DATA STARTED

(async function () {
    let response = await fetch(`${baseURL}/${Searchkey}`);
    let result = await response.json();
    console.log(result.items);
    RenderData(result.items)
}())

// IIFE FUNCTION FOR DATA ENDED






// RENDER DATA STARTED

function RenderData(data) {
    if (data.length) {
        data.forEach(el => {
            let div = document.createElement('div');
            div.classList.add('rounded-[5px]', 'border-[1px]', 'border-[#E3E6EB]' ,'shadow-md', 'card', 'w-[282px]' ,'pt-[13px]', 'pl-[18px]' ,'pr-[15px]' ,'pb-[13px]');
            div.innerHTML = `
            
                                <div class="bg-[#F8FAFD] py-[18px] pl-[20px] pr-[28px] rounded-[5px] ">
                                    <img class="h-[201px] m-auto" src="${el.volumeInfo.imageLinks.thumbnail}" alt="python">
                                </div>

                                <div class="card-title pt-[19px]">
                                    <div class="flex flex-col gap-[2px] pb-[10px]">
                                        <h3 class="text-[18px] font-[600]">Python</h3>
                                        <small class="text-[13px] font-[500] text-[#757881]">David M. Beazley</small>
                                        <small class="text-[13px] font-[500] text-[#757881]">2009</small>
                                    </div>

                                    <div class="bookmark-flex pb-[5px] flex items-center justify-between">
                                        <button
                                            class="text-[14px] font-[600] bookmark-btn py-[10px] px-[22px] rounded-[4px] duration-300 bg-[#FFD80D] hover:bg-[#ffd70d97]">
                                            Bookmark
                                        </button>

                                        <button
                                            class="more_info text-[14px] text-[#0D75FF] font-[600] bookmark-btn py-[10px] px-[22px] rounded-[4px] bg-[#cedcf16b] duration-300 hover:bg-[#0d76ffe0] hover:text-[#fff]">
                                            More Info
                                        </button>
                                    </div>

                                    <button
                                        class="py-[10px] px-[105px] rounded-[4px] bg-[#75828A] text-[#fff] duration-300 hover:bg-[#75828ac5]">Read</button>
                                </div>
            
            
            `

            cardWrapper.append(div)
        })
    }
}

// RENDER DATA ENDED