var quoteArray = [
	{
		author: "Kevin Kruse",
		quote: "Life is about making an impact, not making an income."
	},
	{
		author: "Napoleon Hill",
		quote: "Whatever the mind of man can conceive and believe, it can achieve."
	},
	{
		author: "Albert Einstein" ,
		quote: "Strive not to be a success, but rather to be of value."
	},
	{
		author: "Robert Frost",
		quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference."
	},
	{
		author:"Florence Nightingale" ,
		quote: "I attribute my success to this: I never gave or took any excuse."
	},
	{
		author:"Wayne Gretzky" ,
		quote: "You miss 100% of the shots you don’t take."
	},
	{
		author:"Michael Jordan" ,
		quote: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed."
	},
	{
		author:"Amelia Earhart" ,
		quote: "The most difficult thing is the decision to act, the rest is merely tenacity."
	},
	{
		author:  "Babe Ruth",
		quote: "Every strike brings me closer to the next home run."
	},
	{
		author:"W. Clement Stone" ,
		quote: "Definiteness of purpose is the starting point of all achievement."
	},
	{
		author:"John Lennon" ,
		quote: "Life is what happens to you while you’re busy making other plans."
	},
	{
		author:"Charles Swindoll" ,
		quote: "Life is 10% what happens to me and 90% of how I react to it."
	},
	{
		author:  "Alice Walker",
		quote: "The most common way people give up their power is by thinking they don’t have any."
	},
	{
		author:"Buddha" ,
		quote: "The mind is everything. What you think you become."
	},
	{
		author: "Chinese Proverb",
		quote: "The best time to plant a tree was 20 years ago. The second best time is now."
	},
	{
		author:"Socrates" ,
		quote: "An unexamined life is not worth living."
	},
	{
		author:"Woody Allen" ,
		quote: "Eighty percent of success is showing up."
	},
	{
		author: "Steve Jobs",
		quote: "Your time is limited, so don’t waste it living someone else’s life. "
	},
	{
		author: "Vince Lombardi",
		quote: "Winning isn’t everything, but wanting to win is."
	},
	{
		author: "Stephan Covey",
		quote: "I am not a product of my circumstances. I am a product of my decisions."
	},
	{
		author: "Pablo Picasso",
		quote: "Every child is an artist.  The problem is how to remain an artist once he grows up."
	},
	{
		author: "Chistopher Columbus",
		quote: "You can never cross the ocean until you have the courage to lose sight of the shore."
	},
	{
		author: "Maya Angelou",
		quote: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
	},
	{
		author: "Jim Rohn",
		quote: "Either you run the day, or the day runs you."
	},
	{
		author: "Henry Ford",
		quote: "Whether you think you can or you think you can’t, you’re right. "
	},
	{
		author: "Mark Twain",
		quote: "The two most important days in your life are the day you are born and the day you find out why."
	},
	{
		author: "Johann Wolfgang von Goethe",
		quote: "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it."
	},
	{
		author: "Frank Sinatra",
		quote: "The best revenge is massive success."
	},
	{
		author: "Zig Ziglar",
		quote:"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily."
	},
	{
		author: "Anais Nin",
		quote: "Life shrinks or expands in proportion to one’s courage."
	},
	{
		author: "Aristotle",
		quote: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing."
	},
	{
		author: "Ralph Waldo Emerson",
		quote:"The only person you are destined to become is the person you decide to be."
	},
	{
		author:"Henry David Thoreau",
		quote: "Go confidently in the direction of your dreams.  Live the life you have imagined."
	},

]


function getQuote() {


    var random = quoteArray[Math.floor(Math.random() * quoteArray.length)];
    //alert(random);
    document.getElementById("author").innerHTML=random.author;
    document.getElementById("quote").innerHTML=random.quote
    

    $('#getquote').css({
    position: 'relative',
	color: "black",
	borderRadius: "5px",
	marginTop: "45%",
	fontSize: "20px",
	backgroundColor: "white",
	fontFamily: "'Roboto', sansSerif",
	fontWeight: "100",
	opacity: "0.7"

	});

	$(".getquote").one("click", function(){  
    alert("this will happen only once");  
	});



    var totalCount = 15;
	function ChangeIt() 
	{
	var num = Math.ceil( Math.random() * totalCount );
	document.body.background = 'img/'+num+'.jpg';
	document.body.style.backgroundSize = "cover";// Background repeat
	}

ChangeIt()
}




































