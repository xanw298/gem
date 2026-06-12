const SETS = {
  "희망": {need:2, effect:"기술 명중률 +20%"},
  "파괴": {need:2, effect:"물리 기술 위력 +10%"},
  "수력": {need:2, effect:"약점 속성 공격 시 스킬 위력 +20%"},
  "적응": {need:2, effect:"비와 맑음 날씨 효과 무시"},
  "화염": {need:2, effect:"등장 시 치명타 확률 +10%"},
  "의욕": {need:2, effect:"공격 빗나감 시 속도 2단계 증가, 전투당 1회"},
  "조화": {need:2, effect:"마력 기술 위력 +10%"},
  "흡혈": {need:4, effect:"공격 피해의 1/8 회복"},
  "돌풍": {need:4, effect:"20% 확률로 우선도 +0.5"},
  "창공": {need:4, effect:"턴 종료 시 상태이상 해제, 전투당 1회"},
  "몽환": {need:4, effect:"최대 체력에서 전투불능 피해 시 체력 1 생존, 전투당 1회"},
  "무지개": {need:4, effect:"턴 종료 시 체력 1/2 이하라면 최대 체력 1/4 회복, 전투당 1회"},
  "무덤": {need:4, effect:"턴 종료 시 최대 체력 1/16 회복"},
  "칠흑": {need:4, effect:"가하는 피해 +30%, 턴 종료 시 최대 체력 1/10 반동"},
};
const CORES = ["체력","공격","방어","마력","저항","속도"];
const SUBS = ["체력","공격","방어","마력","저항","속도","치명타 피해","더블 어택 확률","트리플 어택 확률"];
const SCORE = {
  "pvp 마법 디펜스 체력": {
    "체력": {"공격":0,"방어":5,"속도":1,"치명타 피해":4,"더블 어택 확률":3,"트리플 어택 확률":2},
    "공격": {"방어":4,"마력":5,"속도":0,"치명타 피해":3,"더블 어택 확률":2,"트리플 어택 확률":1},
    "방어": {"공격":0,"저항":5,"속도":1,"치명타 피해":4,"더블 어택 확률":3,"트리플 어택 확률":2},
    "마력": {"공격":0,"저항":5,"체력":4,"치명타 피해":3,"더블 어택 확률":2,"트리플 어택 확률":1},
    "저항": {"마력":5,"방어":4,"체력":3,"치명타 피해":2,"더블 어택 확률":1,"트리플 어택 확률":0},
    "속도": {"마력":5,"저항":4,"체력":3,"치명타 피해":2,"더블 어택 확률":1,"트리플 어택 확률":0},
  },
  "pvp 마법 체력 디펜스": {
    "체력": {"공격":0,"방어":5,"속도":1,"치명타 피해":4,"더블 어택 확률":3,"트리플 어택 확률":2},
    "공격": {"방어":4,"마력":5,"속도":0,"치명타 피해":3,"더블 어택 확률":2,"트리플 어택 확률":1},
    "방어": {"공격":0,"저항":5,"속도":1,"치명타 피해":4,"더블 어택 확률":3,"트리플 어택 확률":2},
    "마력": {"공격":0,"저항":4,"체력":5,"치명타 피해":3,"더블 어택 확률":2,"트리플 어택 확률":1},
    "저항": {"마력":5,"방어":3,"체력":4,"치명타 피해":2,"더블 어택 확률":1,"트리플 어택 확률":0},
    "속도": {"마력":5,"저항":3,"체력":4,"치명타 피해":2,"더블 어택 확률":1,"트리플 어택 확률":0},
  },
  "pvp 물리 디펜스 체력": {
    "체력": {"공격":5,"방어":4,"속도":0,"치명타 피해":3,"더블 어택 확률":2,"트리플 어택 확률":1},
    "공격": {"방어":5,"마력":0,"속도":1,"치명타 피해":4,"더블 어택 확률":3,"트리플 어택 확률":2},
    "방어": {"공격":5,"저항":4,"속도":0,"치명타 피해":3,"더블 어택 확률":2,"트리플 어택 확률":1},
    "마력": {"공격":5,"저항":4,"체력":3,"치명타 피해":2,"더블 어택 확률":1,"트리플 어택 확률":0},
    "저항": {"마력":0,"방어":5,"체력":4,"치명타 피해":3,"더블 어택 확률":2,"트리플 어택 확률":1},
    "속도": {"마력":0,"저항":5,"체력":4,"치명타 피해":3,"더블 어택 확률":2,"트리플 어택 확률":1},
  },
  "pvp 물리 체력 디펜스": {
    "체력": {"공격":5,"방어":4,"속도":0,"치명타 피해":3,"더블 어택 확률":2,"트리플 어택 확률":1},
    "공격": {"방어":5,"마력":0,"속도":1,"치명타 피해":4,"더블 어택 확률":3,"트리플 어택 확률":2},
    "방어": {"공격":5,"저항":4,"속도":0,"치명타 피해":3,"더블 어택 확률":2,"트리플 어택 확률":1},
    "마력": {"공격":5,"저항":3,"체력":4,"치명타 피해":2,"더블 어택 확률":1,"트리플 어택 확률":0},
    "저항": {"마력":0,"방어":4,"체력":5,"치명타 피해":3,"더블 어택 확률":2,"트리플 어택 확률":1},
    "속도": {"마력":0,"저항":4,"체력":5,"치명타 피해":3,"더블 어택 확률":2,"트리플 어택 확률":1},
  },
  "레이드 마법 디펜스 체력": {
    "체력": {"공격":0,"방어":3,"속도":1,"치명타 피해":5,"더블 어택 확률":4,"트리플 어택 확률":2},
    "공격": {"방어":2,"마력":5,"속도":0,"치명타 피해":4,"더블 어택 확률":3,"트리플 어택 확률":1},
    "방어": {"공격":0,"저항":3,"속도":1,"치명타 피해":5,"더블 어택 확률":4,"트리플 어택 확률":2},
    "마력": {"공격":0,"저항":3,"체력":2,"치명타 피해":5,"더블 어택 확률":4,"트리플 어택 확률":1},
    "저항": {"마력":5,"방어":2,"체력":1,"치명타 피해":4,"더블 어택 확률":3,"트리플 어택 확률":0},
    "속도": {"마력":5,"저항":2,"체력":1,"치명타 피해":4,"더블 어택 확률":3,"트리플 어택 확률":0},
  },
  "레이드 마법 체력 디펜스": {
    "체력": {"공격":0,"방어":3,"속도":1,"치명타 피해":5,"더블 어택 확률":4,"트리플 어택 확률":2},
    "공격": {"방어":2,"마력":5,"속도":0,"치명타 피해":4,"더블 어택 확률":3,"트리플 어택 확률":1},
    "방어": {"공격":0,"저항":3,"속도":1,"치명타 피해":5,"더블 어택 확률":4,"트리플 어택 확률":2},
    "마력": {"공격":0,"저항":2,"체력":3,"치명타 피해":5,"더블 어택 확률":4,"트리플 어택 확률":1},
    "저항": {"마력":5,"방어":1,"체력":2,"치명타 피해":4,"더블 어택 확률":3,"트리플 어택 확률":0},
    "속도": {"마력":5,"저항":1,"체력":2,"치명타 피해":4,"더블 어택 확률":3,"트리플 어택 확률":0},
  },
  "레이드 물리 디펜스 체력": {
    "체력": {"공격":5,"방어":2,"속도":0,"치명타 피해":4,"더블 어택 확률":3,"트리플 어택 확률":1},
    "공격": {"방어":3,"마력":0,"속도":1,"치명타 피해":5,"더블 어택 확률":4,"트리플 어택 확률":2},
    "방어": {"공격":5,"저항":2,"속도":0,"치명타 피해":4,"더블 어택 확률":3,"트리플 어택 확률":1},
    "마력": {"공격":5,"저항":2,"체력":1,"치명타 피해":4,"더블 어택 확률":3,"트리플 어택 확률":0},
    "저항": {"마력":0,"방어":3,"체력":2,"치명타 피해":5,"더블 어택 확률":4,"트리플 어택 확률":1},
    "속도": {"마력":0,"저항":3,"체력":2,"치명타 피해":5,"더블 어택 확률":4,"트리플 어택 확률":1},
  },
  "레이드 물리 체력 디펜스": {
    "체력": {"공격":5,"방어":2,"속도":0,"치명타 피해":4,"더블 어택 확률":3,"트리플 어택 확률":1},
    "공격": {"방어":3,"마력":0,"속도":1,"치명타 피해":5,"더블 어택 확률":4,"트리플 어택 확률":2},
    "방어": {"공격":5,"저항":2,"속도":0,"치명타 피해":4,"더블 어택 확률":3,"트리플 어택 확률":1},
    "마력": {"공격":5,"저항":1,"체력":2,"치명타 피해":4,"더블 어택 확률":3,"트리플 어택 확률":0},
    "저항": {"마력":0,"방어":2,"체력":3,"치명타 피해":5,"더블 어택 확률":4,"트리플 어택 확률":1},
    "속도": {"마력":0,"저항":2,"체력":3,"치명타 피해":5,"더블 어택 확률":4,"트리플 어택 확률":1},
  },
};
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAvIxtJbLmJ1h3B8hZkcydOszIel6yotd4",
  authDomain: "dv3gem.firebaseapp.com",
  projectId: "dv3gem",
  storageBucket: "dv3gem.firebasestorage.app",
  messagingSenderId: "431420036768",
  appId: "1:431420036768:web:ae5e58dd74af3b9b5fdbc5",
  measurementId: "G-KD8Y0JPPHL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const stateRef = doc(db, "dv3GemSite", "main");

