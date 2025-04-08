// ------------- OPEN CLOSE DIV --------------
const openAboutUsButton = document.getElementById("btn-about_us");
const closeAboutUsButton = document.getElementById("btn-close-about_us");

const openChronologyButton = document.getElementById("btn-chronology");
const closeChronologyButton = document.getElementById("btn-close-chronology");

const openDownloadButton = document.getElementById("btn-download");
const closeDownloadButton = document.getElementById("btn-close-download");

const openTutorialButton = document.getElementById("btn-tutorial");
const closeTutorialButton = document.getElementById("btn-close-tutorial");


function openModal(modal){
  if (modal == null) return
  modal.classList.add("show")
};
function closeModal(modal){
  if (modal == null) return
  modal.classList.remove("show")
};

openAboutUsButton.addEventListener("click", () => {
  const window = document.getElementById("wrapper-about_us")
  openModal(window);
});
closeAboutUsButton.addEventListener("click", () => {
  const window = document.getElementById("wrapper-about_us")
  closeModal(window);
});

openChronologyButton.addEventListener("click", () => {
  const window = document.getElementById("wrapper-chronology")
  openModal(window);
});
closeChronologyButton.addEventListener("click", () => {
  const window = document.getElementById("wrapper-chronology")
  closeModal(window);
});

openDownloadButton.addEventListener("click", () => {
  const window = document.getElementById("wrapper-download")
  openModal(window);
});
closeDownloadButton.addEventListener("click", () => {
  const window = document.getElementById("wrapper-download")
  closeModal(window);
});
openTutorialButton.addEventListener("click", () => {
  const window = document.getElementById("wrapper-tutorial")
  openModal(window);
});
closeTutorialButton.addEventListener("click", () => {
  const window = document.getElementById("wrapper-tutorial")
  closeModal(window);
});

// ----------------------------------

// ------------- DRAGGABLE DIV --------------
const about_us_wrapper = document.getElementById("wrapper-about_us");
const about_us_header = about_us_wrapper.querySelector("header");

const chronology_wrapper = document.getElementById("wrapper-chronology");
const chronology_header = chronology_wrapper.querySelector("header");

const download_wrapper = document.getElementById("wrapper-download");
const download_header = download_wrapper.querySelector("header");

const tutorial_wrapper = document.getElementById("wrapper-tutorial");
const tutorial_header = tutorial_wrapper.querySelector("header");

function onDrag1({movementX, movementY}) {
  let getStyle = window.getComputedStyle(about_us_wrapper);
  let left = parseInt(getStyle.left); 
  let top = parseInt(getStyle.top);
  about_us_wrapper.style.left = `${left + movementX}px`;
  about_us_wrapper.style.top = `${top + movementY}px`;
}
function onDrag2({movementX, movementY}) {
  let getStyle = window.getComputedStyle(chronology_wrapper);
  let left = parseInt(getStyle.left); 
  let top = parseInt(getStyle.top);
  chronology_wrapper.style.left = `${left + movementX}px`;
  chronology_wrapper.style.top = `${top + movementY}px`;
}
function onDrag3({movementX, movementY}) {
  let getStyle = window.getComputedStyle(download_wrapper);
  let left = parseInt(getStyle.left); 
  let top = parseInt(getStyle.top);
  download_wrapper.style.left = `${left + movementX}px`;
  download_wrapper.style.top = `${top + movementY}px`;
}
function onDrag4({movementX, movementY}) {
  let getStyle = window.getComputedStyle(tutorial_wrapper);
  let left = parseInt(getStyle.left); 
  let top = parseInt(getStyle.top);
  tutorial_wrapper.style.left = `${left + movementX}px`;
  tutorial_wrapper.style.top = `${top + movementY}px`;
}

about_us_header.addEventListener("mousedown", () => {
  about_us_header.addEventListener("mousemove", onDrag1);
  about_us_wrapper.style.zIndex = "2";
  chronology_wrapper.style.zIndex = "1";
  download_wrapper.style.zIndex = "1";
  tutorial_wrapper.style.zIndex = "1";
});
about_us_header.addEventListener("mouseup", () => {
  about_us_header.removeEventListener("mousemove", onDrag1);
});
about_us_header.addEventListener("mouseleave", () => {
  about_us_header.removeEventListener("mousemove", onDrag1);
});

chronology_header.addEventListener("mousedown", () => {
  chronology_header.addEventListener("mousemove", onDrag2);
  about_us_wrapper.style.zIndex = "1";
  chronology_wrapper.style.zIndex = "2";
  download_wrapper.style.zIndex = "1";
  tutorial_wrapper.style.zIndex = "1";
});
chronology_header.addEventListener("mouseup", () => {
  chronology_header.removeEventListener("mousemove", onDrag2);
});
chronology_header.addEventListener("mouseleave", () => {
  chronology_header.removeEventListener("mousemove", onDrag2);
});

