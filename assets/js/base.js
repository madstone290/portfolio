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
const modalBody = document.querySelector(".modal__body");
modal.isOpen = () => {
    return modal.style.display == "flex";
};
modal.closeCallback = function () { };
modal.open = () => {
    modal.style.display = "flex";
};
modal.close = function () {
    modal.style.display = "none";
    if (modal.closeCallback)
        modal.closeCallback();
};
modal.setContent = function (content) {
    modalBody.innerHTML = "";
    modalBody.appendChild(content);
};

modal.addEventListener("click", (evt) => {
    if (evt.target == modal) {
        modal.close();
    }
});

const modalClose = document.querySelector(".modal__close");
modalClose.addEventListener("click", (evt) => {
    modal.close();
});

// 이미지 슬라이더
const sliderManager = {
    currentItemIndexMap: new Map(), // 슬라이더의 현재 아이템 인덱스. key: 슬라이더 인덱스, value: 아이템인덱스
    sliderItemsMap: new Map(), // 슬라이더의 아이템. key: 슬라이더 인덱스, value: 아이템목록
    scaledSliderItemsMap: new Map(), // 현재 팝업된 슬라이더의 아이템. key: 슬라이더 인덱스, value: 아이템목록
    sliders: document.querySelectorAll(".slider"),
    init: function () {
        for (let index = 0; index < this.sliders.length; index++) {
            // 기본 인덱스 0 설정
            this.currentItemIndexMap.set(index, 0);

            // 아이템 배열 조회
            const items = this.sliders[index].querySelectorAll(".slider__item");
            this.sliderItemsMap.set(index, items);
        }

        for (let index = 0; index < this.sliders.length; index++) {
            this.show(index, this.currentItemIndexMap.get(index));
        }
    },
    move: function (sliderIndex, number) {
        this.show(sliderIndex, this.currentItemIndexMap.get(sliderIndex) + number);
    },
    show: function (sliderIndex, itemIndex) {
        // 아이템 인덱스 유효성 검사
        const itemsCount =this. sliderItemsMap.get(sliderIndex).length;
        const validIndex = (itemIndex + itemsCount) % itemsCount;

        // 아이템 표시
        this.showInternal(sliderIndex, validIndex);

        // 현재 아이템 인덱스 갱신
        this.currentItemIndexMap.set(sliderIndex, validIndex);
    },
    showInternal: function (sliderIndex, targetItemIndex) {
        const sliderItems = this.sliderItemsMap.get(sliderIndex);
        for (let itemIndex = 0; itemIndex < sliderItems.length; itemIndex++) {
            if (itemIndex == targetItemIndex)
                sliderItems[itemIndex].style.display = "block"
            else
                sliderItems[itemIndex].style.display = "none"
        }

        const scaledSliderItems = this.scaledSliderItemsMap.get(sliderIndex);
        if(!scaledSliderItems)
            return;
        for (let itemIndex = 0; itemIndex < scaledSliderItems.length; itemIndex++) {
            if (itemIndex == targetItemIndex)
                scaledSliderItems[itemIndex].style.display = "block"
            else
                scaledSliderItems[itemIndex].style.display = "none"
        }
    }
};
sliderManager.init();

function moveSlider(groupIndex, itemIndex){
    sliderManager.move(groupIndex, itemIndex);
}

// 이미지 슬라이드 클릭시 모달 팝업
for (let index = 0; index < sliderManager.sliders.length; index++) {
    const slider = sliderManager.sliders[index];
    slider.addEventListener("click", (evt) => {
        // 현재 모달상태가 아니고 img태그에서 클릭이 발생한 경우에만 모달 팝업
        if (modal.isOpen())
            return;
        if (evt.target.tagName.toLowerCase() != "img")
            return;

        // 현재 슬라이더를 모달창에 복사 후 팝업
        const copiedSlider = slider.cloneNode(true);
        console.log(copiedSlider);
        modal.setContent(copiedSlider);
        modal.closeCallback = () => {
            // callback 적용
        };
        modal.open();

        // 슬라이더 동작을 위해 복사된 슬라이더의 아이템 설정
        const items = copiedSlider.querySelectorAll(".slider__item");
        sliderManager.scaledSliderItemsMap.set(index, items);
    });
}