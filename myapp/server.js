var express =require('express');
var http =require('http');
var mysql = require('mysql');
var app =express(); 
const cors =require('cors');
 
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));
 


app.use('/js',express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js',express.static(__dirname + '/node_modules/tether/dist/js'));
app.use('/js',express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css',express.static(__dirname + '/node_modules/bootstrap/dist/css'));



var dateFormat=require('dateformat');
var now = new Date(); 

app.set('view engine' ,'ejs');

app.use(express.json());
 
 
const con =mysql.createConnection({

  host: "localhost" ,
  user : "root" ,
  password: "" ,
  database : "react_sql"
  
  });
  
  const siteTitle = "simple Application"; 
 


  app.get('/products', function(req,res){

    con.query("SELECT * FROM  products ", (err,results)=> {
         
      
      if(err)
      {
        return res.send(err);
      }
      else{
        return res.json({

          data: results

        })
      }
    
       
              
    });
    
    });

 
    

    app.get('/products/delete',(req,res)=>{
      const {idd}=req.query;
      const ss=`DELETE FROM products WHERE ID=${idd}`;
      con.query(ss,(err,result)=>{
        if(err){
          return res.send(err);
        }
        else {
          return res.send('successful deleted');
        }
      });
    });

    app.get('/products/add',(req,res)=>{
      const {name,description,productiondate,expirationdate,available,image}=req.query;

       console.log(image);

       var image1=image.substr(12,image.length-1);
       console.log(image1);



       const ss=`INSERT INTO products (name,description,productiondate,expirationdate,available,image) VALUES('${name}','${description}','${productiondate}','${expirationdate}','${available} ','${image1}')`;
      con.query(ss,(err,result)=>{
        if(err){
          return res.send(err);
        }
        else {
          return res.send('successful added');
        }
      });
    });

    app.get('/products/update',(req,res)=>{
      let sql = `UPDATE products
      SET name = ?,
      description = ?,
      productiondate = ?,
      expirationdate = ?,
       available= ?

      WHERE id = ?`;
      const {name,description,productiondate,expirationdate,available,idd}=req.query;
      let data = [name,description,productiondate,expirationdate,available, idd];
     // const ss=`UPDATE products SET name=${name}, description=${description}, productiondate=${productiondate}, expirationdate=${expirationdate} WHERE ID=${idd}`;
      con.query(sql,data,(err,result)=>{
        if(err){
          return res.send(err);
        }
        else {
          return res.send('successful updated');
        }
      });
    });




    app.get('/Image/update',(req,res)=>{
      let sql = `UPDATE products
      SET image = ?
      
      WHERE id = ?`;

      const {image,idd}=req.query;
      let data = [image, idd];
       con.query(sql,data,(err,result)=>{
        if(err){
          return res.send(err);
        }

        else {
          return res.send('successful updated');
        }
      });
    });

  
    app.get('/login_Auth', function(req,res){
  
      console.log("server side");
  
  
      var em =req.params.email;
      var pass =req.params.password;
       
      console.log(em);
      con.query("SELECT * FROM   user where email=" +email +"password="+password, (err,results)=> {
           
         
        if(email ===em && password===pas) {
            response = {
            msg:"updated successfully",
            data: JSON.stringify(results)
              };
  
             res.send(response);
              }
        if(err)
        {
          return res.send(err);
        }
            
         
                
      });
      
      });
   


      

  var server = app.listen(5000,function(){

    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://%s:%s", host, port)
   
   });
   
