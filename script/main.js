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
  tl.from(".kalimat2", { duration: 2, opacity: 0, y: 100, ease: "back" });
  tl.to(".kalimat2", { duration: 2, opacity: 0, y: -20, onComplete: KonfirmasiMusik }, "+=1");
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
      Swal.fire('hbd.mp3', 'Sedang dimainkan :)', 'success');
      document.querySelector('.song').play();
      WebpageProject();
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      WebpageProject();
    }
  })
};

const WebpageProject = () => {
  const tl = gsap.timeline({});
  tl.to(".myProject", { duration: 2, visibility: "visible", opacity: 1, y: 10, ease: "back" });
};

//var objs = document.getElementsByClassName("container");
//objs.addEventListener("click", KonfirmasiMusik)

// fetchData

async function fetchData(type = "skills") {
  let response
  type === "skills" ?
      response = await fetch("skills.json")
      :
      response = await fetch("./json/projects.json")
  const data = await response.json();
  return data;
}


function showProjects(projects) {
  let projectsContainer = document.querySelector("#work .box-container");
  let projectHTML = "";
  projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
      projectHTML += `
      <div class="box tilt">
    <img draggable="false" src="${project.image}" alt="project" />
    <div class="content">
      <div class="tag">
      <h3>${project.name}</h3>
      </div>
      <div class="desc">
        <p>${project.desc}</p>
        <div class="btns">
          <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
          <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
        </div>
      </div>
    </div>
  </div>`
  });
  projectsContainer.innerHTML = projectHTML;
}

fetchData("projects").then(data => {
  showProjects(data);
});