const slides = [
	{
	  image: "slide1.jpg",
	  tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
	  image: "slide2.jpg",
	  tagLine:
		"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
	  image: "slide3.jpg",
	  tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
	  image: "slide4.png",
	  tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
  ];
  
  let arrowLeft = document.querySelector(".arrow_left");
  let arrowRight = document.querySelector(".arrow_right");
  let dots = document.querySelector(".dots");
  let banner = document.querySelector("#banner");
  let banner_image = document.querySelector(".banner-img");
  let banner_text = document.querySelector(".banner-text");
  let i = 0;
  
  arrowLeft.addEventListener("click", () => {
	i = (i - 1);
	if (i < 0) {
	  i = slides.length - 1;
	}
  
	dots.children[i].classList.add("dot_selected");
	dots.children[(i + 1) % slides.length].classList.remove("dot_selected");
	banner_image.src = "./assets/images/slideshow/" + slides[i].image;
	banner_text.innerHTML = slides[i].tagLine;
  });
  
  arrowRight.addEventListener("click", () => {
	i = (i + 1) % slides.length;  
	dots.children[i].classList.add("dot_selected");
	dots.children[(i - 1 + slides.length) % slides.length].classList.remove("dot_selected");
	banner_image.src = "./assets/images/slideshow/" + slides[i].image;
	banner_text.innerHTML = slides[i].tagLine;
  });
  
