var lastScrollTop = 0;
const headerInfor = document.querySelector('.header__infor');
const linkList = document.querySelector('.link-list');
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
document.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop){
        // downscroll code
        if(window.pageYOffset>70 && !headerInfor.classList.contains('sticky')) {
            headerInfor.classList.add('sticky');
            // link-list.style.margin-top = 
        }
    } else {
        // upscroll code
        if(window.pageYOffset<70 && headerInfor.classList.contains('sticky')) {
            headerInfor.classList.remove('sticky');
        }
    }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);