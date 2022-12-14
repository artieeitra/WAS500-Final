let datadel = document.getElementsByClassName("delete")
for(let i = 0; i < datadel.length; i++){
    let click = datadel[i]
    click.addEventListener("click", function(){
        let question = "Are you sure you want to delete this book?"
        if(confirm(question) == true){
             location.href = "/delete/" + click.getAttribute("datadel")
        }
    })
}