download_header.addEventListener("mousedown", () => {
  download_header.addEventListener("mousemove", onDrag3);
  about_us_wrapper.style.zIndex = "1";
  chronology_wrapper.style.zIndex = "1";
  download_wrapper.style.zIndex = "2";
  tutorial_wrapper.style.zIndex = "1";
});
download_header.addEventListener("mouseup", () => {
  download_header.removeEventListener("mousemove", onDrag3);
});
download_header.addEventListener("mouseleave", () => {
  download_header.removeEventListener("mousemove", onDrag3);
});

tutorial_header.addEventListener("mousedown", () => {
  tutorial_header.addEventListener("mousemove", onDrag4);
  about_us_wrapper.style.zIndex = "1";
  chronology_wrapper.style.zIndex = "1";
  download_wrapper.style.zIndex = "1";
  tutorial_wrapper.style.zIndex = "2";
});
tutorial_header.addEventListener("mouseup", () => {
  tutorial_header.removeEventListener("mousemove", onDrag4);
});
tutorial_header.addEventListener("mouseleave", () => {
  tutorial_header.removeEventListener("mousemove", onDrag4);
});

//------------------------------------------------------------------
// ----------- JIMMY WINDOW OPEN / CLOSE / DRAG --------------------
const openJimmyFile = document.getElementById("jimmy-folder");
const closeJimmyFile = document.getElementById("btn-close-jimmy");
const jimmy_wrapper = document.getElementById("wrapper-jimmy");
const jimmy_header = jimmy_wrapper.querySelector("header");

openJimmyFile.addEventListener("click", () => {
  openModal(jimmy_wrapper);
});
closeJimmyFile.addEventListener("click", () => {
  closeModal(jimmy_wrapper);
});

function onDragJimmy({movementX, movementY}) {
  let getStyle = window.getComputedStyle(jimmy_wrapper);
  let left = parseInt(getStyle.left); 
  let top = parseInt(getStyle.top);
  jimmy_wrapper.style.left = `${left + movementX}px`;
  jimmy_wrapper.style.top = `${top + movementY}px`;
}

jimmy_header.addEventListener("mousedown", () => {
  jimmy_header.addEventListener("mousemove", onDragJimmy);
  about_us_wrapper.style.zIndex = "1";
  chronology_wrapper.style.zIndex = "1";
  download_wrapper.style.zIndex = "1";
  tutorial_wrapper.style.zIndex = "1";
  jimmy_wrapper.style.zIndex = "2";
});
jimmy_header.addEventListener("mouseup", () => {
  jimmy_header.removeEventListener("mousemove", onDragJimmy);
});
jimmy_header.addEventListener("mouseleave", () => {
  jimmy_header.removeEventListener("mousemove", onDragJimmy);
});
// ======= ULYSSE =======
const openUlysseFile = document.getElementById("gabriel-folder");
const closeUlysseFile = document.getElementById("btn-close-ulysse");
const ulysse_wrapper = document.getElementById("wrapper-ulysse");
const ulysse_header = ulysse_wrapper.querySelector("header");

openUlysseFile.addEventListener("click", () => {
  openModal(ulysse_wrapper);
});
closeUlysseFile.addEventListener("click", () => {
  closeModal(ulysse_wrapper);
});

function onDragUlysse({movementX, movementY}) {
  let getStyle = window.getComputedStyle(ulysse_wrapper);
  let left = parseInt(getStyle.left); 
  let top = parseInt(getStyle.top);
  ulysse_wrapper.style.left = `${left + movementX}px`;
  ulysse_wrapper.style.top = `${top + movementY}px`;
}

ulysse_header.addEventListener("mousedown", () => {
  ulysse_header.addEventListener("mousemove", onDragUlysse);
  about_us_wrapper.style.zIndex = "1";
  chronology_wrapper.style.zIndex = "1";
  download_wrapper.style.zIndex = "1";
  tutorial_wrapper.style.zIndex = "1";
  jimmy_wrapper.style.zIndex = "1";
  ulysse_wrapper.style.zIndex = "2";
  ulysse_wrapper.style.zIndex = "1";
  mehdi_wrapper.style.zIndex = "1";
});
ulysse_header.addEventListener("mouseup", () => {
  ulysse_header.removeEventListener("mousemove", onDragUlysse);
});
ulysse_header.addEventListener("mouseleave", () => {
  ulysse_header.removeEventListener("mousemove", onDragUlysse);
});

// ======= WALI =======
const openWaliFile = document.getElementById("rania-folder");
const closeWaliFile = document.getElementById("btn-close-wali");
const wali_wrapper = document.getElementById("wrapper-wali");
const wali_header = wali_wrapper.querySelector("header");

openWaliFile.addEventListener("click", () => {
  openModal(wali_wrapper);
});
closeWaliFile.addEventListener("click", () => {
  closeModal(wali_wrapper);
});

