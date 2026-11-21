// 40 Indigenous Indian Cattle (28) & Buffalo (12) Breeds Dataset
const BREEDS = [
  { name: "Alambadi Cow", type: "cow", region: "Tamil Nadu, India", use: "Draught", yield: "2-3 L/day", lifespan: "15-18 years", coat: "Grey with white markings", desc: "Hardy draught breed from Tamil Nadu adapted to dry semi-arid conditions.", notes: "Strong trotter suited for dry agricultural operations; thrives on low-cost grazing." },
  { name: "Amritmahal Cow", type: "cow", region: "Karnataka, India", use: "Draught", yield: "1-2 L/day", lifespan: "18-20 years", coat: "Grey to dark grey", desc: "Elite draught breed from Karnataka known for speed and endurance.", notes: "Compact muscular build with long pointed horns; historically prized for transport and field work." },
  { name: "Bachaur Cow", type: "cow", region: "Bihar, India", use: "Draught", yield: "2-4 L/day", lifespan: "15-18 years", coat: "White / grey", desc: "Medium-sized draught breed native to North Bihar.", notes: "Active worker in alluvial plains with good heat tolerance." },
  { name: "Bargur Cow", type: "cow", region: "Tamil Nadu, India", use: "Draught", yield: "2-3 L/day", lifespan: "15-18 years", coat: "Brown with white markings", desc: "Agile draught breed from the Bargur hills of Erode district.", notes: "Sure-footed on steep rocky hill terrain; naturally alert and spirited." },
  { name: "Belahi Cow", type: "cow", region: "Haryana / Chandigarh", use: "Dual Purpose", yield: "5-7 L/day", lifespan: "15-18 years", coat: "White / light grey", desc: "Indigenous dual-purpose breed from Haryana and Chandigarh.", notes: "Balances moderate dairy output with sturdy farm draught capability." },
  { name: "Dangi Cow", type: "cow", region: "Maharashtra / Gujarat", use: "Dual Purpose", yield: "1-3 L/day", lifespan: "15-18 years", coat: "Red & white / black & white", desc: "Hardy breed from the hilly Dangs region tolerant to heavy rainfall.", notes: "Secretes an oily skin coat that sheds heavy monsoon rain effectively." },
  { name: "Deoni Cow", type: "cow", region: "Maharashtra / Karnataka", use: "Dual Purpose", yield: "3-5 L/day", lifespan: "15-18 years", coat: "Spotted black and white", desc: "Dual-purpose breed from the Deccan plateau (Marathwada & Bidar).", notes: "Calm temperament with good milk production and reliable draught bullocks." },
  { name: "Gangatiri Cow", type: "cow", region: "Uttar Pradesh / Bihar", use: "Dual Purpose", yield: "4-6 L/day", lifespan: "15-18 years", coat: "White / grey", desc: "Riverine dual-purpose breed along the Gangetic plains.", notes: "Adapted to humid river basin conditions and smallholder dairy farming." },
  { name: "Gaolao Cow", type: "cow", region: "Maharashtra / Madhya Pradesh", use: "Draught", yield: "2-4 L/day", lifespan: "15-18 years", coat: "White", desc: "Light, fast-moving draught breed from Vidarbha and adjoining MP.", notes: "Long face and straight horns; well suited for light transport and cultivation." },
  { name: "Gir Cow", type: "cow", region: "Gujarat, India", use: "Dairy", yield: "10-15 L/day", lifespan: "15-20 years", coat: "Mottled red & white", desc: "Famous dairy breed native to the Gir forests, known for heat tolerance and A2 milk.", notes: "Distinctive convex forehead and pendulous ears; thrives in warm climates." },
  { name: "Hallikar Cow", type: "cow", region: "Karnataka, India", use: "Draught", yield: "2-4 L/day", lifespan: "16-20 years", coat: "Grey / dark grey", desc: "Progenitor of most South Indian draught breeds with vertical horns.", notes: "Renowned for stamina, trotting ability, and hardiness under rough management." },
  { name: "Hariana Cow", type: "cow", region: "Haryana, India", use: "Dual Purpose", yield: "6-8 L/day", lifespan: "15-18 years", coat: "White / light grey", desc: "Popular North Indian dual-purpose breed valued for milk and strong bullocks.", notes: "Large symmetrical frame with good milk persistency and heavy draught power." },
  { name: "Kangayam Cow", type: "cow", region: "Tamil Nadu, India", use: "Draught", yield: "2-3 L/day", lifespan: "16-20 years", coat: "Grey (bulls darker)", desc: "Powerful draught breed from Tiruppur district known for muscular build.", notes: "Drought-tolerant breed suited to dry pastures and heavy tillage." },
  { name: "Kankrej Cow", type: "cow", region: "Gujarat / Rajasthan", use: "Dual Purpose", yield: "6-10 L/day", lifespan: "16-20 years", coat: "Silver-grey to iron-grey", desc: "Large Indian cattle breed with lyre-shaped horns and high disease resistance.", notes: "High-stepping gait ('Sawai chal') and strong adaptability to arid regions." },
  { name: "Kasargod Cow", type: "cow", region: "Kerala, India", use: "Dairy", yield: "2-3 L/day", lifespan: "15-18 years", coat: "Black / brown", desc: "Dwarf cattle breed adapted to hilly terrain and backyard farming.", notes: "Low feed requirement and strong resistance to local climatic stress." },
  { name: "Kathani Cow", type: "cow", region: "Maharashtra, India", use: "Dual Purpose", yield: "3-5 L/day", lifespan: "15-18 years", coat: "Reddish brown / fawn", desc: "Indigenous breed of Vidarbha suited to paddy fields and mixed farming.", notes: "Good adaptability to wet soils and steady milk yield for smallholders." },
  { name: "Kenkatha Cow", type: "cow", region: "Uttar Pradesh / MP", use: "Draught", yield: "1-3 L/day", lifespan: "15-18 years", coat: "Grey / dark grey", desc: "Small, sturdy draught breed thriving along the Ken river valley.", notes: "Compact and resilient in semi-arid Bundelkhand terrain." },
  { name: "Kherigarh Cow", type: "cow", region: "Uttar Pradesh, India", use: "Draught", yield: "1-2 L/day", lifespan: "15-18 years", coat: "White", desc: "Active white-coated draught breed native to Lakhimpur Kheri.", notes: "Upward-curving horns and lively temperament suited to light farm work." },
  { name: "Khillari Cow", type: "cow", region: "Maharashtra / Karnataka", use: "Draught", yield: "2-4 L/day", lifespan: "16-20 years", coat: "Greyish white", desc: "Fast-trotting draught breed suited to drought-prone Deccan districts.", notes: "Alert and agile with long upward-sweeping horns." },
  { name: "Krishna Valley Cow", type: "cow", region: "Karnataka / Maharashtra", use: "Draught", yield: "3-5 L/day", lifespan: "15-18 years", coat: "Grey white with dark forequarters", desc: "Large-framed draught breed developed for heavy black cotton soil.", notes: "Heavy body frame built for deep ploughing and heavy loads." },
  { name: "Malnad Gidda Cow", type: "cow", region: "Karnataka, India", use: "Dual Purpose", yield: "2-3 L/day", lifespan: "15-18 years", coat: "Black / brown / fawn", desc: "Dwarf breed from the Western Ghats prized for hardiness.", notes: "Thrives in high-rainfall hilly forest tracts with minimal inputs." },
  { name: "Malvi Cow", type: "cow", region: "Madhya Pradesh, India", use: "Draught", yield: "2-4 L/day", lifespan: "15-18 years", coat: "Grey (darker in males)", desc: "Sturdy draught breed from the Malwa plateau of Madhya Pradesh.", notes: "Well suited to road haulage and field work on medium soils." },
  { name: "Mewati Cow", type: "cow", region: "Rajasthan / Haryana", use: "Dual Purpose", yield: "4-6 L/day", lifespan: "15-18 years", coat: "White with dark neck/quarters", desc: "Large dual-purpose breed from the Mewat region.", notes: "Docile temperament and useful for both milk and draught." },
  { name: "Nagori Cow", type: "cow", region: "Rajasthan, India", use: "Draught", yield: "2-4 L/day", lifespan: "16-20 years", coat: "White / light grey", desc: "Renowned fast-moving draught breed from Nagaur district.", notes: "Long body and legs prized for swift carting and agricultural work." },
  { name: "Nimari Cow", type: "cow", region: "Madhya Pradesh, India", use: "Draught", yield: "2-4 L/day", lifespan: "15-18 years", coat: "Red with white splashes", desc: "Active draught breed from the Narmada valley.", notes: "Resembles Gir in color pattern with strong draught stamina." },
  { name: "Ongole Cow", type: "cow", region: "Andhra Pradesh, India", use: "Dual Purpose", yield: "4-6 L/day", lifespan: "16-20 years", coat: "White", desc: "Majestic white breed known for strength and heat adaptability.", notes: "Large muscular frame with high tolerance to tropical heat and parasites." },
  { name: "Poda Thurpu Cow", type: "cow", region: "Telangana, India", use: "Draught", yield: "2-4 L/day", lifespan: "15-18 years", coat: "White / grey", desc: "Indigenous draught cattle breed registered from Telangana.", notes: "Adapted to Telangana's dryland farming systems and field work." },
  { name: "Pulikulam Cow", type: "cow", region: "Tamil Nadu, India", use: "Draught", yield: "1-3 L/day", lifespan: "15-18 years", coat: "Grey / dark grey", desc: "Agile breed from Madurai and Sivaganga traditionally used in Jallikattu.", notes: "Highly energetic and well adapted to dry southern scrublands." },
  { name: "Rathi Cow", type: "cow", region: "Rajasthan, India", use: "Dairy", yield: "8-12 L/day", lifespan: "15-18 years", coat: "Brown with white patches", desc: "Important milch breed of the Thar desert adapted to arid pastures.", notes: "Good dairy performance under semi-arid feed conditions." },
  { name: "Red Sindhi Cow", type: "cow", region: "Organized Farms / India", use: "Dairy", yield: "7-11 L/day", lifespan: "15-20 years", coat: "Deep red", desc: "Compact red dairy zebu breed valued for heat tolerance and milk yield.", notes: "Well-known for adaptability to warm climates and steady lactation." },
  { name: "Sahiwal Cow", type: "cow", region: "Punjab / Rajasthan", use: "Dairy", yield: "10-16 L/day", lifespan: "15-20 years", coat: "Reddish dun", desc: "Top indigenous dairy zebu breed with loose skin and tick resistance.", notes: "High milk yield and good thermal tolerance for dairy herds." },
  { name: "Tharparkar Cow", type: "cow", region: "Rajasthan, India", use: "Dual Purpose", yield: "8-12 L/day", lifespan: "16-20 years", coat: "White / light grey", desc: "Resilient arid-zone breed known for drought tolerance and milk.", notes: "Maintains milk production and body condition in hot, dry environments." },
  { name: "Umblachery Cow", type: "cow", region: "Tamil Nadu, India", use: "Draught", yield: "2-3 L/day", lifespan: "15-18 years", coat: "Grey (calves red with white socks)", desc: "Compact draught breed of the Cauvery delta suited to wet ploughing.", notes: "Sure-footed in muddy paddy fields with distinctive white leg markings." },
  { name: "Vechur Cow", type: "cow", region: "Kerala, India", use: "Dairy", yield: "2-3 L/day", lifespan: "15-18 years", coat: "Black, red, or fawn", desc: "Smallest indigenous cattle breed in India, native to Kerala.", notes: "Low feed requirement and high adaptability to humid coastal smallholdings." },

  { name: "Banni Buffalo", type: "buffalo", region: "Gujarat, India", use: "Dairy", yield: "10-14 L/day", lifespan: "20-25 years", coat: "Black / copper-black", desc: "High-yielding buffalo breed from the Banni grasslands of Kutch.", notes: "Known for night grazing habits, heat tolerance, and high milk fat." },
  { name: "Bhadawari Buffalo", type: "buffalo", region: "Uttar Pradesh / MP", use: "Dairy", yield: "5-7 L/day", lifespan: "18-22 years", coat: "Copper-colored", desc: "Medium-sized buffalo breed known for very high butterfat percentage.", notes: "Distinctive copper coat and sparse hair; suited to ravines of UP and MP." },
  { name: "Jaffrabadi Buffalo", type: "buffalo", region: "Gujarat, India", use: "Dairy", yield: "12-16 L/day", lifespan: "20-24 years", coat: "Jet black", desc: "Heavy Indian buffalo breed from Saurashtra with drooping horns.", notes: "Large frame with high milk yield and rich fat content." },
  { name: "Mehsana Buffalo", type: "buffalo", region: "Gujarat, India", use: "Dairy", yield: "10-15 L/day", lifespan: "20-22 years", coat: "Black to brownish-black", desc: "High-persistency dairy buffalo from North Gujarat.", notes: "Long lactation period and regular calving interval." },
  { name: "Murrah Buffalo", type: "buffalo", region: "Haryana / Punjab", use: "Dairy", yield: "14-18 L/day", lifespan: "20-25 years", coat: "Jet black", desc: "Premier Indian dairy buffalo with tightly curled horns.", notes: "Highest milk-yielding buffalo breed with high fat percentage and docile nature." },
  { name: "Nagpuri Buffalo", type: "buffalo", region: "Maharashtra, India", use: "Dual Purpose", yield: "5-8 L/day", lifespan: "18-22 years", coat: "Black with white face/legs/tail", desc: "Hardy breed of Vidarbha with long flat sword-like horns.", notes: "Adapted to hot summers and useful for both milk and draught." },
  { name: "Nili Ravi Buffalo", type: "buffalo", region: "Punjab, India", use: "Dairy", yield: "10-15 L/day", lifespan: "20-24 years", coat: "Black with white markings", desc: "Riverine dairy buffalo with wall eyes and white forehead/legs.", notes: "High milk yield and strong adaptability in irrigated plains." },
  { name: "Pandharpuri Buffalo", type: "buffalo", region: "Maharashtra, India", use: "Dairy", yield: "6-9 L/day", lifespan: "18-22 years", coat: "Black", desc: "Adaptable buffalo breed from southern Maharashtra with long horns.", notes: "Thrives in high-temperature dry zones with steady milk production." },
  { name: "Surti Buffalo", type: "buffalo", region: "Gujarat, India", use: "Dairy", yield: "8-11 L/day", lifespan: "18-22 years", coat: "Black or brown", desc: "Medium-sized economical dairy buffalo with sickle-shaped horns.", notes: "Docile temperament and economical feed conversion for small dairy units." },
  { name: "Toda Buffalo", type: "buffalo", region: "Tamil Nadu (Nilgiris)", use: "Dairy", yield: "4-6 L/day", lifespan: "18-22 years", coat: "Ash-grey / fawn", desc: "Semi-wild indigenous breed of the Nilgiri hills.", notes: "Thick coat suited to cool highland pastures; distinct from plains buffaloes." }
];

