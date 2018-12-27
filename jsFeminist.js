function jumboScroll() {
  var past = document.getElementById("past");
  past.scrollIntoView(false);
}

function jumboTouch() {
  var past = document.getElementById("past");
  past.scrollIntoView(true);
}

function scrollStart() {
  var start = document.getElementById("jumbotron");
  start.scrollIntoView({behavior: "smooth", block: "start"});
}

function scrollPast() {
  var past = document.getElementById("past");
  past.scrollIntoView({behavior: "smooth", block: "end", inline: "end"});
}

function scrollPresent() {
  var present = document.getElementById("present");
  present.scrollIntoView({behavior: "smooth", block: "start"});
}

function scrollFuture() {
  var future = document.getElementById("future");
  future.scrollIntoView({behavior: "smooth", block:"start"});
}

//NAV BAR STARTS HERE

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navBar").style.bottom = "0%";
//   } else {
//     document.getElementById("navBar").style.visbility = "-100%";
//   }
//   prevScrollpos = currentScrollPos;
// }




// TIMELINE STARTS HERE

function timelineTryTwo() {
	var allEvents = document.getElementsByClassName("eventContainer");

	for (var i = 0; i < allEvents.length; i++) {
		var timeline = document.getElementsByClassName("timelineContainer")[0];
		var eventElement = allEvents[i].getElementsByTagName("img")[0];
		var eventImg = eventElement.src;

    	var timelineHeight = document.getElementById("timeline").scrollHeight;
    	var eventPosition = allEvents[i].offsetTop;
    	var viewableAreaTop = document.getElementById("timelineContainer").getBoundingClientRect().height;
    	var middleOfViewableArea = document.getElementById("timelineContainer").clientHeight * 3 / 4 ;
    	var eventTop = allEvents[i].getBoundingClientRect().top;
    	var percentFromTop = (eventPosition/timelineHeight) * 100;


    	if (eventTop < middleOfViewableArea && (eventTop + allEvents[i].clientHeight) > middleOfViewableArea) {
    		allEvents[i].classList.add("eventContainerActive");
    		if (allEvents[i].classList.contains("scewOn")){
    			allEvents[i].classList.remove("scewOn");
    		}
			  if (allEvents[i].classList.contains("scewOff")) {
				  allEvents[i].classList.remove("scewOff");
			  }
    		timeline.style.backgroundImage = "url('" + eventImg + "')";
    	}

    	else {
    		allEvents[i].classList.remove("eventContainerActive");

    		if (eventTop > middleOfViewableArea) {
    			allEvents[i].classList.add("scewOn");
    		}
    		else {
    			allEvents[i].classList.add("scewOff");
    		}
    	}
    }
}

function timelineCover() {
  var timeline = document.getElementById("timelineContainer");
  timeline.style.overflowY = "scroll";
  var cover = document.getElementById("timelineTitleContainer");
  cover.style.display = "none";

}

// TTIMELINE ENDS

// CAROUSEL STARTS

$("#books").on("slid.bs.carousel", function() {
  var quote = document.getElementById("quote");
  var quoteSource = document.getElementById("quoteSource");
  var listList = document.getElementsByTagName("LI");
  var slideList = [document.getElementById("0"), document.getElementById("1"), document.getElementById("2"), document.getElementById("3"), document.getElementById("4")];
  var blockquote = document.getElementById("blockquote");
  blockquote.style.opacity = 0;
  var carouselItemList = document.getElementsByClassName("carousel-item");


  var quoteList = {
  "bell1":{source: "bell hooks", book: "Feminism is for Everybody: Passionate Politics", quote: "Simply put, feminism is a movement to end sexism, sexist exploitation, and oppression. This was a definition of feminism I offered in Feminist Theory: From Margin to Center more than 10 years ago. It was my hope at the time that it would become a common definition everyone would use. I liked this definition because it did not imply that men were the enemy. By naming sexism as the problem it went directly to the heart of the matter. Practically, it is a definition which implies that all sexist thinking and action is the problem, whether those who perpetuate it are female or male, child or adult. It is also broad enough to include an understanding of systemic institutionalized sexism. As a definition it is open-ended. To understand feminism it implies one has to necessarily understand sexism."},
  "bell2":{source: "bell hooks", book: "Ain't I A Woman: Black Women and Feminism", quote:  "It is obvious that many women have appropriated feminism to serve their own ends, especially those white women who have been at the forefront of the movement; but rather than resigning myself to this appropriation I choose to re-appropriate the term “feminism,” to focus on the fact that to be “feminist” in any authentic sense of the term is to want for all people, female and male, liberation from sexist role patterns, domination, and oppression."},
  "bad fem":{source: "Roxane Gay", book: "Bad Feminist", quote: "Feminism is a choice, and if a woman does not want to be a feminist, that is her right, but it is still my responsibility to fight for her rights. I believe feminism is grounded in supporting the choices of women even if we wouldn’t make certain choices for ourselves. I believe women not just in the United States but throughout the world deserve equality and freedom but know I am in no position to tell women of other cultures what that equality and freedom should look like."},
  "handmaid":{source: "Margaret Atwood", book: "The Handmaid's Tale", quote: "A rat in a maze is free to go anywhere, as long as it stays inside the maze."},
  "Chimamanda":{source: "Chimamanda Ngozi Adichie", book: "We Should All Be Feminists", quote: "We teach girls to shrink themselves, to make themselves smaller. We say to girls, you can have ambition, but not too much. You should aim to be successful, but not too successful. Otherwise, you would threaten the man. Because I am female, I am expected to aspire to marriage. I am expected to make my life choices always keeping in mind that marriage is the most important. Now marriage can be a source of joy and love and mutual support but why do we teach girls to aspire to marriage and we don’t teach boys the same? We raise girls to see each other as competitors not for jobs or accomplishments, which I think can be a good thing, but for the attention of men. We teach girls that they cannot be sexual beings in the way that boys are."},
  };

  for (var i = 0; i < carouselItemList.length; i++) {
    if (carouselItemList[i].classList.contains("active")) {
      setTimeout(function change(){
        bookElement = quoteList[carouselItemList[i].title];
        quote.innerHTML = bookElement.quote;
        quoteSource.innerHTML = bookElement.source + "<cite id='" + "quoteBook" + "' title='" + bookElement.book +  "'> " + bookElement.book + "</cite>";
        blockquote.style.opacity = 1;
      }, 100);
      break;
    }
  }
});

// CAROUSEL ENDS


