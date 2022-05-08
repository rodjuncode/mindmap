var bg = new Rectangle(new Point(0, 0), new Point(8000, 8000));
var bgPath = new Path.Rectangle(bg);
bgPath.fillColor = '#333';



var nrOfIdeas = 25;
var nrOfPoints = 10;
var minNrOfPoints = 20;
var ideaMaxSize = 50;

var ideas = [];


var Idea = function(complexity, nrOfPoints, minNrOfPoints, ideaMaxSize) {

    this.center = new Point(400, 400) * Point.random();

    this.template = new Path.RegularPolygon(this.center, complexity, ideaMaxSize);
    //myTemplate.strokeColor = Color.random();

    var myPath = new Path();
    myPath.strokeColor = Color.random();
    myPath.fillColor = Color.random();
    for (var i = 0; i < Math.ceil(Math.random() * (nrOfPoints-minNrOfPoints)) + minNrOfPoints; i++) {
        //myPath.add(new Point(ideaMaxSize, ideaMaxSize) * Point.random());
        myPath.add(this.template.segments[Math.floor(Math.random()*this.template.segments.length)].point.clone());
    }
    //myPath.smooth();
    myPath.rotate(Math.random()*180);
    myPath.closed = true;
    myPath.scale(0.25 + Math.random())
    //myPath.opacity = 0.05;

    var colided = false;
    for (var i = 0; i < ideas.length; i++) {
        if (myPath.intersects(ideas[i].path)) {
            colided = true;
            break;
        }
    }
    while (colided) {
        colided = false;
        myPath.position += new Point(400, 400) * Point.random()
        for (var i = 0; i < ideas.length; i++) {
            if (myPath.intersects(ideas[i].path)) {
                colided = true;
                break;
            }
        }        
    }


    this.path = myPath;

    var text = new PointText(this.path.position);
    text.position.y += ideaMaxSize*1.5;
    text.position.x -= ideaMaxSize;
    text.justification = 'left';
    text.fillColor = 'white';
    // text.fontFamily = 'Monospace';
    text.content = 'Uma ideia aêe';    
    this.text = text;
}

// methods
Idea.prototype.rotate = function() {
    this.path.rotate(1);
}



for (var j = 0; j < nrOfIdeas; j++) {
    var idea = new Idea(Math.ceil(Math.random()*10)+3, nrOfPoints, minNrOfPoints, ideaMaxSize);
    ideas.push(idea);
}

// function onFrame(event) {
//     for (var i = 0; i < ideas.length; i++) {
// 	    ideas[i].rotate();
//     }
//}


var firstConnection = new Path();
firstConnection.strokeColor = '#fff';
firstConnection.add(ideas[0].center);
firstConnection.add(ideas[1].center);
firstConnection.dashArray = [5, 3];


var scndConnection = new Path();
scndConnection.strokeColor = '#fff';
scndConnection.add(ideas[0].center);
scndConnection.add(ideas[8].center);
scndConnection.dashArray = [5, 3];


var thrdConnection = new Path();
thrdConnection.strokeColor = '#fff';
thrdConnection.add(ideas[0].center);
thrdConnection.add(ideas[3].center);
thrdConnection.dashArray = [5, 3];

var forthConnection = new Path();
forthConnection.strokeColor = '#fff';
forthConnection.add(ideas[0].center);
forthConnection.add(ideas[2].center);
forthConnection.dashArray = [5, 3];
