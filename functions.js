$(document).ready(()=>{    
    $.ajax({
        url: "http://localhost/JQueryAjax---ClipBoard/category.json",
        datatype: JSON,
        success: (result)=>{
            let id=0
            result.forEach(()=>{
                $('#btn-select').append("<option value='"+id+"'>"+result[id]['category']+"</option>")
                id++
            })
        },
        error: ()=>{
            console.log("Error")
        } 
    })
})