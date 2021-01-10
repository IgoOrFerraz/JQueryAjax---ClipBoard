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

    autentic(){
        if(
            this.name != '' || this.name != undefined &&
            this.date != '' || this.date != undefined &&
            this.initial != '' || this.initial != undefined &&
            this.final != '' || this.final != undefined &&
            this.specification != '' || this.specification != undefined &&
            this.requirements != '' || this.requirements != undefined &&
            this.category != '' || this.category != undefined
        ){
            if(
                this.final > this.initial &&
                autenticdate(this.atualdate, this.date)
            ){
                return true
            } else{
                return false
            }
        } else{
            return false
        }
    }
    autenticdate(atualdate, date){
        
    }
}