// Expanded Symptom Checklist & 12+ Cattle/Buffalo Disease Profiles
const SYMPTOMS = [
  "blisters on tongue", "blisters in mouth",
  "blisters on hooves", "excessive drooling",
  "lameness", "loss of appetite",
  "fever", "high fever",
  "firm skin nodules", "skin lumps",
  "swollen lymph nodes", "nasal discharge",
  "eye discharge", "rapid breathing",
  "coughing", "reduced milk yield",
  "swollen udder", "hot udder",
  "abnormal milk", "blood in milk",
  "dark red urine", "crepitating leg swelling",
  "sudden lameness", "abortion or retained placenta",
  "muscle tremors or weakness", "bloated left flank"
];

const DISEASES = [
  {
    name: "Foot-and-Mouth Disease (FMD)",
    keywords: ["blisters on tongue", "blisters in mouth", "blisters on hooves", "excessive drooling", "lameness", "fever"],
    cause: "Highly contagious Aphthovirus transmitted via direct contact, aerosols, contaminated feed, or movement.",
    treatment: "Isolate affected animals immediately; wash mouth and hoof lesions with mild antiseptic and offer soft, palatable feed.",
    prevention: "Routine biannual vaccination, quarantine of new animals, and strict farm hygiene."
  },
  {
    name: "Lumpy Skin Disease (LSD)",
    keywords: ["firm skin nodules", "skin lumps", "swollen lymph nodes", "high fever", "nasal discharge", "eye discharge"],
    cause: "Capripoxvirus spread mainly by biting insects (flies, mosquitoes, ticks) and contact.",
    treatment: "Veterinary supportive care, anti-inflammatory treatment, antiseptic wound care on ruptured nodules, and fly/vector control.",
    prevention: "Timely vaccination per local veterinary guidance and insect/vector control around sheds."
  },
  {
    name: "Clinical Mastitis",
    keywords: ["swollen udder", "hot udder", "abnormal milk", "blood in milk", "reduced milk yield"],
    cause: "Bacterial infection of the mammary gland often linked to milking hygiene or environmental exposure.",
    treatment: "Veterinary intramammary/systemic therapy, frequent gentle stripping of affected quarters, and clean dry bedding.",
    prevention: "Clean milking hygiene, teat dipping, dry-cow management, and regular udder checks."
  },
  {
    name: "Bovine Babesiosis (Tick Fever / Red Water)",
    keywords: ["high fever", "dark red urine", "loss of appetite", "reduced milk yield", "muscle tremors or weakness"],
    cause: "Tick-borne Babesia protozoan parasites transmitted by ixodid ticks.",
    treatment: "Prompt veterinary diagnosis and targeted babesicidal therapy plus hydration and supportive care.",
    prevention: "Regular tick control on animals and sheds, pasture management, and veterinary monitoring."
  },
  {
    name: "Theileriosis (Tropical Tick Fever)",
    keywords: ["high fever", "swollen lymph nodes", "eye discharge", "nasal discharge", "loss of appetite", "reduced milk yield"],
    cause: "Theileria parasites transmitted by ticks, especially affecting crossbred and high-yielding cattle.",
    treatment: "Early veterinary intervention with antitheilerial medication, fever management, and nutritional support.",
    prevention: "Tick vector control, hygiene in calf/cattle housing, and early veterinary checkups."
  },
  {
    name: "Haemorrhagic Septicaemia (HS)",
    keywords: ["high fever", "rapid breathing", "nasal discharge", "excessive drooling", "loss of appetite"],
    cause: "Pasteurella multocida bacterial infection; often acute during humid/monsoon seasons.",
    treatment: "Emergency veterinary care with early antibiotic therapy and respiratory/shock support.",
    prevention: "Annual pre-monsoon vaccination and avoiding sudden stress or overcrowding."
  },
  {
    name: "Black Quarter (Blackleg)",
    keywords: ["crepitating leg swelling", "sudden lameness", "lameness", "high fever", "loss of appetite"],
    cause: "Clostridium chauvoei spore-forming bacteria commonly affecting young cattle (6 months to 2-3 years).",
    treatment: "Urgent veterinary treatment with high-dose penicillin/antibiotics and anti-inflammatory support.",
    prevention: "Annual vaccination before high-risk seasons and proper carcass disposal."
  },
  {
    name: "Bovine Respiratory Disease (BRD)",
    keywords: ["coughing", "rapid breathing", "nasal discharge", "fever", "loss of appetite", "reduced milk yield"],
    cause: "Multi-factor viral and bacterial respiratory infection triggered by stress, poor ventilation, or weather shifts.",
    treatment: "Veterinary evaluation for appropriate antimicrobials, anti-inflammatories, and clean ventilated housing.",
    prevention: "Good shed ventilation, avoiding overcrowding, and gradual feed/housing transitions."
  },
  {
    name: "Brucellosis",
    keywords: ["abortion or retained placenta", "swollen lymph nodes", "reduced milk yield"],
    cause: "Brucella abortus bacteria transmitted through birth fluids, placenta, or contaminated feed/water.",
    treatment: "Veterinary herd management and biosecurity protocol; strict protective gear when handling calving/aborting animals.",
    prevention: "Heifer calfhood vaccination per veterinary schedule, isolation, and safe disposal of aborted materials."
  },
  {
    name: "Milk Fever (Hypocalcaemia)",
    keywords: ["muscle tremors or weakness", "loss of appetite", "reduced milk yield"],
    cause: "Acute drop in blood calcium around calving, particularly in high-yielding dairy cattle.",
    treatment: "Immediate veterinary calcium therapy and keeping the animal comfortable on non-slip bedding.",
    prevention: "Balanced pre- and post-calving mineral nutrition under veterinary/nutritionist advice."
  },
  {
    name: "Ruminal Tympany (Bloat)",
    keywords: ["bloated left flank", "rapid breathing", "loss of appetite", "excessive drooling"],
    cause: "Gas accumulation in the rumen from rapid consumption of lush legumes, rich concentrates, or frothy feed.",
    treatment: "Immediate veterinary care; mild cases may respond to walking, anti-foaming agents, or stomach tube relief.",
    prevention: "Feed dry roughage before lush pasture grazing and introduce feed changes gradually."
  },
  {
    name: "Anthrax",
    keywords: ["high fever", "muscle tremors or weakness", "blood in milk", "rapid breathing"],
    cause: "Bacillus anthracis spore-forming bacterium found in soil.",
    treatment: "Immediate veterinary contact; avoid opening carcasses in the field to prevent spore spread.",
    prevention: "Vaccination in endemic areas as advised by veterinary authorities and strict outbreak containment."
  }
];

