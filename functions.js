$(document).ready(()=>{    
    $.ajax({
        url: "http://localhost/JQueryAjax---ClipBoard/category.json",
        datatype: JSON,
        success: (result)=>{
            let id=0
            result.forEach(()=>{
                $('#btn-select').append("<option value='"+result[id]['category']+"'>"+result[id]['category']+"</option>")
                id++
            })
        },
        error: ()=>{
            console.log("error select category")
        } 
    })
    $('.btn-register').on('click', ()=>{
        
        let atualdate = new Date()
        atualdate = atualdate.getFullYear()+'-'+(atualdate.getMonth()+1)+'-'+atualdate.getDate()
        
        let reg = new Register({
            'today': atualdate,
            'name': $('.reg-name').val(),
            'date': $('.reg-date').val(),
            'initial': $('.reg-initial').val(),
            'final': $('.reg-final').val(),
            'specification': $('.reg-spe').val(),
            'requirements': $('.reg-req').val(),
            'category': $('.reg-cat').val()
        })
        
        console.log(reg)
        if(reg.autentic()){
            alert("Cadastrado com Sucesso")
        } else{
            alert("Erro no Cadastramento")
        }
    })
})

class Register{
    constructor(obj){
        this.atualdate = obj['today']
        this.name = obj['name']
        this.date = obj['date']
        this.initial = obj['initial']
        this.final = obj['final']
        this.specification = obj['specification']
        this.requirements = obj['requirements']
        this.category = obj['category']
    }

    autdate(date, atualdate){
        let aut_date = date.split('-')
        aut_date = aut_date[2]+'/'+aut_date[1]+'/'+aut_date[0]

        let aut_atualdate = atualdate.split('-')
        aut_atualdate = aut_atualdate[2]+'/'+aut_atualdate[1]+'/'+aut_atualdate[0]

        if(aut_atualdate <= aut_date){
            return true
        } else{
            return false
        }
    }

    autentic(){
        if(
            this.name != "" && this.name != undefined &&
            this.date != "" && this.date != undefined &&
            this.initial != "" && this.initial != undefined &&
            this.final != "" && this.final != undefined &&
            this.specification != "" && this.specification != undefined &&
            this.requirements != "" && this.requirements != undefined &&
            this.category != "" && this.category != undefined
        ){
            if(this.final > this.initial && this.autdate(this.date, this.atualdate)){
                return true
            }
        } else{
            return false
        }
    }
}