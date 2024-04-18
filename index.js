const videos = document.querySelectorAll("video");
var progressBars = document.querySelectorAll(".progress");
var playButtons = document.querySelectorAll(".playIcon");
var secVideo = document.querySelectorAll(".vid-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const video = entry.target.querySelector("video");
        if (video) {
          video.play();
        }
      } else {
        const video = entry.target.querySelector("video");
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  },
  { threshold: 0.5 }
);

secVideo.forEach((video) => {
  observer.observe(video);
});

document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section);
});

function togglePlay(videoId, buttonId) {
  var video = document.getElementById(videoId);
  var btn = document.getElementById(buttonId);

  if (video.paused) {
    video.play();
    setTimeout(function () {
      btn.style.display = "none";
    }, 500);
  } else {
    video.pause();
    btn.style.display = "block";
  }
}

function toggleMute(videoId, buttonId) {
  var video = document.getElementById(videoId);
  var btn = document.getElementById(buttonId);
  btn.src = "./Assets/Icons/muteOn.svg";
  if (video.muted) {
    video.muted = false;
    btn.src = "./Assets/Icons/muteOn.svg";
  } else {
    video.muted = true;
    btn.src = "./Assets/Icons/muteOff.svg";
  }
}

function updateProgress(video, progressBar) {
  var value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

videos.forEach(function (video, index) {
  video.onclick = function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  video.addEventListener("timeupdate", function () {
    updateProgress(video, progressBars[index]);
  });
});

playButtons.forEach((playBtn) => {
  setTimeout(function () {
    playBtn.style.display = "none";
  }, 3000);
});

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

function heartToggle(buttonId) {
  var btn = document.getElementById(buttonId);
  var icon = btn.querySelector("img");

  if (icon.src.includes("heart2.svg")) {
    icon.src = "./Assets/Icons/heart1.svg";
  } else {
    icon.src = "./Assets/Icons/heart2.svg";
  }
}

function saveToggle(buttonId) {
  var btn = document.getElementById(buttonId);
  var icon = btn.querySelector("img");

  if (icon.src.includes("save.svg")) {
    icon.src = "./Assets/Icons/save2.svg";
  } else {
    icon.src = "./Assets/Icons/save.svg";
  }
}

function commentToggle(divId) {
  var btn = document.getElementById(divId);
  btn.style.display = "block";
}

function closeComment(divId) {
  var btn = document.getElementById(divId);
  btn.style.display = "none";
}

function addUserToggle(addUserId) {
  var btn = document.getElementById(addUserId);
  btn.style.display = "none";
}

function shareToggler(divId) {
  var btn = document.getElementById(divId);
  btn.style.display = "flex";
}

function closeShare(divId) {
  var btn = document.getElementById(divId);
  btn.style.display = "none";
}

secVideo.forEach((videoCard) => {
  videoCard.addEventListener("mouseout", function () {
    const video = videoCard.querySelector("video");
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const userLinks = document.querySelectorAll(".userTab");
  userLinks.forEach((userLink) => {
    userLink.addEventListener("click", function () {
      userLinks.forEach((u) => {
        u.classList.remove("active");
      });
      userLink.classList.add("active");
    });
  });
});

function page(pageId) {
  var i, tabContent;
  tabContent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  document.getElementById(pageId).style.display = "flex";
}
document.getElementById("default").click();

document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tablink");
  tabLinks.forEach((tabLink) => {
    tabLink.addEventListener("click", function () {
      tabLinks.forEach((t) => {
        t.classList.remove("active");
      });
      tabLink.classList.add("active");
    });
  });
});

function openChat(pageId) {
  var i, tabContent;
  tabContent = document.getElementsByClassName("chatPage");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  document.getElementById(pageId).style.display = "flex";
}
