let Storage = function(){

    this.select = function($param){
        let info = Object.values($param)
        for(let itens of info){
            let obj = localStorage.getItem(itens)
        
            if($param.id){
                if(obj == null){
                    localStorage.setItem('id', 1)
                    return 1;
                }else{
                    let status = parseInt(obj) + 1
                    localStorage.setItem('id', status);
                    return status
                }
            }else{
                return obj;
            }
        }
    }

    this.save = function($id, $dates){      
        try{
            localStorage.setItem($id, JSON.stringify($dates));
        }catch(err){
            throw new Error("Os dados não foram inseridos no localStorage");
        }
    }

    this.delet = function($act){
        let btns_close = document.querySelectorAll($act.btn);

        if($act.btn){
            if($act.action == "single"){
                for(let btn_close of btns_close){
                    btn_close.onclick = function(){
                        let $modal = document.querySelector($act.modal[0].content);
                        let title = $modal.querySelector($act.modal[0].title[0].coord);
                        let message = $modal.querySelector($act.modal[0].message[0].coord);
                        let footer = $modal.querySelector($act.modal[0].footer[0].coord);

                        localStorage.removeItem(this.dataset.id);
                        if(localStorage.getItem(this.dataset.id) == null){
                           
                            title.classList.add('text-success');
                            title.classList.remove('text-danger');
                            title.innerHTML = $act.modal[0].title[0].text[0].sucess;
                            message.innerText = $act.modal[0].message[0].text[0].sucess;
                            footer.classList.add('btn-success');
                            footer.classList.remove('btn-danger');
                            footer.innerHTML = $act.modal[0].footer[0].btn[0].sucess;
                           
                            $($act.modal[0].content).modal('show');
                            footer.onclick = () =>{
                                window.location.reload();
                            }
                           
                        }else{
                            title.classList.remove('text-success');
                            title.classList.add('text-danger');
                            title.innerHTML = $act.modal[0].title[0].text[0].failed;
                            message.innerText = $act.modal[0].message[0].text[0].failed;
                            footer.classList.remove('btn-success');
                            footer.classList.add('btn-danger');
                            footer.innerHTML = $act.modal[0].footer[0].btn[0].failed;

                            $($act.modal[0].content).modal('show');
                        }
                        
                    }
                }
            }else if($act.action == "all"){
                for(let btn_close of btns_close){
                    btn_close.onclick = function(){
                        for(let z = 1; z <= btns_close.length; z++){
                            localStorage.removeItem(z)
                            
                        }
                        window.location.reload();
                    }
                }
            }else{
                throw new Error("Comando inválido; Insira nos parâmetros o valor 'single' ou 'all'");
            }
        }
        if($act.key){
            if($act.key == "single"){
                localStorage.removeItem($act.key)
                window.location.reload();
            }else if($act.key == "all"){
                let val = localStorage.getItem('id');
                for(let r = 1; r <= val; r++ ){
                    localStorage.removeItem(r)
                }
                window.location.reload();
            }
        }
        
      
    }

    this.toConvert = function($obj){
        let list = new Array();

        let id = this.select($obj);
        for(let x =1; x <= id; x++){
            
            let bloco = JSON.parse(this.select({"fields": x}));

            if(bloco === null){
                continue
            }
            bloco['id'] = x; 

            list.push(bloco);
        }

        return list; 
    }
}

export{
    Storage
}