// get the data
let users = [
  {
    profilePics:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1446&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessages: 4,
    location: "Delhi, India",
    name: "Sameer",
    age: 20,
    intrests: [
      {
        icon: `<i class="ri-code-line"></i>`,
        intrest: "Coding",
      },
      {
        icon: `<i class="text-sm ri-music-2-fill"></i>`,
        intrest: "Music",
      },
      {
        icon: `<i class="ri-steering-2-fill"></i>`,
        intrest: "Driving",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro blanditiis vitae atque dolorem fugit tempore nulla magnam quasi consequatur? Eaque, eos? Et, repellat dolorum velit numquam ipsa unde vel incidunt.0",
    isFriend: null,
  },
  {
    profilePics:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1446&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessages: 4,
    location: "Mumbai, India",
    name: "Ahmed",
    age: 22,
    intrests: [
      {
        icon: `<i class="ri-code-line"></i>`,
        intrest: "Coding",
      },
      {
        icon: `<i class="text-sm ri-music-2-fill"></i>`,
        intrest: "Music",
      },
      {
        icon: `<i class="ri-steering-2-fill"></i>`,
        intrest: "Driving",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro blanditiis vitae atque dolorem fugit tempore nulla magnam quasi consequatur? Eaque, eos? Et, repellat dolorum velit numquam ipsa unde vel incidunt.0",
    isFriend: null,
  },
  {
    profilePics:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessages: 4,
    location: "Lucknow, India",
    name: "Abishekh",
    age: 18,
    intrests: [
      {
        icon: `<i class="ri-code-line"></i>`,
        intrest: "Coding",
      },
      {
        icon: `<i class="text-sm ri-music-2-fill"></i>`,
        intrest: "Music",
      },
      {
        icon: `<i class="ri-steering-2-fill"></i>`,
        intrest: "Driving",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro blanditiis vitae atque dolorem fugit tempore nulla magnam quasi consequatur? Eaque, eos? Et, repellat dolorum velit numquam ipsa unde vel incidunt.0",
    isFriend: null,
  },
  {
    profilePics:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1718613205605-d933afdd1f36?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessages: 4,
    location: "Kanpur, India",
    name: "Shibra",
    age: 23,
    intrests: [
      {
        icon: `<i class="ri-code-line"></i>`,
        intrest: "Coding",
      },
      {
        icon: `<i class="text-sm ri-music-2-fill"></i>`,
        intrest: "Music",
      },
      {
        icon: `<i class="ri-steering-2-fill"></i>`,
        intrest: "Driving",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro blanditiis vitae atque dolorem fugit tempore nulla magnam quasi consequatur? Eaque, eos? Et, repellat dolorum velit numquam ipsa unde vel incidunt.0",
    isFriend: null,
  },
];

function select(elem) {
  return document.querySelector(elem);
}

let curr = 0;

function setData(index){
    select(".prflimg img").src = users[index].profilePics;
  select(".badge h2").textContent = users[index].pendingMessages;
  select(".location h3").textContent = users[index].location;
  select(".name h1:nth-child(1)").textContent = users[index].name;
  select(".name h1:nth-child(2)").textContent = users[index].age;

  var clutter = "";
  users[index].intrests.forEach(function (intrests) {
    clutter += `<div class="tag flex gap-3 items-center bg-white/20 px-5 py-1 rounded-full">
                            ${intrests.icon}
                            <h3 class="text-sm tracking-tight capitalize">${intrests.intrest}</h3>
                        </div>`;
  });

  select(".tags").innerHTML = clutter;
  select(".bio p").textContent = users[index].bio;
}

(function setInit() {
  select(".main img").src = users[curr].displayPic;
  select(".main img").src = users[curr]?.displayPic;
  
    setData(curr);
  curr = 0;
})();

let isAnimating = false;

function imageChange() {
  if (!isAnimating) {
    isAnimating = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAnimating = false;
        let main = select(".main");
        let incom = select(".incoming");

        incom.classList.remove("[z-2]");
        incom.classList.add("[z-3]");
        incom.classList.remove("incoming");

        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");
        gsap.set("main", {
          opacity: 1,
          scale: 1,
        });

        if (curr === users.length) curr = 0;
        select(".main img").src = users[curr].displayPic;
        curr++;
        main.classList.remove("main");
        main.classList.add("main");
        main.classList.add("incoming");
      },
    });
    tl.to(
      ".main",
      {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: 0.9,
      },
      "a"
    ).from(
      ".incoming",
      {
        scale: 0.9,
        opacity: 0,
        ease: Circ,
        duration: 1.1,
      },
      "a"
    );
  }
}

(function containerCreator() {
  document.querySelectorAll(".ee").forEach(function (elem) {
    let div = document.createElement("div");
    div.classList.add(`${elem.classList[1]}container`, 'overflow-hidden');
    div.appendChild(elem);
    select(".details").appendChild(div);
  });
})();

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", () => {
  imageChange();
  setData(curr-1)
  gsap.from(".details .ee", {
    y: "100%",
    opacity: .06,
    stagger: 0.1,
    ease: Power4.easeInOut,
    duration: 1.6,
  });
});
accept.addEventListener("click", () => {
  imageChange();
  setData(curr-1)
  gsap.from(".details .ee", {
    y: "100%",
    opacity: .06,
    stagger: 0.1,
    ease: Power4.easeInOut,
    duration: 1.6,
  });
});