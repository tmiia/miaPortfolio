//CURSOR

const text = document.querySelector(".textCursor p");
text.innerHTML=text.innerText.split("").map(
  (char, i) =>
  `<span style="transform:rotate(${i * 30}deg)">${char}</span>`
).join("")

// cursor

let cursor = document.querySelector('.cursor');
let cursorPoint = document.querySelector('.point');
let canva = document.querySelector('body');

  canva.addEventListener("pointerenter", function(e) {
    TweenMax.to(cursor, 0.7, { scale: 1, opacity: 1 });
    positioncursor(e);
    positioncursorPoint(e);
  });

  canva.addEventListener("pointerleave", function(e) {
    TweenMax.to(cursor, 0.7, { scale: 0, opacity: 0 });
    positioncursor(e);
    positioncursorPoint(e);
  });

  canva.addEventListener("pointermove", function(e) {
    positioncursor(e);
    positioncursorPoint(e);
  });

  function positioncursor(e) {
    let relX = e.pageX - canva.offsetLeft - 35;
    let relY = e.pageY - canva.offsetTop - 35;

    TweenMax.to(cursor, 0.7, { x: relX, y: relY });
  }
  function positioncursorPoint(e) {
    let relX = e.pageX - canva.offsetLeft;
    let relY = e.pageY - canva.offsetTop;

    TweenMax.to(cursorPoint, 0.4, { x: relX, y: relY });
  }

  let navs = document.querySelectorAll(".navs-detail");
  let img_rea = document.querySelectorAll('.imgMiniPortfolio');
  let links_rea = Array.from(img_rea);

  let links = document.querySelectorAll('a');

  let all_links = [];
  all_links.push.apply(all_links, links);
  all_links.push.apply(all_links, img_rea);
  all_links.push.apply(all_links, navs);

  all_links.forEach(link => {
    link.addEventListener("pointerenter", function(){
      cursorPoint.className = "point point-active";
    })
    link.addEventListener("pointerleave", function() {
      cursorPoint.className = "point";
    })
  });

let blackElt = document.querySelectorAll(".black");

blackElt.forEach(black =>{
  black.addEventListener("pointerenter", ()=>{
    cursorPoint.style.backgroundColor = "#FFF";
  })
  black.addEventListener("pointerleave", ()=>{
    cursorPoint.style.backgroundColor = "#000";
  })
})

//INTRO ANIMATION
window.onload = function visitors(){
  let anim = document.querySelector(".animContainer");
  if ( ! sessionStorage.getItem( 'doNotShow' ) ) {
    sessionStorage.setItem( 'doNotShow', true );
    anim.style.visibility = "visible";
    introAnimation();
    } else {
      const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
      let i = 0;
      while (i<1){
        tl.fromTo(".header",{height: "50vh"}, {height: "6.33vh", duration: .3})
        tl.fromTo(".footer",{height: "50vh"}, {height: "6.33vh", duration: .3}, "-=0.3")
        i++
      }
    }
    // const tl = gsap.timelineMax({ repeat: -1 });
    var tl = new TimelineMax({ repeat: -1 });
      tl.to(".cursor", 8, {rotate : "180deg"});
}

function introAnimation() {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  let i = 0;
  while (i<1){
    tl.to(".line",{width: "33%", duration: 0.9, stagger: 0.25})
    tl.to(".animText",{opacity: 0, duration: 0.3})
    tl.to(".line",{width: 0, duration: 0.3, stagger: 3})
    tl.to(".animRight", {height : 0, duration: 1})
    tl.to(".animCenter", {height : 0, duration: 1}, "-=0.75")
    tl.to(".animLeft", {height : 0, duration: 1}, "-=0.75")
    tl.fromTo(".hi", {y: "-500px", x: "75%", rotate: "45deg", scale: 2.5}, {y: "20%", x:"0%", rotate: "0", scale: 1, duration: 0.6})
    tl.to(".hi", {y: "0%", duration: 0.3})
    tl.fromTo(".name", {opacity: 0}, {opacity: 1, duration: 0.9}, "-=0.40")
    tl.fromTo("#deco1", {opacity: 0, scale: 0.3}, {opacity: 1, scale: 1, duration: 0.5}, "-=0.45")
    tl.fromTo(".slogan", {opacity: 0}, {opacity: 1, duration: 0.5}, "-=0.35")
    tl.to(".animContainer", {display: "none", duration: 0.3})
    i++
  }
}

