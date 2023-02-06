// 커리어 프로젝트 열기/닫기 버튼 핸들러
const btn = document.getElementById("btn-careers-projects-1");
const list = document.getElementById("careers-projects-1");
btn.addEventListener("click", (ev)=>{
    if(btn.textContent == "열기")
    {
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
modalClose.addEventListener("click", (evt)=>{
    modal.style.display = "none";
});

// 이미지 클릭시 확대 다이얼로그 팝업
const projectImgs = document.querySelectorAll(".projects__item-image");
const modalImg = document.querySelector(".modal__img");
for(const img of projectImgs){
    img.addEventListener("click", (evt)=>{
        modalImg.src = img.src;
        modal.style.display = "block";
    });
}