const emptyState = { gems: [], builds: [] };
let state = loadLocalState();
let selectedSets = [];
let lastResult = null;
let firebaseReady = false;
let unsubscribeRemote = null;
const $ = id => document.getElementById(id);

function loadLocalState(){
  try{
    const parsed = JSON.parse(localStorage.getItem("dv3-gem-state") || "null");
    if(parsed && Array.isArray(parsed.gems) && Array.isArray(parsed.builds)) return parsed;
  }catch{}
  return structuredClone(emptyState);
}
function setStatus(text){ const el = $("syncStatus"); if(el) el.textContent = text; }
async function save(){
  localStorage.setItem("dv3-gem-state", JSON.stringify(state));
  render();
  if(!firebaseReady){ setStatus("로컬 저장됨"); return; }
  try{
    await setDoc(stateRef, { ...state, updatedAt: serverTimestamp() }, { merge: true });
    setStatus("Firebase 저장 완료");
  }catch(err){
    console.error(err);
    setStatus("Firebase 저장 실패");
  }
}
function opt(sel, arr){ sel.innerHTML = arr.map(v=>`<option value="${v}">${v}</option>`).join(""); }
async function init(){
  opt($("setType"), Object.keys(SETS)); opt($("coreStat"), CORES); ["sub1","sub2","sub3"].forEach(id=>opt($(id), SUBS)); opt($("contentType"), Object.keys(SCORE));
  $("setPicker").innerHTML = Object.keys(SETS).map(s=>`<button class="chip" data-set="${s}">${s} · ${SETS[s].need}세트</button>`).join("");
  $("setPicker").addEventListener("click", e=>{ if(!e.target.dataset.set) return; const s=e.target.dataset.set; selectedSets = selectedSets.includes(s) ? selectedSets.filter(x=>x!==s) : [...selectedSets, s]; renderPicker(); });
  $("addGemBtn").onclick=addGem; $("calculateBtn").onclick=calculate; $("resetPickerBtn").onclick=()=>{selectedSets=[];renderPicker();};
  $("clearUnusedBtn").onclick=()=>{ if(confirm("보유 젬을 전부 삭제할까? 사용 중 조합은 유지돼.")){state.gems=[];save();} };
  $("exportBtn").onclick=exportData; $("importInput").onchange=importData;
  render(); renderPicker();
  await connectFirebase();
}

