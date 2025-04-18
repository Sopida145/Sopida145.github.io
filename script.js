const pic = [...document.querySelectorAll('.pic')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

pic.forEach((item,i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth;
    })
})