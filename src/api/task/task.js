task ={
    seventhOfTask: function (request, response){

        let x1 = request.query["x1"] ||0;
        let y1 = request.query["y1"] ||0;
        let x2 = request.query["x2"] ||0
        let y2 = request.query["y2"] ||0;
        let x3 = request.query["x3"] ||0;
        let y3 = request.query["y3"] ||0;
        let x4 = request.query["x4"] ||0;
        let y4 = request.query["y4"] ||0;
    
        //y = ax + b
        let a1 = (y2-y1)/(x2-x1);
        let b1 = y1-a1*x1;
    
        let a2 = (y4-y3)/(x4-x3);
        let b2 = y3-a2*x3;
       

        if(a1 == a2){
            if( b1 == b2){
                response.send("Theese sections <b>are lying</b> on the same straight line.<h4>If you want to try another sections, just enter new coordinates : http://localhost:3000/api/task?x1=...&y1=...&x2=...&y2=...&x3=...&y3=...&x4=...&y4=...</h4>")
            }
            else{
                response.send("A("+x1+";"+y1+"), B("+x2+";"+y2+"), C("+x3+";"+y3+"), D("+x4+";"+y4+") <b>are NOT lying</b> on the same straight line. <h4>Enter new coordinates : http://localhost:3000/api/task?x1=...&y1=...&x2=...&y2=...&x3=...&y3=...&x4=...&y4=...</h4>")
            }
        }
        else{
            response.send("A("+x1+";"+y1+"), B("+x2+";"+y2+"), C("+x3+";"+y3+"), D("+x4+";"+y4+") <b>are NOT lying</b> on the same straight line (or you gave the coordinates incorrectly((two point can not match<b>!!!</b> Be attentive))). <h4>Enter new coordinates : http://localhost:3000/api/task?x1=...&y1=...&x2=...&y2=...&x3=...&y3=...&x4=...&y4=...</h4>")
        }
    }
}
module.exports=task;