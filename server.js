var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
         'article-one' : {title: "Article one | PIYUSH ",
            heading: "Article One",
            date: "Sept 5, 2016",
            content:`
                    <p>
                    This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.
                   </p>
                   <p>
                    This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.
                   </p>
                   <p>
                     This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.
                  </p> ` },
         'article-two': {title: "Article Two | PIYUSH ",
            heading: "Article Two",
            date: "Sept 5, 2016",
            content:`
                    <p>
                    This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.
                   </p>
                   <p>
                    This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.
                   </p>
                   <p>
                     This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.
                  </p> `},
         'article-three' :{title: "Article Three | PIYUSH ",
            heading: "Article Three",
            date: "Sept 5, 2016",
            content:`
                    <p>
                    This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.
                   </p>
                   <p>
                    This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.
                   </p>
                   <p>
                     This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.This is very ambitious project for me.
                  </p> `}
    
};
function createTemplate (data){ 
     var title = data.title;
     var date = data.date;
     var heading = data.heading;
     var content = data.content;
     
      var htmlTemplate=`
            <html>
                    <head>
                    <title>
                    ${title}
                    </title>
                    <link href="/ui/style.css" rel="stylesheet" />
                    </head>
                    <body>   
                            <div class="container">
                            
                            <div>
                            <a href="/">Home</a>
                            </div>
                            <hr/>
                            <div> 
                            ${date}
                            </div>
                            <h3>
                            ${heading}
                            </h3>
                            <div>
                            ${content}
                            </div>
                            </div>
                            
                    </body>
            </html>
            `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui' , 'index.html'));
});

app.get('/:articleName',function(req , res){
   var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

  
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
