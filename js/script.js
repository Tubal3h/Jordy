window.addEventListener('DOMContentLoaded', function () {
  // calcTime();
  // lyrics ();


   


});

function cover() {
  $("#left").animate({ left: "-2000px" });
  $("#right").animate({ right: "-2000px" });
  $("#heart").css({ display: "none" });

  // $("#cl").removeClass("none");
  $("#cover-container").delay(300).queue(function (cover) {
      $(this).css({ "z-index": "-999" });
      cover();
  });
  // lyrics()
  calcTime(); 
  // audio
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'https://github.com/Tubal3h/Kate/blob/main/audio/1.mp3?raw=true');
  audioElement.play();
  audioElement.volume = 0.1;
  /* -------------------------------------------------------------------------- */
  lyrics()
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

  });
}


function autoclickNX() {
  for (var i = 0; i < 14; i++) {
      setTimeout(function() {
          $(".next").click();
      }, 4000 * i);
  }  
}

function autoclickPV() {
  for (var i = 0; i < 14; i++) {
      setTimeout(function() {
          $(".prev").click();
      }, 4000 * i);
  }


}


function calcTime() {


  var countDownDate = new Date("Jan 26, 2022 00:00:00").getTime();

  var myfunc = setInterval(function () {
      var now = new Date().getTime();
      var timeleft = now - countDownDate;

      var year = Math.floor(timeleft / (1000 * 60 * 60 * 24 * 30 * 12));
      var month = Math.floor(timeleft % (1000 * 60 * 60 * 24 * 30 * 12) / (1000 * 60 * 60 * 24 * 30));
      var days = Math.floor(timeleft % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24))
      var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      // console.log(timeleft)
      // $("#CurrentTime").text(`Year ${year} Month ${month} Day ${days} Time ${hours}:${minutes}:${seconds} `)
      $("#CurrentTime").html(`
        <div id="c-count"  class="row m-0     d-flex align-items-center justify-content-center">
          <div id="" class="d-flex">
            <div class="    Masc timer-font ">Tiempo </div>
            <div class=" Masc timer-font">Juntos</div>
          </div>
          <div  id="year" class="    Masc timer-font">Year ${year}</div>
          <div  id="Month" class="    Masc timer-font">Month ${month}</div>
          <div  id="day" class="    Masc timer-font">Day ${days}</div>
          <div  id="time" class="    Masc timer-font">Time ${hours}:${minutes}:${seconds}</div>
        </div>
      `)

    }, 1000)
}

function lyrics() {

  var lyr1 = $("#lyrics1");
  var lyr2 = $("#lyrics2");
  var lyr3 = $("#lyrics3");
  var lyr4 = $("#lyrics4");
  var lyr5 = $("#lyrics5");

  lyr5.delay(5000).queue(function (lyrics) {
    $(this).html(`¿Sabes?`)
    // lyrics1();
    lyrics();
  });
  lyr5.delay(4000).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Nunca había creído en los planes`)
    lyrics();
  });
  lyr5.delay(1500).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Pero te conocí`)
    lyrics();
  });
  lyr5.delay(2000).queue(function (lyrics) {
    lyrics1();
    $(this).html(`¿Sabes?`)
    lyrics();
  });
  lyr5.delay(3500).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Nunca había sentido por nadie`)
    lyrics();
  });
  lyr5.delay(3000).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Lo que por ti sentí`)
    lyrics();
  });
  lyr5.delay(2000).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Creía que nada saldría bien al final`)
    lyrics();
  });
  lyr5.delay(3000).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Estaba tan roto y ya nadie me iba a curar`)
    lyrics();
  });
  lyr5.delay(3000).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Creía que tal vez lo mío era quedarme así, solo`)
    lyrics();
  });
  lyr5.delay(4000).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Y de pronto como estrella justo en medio de este mar `)
    lyrics();
  });
  lyr5.delay(4000).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Me curaste el corazón, me enamoraste `)
    lyrics();
  });
  lyr5.delay(6000).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Sin explicación llegaste así `)
    lyrics();
  });
  lyr5.delay(8500).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Cuando el amor ya no sería para mí `)
    lyrics();
  });
  lyr5.delay(6000).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Pero te conocí `)
    lyrics();
  });
  lyr5.delay(6500).queue(function (lyrics) {
    lyrics1();
    $(this).html(`¿Sabes? `)
    lyrics();
  });
  lyr5.delay(3700).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Nadie sabe nada de nadie `)
    lyrics();
  });
  lyr5.delay(8500).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Yo no sabía de ti `)
    lyrics();
  });
  lyr5.delay(3500).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Pero `)
    lyrics();
  });
  lyr5.delay(3500).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Ya me aprendí cada detalle `)
    lyrics();
  });
  lyr5.delay(2500).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Sabes que soy así `)
    lyrics();
  });
  lyr5.delay(2000).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Creía que nada estaría bien al final `)
    lyrics();
  });
  lyr5.delay(4500).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Estaba tan roto y ya nadie me iba a curar `)
    lyrics();
  });
  lyr5.delay(2000).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Creía que tal vez lo mío era quedarme así, solo `)
    lyrics();
  });
  lyr5.delay(3500).queue(function (lyrics) {
    lyrics1();
    $(this).html(` Woah oh oh`)
    lyrics();
  });
  lyr5.delay(4000).queue(function (lyrics) {
    lyrics1();
    $(this).html(` Y de pronto como estrella justo en medio de este mar`)
    lyrics();
  });
  lyr5.delay(5000).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Me curaste el corazón, me enamoraste `)
    lyrics();
  });
  lyr5.delay(2000).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Sin explicación llegaste así `)
    lyrics();
  });
  lyr5.delay(7500).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Cuando el amor ya no sería para mí `)
    lyrics();
  });
  lyr5.delay(7000).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Pero te conocí `)
    lyrics();
  });
  lyr5.delay(5000).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Woh oh oh `)
    lyrics();
  });
  lyr5.delay(3000).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Woh oh oh oh oh `)
    lyrics();
  });
  lyr5.delay(4000).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Porque es cierto que una estrella no se estrella por azar `)
    lyrics();
  });
  lyr5.delay(7000).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Y el destino supo hablar y yo escucharte `)
    lyrics();
  });
  lyr5.delay(8000).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Sin explicación, llegaste así `)
    lyrics();
  });
  lyr5.delay(8000).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Cuando el amor ya no sería para mí `)
    lyrics();
  });
  lyr5.delay(6000).queue(function (lyrics) {
    lyrics1();
    $(this).html(`Pero te conocí `)
    lyrics();
  });
  lyr5.delay(6000).queue(function (lyrics) {
    lyrics1();
    $(this).html(` `)
    lyrics();
  }                                          );
  lyr5.delay(6000).queue(function (lyrics) {
    lyrics1();
    $(this).html(` `)
    lyrics();
  }                                          );
  lyr5.delay(4000).queue(function (lyrics) {
    lyrics1();
    $(this).html(` `)
    lyrics();
  }                                          );
  
  




  function lyrics1(){
    // let lyr01 = $("#lyrics1").text();
    let lyr02 = $("#lyrics2").text();
    let lyr03 = $("#lyrics3").text();
    let lyr04 = $("#lyrics4").text();
    let lyr05 = $("#lyrics5").text();
    
    lyr1.html(`${lyr02}`)
    lyr2.html(`${lyr03}`)
    lyr3.html(`${lyr04}`)
    lyr4.html(`${lyr05}`)
  } 
 
} 


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



