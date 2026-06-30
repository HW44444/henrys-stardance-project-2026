/* ============================================================
   Stardance — animated night-sky background + shooting stars.
   Adds a full-screen canvas behind everything. Used on every page.
   ============================================================ */
(function(){
  const canvas = document.createElement("canvas");
  canvas.style.cssText =
    "position:fixed; inset:0; width:100%; height:100%; z-index:-1; pointer-events:none;";
  const ctx = canvas.getContext("2d");

  let w, h, stars = [], shooters = [], lastShoot = 0;

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function initStars(){
    stars = [];
    const count = Math.round((w * h) / 6500);   // density
    for (let i = 0; i < count; i++){
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.3 + 0.2,           // size
        tw: Math.random() * Math.PI * 2,         // twinkle phase
        sp: Math.random() * 0.02 + 0.004,        // twinkle speed
        drift: Math.random() * 0.18 + 0.03       // slow downward drift
      });
    }
  }

  function spawnShooter(){
    shooters.push({
      x: Math.random() * w,
      y: Math.random() * h * 0.4,
      vx: Math.random() * 5 + 5,
      vy: Math.random() * 2.5 + 1.5,
      life: 1
    });
  }

  function frame(t){
    ctx.clearRect(0, 0, w, h);

    // twinkling, drifting stars
    for (const s of stars){
      s.tw += s.sp;
      s.y += s.drift;
      if (s.y > h){ s.y = 0; s.x = Math.random() * w; }
      ctx.globalAlpha = 0.45 + Math.sin(s.tw) * 0.45;
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // shooting stars
    for (let i = shooters.length - 1; i >= 0; i--){
      const sh = shooters[i];
      sh.x += sh.vx; sh.y += sh.vy; sh.life -= 0.012;
      const tailX = sh.x - sh.vx * 8, tailY = sh.y - sh.vy * 8;
      const grad = ctx.createLinearGradient(sh.x, sh.y, tailX, tailY);
      grad.addColorStop(0, `rgba(255,255,255,${Math.max(sh.life, 0)})`);
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(sh.x, sh.y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();
      if (sh.life <= 0 || sh.x > w + 60 || sh.y > h + 60) shooters.splice(i, 1);
    }

    // occasionally launch a new shooting star
    if (t - lastShoot > 1800 && Math.random() < 0.6){ spawnShooter(); lastShoot = t; }

    requestAnimationFrame(frame);
  }

  function start(){
    document.body.prepend(canvas);
    resize(); initStars();
    requestAnimationFrame(frame);
  }

  window.addEventListener("resize", () => { resize(); initStars(); });

  if (document.body) start();
  else document.addEventListener("DOMContentLoaded", start);
})();
