var Form = function(){


    this.validate = function($values, $reference){
        let bool = true;
        let fields_reference = Object.values($reference)

        for(let itens of fields_reference){
            if(!$values[itens]){
                bool = false;
            }
        }

        return bool;
    }

    this.clean = function($form){

        $form = document.querySelectorAll($form)

        for(let forms of $form){
            let $inputs = forms.querySelectorAll('input')

            for(let inputs of $inputs){
                inputs.value = '';
            }

            let $select = forms.querySelectorAll('select')

            for(let select of $select){
                select.value = '';
            }

            let $textarea = forms.querySelectorAll('textarea')

            for(let textarea of $textarea){
                textarea.value = '';
            }

        }
    }

    this.modal_Alert = function($status, $coord, text){
        let $modal = document.querySelector($coord);
        let title = $modal.querySelector('.modal-title')
        let message = $modal.querySelector('.text-center h6')
        let footer = $modal.querySelector('.modal-footer button')

        if($status == "success"){
            title.classList.add('text-success');
            title.classList.remove('text-danger');
            title.innerHTML = text.title;
            message.innerText = text.describe;
            footer.classList.add('btn-success');
            footer.classList.remove('btn-danger');
            footer.innerHTML = "<strong>fechar</strong>";
        }else{
            title.classList.remove('text-success');
            title.classList.add('text-danger');
            title.innerHTML = text.title;
            message.innerText = text.describe;
            footer.classList.remove('btn-success');
            footer.classList.add('btn-danger');
            footer.innerHTML = "<strong>Voltar e Corrigir</strong>";
        }
        $($coord).modal('show')
    }
}

export{
    Form
}