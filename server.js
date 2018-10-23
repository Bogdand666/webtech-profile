const express =require("express");

const app=express();

app.use('/',express.static('static'))

app.use(express.urlencoded())

app.get('/hello',(request, response)=>
{
    let name=request.query.name;
    console.log(name.length)
    console.log(request)
    
    response.status(200).sent('Hello BD!'+name);
}
)

app.post('/messages', function(request,response){
    
})

app.put('/message/:id',function(request,response){
    
})
app.delete('/message/:id',function(request,response){
    
})

app.listen(8080)