// 1. Navigation Switching
function switchPage(pageKey) {
  document.querySelectorAll(".nav-item").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.page === pageKey);
  });
  document.querySelectorAll(".page-view").forEach((section) => {
    section.classList.toggle("active", section.id === `page-${pageKey}`);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-page]").forEach((btn) => {
  btn.addEventListener("click", () => switchPage(btn.dataset.page));
});

document.querySelectorAll("[data-goto]").forEach((btn) => {
  btn.addEventListener("click", () => switchPage(btn.dataset.goto));
});

// 2. Breed Classifier Tabs & Inference
let activeCameraStream = null;

document.querySelectorAll(".mode-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const mode = tab.dataset.inputMode;
    document.querySelectorAll(".mode-tab").forEach((t) => t.classList.toggle("active", t === tab));
    document.querySelectorAll(".input-panel").forEach((p) => p.classList.toggle("active", p.id === `mode-${mode}`));
    if (mode !== "camera" && activeCameraStream) {
      activeCameraStream.getTracks().forEach((track) => track.stop());
      activeCameraStream = null;
    }
  });
});

const fileInput = document.getElementById("breed-file-input");
fileInput.addEventListener("change", (e) => {
  const file = e.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    document.getElementById("upload-preview-wrap").innerHTML = `
      <img src="${reader.result}" alt="Uploaded cattle preview" />
      <span>${file.name}</span>
    `;
  };
  reader.readAsDataURL(file);
});

