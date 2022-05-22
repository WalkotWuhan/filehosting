// Run when the webpage is loaded
window.addEventListener('load', () => {
  var tl = gsap.timeline();
  const musik = () => {
    tl.pause();
    Swal.fire({
      title: 'Mau dengerin musik backsound ngga?',
      text: "Musiknya enak didenger kok :)",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Boleh',
      cancelButtonText: 'Nggak deh',
    }).then((result) => {
      if (result.isConfirmed) {
        document.querySelector('.song').play();
        tl.resume();
      } else {
        tl.resume();
      }
    });
  }

      tl.from(".hello", {opacity:0, y: 10, duration: 1, ease:"back.out(2)"})
        .to(".hello", {opacity:0, duration:1}, ">2")
        .call(musik)
        .to(".container", {visibility:"visible"})
        .from(".animasi_1", {opacity:0, y:-20, ease:"back.out(2)", duration:2})
        .from(".teks_1_1", {opacity:0, y:-20, duration:1}, "+=0.5")
        .from(".teks_1_2", {opacity:0, y:-20, duration:1}, "+=2")
        .to(".scene_1", {opacity:0, y:-10, duration:1}, "+=3")
        .from(".animasi_2", {opacity:0, y:-10, duration:1, ease:"back.out(2)"}, "+=1")
        .from(".teks_1_3", {opacity:0, y:-10, duration:1}, "+=1")
        .to(".senyum_1", {rotation:90}, ">2")
        .to(".scene_2", {opacity:0, y:-10, duration:1}, "+=3")
        .from(".teks_2_sub_1", {opacity:0, scale:0.5, duration:1})
        .to(".teks_2_sub_1", {opacity:0, duration:1}, "+=1.5")
        .from(".teks_2_sub_2", {opacity:0, scale:0.5, duration:1})
        .to(".teks_2_sub_2", {opacity:0, duration:1}, "+=1.5")
        .from(".teks_2_sub_3", {opacity:0, scale:0.5, duration:1})
        .to(".teks_2_sub_3", {opacity:0, duration:1}, "+=3")
        .to(".scene_3", {opacity:0, y:-10, duration:1})
        .from(".teks_3", {opacity:0, scale:2, duration:1})
        .to(".teks_3", {opacity:0, scale:0.5, duration:1}, ">1.5")
        .from(".animasi_3", {opacity:0, y:-10, duration:1, scale:0.5, ease:"back.out(2)"})
        .from(".teks_4", {opacity:0, y:10, duration:1.5}, "<0.2")
        .to(".emot_1", {rotation:90, scale:0.6, duration:1}, ">1.5")
        .to(".scene_4", {opacity:0, y:-10, duration:1}, ">1.5")
        .from(".animasi_4", {opacity:0, y:-10, duration:1, scale:0.5,ease:"back.out(2)"})
        .from(".teks_5", {opacity:0, y:10, duration:1, scale:0.5, ease:"back.out(2)"}, "<0.5")
        .from(".sub_teks_5", {opacity:0, y:10, duration:1, scale:0.5, ease:"back.out(2)"}, ">1.2")
        .to(".scene_5", {opacity:0, y:-10, duration:1}, ">2")
        .from(".teks_6_1", {opacity:0, y:-10, duration:1}, ">0")
        .to(".teks_6_1", {opacity:0, y:-10, duration:1, scale:0.5}, ">2")
        .from(".teks_6_2", {opacity:0, y:10, scale:0.7, duration:1}, ">0")
        .from(".teks_6_3", {opacity:0, y:10, scale:0.7, duration:1}, ">2")
        .to(".teks_6_2", {opacity:0, y:10, scale:0.5, duration:1}, ">1")
        .from(".animasi_5", {opacity:0, y:-10, duration:1, scale:0.5,ease:"back.out(2)"}, "<0.5")
        .from(".teks_6_4", {opacity:0, y:10, scale:0.7, duration:1}, ">5")
        .from(".ikon", {opacity:0, y:10, scale:0.6, duration:1}, ">3", "ganti_slide");
      tl.addPause("ganti_slide");
      tl.to(".container", {opacity:0, duration:1})
          .to(".container", {visibility:"hidden"});

          // SLIDE 2

      const swals = Swal.mixin({
        cancelButtonColor: '#909090', confirmButtonColor: '#00B487', allowOutsideClick: false,
        });

      async function start() {
        await swals.fire('Halo ツ');
        setTimeout(mulai, 900);
        play();
        tl.to(".container_2", {visibility:"visible"});}

      function play() {
          document.querySelector('.song').pause();
          const audio = document.querySelector('.song_2');
          audio.play();
          audio.loop = true;
          audio.addEventListener('ended', function() {
            this.currentTime = 0; this.play();
          }, false);
        }

      var a = 0, textnm;
        textnm = "Hai Mbak Kunt ><"

      async function pmau() {
        await swals.fire('Semangat ya!!!');
        await swals.fire('Kirim ini ke no WhatsApp aku, oke?');
        window.location = "https://api.whatsapp.com/send?phone=62895395182462&text=Hai, Aku udah liat semuanya <3" + "%0A%0A" + "Makasii banget loh :v";
        }

      async function pgakmau() {
          await swals.fire('Yeh :v');
        }
        
      tl.call(start);
      // tl.timeScale(3);
      // tl.seek("ganti_slide")
        document.querySelector(".ikon").onclick = () => tl.resume();
        document.querySelector(".tm_1").onclick = () => pmau();
        document.querySelector(".tm_2").onclick = () => pgakmau();
//         document.querySelector("#play").onclick = () => tl.play();
//         document.querySelector("#pause").onclick = () => tl.pause();
//         document.querySelector("#resume").onclick = () => tl.resume();
//         document.querySelector("#reverse").onclick = () => tl.reverse();
//         document.querySelector("#restart").onclick = () => tl.restart();

    function showDiv() {
      document.getElementById('Content').style.display = "block";
    }

    function iloveu() {document.getElementById('sp1').style.display = "none";document.getElementById('sp2').style.display = "block";document.getElementById('text2').style.display = "none";}
    function mulai() {ketiknm();showDiv();document.querySelector(".container_2").style.animation = "fanim 6s ease infinite";}
    function ketiknm() {if(a<textnm.length){document.getElementById("textnama").innerHTML += textnm.charAt(a);a++;setTimeout(ketiknm,100);}if(a==textnm.length){document.getElementById('pergeseran').style.opacity = "1";document.getElementById('pergeseran').style.visibility = "visible";document.getElementById('pergeseran').style.margin = "60px 0 0 0";}}

});





  



