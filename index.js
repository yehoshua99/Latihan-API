let todos = [];
let keyword = "";
let page = 1;
let limit = 10;


fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response)=>{
        console.log(response);
        return response.json();
    }).then((response)=>{
        todos = response
        running()
    })
    

function running(){
    const filtered = todos.filter(todo => {
        if (todo.title.toLowerCase().includes(keyword)) return todo
    })
    const sliceTodos = filtered.slice((page-1)*limit, page*limit);
    const boxCard = sliceTodos.reduce((x,y)=> {
        return (x +=`
            <div class="card col-5 ms-4 mt-4 text-center">
                <div id="cardDiv" class="bdcard">
                    <p>${y.userId}</p>
                    <p>${y.id}</p
                    <p>${y.title}</p
                    <p>${y.completed ? `<span style="color:green">completed</span>` : `<span style="color:red">not completed</span>`}</p>
                </div>
            </div>    
                    
        `
        )

    },'')
    document.getElementById("cardDiv").innerHTML=boxCard;
    document.getElementById("page-number").innerHTML=page;
}

document.getElementById("page-next").addEventListener("click",()=> {
    if(page===10){
        return
    }
    page = page+1;
    running()

})
document.getElementById("page-prev").addEventListener("click",()=>{
    if(page===1){
        return
    }
    page = page-1;
    running()
})
document.getElementById("search").addEventListener("keyup",(e) => {
    keyword = e.target.value;
    running()
})
document.getElementById("custom-select").addEventListener("change",(e)=>{
    limit = a.target.value;
    running()
})