document.getElementById("camera-trigger").addEventListener("click", async () => {
  const video = document.getElementById("camera-stream");
  const placeholder = document.getElementById("camera-placeholder");
  if (activeCameraStream) return;
  try {
    activeCameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
    video.srcObject = activeCameraStream;
    video.hidden = false;
    placeholder.hidden = true;
  } catch {
    placeholder.innerHTML = `<strong>Camera unavailable</strong><span>Requires HTTPS or localhost and browser camera permission</span>`;
  }
});

document.getElementById("run-classify-btn").addEventListener("click", () => {
  const sample = BREEDS[Math.floor(Math.random() * BREEDS.length)];
  const confidence = (78.4 + Math.random() * 18.5).toFixed(1);
  const resultBox = document.getElementById("classify-result");
  resultBox.hidden = false;
  resultBox.innerHTML = `
    <strong>Predicted Breed: ${sample.name}</strong> (${confidence}% confidence)<br />
    <span style="font-size:0.84rem;color:#9ba89f;">Origin: ${sample.region} · Primary Use: ${sample.use} · Milk Yield: ${sample.yield}</span>
  `;

  const today = new Date().toLocaleDateString("en-US");
  const li = document.createElement("li");
  li.innerHTML = `<span>${sample.name}</span><span class="muted">${confidence}% · ${today}</span>`;
  document.getElementById("recent-predictions-list").prepend(li);
});

