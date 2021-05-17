let Table = function(){

    this.Allfilter = function($obj, param, $indice){
        let newObj;  let nu = 0;
        let $array = Object.values(param);
        $obj = Object.values($obj);

        for(let frames of $array){
            newObj = $obj.filter(f => f[$indice[nu]] == frames);
            newObj["id"] = nu + 1
            nu++
        }

        return newObj;
    }
}

export{
    Table
}