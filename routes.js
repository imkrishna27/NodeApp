// const fs=require('fs');


// const requestHandler=(request,response)=>
// {
//     const url=request.url;
//     const method=request.method;
//     if(url==='/')
//     {
//         response.write('<html>');
//             response.write('<head><title>Enter Messgage</title></head>');
//             response.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
//         response.write('</html>');
//         return response.end();
//     }
//     if(url==='/message' && method=='POST')
//     {
//        const body=[];
//        request.on('data',(chunk)=>{
//             body.push(chunk);  
//        });
//        request.on('end',()=>
//        {
//             const parsedBody=Buffer.concat(body).toString();
//             console.log(parsedBody);
//             const message=parsedBody.split('=')[1];
//             console.log (message);
//             fs.writeFile('messgae.txt',message,(err)=>{
//                 response.statusCode=302;
//                 response.setHeader('Location','/');
//                 return response.end();
//             });   
//        });
//     }
// };

// // module.exports=
// // {
// //     handler:requestHandler,
// //     someText:"some hand written code",
// // }

// exports.handler=requestHandler;
// exports.someText="hii text";