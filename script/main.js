window.addEventListener('load', () => {
  let timerInterval
  Swal.fire({
    title: 'Selamat Datang di Website sederhana ku',
    html: 'Bar ini akan tertutup dalam <b></b> milliseconds.',
    timer: 3000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval);
      TimelineKalimat();
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer');
    }
  })
})

const TimelineKalimat = () => {
  const tl = gsap.timeline({});
  tl.to(".container", { duration: 1, visibility: "visible" });
  tl.from(".kalimat1", { duration: 2, opacity: 0, y: 100, ease: "back" });
  tl.to(".kalimat1", { duration: 2, opacity: 0, y: 0 }, "+=1.5");
  tl.from(".kalimat2", { duration: 2, opacity: 0, y: 100, ease: "back"});
  tl.to(".kalimat2", {duration: 2, opacity: 0, y:-20, onComplete: KonfirmasiMusik}, "+=1");
  };

const KonfirmasiMusik = () => {
  Swal.fire({
    title: 'Mainkan Musik?',
    text: "Kecilkan Volume dulu yaa... :)",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Ya',
    cancelButtonText: 'Tidak'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('hbd.mp3','Sedang dimainkan :)','success');
      document.querySelector('.song').play();
    }
  })
};

//var objs = document.getElementsByClassName("container");
//objs.addEventListener("click", KonfirmasiMusik)