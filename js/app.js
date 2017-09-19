function loadcat(){
	//array of cat elements 
	var kitten = ["Cat1","Cat2","Cat3","Cat4","Cat5"];
	//declaring the array of objects 
	var cats = [{
				name: "Anne",
				image: "images/cat.jpg",
				score: 0
				},
				{
				name: "Beca",
				image: "images/cat1.jpg",
				score: 0
				},
				{
				name: "Cary",
				image: "images/cat2.jpg",
				score: 0
				},
				{
				name: "Dani",
				image: "images/cat3.jpg",
				score: 0
				},
				{
				name: "Erie",
				image: "images/cat4.jpg",
				score: 0
				}];

	for(var i = 0; i < cats.length; i++){
		//print the initial elements 
		var elem = document.createElement('BUTTON');
		var t = document.createTextNode(kitten[i]);
		elem.appendChild(t);
		$('#button').append(elem);
		$('#button').append(" ");
		//when the button element(containing the cat numbers) is clicked perform the following action:
			elem.addEventListener("click",(function(catobject){
				return function(){
				//empty the previous elements to append the fresh content
					$('#elements').empty();
					//append the Cat name, image and score.
					$('#elements').append('<h2>Meet "<span>'+catobject.name+'</span>"</h2>');
					$('#elements').append('<img id= "'+catobject.name+'"src="'+catobject.image+'">');
					$('#elements').append('<h3 id="runs">You Clicked "<span id="catscore">'+catobject.score+'</span>"times</h3>');

				//increase the score, when image is clicked
					$('img').on("click",(function(cat){
						return function(){

			                cat.score += 1;
			                $('#catscore').text(cat.score);
			                console.log(cat.score);

						};
					})(catobject));//(catpbject = cat), declaring outside

				};
			})(cats[i]));//declare the outside part in the function itself (cats[i] = catobject)

	};
};
loadcat();