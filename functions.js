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
        console.log("BtnRegis")
        let reg = new Register({
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
        this.name = obj['name']
        this.date = obj['date']
        this.initial = obj['initial']
        this.final = obj['final']
        this.specification = obj['specification']
        this.requirements = obj['requirements']
        this.category = obj['category']
    }
}