const btn = document.querySelector(".footerBtn");

btn.addEventListener("click", ()=>{
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  let i = 0;
  while (i<1){
    tl.to(".header", {height: "50vh", duration: .3})
    tl.to(".footer", {height: "50vh", duration: .3}, "-=0.3")
    // tl.to(".header", {height: "6.33vh", duration: .3})
    // tl.to(".footer", {height: "6.33vh", duration: .3}, "-=0.3")
    i++
  }
  setTimeout(function() {
    if(window.location.href == "file:///Users/mxtwin/Documents/Projects/Miia/pages/page-realisation.html"){
      window.location.href = "file:///Users/mxtwin/Documents/Projects/Miia/index.html";
    }
    else{
      window.location.href = "file:///Users/mxtwin/Documents/Projects/Miia/pages/page-realisation.html";
    }
  }, 600);
})

//Realisations
let img = document.querySelectorAll(".imgMiniPortfolio");
let grid = document.querySelector(".grid");
let gridShow = document.querySelector(".show-grid");


img.forEach(image => {
  image.addEventListener("click", function() {
    grid.style.display = "none";
    gridShow.style.display = "grid";
    cursor.style.display = "none";
    realiDetail(parseInt(this.getAttribute('data-project')));
  })
});

function realiDetail(project) {
    //Creer les elements details du projet
    let imageContainer = document.querySelector("#imageContainer");
    let infoContainer = document.querySelector("#info");
    let infoLogos = document.querySelector(".logos");
    // Changer de système et mettre des array clé valeur à la place
    const project_list = [[1, "Lorem 1", "html,css"],
                          [2, "Lorem 2", "js,html,css"],
                          [3, "Lorem 3", "js,html,css"],
                          [4, "Lorem 4", "js,html,css"],
                          [5, "Lorem 5", "js,html,css"],
                          [6, "Lorem 6", "js,html,css"],
                          [7, "Lorem 7", "figma"],]

    let imgRea = document.createElement("img");
    imgRea.src = "../assets/media/Project"+project+".jpg";
    imgRea.className = "img-proj";
    imgRea.dataset.project = project;

    let infoText = document.createElement("p");
    infoText.setAttribute("id", "info-text")
    infoText.innerText = project_list[(project-1)][1];

    const listTechno = project_list[project-1][2].split(',');

    for (let i = 0; i < listTechno.length; i++) {
      let logoTechno = document.createElement("img");
      logoTechno.src = "../assets/media/"+listTechno[i]+".svg";
      logoTechno.className = "logo";
      console.log(logoTechno);

      infoLogos.appendChild(logoTechno);
    }

    imageContainer.appendChild(imgRea);
    infoContainer.children[1].appendChild(infoText);

}

navs.forEach(btn => {
  btn.addEventListener("click", function() {
    let project = document.querySelector(".img-proj");
    let infoText = document.querySelector("#info-text");
    let logos = document.querySelectorAll(".logo");

    let projectId = project.getAttribute('data-project');
    let listProjectAvaillable = ["1", "2", "3", "4", "5"];

    if(btn.id == "nav-detail-right"){
      infoText.remove();
      project.remove();
      logos.forEach(logo => {
        logo.remove()
      });
      navigate(listProjectAvaillable, "right", projectId);
      // realiDetail((parseInt(projectId)+ 1));
    }
    else{
      infoText.remove();
      project.remove();
      logos.forEach(logo => {
        logo.remove()
      });
      navigate(listProjectAvaillable, "left", projectId);
      // realiDetail((parseInt(projectId)+ 1));
    }
  })
});

function navigate(list, sens, project){
  if(list){
    let currentI = list.indexOf(project);
    if(sens == "right"){
      if(currentI == (list.length-1)){
        realiDetail("1");
      }
      else{
        currentI ++;
        realiDetail(list[currentI]);
      }
    }
    else{
      if(currentI <= 0){
        let max = list.length;
        realiDetail("5");
      }
      else{
        currentI = currentI - 1;
        realiDetail(list[currentI]);
      }
    }
  }
}