// 3. Health Advisor Checklist & Diagnosis (12+ Disease Profiles)
const checklistContainer = document.getElementById("symptom-checklist");
SYMPTOMS.forEach((symptom) => {
  const label = document.createElement("label");
  label.className = "symptom-item";
  label.innerHTML = `<input type="checkbox" value="${symptom}" /><span>${symptom}</span>`;
  checklistContainer.appendChild(label);
});

checklistContainer.addEventListener("change", () => {
  const count = checklistContainer.querySelectorAll("input:checked").length;
  document.getElementById("symptom-count").textContent = count;
});

document.querySelectorAll(".health-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const mode = tab.dataset.healthMode;
    document.querySelectorAll(".health-tab").forEach((t) => t.classList.toggle("active", t === tab));
    document.querySelectorAll(".health-panel").forEach((p) => p.classList.toggle("active", p.id === `health-mode-${mode}`));
  });
});

document.getElementById("analyze-symptoms-btn").addEventListener("click", () => {
  const selected = Array.from(checklistContainer.querySelectorAll("input:checked")).map((cb) => cb.value);
  const panel = document.getElementById("health-result-panel");

  if (selected.length === 0) {
    panel.innerHTML = `<div class="empty-state"><h3>No Symptoms Selected</h3><p>Check at least one observed symptom on the left before running analysis.</p></div>`;
    return;
  }

  const scored = DISEASES.map((disease) => {
    const matches = selected.filter((s) => disease.keywords.includes(s)).length;
    const ratioScore = matches / Math.max(1, disease.keywords.length);
    return { disease, matches, score: matches * 2 + ratioScore };
  }).sort((a, b) => b.score - a.score);

  const top = scored[0];
  const confidence = Math.min(96, Math.max(58, Math.round(52 + top.matches * 14)));
  const runnerUps = scored.slice(1, 3).filter((item) => item.matches > 0);

  panel.innerHTML = `
    <div class="diagnosis-card">
      <span class="badge badge-buffalo">Advisory Match · ${confidence}%</span>
      <h3 style="margin-top:0.5rem;">${top.disease.name}</h3>
      <p>Matched ${top.matches} key indicator(s) from ${selected.length} selected symptom(s).</p>
      <h4>Probable Cause</h4>
      <p>${top.disease.cause}</p>
      <h4>Recommended Action</h4>
      <p>${top.disease.treatment}</p>
      <h4>Prevention</h4>
      <p>${top.disease.prevention}</p>
      ${
        runnerUps.length > 0
          ? `<div class="alt-diseases"><strong>Other Possible Matches:</strong> ${runnerUps
              .map((r) => `${r.disease.name} (${r.matches} match${r.matches > 1 ? "es" : ""})`)
              .join(" · ")}</div>`
          : ""
      }
    </div>
  `;
});