async function connectFirebase(){
  try{
    setStatus("Firebase 불러오는 중");
    const snap = await getDoc(stateRef);
    const localHasData = state.gems.length > 0 || state.builds.length > 0;

    if(snap.exists()){
      const remote = snap.data();
      if(Array.isArray(remote.gems) && Array.isArray(remote.builds)){
        state = { gems: remote.gems, builds: remote.builds };
        localStorage.setItem("dv3-gem-state", JSON.stringify(state));
        render();
      }
    }else if(localHasData){
      await setDoc(stateRef, { ...state, updatedAt: serverTimestamp() });
    }else{
      await setDoc(stateRef, { ...emptyState, updatedAt: serverTimestamp() });
    }

    firebaseReady = true;
    setStatus("Firebase 연결됨");
    unsubscribeRemote = onSnapshot(stateRef, snap => {
      if(!snap.exists()) return;
      const remote = snap.data();
      if(!Array.isArray(remote.gems) || !Array.isArray(remote.builds)) return;
      const next = { gems: remote.gems, builds: remote.builds };
      const current = JSON.stringify(state);
      const incoming = JSON.stringify(next);
      if(current !== incoming){
        state = next;
        localStorage.setItem("dv3-gem-state", JSON.stringify(state));
        render();
        setStatus("Firebase 동기화됨");
      }
    });
  }catch(err){
    console.error(err);
    firebaseReady = false;
    setStatus("Firebase 연결 실패");
    render();
  }
}
function renderPicker(){ document.querySelectorAll(".chip").forEach(b=>b.classList.toggle("selected", selectedSets.includes(b.dataset.set))); }
function addGem(){
  const gem = { id: crypto.randomUUID(), set:$("setType").value, core:$("coreStat").value, subs:[$("sub1").value,$("sub2").value,$("sub3").value], createdAt:Date.now() };
  state.gems.push(gem); save();
}
function scoreGem(gem, content){ return gem.subs.reduce((sum, sub)=> sum + (SCORE[content][gem.core][sub] ?? 0), 0); }
function getQuotas(sets){
  if(sets.length===3 && sets.every(s=>SETS[s].need===2)) return [{ok:true, quotas:Object.fromEntries(sets.map(s=>[s,2])), label:sets.map(s=>`${s}2`).join(" + ")}];
  if(sets.length===2){
    const [a,b]=sets; const arr=[];
    if(SETS[a].need===4) arr.push({ok:true, quotas:{[a]:4,[b]:2}, label:`${a}4 + ${b}2`});
    if(SETS[b].need===4) arr.push({ok:true, quotas:{[b]:4,[a]:2}, label:`${b}4 + ${a}2`});
    return arr;
  }
  return [];
}
function calculate(){
  const content = $("contentType").value; const quotaPlans = getQuotas(selectedSets);
  if(!quotaPlans.length){ showMessage("조합 규칙이 맞지 않아. 4세트 포함이면 2개, 전부 2세트면 3개를 선택해줘.", true); return; }
  let best = null;
  for(const plan of quotaPlans){
    const candidatesByCore = CORES.map(core => state.gems.filter(g=>g.core===core && selectedSets.includes(g.set)).map(g=>({...g, score:scoreGem(g, content)})));
    if(candidatesByCore.some(list=>list.length===0)) continue;
    const combos = cartesian(candidatesByCore);
    for(const combo of combos){
      const counts = Object.fromEntries(selectedSets.map(s=>[s,0])); combo.forEach(g=>counts[g.set]++);
      const valid = Object.entries(plan.quotas).every(([s,n])=>counts[s]===n);
      if(!valid) continue;
      const total = combo.reduce((sum,g)=>sum+g.score,0);
      if(!best || total>best.total) best = {total, combo, content, plan};
    }
  }
  if(!best){
    const counts = selectedSets.map(s=>`${s} ${state.gems.filter(g=>g.set===s).length}개`).join(" / ");
    showMessage(`조합 불가능. 선택한 젬 능력으로 6개 핵심 능력을 채우거나 세트 조건을 맞출 수 없어. 현재 보유: ${counts}`, true); return;
  }
  lastResult = best; renderResult(best);
}
function cartesian(arr){ return arr.reduce((acc, cur)=> acc.flatMap(a=>cur.map(c=>[...a,c])), [[]]); }
function renderResult(r){
  $("resultBox").className="result-box";
  $("resultBox").innerHTML = `<div class="result-top"><div><h3>추천 조합</h3><p class="quota">${r.content} · ${r.plan.label}</p></div><div class="score">${r.total}점</div></div><div class="result-grid">${r.combo.map(g=>gemCard(g,true)).join("")}</div><button class="primary full" id="useBuildBtn">사용</button>`;
  $("useBuildBtn").onclick=useBuild;
}
function showMessage(msg, warn=false){ $("resultBox").className="result-box"; $("resultBox").innerHTML=`<div class="${warn?'warn':'ok'}">${msg}</div>`; }
function useBuild(){
  if(!lastResult) return;
  const ids = new Set(lastResult.combo.map(g=>g.id));
  state.builds.push({ id:crypto.randomUUID(), name:`조합 ${state.builds.length+1}`, content:lastResult.content, plan:lastResult.plan.label, total:lastResult.total, gems:lastResult.combo });
  state.gems = state.gems.filter(g=>!ids.has(g.id)); lastResult=null; save(); showMessage("사용 중 조합으로 이동했어. 이 젬들은 다음 계산에서 제외돼.");
}
function render(){
  $("gemCount").textContent = `${state.gems.length}개`; $("activeCount").textContent = `${state.builds.length}조합`;
  renderInventory(); renderBuilds();
}
function gemCard(g, withScore=false){ return `<div class="result-card"><b>${g.core} · ${g.set}${withScore?` · ${g.score}점`:""}</b><div class="gem-sub">${g.subs.join(" / ")}</div></div>`; }
function renderInventory(){
  const root=$("inventoryList"); if(!state.gems.length){root.innerHTML=`<div class="card hint">아직 보유 젬이 없어.</div>`;return;}
  root.innerHTML = CORES.map(core=>{
    const gems=state.gems.filter(g=>g.core===core); if(!gems.length) return "";
    const bySet = Object.keys(SETS).map(set=>{
      const list=gems.filter(g=>g.set===set); if(!list.length) return "";
      return `<div class="set-group"><div class="set-title">${set} ${list.length}개</div>${list.map(g=>`<div class="gem-item"><div><div class="gem-main">${g.core} · ${g.set}</div><div class="gem-sub">${g.subs.join(" / ")}</div></div><button class="ghost tiny" onclick="removeGem('${g.id}')">삭제</button></div>`).join("")}</div>`;
    }).join("");
    return `<div class="group"><div class="group-title"><span>${core}</span><span>${gems.length}</span></div><div class="group-body">${bySet}</div></div>`;
  }).join("");
}
function renderBuilds(){
  const root=$("activeBuilds"); if(!state.builds.length){root.innerHTML=`<div class="card hint">사용 중인 조합이 없어.</div>`;return;}
  root.innerHTML = state.builds.map(b=>`<div class="build-card"><div class="build-title"><input value="${b.name}" onchange="renameBuild('${b.id}', this.value)"/><button class="ghost tiny" onclick="returnBuild('${b.id}')">반납</button></div><div class="quota">${b.content} · ${b.plan} · ${b.total}점</div><div class="result-grid">${b.gems.map(g=>gemCard(g,false)).join("")}</div></div>`).join("");
}
window.removeGem=id=>{ state.gems=state.gems.filter(g=>g.id!==id); save(); };
window.renameBuild=(id,name)=>{ const b=state.builds.find(x=>x.id===id); if(b){b.name=name; save();} };
window.returnBuild=id=>{ const b=state.builds.find(x=>x.id===id); if(!b) return; state.gems.push(...b.gems.map(g=>({...g, id:crypto.randomUUID()}))); state.builds=state.builds.filter(x=>x.id!==id); save(); };
function exportData(){ const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"}); const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="dv3-gem-backup.json"; a.click(); }
function importData(e){ const file=e.target.files[0]; if(!file) return; const reader=new FileReader(); reader.onload=()=>{ try{ const data=JSON.parse(reader.result); if(!Array.isArray(data.gems)||!Array.isArray(data.builds)) throw new Error(); state=data; save(); }catch{ alert("복원 파일 형식이 맞지 않아."); } }; reader.readAsText(file); }
init();
