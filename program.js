let data = `
#0 The Title Ignore tis one 
Paragraph one begins like this, and continues on for a while. This should continue in a manner that allows for the story to progress. \
Option 1 $1 
Option 2 $2 
Option 3 $4 

#1  Good Morning!!
You Wake up in the morning
Brush Teeth $2
Eat Pasta $6
Snooze the alarm $3

#2  Brush Teeth
You encounter the only stage in your life where the taste of mint is allowed to grace the presence of your tongue. Getting ready for the day, what do you plan to do next?
Eat Pasta $6
Go to Class $7
Go Back to Sleep $3

#3  You're Late!!!
You arrived late for your film history class! After the awkward moment where you are given a haunting glare by the professor, you sit down in the back row. What do you do in class?
Go on your phone $4
Ditch class $8
Book it!!! $7

#4  You walk into the dome
There is a basketball game on, what do you do?
Sneak into an employee only area $5
Watch the game $6
wake up $1

#5  You run into a DPS officer on patrol. 
He pulls you aside and demands to know what you are doing in a restricted zone. You are scared, not for being caught, but for what is to come. What is your response? 
"Get lost, cop" $18
Juke around him $14
Try to slip into the crowd $19

#6  Watch the Game
You enjoy watching Buddy Buckets sink shot after shot, one after another.
End? $6
End! $6
Wake Up $1

#7  Classtime!!!
You walk from the College Place bus stop to the second-most confusing building on campus, the Newhouse complex. As you reach you first class of the day, how do you spend you classtime?
Browse Reddit on your phone $8
Pay attention $10
Catch some Zzzzs $1

#8  Fail the Semester :(
You lose focus and are unable to catch back up to the /"rigors/" of the courseload of a Film major. Your parents become disappointed and lose faith in you. The dream of being the next Spielberg is crushed under the weight of collapsing expectations and failure. Tears roll down your eyes.
End $8
End $8
But it was only a dream? $1

#9  Scolded by the Teacher
The teacher talks to you after class, "Why are you not paying attention in class?"
I hate this class. $1
Your teaching is terrible. $1
I was just checking the weather, I will pay attention next time. $11

#10 Ace the Class!!!
By paying attention to the professor, you did what no other before you has done - pass the class. Given its notorious difficulty, the course has, in the long history of SU, never been successfully passed. You were given an opportunity from the professor to meet with a potential employer! One who may be your entry into your dream of film production!!!
Take the Interview!! $11
Leave for the Day $1
Wake Up $1

#11 Interview Time!
You have finally landed an interview! Unfortunately, the interview is in an hour... That is quite the rough turnaround... You rush home and...?
Prepare for the interview $12
Wait for the last minute to prepare $13
Late for the interview $13

#12 Job for the FBI (Game Over)
Due to the preparation, you aced the interview! The interviewer was not, however, in the film agency... He was in the FBI!!! The FBI has been looking for studious members of the public to analyse trends in the world. THEY WANT YOU.
Win $1
Win $1
Win $1

#13 Where do you want to go?
You wander around campus, looking for a place to be. Where do you go?
Carrier Dome $4
Life Sciences $
nothing $

#14 What do you do next?
After juking out the officer, they follow in pursuit. Its now or never, you are losing ground and soon you will be captured. Running down the halls, you see an opportunity to get away! You...
Climb into a vent (SUS) $15
Jump out window $18
Hack into computer $

#15 Escape back to apartment
After the long day that you have gone through, you start to feel hunger. You decide to make dinner. What do you make?
Pasta $17
Chicken $16
nothing $

#16 Rushed to hospital!
The chicken gave you salmonella. As your diet traditionally consists of pasta and the occasional hot dog, your immune system fails you. Death calls for you as you feel a sharp pain and then nothing... just a lingering numbness all over. Sirens blare, but they fade as well. You Died.
dead $
dead $
dead $

#17 Pasta!!!!
As the water boils, you can smell the boxed penne enter the water. After the timer elapses, you prepare a small plain bowl and a glob of butter. As the butter seeps into the Tops Brand penne, the sound of opening a container of the blend of Asiago and Parmesan resonates in the cramped kitchen of your South Campus Apartment. You sprinkle in the cheese and start to savor each bite. Heaven truly is a place on Earth.
win $
win $
win $

#18 Jail Time
Go to jail. If you pass GO, do not collect 200 dollars.
Hack your way out of jail $
nothing $
nothing $

#19 Wrong Crowd?
As you slip past the gaze of the DPS officer, you wander along with the crowd into a locker room?!? You are now led to a locker, with a Syracuse University basketball jersey staring you down.
Don the jersey $20
Leave the locker room stealthily $15
Panic $5

#20 Watch the Game
After donning the jersey, you follow the crowd of basketball players, who do not realize that there is a five foot seven player among them. This results in being able to watch the game from the best seats in the house.
Win $
Wake Up $1
Panic $5
`;