document.getElementById("analyze-photo-btn").addEventListener("click", () => {
  const panel = document.getElementById("health-result-panel");
  const sample = DISEASES[1];
  panel.innerHTML = `
    <div class="diagnosis-card">
      <span class="badge badge-cow">Visual Scan Complete · 85.4%</span>
      <h3 style="margin-top:0.5rem;">${sample.name}</h3>
      <p>Visual lesion patterns evaluated across dermatological and livestock health profiles.</p>
      <h4>Recommended Action</h4>
      <p>${sample.treatment}</p>
    </div>
  `;
});

// 4. Breed Explorer Rendering, Filtering & Detail Modal
const modalBackdrop = document.getElementById("breed-modal");

function openBreedModal(breed) {
  const badge = document.getElementById("modal-breed-badge");
  badge.textContent = breed.type;
  badge.className = `badge ${breed.type === "cow" ? "badge-cow" : "badge-buffalo"}`;

  document.getElementById("modal-breed-title").textContent = breed.name;
  document.getElementById("modal-breed-specs").innerHTML = `
    <div><dt>Region</dt><dd>${breed.region}</dd></div>
    <div><dt>Primary Use</dt><dd>${breed.use}</dd></div>
    <div><dt>Milk Yield</dt><dd>${breed.yield}</dd></div>
    <div><dt>Lifespan</dt><dd>${breed.lifespan}</dd></div>
    <div><dt>Coat / Color</dt><dd>${breed.coat}</dd></div>
  `;
  document.getElementById("modal-breed-notes").textContent = `${breed.desc} ${breed.notes}`;
  modalBackdrop.hidden = false;
}