function onDragWali({movementX, movementY}) {
  let getStyle = window.getComputedStyle(wali_wrapper);
  let left = parseInt(getStyle.left); 
  let top = parseInt(getStyle.top);
  wali_wrapper.style.left = `${left + movementX}px`;
  wali_wrapper.style.top = `${top + movementY}px`;
}

wali_header.addEventListener("mousedown", () => {
  wali_header.addEventListener("mousemove", onDragWali);
  about_us_wrapper.style.zIndex = "1";
  chronology_wrapper.style.zIndex = "1";
  download_wrapper.style.zIndex = "1";
  tutorial_wrapper.style.zIndex = "1";
  jimmy_wrapper.style.zIndex = "1";
  wali_wrapper.style.zIndex = "2";
  ulysse_wrapper.style.zIndex = "1";
  mehdi_wrapper.style.zIndex = "1";
});
wali_header.addEventListener("mouseup", () => {
  wali_header.removeEventListener("mousemove", onDragWali);
});
wali_header.addEventListener("mouseleave", () => {
  wali_header.removeEventListener("mousemove", onDragWali);
});

// ======= MEHDI =======
const openMehdiFile = document.getElementById("nicolas-folder");
const closeMehdiFile = document.getElementById("btn-close-mehdi");
const mehdi_wrapper = document.getElementById("wrapper-mehdi");
const mehdi_header = mehdi_wrapper.querySelector("header");

openMehdiFile.addEventListener("click", () => {
  openModal(mehdi_wrapper);
});
closeMehdiFile.addEventListener("click", () => {
  closeModal(mehdi_wrapper);
});

function onDragMehdi({movementX, movementY}) {
  let getStyle = window.getComputedStyle(mehdi_wrapper);
  let left = parseInt(getStyle.left); 
  let top = parseInt(getStyle.top);
  mehdi_wrapper.style.left = `${left + movementX}px`;
  mehdi_wrapper.style.top = `${top + movementY}px`;
}

mehdi_header.addEventListener("mousedown", () => {
  mehdi_header.addEventListener("mousemove", onDragMehdi);
  about_us_wrapper.style.zIndex = "1";
  chronology_wrapper.style.zIndex = "1";
  download_wrapper.style.zIndex = "1";
  tutorial_wrapper.style.zIndex = "1";
  jimmy_wrapper.style.zIndex = "1";
  wali_wrapper.style.zIndex = "1";
  ulysse_wrapper.style.zIndex = "1";
  mehdi_wrapper.style.zIndex = "2";
});
mehdi_header.addEventListener("mouseup", () => {
  mehdi_header.removeEventListener("mousemove", onDragMehdi);
});
mehdi_header.addEventListener("mouseleave", () => {
  mehdi_header.removeEventListener("mousemove", onDragMehdi);
});

//------------------------------------------------------------------
// ----------- TUTORIAL SLIDESHOW --------------------
const tutorialBtn = document.getElementById("btn-tutorial");
const closeTutorial = document.getElementById("btn-close-tutorial");
const dogPhoto = document.getElementById("dog-photo");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const images = [
    "styles/images/capture1.png",
    "styles/images/capture2.png",
    "styles/images/capture3.png",
    "styles/images/capture4.png"
];
let index = 0;

if (tutorial_header && tutorial_wrapper && tutorialBtn && closeTutorial && dogPhoto) {
    tutorialBtn.addEventListener('click', () => {
        tutorial_wrapper.classList.add('show');
        dogPhoto.src = images[index]; // Assure que la première image s'affiche
    });

    closeTutorial.addEventListener('click', () => {
        tutorial_wrapper.classList.remove('show');
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        dogPhoto.src = images[index];
    });

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % images.length;
        dogPhoto.src = images[index];
    });
}
const switchBtn = document.getElementById("switch-folders");

const folderIcons = [
  "styles/images/folder.png",         // gris
  "styles/images/folder_green.png",   // vert
  "styles/images/folder_orange.png"   // orange
];

const headerClasses = [
  "header-gray",
  "header-green",
  "header-orange"
];

let folderState = 0;

switchBtn.addEventListener("click", () => {
  folderState = (folderState + 1) % folderIcons.length;
  const newSrc = folderIcons[folderState];

  // Changer les images de dossier
  const folders = document.querySelectorAll("img[src*='folder']");
  folders.forEach(folder => {
    folder.src = newSrc;
  });

  // Changer les headers
  const headers = document.querySelectorAll(".wrapper header");
  headers.forEach(header => {
    header.classList.remove("header-gray", "header-green", "header-orange");
    header.classList.add(headerClasses[folderState]);
  });

  // Changer le fond du "bureau"
  const mainSection = document.getElementById("main-section");
  if (folderState === 2) {
    // orange mode = beige background
    mainSection.classList.add("beige-desktop");
  } else {
    mainSection.classList.remove("beige-desktop");
  }
});
 