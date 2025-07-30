   const quotes=["We go together like copy and paste." ,                                                                                                                                            
   "I wish I could copy and paste you into my bed.",
   "He who can copy can do.",                                                                                                       
   "Be yourself because an original is worth more than a copy.",
   "Be Original… Don't be a copy paste." ,                                                                                                
   "You can copy all you want, you'll always be one step behind.",
   "Confidence attracts copycats!" ,
   "Life is not a copy paste. It is an art to create you own.",
   "Copying one person is stealing. Copying ten is research.",
   "It's better to be individual than a clone of someone else.",                                                                                                                                                                                 
   "To copy others is necessary, but to copy oneself is pathetic." ,
   "Stay true to yourself. An original is worth more than a copy.",
   "I've been imitated so well, I've heard people copy my mistakes.",
   "I've never really tried to copy anyone; I like to have my own style.",
   "In everything, truth surpasses the imitation and copy." ,
   "You should learn from your competitor, but never copy. Copy and you die." ,                                                                                                                                                               
   "I was never good at copying. I was better at doing my own thing!",
   "Copying has been a time-honored means of learning how to do anything.",
   "When a thing has been said and said well, have no scruple. Take it and copy it.",
   "An original artist is unable to copy. So he has only to copy in order to be original.",
   "There's no harm being a copycat. If someone else is doing a good job, copy. It's free.",
   "Implementing best practice is copying yesterday; innovation is inventing tomorrow.",                                                                                                                                      
   "People seldom improve when they have no model but themselves to copy after." ,
   "Copying or cloning is not valid because it misses the whole point of art making.",
   "Once you set out to copy another painter, you can never be more than number two.",
   "I had to create an equivalent for what I felt about what I was looking at - not copy it.",
   "I know from having had a child, and from having been a child myself, that children will copy you.",
   "A true poet writes from the language and experiences of their own heart, not those of others.",
   "The only way you can get good, unless you're a genius, is to copy. That's the best thing. Just steal.",
   "Perhaps one of the most essential exercises in learning to paint is the copying of master works in the museums.",
   "Never draw anything you can copy, never copy, anything you can trace, never trace anything you can cut out and paste up.",
   "Copying opens your eyes to new possibilities and new techniques, but trying to fob it off as your own is quite another matter.",
   "Average artists copy their peers, but the true great artistic gesture lies in the shamelessness of stealing and getting away with it." ,
   "Success is dangerous. One begins to copy oneself, and to copy oneself is more dangerous than to copy others. It leads to sterility.",
   "The only way to efficiently battle evil is to copy enough to know how to counter each argument, yet not enough to believe all the bullshit." ,
   "Copying isn't particularly creative work. Being inspired by someone else's idea to produce something new and different is creative work.",
   "Some people who look at abstract art say, “I could do that.” A good response is, “Go ahead but then you'll be accused of copying.",
   "People will copy your words, your style, your attitude and get more fame than you. Doesn't matter - because it's you who lived, not them.",
   "If you copy my dreams, you automatically will copy my challenges too. My success will give you a crown. My challenges will make you frown.",
   "Copy and paste means, ” Hard work, thinking of others, profit is your.” Use your own mind, because doing copy paste is meant like you don't have your own mind.",
   "Do not copy my style! The first rule of writing is write about what you know, not what you think you know. So, think about what you've done in your life and write about that.",
   "I think you can have moderate success by copying something else, but if you really want to knock it out of the park, you have to do something different and take chances.",
   "It is all very well to copy what one sees, but it is far better to draw what one now only sees in one's memory. That is a transformation in which imagination collaborates with memory.",
   "Copying clarifies the line between doing your own work and appropriating someone else's. I think of it as a valid learning tool that should be set aside when you become a professional." ,
   "A person who is truly cool is a work of art. And remember, original works of art cost exponentially higher than imitations. Just take a look at the the coolest people in history. They will always be a part of history for being extremely original individuals, not imitations."
   ];
   const color=[{ backgroundColor:"lavender",text:"indigo"},{backgroundColor:"lightblue",text:"darkblue"},{backgroundColor:"mistyrose",text:"maroon"},{backgroundColor:"honeydew",text:"darkolivegreen"},{backgroundColor:"peachpuff",text:"darkorange"},{backgroundColor:"aliceblue",text:"navy"},{backgroundColor:"seashell",text:"brown"},{backgroundColor:"mintcream",text:"darkgreen"},{backgroundColor:"floral white",text:"saddlebrown"},{backgroundColor:"powderblue",text:"darkslateblue"},{backgroundColor:"lightcyan",text:"teal"},{backgroundColor:"lemonchiffon",text:"chocolate"},{backgroundColor:"cornsilk",text:"darkgoldenrod"},{backgroundColor:"lavenderblush",text:"indigo"},{backgroundColor:"oldlace",text:"darkslategray"}];
   const quotedisplay=
   document.getElementById("r1");
   const  generatebtn=
   document.getElementById("btn");
   const generatecpy = 
   document.getElementById("cpy");
      
   generatebtn.addEventListener("click", ()=> {  
      const randomindex =
      Math.floor(Math.random()*quotes.length);
      const randomquotes=
      quotes[randomindex];
      quotedisplay.textContent = randomquotes;
      
      const theme=
      color[Math.floor(Math.random()*color.length)];
      const quoteBox = document.getElementById("quotebox");
      quoteBox.style.backgroundColor = theme.backgroundColor;
      quoteBox.style.color = theme.text;
      quotedisplay.classList.remove("fade-in");
      void quoteBox.offsetWidth;
      quotedisplay.classList.add("fade-in");   
   });
   generatecpy.addEventListener("click",()=> {
      const copiedText=
   quotedisplay.textContent;
      navigator.clipboard.writeText(copiedText).then(()=>{
         alert("Quote copied to clipboard!");
      })
      .catch((err)=>{
         console.error("Failed to copy text:",err);
      });
   });

      

   
