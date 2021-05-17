(function(){
    let iframe = document.querySelector('[data-src="segment"]')
    let page = localStorage.getItem("page") 
    if(page != null){
        iframe.src = page
    }
    let $btn = document.querySelectorAll('[data-trade]');
    for(let btns of $btn){
        btns.onclick = function(){
            let val =  this.dataset.trade
            
            
            localStorage.setItem("page", val)

            $('[data-content]').fadeOut();

            setTimeout(()=>{  
                iframe.src = val;
                $('[data-content]').fadeIn();
            }, 700)
        }
    }
    
}())