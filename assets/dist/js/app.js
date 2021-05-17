import * as cptr from './modules/capture.js';
import * as dt from './modules/data.js';
import * as frm from './modules/form.js';
import * as tb from './modules/table.js';


const cmd = new cptr.Capture();
const cursor = new dt.Storage();
const ajust = new frm.Form();
const table = new tb.Table();

let values;
if(document.querySelector('.save')){
    document.querySelector('#submit').onclick = ()=>{
        //Capturar os valores do form
        values = cmd.fields({
            form: '#register',
            btn: '#submit',
            event: "click"
        });
    
        //Salvar os valores
        if(values){
            //Campos de refência que precisam existir para que o form esteja valido
            let references = {'describe':'describe', 'type':'type', 'day':'day', 'month':'month', 'year':'year', 'nickname': 'nickname', 'price':'price'}
            
            //validador de campos 
            if(ajust.validate(values, references)){
    
                // Buscar identificador
                let id = cursor.select({
                    'id':'id',
                })
                // Captura o valor da data atual e cria um novo campo no objeto
                values['notice'] = cmd.date();
                
                // Salva os valores
                cursor.save(id,values);
    
                // Limpa todos os fields do definido
                ajust.clean('#register');
    
                ajust.modal_Alert('success', '#statusGravacao', {title: '<strong>Informações salvas! ;)</strong>', describe:'Dados inseridos com sucesso.'});
            }else{
                ajust.modal_Alert('error', '#statusGravacao', {title: '<strong>Ops! Ocorreu um erro :/</strong>', describe:'Existem campos obrigatórios que não foram preenchidos.'});
            }
    
        }
    
        //Consultar valores
        
    }
    
}



// PAGE SELECT - LIST TABLE
if(document.querySelector('.select')){
    let lists = cursor.toConvert({"target":"id"})
    let tbody = document.querySelector('.table tbody');
    for(let list of lists){
        // INSERT VALUES TABLE
        
        let tRow = tbody.insertRow();

        tRow.insertCell(0).innerHTML = `${list.day}/${list.month}/${list.year}`;
        tRow.insertCell(1).innerHTML = list.type
        tRow.insertCell(2).innerHTML = list.describe
        tRow.insertCell(3).innerHTML = "R$: "+list.price
        tRow.insertCell(4).innerHTML = '<button type="button" class="btn-close text-danger p-0 border-0 btn btn-light" data-id="'+list.id+'"><i class=" mb-0 h3 fas fa-window-close"></i></button>'
        
        cursor.delet({
            //key: '',
            btn: ".btn-close",
            action: "single", //or all
            modal: [
                {
                    content: "#statusGravacao",
                    title: [{
                        coord: ".modal-title",
                        text:[{
                            sucess: "Deletado com sucesso!",
                            failed: "Desculpe, ocorreu algum erro"
                        }] 
                    }],
                    message: [{
                        coord: ".text-center h6",
                        text: [{
                            sucess: "Os dados foram retirados do seu banco local de informações",
                            failed: "Desculpe, mas aconteceu algum erro na exclusão da informação. <br> Caso o erro persista, procure o suporte."
                        }] 
                    }],
                    footer:[{
                        coord: '.modal-footer button',
                        btn: [{
                            sucess: "<strong>fechar</strong>",
                            failed: "<strong>Voltar e Corrigir</strong>"
                        }]
                    }]
                }
            ]
        });
    }

    
    document.querySelector('#submit').onclick = function(){
        // Recolhimento de campos
        let param = cmd.fields({
            form: '#search',
            btn: '#submit',
            event: "click"
        });
        
        let indices = cmd.info({
            form: '#search',
            btn: '#submit',
            event: "click"
        })

        // Limpeza de campos
        ajust.clean('#search');
        
        // filtrando campos
        let call_lists = table.Allfilter(lists, param, indices);
     
        tbody.innerHTML = " "
        if(call_lists == undefined){
            for(let list of lists){
                // INSERT VALUES TABLE
                
                let tRow = tbody.insertRow();
        
                tRow.insertCell(0).innerHTML = `${list.day}/${list.month}/${list.year}`;
                tRow.insertCell(1).innerHTML = list.type
                tRow.insertCell(2).innerHTML = list.describe
                tRow.insertCell(3).innerHTML = "R$: "+list.price
                tRow.insertCell(4).innerHTML = '<button type="button" class="btn-close text-danger p-0 border-0 btn btn-light" data-id="'+list.id+'"><i class=" mb-0 h3 fas fa-window-close"></i></button>'
            }
            
            cursor.delet({
                 //key: '',
                 btn: ".btn-close",
                 action: "single", //or all
                 modal: [
                    {
                        content: "#statusGravacao",
                        title: [{
                            coord: ".modal-title",
                            text:[{
                                sucess: "Deletado com sucesso!",
                                failed: "Desculpe, ocorreu algum erro"
                            }] 
                        }],
                        message: [{
                            coord: ".text-center h6",
                            text: [{
                                sucess: "Os dados foram retirados do seu banco local de informações",
                                failed: "Desculpe, mas aconteceu algum erro na exclusão da informação. <br> Caso o erro persista, procure o suporte."
                            }] 
                        }],
                        footer:[{
                            coord: '.modal-footer button',
                            btn: [{
                                sucess: "<strong>fechar</strong>",
                                failed: "<strong>Voltar e Corrigir</strong>"
                            }]
                        }]
                    }
                ]
            });
        }else{
            for(let call_list of call_lists){
                let tRow = tbody.insertRow();
                
                tRow.insertCell(0).innerHTML = `${call_list.day}/${call_list.month}/${call_list.year}`;
                tRow.insertCell(1).innerHTML = call_list.type;
                tRow.insertCell(2).innerHTML = call_list.describe;
                tRow.insertCell(3).innerHTML = "R$: "+call_list.price;
                tRow.insertCell(4).innerHTML = '<button type="button" class="btn-close text-danger p-0 border-0 btn btn-light" data-id="'+call_list.id+'"><i class="mb-0 h3 fas fa-window-close"></i></button>'
            }

            
            cursor.delet({
                //key: '',
                btn: ".btn-close",
                action: "single", //or all
                modal: [
                    {
                        content: "#statusGravacao",
                        title: [{
                            coord: ".modal-title",
                            text:[{
                                sucess: "Deletado com sucesso!",
                                failed: "Desculpe, ocorreu algum erro"
                            }] 
                        }],
                        message: [{
                            coord: ".text-center h6",
                            text: [{
                                sucess: "Os dados foram retirados do seu banco local de informações",
                                failed: "Desculpe, mas aconteceu algum erro na exclusão da informação. <br> Caso o erro persista, procure o suporte."
                            }] 
                        }],
                        footer:[{
                            coord: '.modal-footer button',
                            btn: [{
                                sucess: "<strong>fechar</strong>",
                                failed: "<strong>Voltar e Corrigir</strong>"
                            }]
                        }]
                    }
                ]
            });
        }
    }

}