let sp;
let storyPosTracker = 0;
let reference = 1;
let pointer = 1;

class storyNode {
  constructor(
    title,
    story_text,
    b1_text,
    b1_path,
    b2_text,
    b2_path,
    b3_text,
    b3_path
  ) {
    this.title = title;
    this.text = story_text;
    this.b1 = b1_text;
    this.b1path = b1_path;
    this.b2 = b2_text;
    this.b2path = b2_path;
    this.b3 = b3_text;
    this.b3path = b3_path;
  }
  getTitle() {
    return this.title;
  }
  getText() {
    return this.text;
  }
  getB1() {
    return this.b1;
  }
  getB2() {
    return this.b2;
  }
  getB3() {
    return this.b3;
  }
  getPath(buttonPressed) {
    if (buttonPressed === 1) {
      return this.b1path;
    } else if (buttonPressed === 2) {
      return this.b2path;
    } else {
      console.log("you better have pressed b3");
      return this.b3path;
    }
  }
}

let textArray;
function myFunction() {
  document.getElementById("demo").innerHTML = document.getElementById(
    "b1"
  ).text;
}

function onLoad() {
  sp = loadData();
  console.log(sp);
  //console.log("kekw");
  //console.log(sp[1].getTitle());
}

function loadData() {
  let storyPath = [];
  let titles = [];
  let texts = [];
  let b1s = [];
  let b1spath = [];
  let b2s = [];
  let b2spath = [];
  let b3s = [];
  let b3spath = [];

  textArray = data.split("#");
  let x = 1;
  for (x = 1; x < textArray.length; x++) {
    let stuff = textArray[x].split("\n");
    let b1 = stuff[2].split("$");
    let b2 = stuff[3].split("$");
    let b3 = stuff[4].split("$");
    titles[x - 1] = stuff[0];
    texts[x - 1] = stuff[1];
    b1s[x - 1] = b1[0];
    b1spath[x - 1] = b1[1];
    b2s[x - 1] = b2[0];
    b2spath[x - 1] = b2[1];
    b3s[x - 1] = b3[0];
    b3spath[x - 1] = b3[1];
  }
  let k = 0;
  for (k = 0; k < titles.length; k++) {
    let d = new storyNode(
      titles[k],
      texts[k],
      b1s[k],
      b1spath[k],
      b2s[k],
      b2spath[k],
      b3s[k],
      b3spath[k]
    );
    storyPath.push(d);
  }
  //console.log(storyPath[1].getText());
  return storyPath;
}

class button {
  constructor(link, text, id) {
    this.link = link;
    this.text = text;
    this.id = document.getElementById(id);
  }
}

function update(buttonPressed) {
  if (buttonPressed == 1) {
    pointer = sp[reference].b1path;
    console.log(pointer);
  }
  if (buttonPressed == 2) {
    pointer = sp[reference].b2path;
    console.log(pointer);
  }
  if (buttonPressed == 3) {
    pointer = sp[reference].b3path;
    console.log(pointer);
  }
  reference = pointer;
  let titleOfSection = document.createElement("h2");
  console.log(sp[reference]);
  titleOfSection.textContent = sp[reference].getTitle().substring(2);
  console.log("pt5");
  let textToAdd = document.createTextNode(sp[reference].text);
  //document.getElementById("story").appendChild("br");
  document.getElementById("story").appendChild(titleOfSection);
  //document.getElementById("story").appendChild(linebreak);
  document.getElementById("story").appendChild(textToAdd);

  document.getElementById("b1").innerText = sp[reference].getB1();
  document.getElementById("b2").innerText = sp[reference].getB2();
  document.getElementById("b3").innerText = sp[reference].getB3();

  storyPosTracker = reference;
}

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

function button3() {
  update(3);
}
function button2() {
  update(2);
}
function button1() {
  //console.log("WORKED");
  update(1);
}
