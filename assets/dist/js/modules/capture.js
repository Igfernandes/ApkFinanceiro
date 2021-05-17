let Capture = function(){

    //Método 'field' : Buscando único campo.
    this.field = function($field){

        let $btn = document.querySelector($field.btn)

        //SEARCH FIELDS
        let $form = document.querySelector($field.form);
        $form.onsubmit = (event)=>{
            event.preventDefault();
        }
        let val; 

        if($field.nome){
            val = $form.querySelector($field.camp).selectedIndex;
        }else if($field.camp){
            val = $form.querySelector($field.camp).selectedIndex;
        }else if($field.camp){
            val = $form.querySelector($field.camp).selectedIndex;
        }else if($field.camp){
            val = $form.querySelector($field.camp).selectedIndex;
        }else if($field.camp){
            val = $form.querySelector($field.camp).selectedIndex;
        }else if($field.camp){
            val = $form.querySelector($field.camp).value;
        }else if($field.camp){
            val = $form.querySelector($field.camp).value;
        }

        return val
            
    }   

    this.fields = function($fields){

        let $form = document.querySelector($fields.form)

        $form.onsubmit = (event)=>{
            event.preventDefault();
        }

        let item;let val = {};let rotulo;let nu = 0;
        
        //Buscar Valores em inputs
        let $input = $form.querySelectorAll('input');
        
        for(let i of $input){             
            if(i.value){
                item = i.value
                rotulo = i.getAttribute('name')
                val[rotulo] = item 
            }
        }

        //Buscar valores em selects
        let $select = $form.querySelectorAll('select');
        for(let s of $select){
            if(s.selectedIndex){
                item = s.value
                rotulo = s.getAttribute('name')
                val[rotulo] = item 
            }
        }

        //Buscar valores em checkboxs
        let $textarea = $form.querySelectorAll('textarea')
        for(let t of $textarea){
            if(t.value){
                item = t.value
                rotulo = t.getAttribute('name')
                val[rotulo] = item 
            }
        }
        return val;
    }

    this.info = function($fields){
        let $form = document.querySelector($fields.form)

        $form.onsubmit = (event)=>{
            event.preventDefault();
        }

        let item;let val = new Array();let nu = 0;
        
        //Buscar Valores em inputs
        let $input = $form.querySelectorAll('input');
        
        for(let i of $input){             
            if(i.value){
                val[nu] = i.getAttribute('name')
                nu++;
            }
        }

        //Buscar valores em selects
        let $select = $form.querySelectorAll('select');
        for(let s of $select){
            if(s.selectedIndex){
                val[nu] = s.getAttribute('name')
                nu++;
            }
        }

        //Buscar valores em checkboxs
        let $textarea = $form.querySelectorAll('textarea')
        for(let t of $textarea){
            if(t.value){
                val[nu] = s.getAttribute('name')
                nu++ 
            }
        }
        return val;
    }

    this.date = function(){
        let date = new Date();
        let date_att;

        if(date.getDay() < 10){
            date_att = '0'+date.getDay()+'/'
        }if(date.getMonth() < 10){
            date_att += '0'+date.getMonth()+'/'
        }
        date_att += date.getFullYear()+"  --  "+date.getHours()+":"+date.getMinutes();

        return date_att
    }
}


export{
    Capture
}


/* MÉTODO FIELD 

valor = cmd.field({
        form: '#register',
        btn: '#submit',
        event: "click",
        camp: "[name='day']"
    })    
 
 */

 /* MÉTODO FIELDS


valor = cmd.fields({
    form: '#register',
    btn: '#submit',
    event: "click"
})    

 */