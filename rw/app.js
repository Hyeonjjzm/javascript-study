const reviewList = [
    {
        id: 1,
        name: "911",
        type: "sport",
        img: "img/911.png",
        text: "포르쉐 스포츠카"
    },
    {
        id: 2,
        name: "morning",
        type: "mini",
        img: "img/goodmorning.png",
        text: "KIA 소형 미니 차"
    },
    {
        id: 3,
        name: "i7",
        type: "eco-car",
        img: "img/i7.png",
        text: "bmw 전기 suv"
    },
    {
        id: 4,
        name: "grandeur",
        type: "father_car",
        img: "img/grandguar.png",
        text: "국민 우리 아빠 차"
    },
    {
        id: 5,
        name: "포크레인",
        type: "gongsa",
        img: "img/포크레인.png",
        text: "파스타 포크 대신 쓸 수 있음"
    },
    {
        id: 6,
        name: "k3",
        type: "준준형",
        img: "img/k3.png",
        text: "우리 혜성이 아버지 차"
    }
]
const mainImg = document.querySelector("#main-img");
const foodName = document.querySelector("#food-name");
const type = document.querySelector("#type");
const info = document.querySelector("#info");

const preBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

let currentIndex = 0;
window.addEventListener("DOMContentLoaded", function(){
    let item = reviewList[currentIndex];
    mainImg.src = item.img;
    foodName.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;
})

function showReview(index){
    const item = reviewList[index];
    mainImg.src = item.img;
    foodName.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;
}

preBtn.addEventListener("click", function(){
    currentIndex--;
    if (currentIndex < 0){
        currentIndex = reviewList.length -1
    }
    showReview(currentIndex);
})

nextBtn.addEventListener("click", function(){
    currentIndex++;
    if (currentIndex >= reviewList.length){
        currentIndex =0;
    }
    showReview(currentIndex);
})