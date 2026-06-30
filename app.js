/* ============================================================
   Stardance — shared helpers used by every page.
   ============================================================ */

const DEMO_KEY = "DEMO_KEY"; // NASA's public test key. Works with no signup (low rate limits).

/* Returns the user's saved key, or falls back to DEMO_KEY so the
   site fetches data automatically without anyone entering anything. */
function getApiKey(){
  return localStorage.getItem("nasa_key") || DEMO_KEY;
}

/* Save / clear the user's own key (persists across all pages). */
function saveApiKey(k){
  if(k && k.trim()){ localStorage.setItem("nasa_key", k.trim()); return true; }
  return false;
}
function clearApiKey(){ localStorage.removeItem("nasa_key"); }

/* True if the user has saved their own key (not using DEMO_KEY). */
function hasOwnKey(){
  return !!localStorage.getItem("nasa_key");
}

/* Format an ISO date string nicely. */
function prettyDate(iso){
  const d = new Date(iso);
  return d.toLocaleString(undefined, { dateStyle:"medium", timeStyle:"short" });
}

/* Countdown text like "T-minus 3d 7h". */
function countdown(iso){
  const diff = new Date(iso) - new Date();
  if (diff <= 0) return "In progress / passed";
  const days = Math.floor(diff / 86400000);
  const hrs  = Math.floor((diff % 86400000) / 3600000);
  return `T-minus ${days}d ${hrs}h`;
}

/* Highlight the current page in the nav. */
function markActiveNav(){
  const page = location.pathname.split("/").pop();
  document.querySelectorAll("nav .links a").forEach(a => {
    if (a.getAttribute("href") === page) a.classList.add("active");
  });
}
document.addEventListener("DOMContentLoaded", markActiveNav);