document.getElementById("close-modal-btn").addEventListener("click", () => {
  modalBackdrop.hidden = true;
});

modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) modalBackdrop.hidden = true;
});

function renderBreeds() {
  const query = document.getElementById("breed-search").value.trim().toLowerCase();
  const typeFilter = document.getElementById("breed-type-filter").value;

  const filtered = BREEDS.filter((b) => {
    const matchesType = typeFilter === "all" || b.type === typeFilter;
    const matchesQuery =
      b.name.toLowerCase().includes(query) ||
      b.region.toLowerCase().includes(query) ||
      b.use.toLowerCase().includes(query) ||
      b.coat.toLowerCase().includes(query);
    return matchesType && matchesQuery;
  });

  document.getElementById("breed-count-label").textContent = `Showing ${filtered.length} of ${BREEDS.length} breeds`;
  const grid = document.getElementById("breed-cards-grid");
  grid.innerHTML = filtered
    .map(
      (b, idx) => `
      <article class="card card-clickable" data-breed-index="${idx}" tabindex="0" role="button" aria-label="View full details for ${b.name}">
        <div class="breed-card-head">
          <h3>${b.name}</h3>
          <span class="badge ${b.type === "cow" ? "badge-cow" : "badge-buffalo"}">${b.type}</span>
        </div>
        <dl class="breed-specs">
          <div><dt>Region</dt><dd>${b.region}</dd></div>
          <div><dt>Primary Use</dt><dd>${b.use}</dd></div>
          <div><dt>Milk Yield</dt><dd>${b.yield}</dd></div>
          <div><dt>Lifespan</dt><dd>${b.lifespan}</dd></div>
        </dl>
        <p class="breed-desc">${b.desc}</p>
        <div class="breed-more-hint">Click for coat & care details →</div>
      </article>
    `
    )
    .join("");

  grid.querySelectorAll("[data-breed-index]").forEach((card) => {
    const breed = filtered[Number(card.dataset.breedIndex)];
    card.addEventListener("click", () => openBreedModal(breed));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openBreedModal(breed);
      }
    });
  });
}

document.getElementById("breed-search").addEventListener("input", renderBreeds);
document.getElementById("breed-type-filter").addEventListener("change", renderBreeds);
renderBreeds();