// 커리어 프로젝트 열기/닫기 버튼 핸들러
const btn = document.getElementById("btn-careers-projects-1");
const list = document.getElementById("careers-projects-1");
btn.addEventListener("click", (ev) => {
    if (btn.textContent == "열기") {
        list.hidden = false;
        btn.textContent = "닫기";
    }
    else {

        list.hidden = true;
        btn.textContent = "열기";
    }
});

// 헤더 사이즈 변경시 패딩 설정 핸들러
const root = document.querySelector(':root');
const rootStyle = getComputedStyle(root);
const header = document.getElementsByClassName("header")[0];

function outputsize() {
    root.style.setProperty("--header-padding", header.offsetHeight + "px");
};
new ResizeObserver(outputsize).observe(header);


// 모달
const modal = document.querySelector('.modal');
const modalClose = document.querySelector(".modal__close");
modal.addEventListener("click", (evt) => {
    if (evt.target == modal)
        modal.style.display = "none";
});

modalClose.addEventListener("click", (evt) => {
    modal.style.display = "none";
});

// 이미지 클릭시 확대 다이얼로그 팝업
const projectImgs = document.querySelectorAll(".slider__img");
const modalImg = document.querySelector(".modal__img");
for (const img of projectImgs) {
    img.addEventListener("click", (evt) => {
        modalImg.src = img.src;
        modal.style.display = "flex";
    });
}


// 이미지 슬라이드
const currentItemIndexMap = new Map(); // key: 슬라이더인덱스, value: 현재 선택된 아이템 인덱스
const sliderItemsMap = new Map(); // key: 슬라이더 인덱스, value: 슬라이더에 포함된 아이템목록
const sliders = document.querySelectorAll(".slider");

for(let index = 0; index < sliders.length ; index++){
    
    // 기본 인덱스 0 설정
    currentItemIndexMap.set(index, 0);
    
    // 아이템 배열 조회
    const items = sliders[index].querySelectorAll(".slider__item");
    sliderItemsMap.set(index, items);
}

// 현재 인덱스에 해당하는 아이템 보이기
for(let index = 0; index < sliders.length; index++){
    showSlider(index, currentItemIndexMap.get(index));
}

function moveSlider(sliderIndex, number) {
    showSlider(sliderIndex, currentItemIndexMap.get(sliderIndex) + number);
}

function showSlider(sliderIndex, itemIndex) {
    // 아이템 인덱스 유효성 검사
    const itemsCount = sliderItemsMap.get(sliderIndex).length;
    const validIndex = (itemIndex + itemsCount) % itemsCount;

    // 아이템 표시
    showSliderInternal(sliderIndex, validIndex);

    // 현재 아이템 인덱스 갱신
    currentItemIndexMap.set(sliderIndex ,validIndex);
}

function showSliderInternal(sliderIndex, targetItemIndex) {
    const sliderItems = sliderItemsMap.get(sliderIndex);
    
    for (let itemIndex = 0; itemIndex < sliderItems.length; itemIndex++) {
        if (itemIndex == targetItemIndex)
            sliderItems[itemIndex].style.display = "block"
        else
            sliderItems[itemIndex].style.display = "none"
    }
}
