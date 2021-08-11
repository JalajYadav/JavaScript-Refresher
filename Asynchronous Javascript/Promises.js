// When you want to take smthing out of the flow of synchronous flow.

const posts =[
    {
        title:'Post One',
        body:'This is post one',
    },
    {
        title:'Post two',
        body:'This is post two',
    }
]


function getPost(){
    setTimeout(()=>{
        let output ='';
        posts.forEach((ele,index)=>{
            output+=`<li>${ele.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push(post);

            const errorBlock= false;

            if(!errorBlock){
                resolve();
            }else{
                reject('error! smthing went wrong...eeeeee')
            }
        }, 2000);
    });
}


createPost(
    {
        title:'title 3',
        body:'This is body of 3'
    }
).then(getPost).catch(err=>console.log(err));

