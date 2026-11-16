const page = document.querySelector("#page");
const brand = document.querySelector("#brand");
const headline = document.querySelector("#headline");
const subtext = document.querySelector("#subtext");
const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const card3 = document.querySelector("#card3");
const toggleButton = document.querySelector("#toggleButton");

let isHonest = false;

function makeHonest() {
  page.classList.remove("corporate");
  page.classList.add("honest");

  brand.innerHTML = "Synergix Solutions (honestly)";
  headline.innerHTML = "We use big words so you won't ask what we actually do.";
  subtext.innerHTML = "Our product is okay. Our meetings are too long. Please don't read the fine print.";
  card1.innerHTML = "<h2>Innovation</h2><p>We copied what worked and added a blue button.</p>";
  card2.innerHTML = "<h2>Integrity</h2><p>We are honest when someone asks twice.</p>";
  card3.innerHTML = "<h2>Impact</h2><p>Nobody has measured it yet.</p>";
  toggleButton.innerHTML = "Back to corporate speak";

  isHonest = true;
  console.log("The page is now honest.");
}

function makeCorporate() {
  page.classList.remove("honest");
  page.classList.add("corporate");

  brand.innerHTML = "Synergix Solutions&trade;";
  headline.innerHTML = "We leverage synergies to empower scalable, future-ready outcomes.";
  subtext.innerHTML = "Our best-in-class, customer-centric platform delivers measurable value across every touchpoint.";
  card1.innerHTML = "<h2>Innovation</h2><p>Disruptive thinking, delivered at scale.</p>";
  card2.innerHTML = "<h2>Integrity</h2><p>Transparent processes you can trust.</p>";
  card3.innerHTML = "<h2>Impact</h2><p>Results that move the needle.</p>";
  toggleButton.innerHTML = "Translate to honest";

  isHonest = false;
  console.log("The page is now corporate.");
}

toggleButton.addEventListener("click", function() {
  if (isHonest === false) {
    makeHonest();
  } else {
    makeCorporate();
  }
});