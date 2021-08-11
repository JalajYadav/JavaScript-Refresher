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

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        typeof callback === 'function' && callback();
    },2000);
}





createPost({
    title:'Post three',
    body:'This is post 3',
},getPost);
getPost();// ye jo h vo part 1 aur 2 hi print krega kuki ye sync me nhi h