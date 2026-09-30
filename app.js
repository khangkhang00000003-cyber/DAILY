const $=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)];
function escapeHTML(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]));}
function params(){return new URLSearchParams(location.search);}
function articleBySlug(slug){return ARTICLES.find(a=>a.slug===slug)||ARTICLES[0];}

document.addEventListener("DOMContentLoaded",()=>{
  // mobile nav
  const menu=$("[data-menu]");
  if(menu) menu.addEventListener("click",()=>document.body.classList.toggle("menu-open"));

  // search modal
  const modal=$("[data-search-modal]");
  const open=()=>{ if(!modal)return; modal.setAttribute("aria-hidden","false"); document.body.classList.add("modal-open"); const i=$("input",modal); if(i){setTimeout(()=>i.focus(),50);} };
  const close=()=>{if(!modal)return; modal.setAttribute("aria-hidden","true"); document.body.classList.remove("modal-open");};
  $$("[data-open-search]").forEach(b=>b.addEventListener("click",open));
  $$("[data-close-search]").forEach(b=>b.addEventListener("click",close));
  if(modal) modal.addEventListener("click",e=>{if(e.target===modal)close();});
  $$("[data-search-form]").forEach(f=>f.addEventListener("submit",e=>{e.preventDefault();const q=new FormData(f).get("q")||"";location.href="search.html?q="+encodeURIComponent(q)}));

  // scroll reveal
  const io=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting){x.target.classList.add("is-visible");io.unobserve(x.target)}}),{threshold:.08});
  $$(".reveal").forEach(el=>io.observe(el));

  // back to top
  const top=$("[data-top]");
  if(top){addEventListener("scroll",()=>top.classList.toggle("show",scrollY>500));top.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));}

  // newsletter
  $$("[data-newsletter]").forEach(f=>f.addEventListener("submit",e=>{e.preventDefault();const m=$("[data-form-msg]",f);if(m){m.textContent="Đã ghi nhận email mẫu ✓";m.classList.add("ok")}f.reset();}));

  if(document.body.dataset.page==="category") initCategory();
  if(document.body.dataset.page==="article") initArticle();
  if(document.body.dataset.page==="search") initSearch();

  // article reading bar
  addEventListener("scroll",()=>{
    const bar=$("[data-reading-progress]"); if(!bar)return;
    const h=document.documentElement.scrollHeight-innerHeight; bar.style.width=(h?scrollY/h*100:0)+"%";
  });
});

function initCategory(){
  const cat=params().get("cat")||"running", info=CATEGORIES[cat]||CATEGORIES.running;
  $("[data-category-title]").textContent=info.name;
  $("[data-category-desc]").textContent=info.desc;
  const list=$("[data-category-list]");
  const items=ARTICLES.filter(a=>a.category===cat || (cat==="guide" && a.category==="running"));
  const all=items.length?items:ARTICLES;
  list.innerHTML=all.map((a,i)=>`<article class="category-story reveal is-visible"><a href="article.html?slug=${a.slug}"><div class="media"><img src="${a.cover}" alt=""></div><div><span class="tag">${a.tag}</span><h2>${escapeHTML(a.title)}</h2><p>${escapeHTML(a.description)}</p><div class="meta">${a.date} <i>•</i> ${a.minutes} PHÚT ĐỌC</div></div></a></article>`).join("");
  const filter=$("[data-filter-row]");
  filter.innerHTML=Object.entries(CATEGORIES).map(([k,v])=>`<a class="filter-chip ${k===cat?"active":""}" href="category.html?cat=${k}">${v.name}</a>`).join("");
}
function renderSection(s){
  let h=`<section class="article-section" id="${s.id}"><span class="section-kicker">${s.kicker}</span><h2>${escapeHTML(s.title)}</h2>`;
  for(const b of s.blocks||[]){
    if(b.h3) h+=`<h3>${escapeHTML(b.h3)}</h3>`;
    if(b.p) h+=`<p>${escapeHTML(b.p)}</p>`;
    if(b.quote) h+=`<div class="quote">${escapeHTML(b.quote)}</div>`;
    if(b.features) h+=`<div class="feature-strip">${b.features.map(x=>`<div class="feature"><b>${x[0]}</b><strong>${x[1]}</strong><small>${x[2]}</small></div>`).join("")}</div>`;
  }
  return h+"</section>";
}
function initArticle(){
  const a=articleBySlug(params().get("slug"));
  document.title=a.title+" | SPORTHUB DAILY";
  $("meta[name=description]").setAttribute("content",a.description);
  $("[data-article-category]").textContent=a.categoryName;
  $("[data-article-tag]").textContent=a.tag;
  $("[data-article-title]").textContent=a.title;
  $("[data-article-deck]").textContent=a.description;
  $("[data-article-meta]").innerHTML=`${a.date} <i>•</i> ${a.minutes} PHÚT ĐỌC <i>•</i> SPORTHUB DAILY`;
  const cover=$("[data-article-cover]"); cover.src=a.cover; cover.alt=a.title;

  const toc=$("[data-toc]"), body=$("[data-article-body]");
  if(a.sections.length){
    toc.innerHTML=a.sections.map((s,i)=>`<li><a href="#${s.id}">${String(i+1).padStart(2,"0")}. ${escapeHTML(s.title)}</a></li>`).join("");
    $("[data-toc-count]").textContent=a.sections.length+" PHẦN";
    body.innerHTML=a.sections.map(renderSection).join("")+`<section class="article-section"><span class="section-kicker">KẾT LUẬN</span><h2>Chọn theo nhu cầu thực tế</h2><p>${escapeHTML(a.conclusion)}</p><div class="warning"><strong>Lưu ý</strong>Nội dung mang tính giáo dục chung. Khi có triệu chứng bất thường kéo dài, hãy tìm hỗ trợ chuyên môn phù hợp.</div></section>`;
  } else {
    toc.innerHTML="<li>Bài mẫu này đang được xây dựng nội dung.</li>";
    body.innerHTML=`<section class="article-section"><span class="section-kicker">${a.categoryName}</span><h2>Nội dung đang được biên tập</h2><p>Bạn có thể thay phần này bằng bài viết thật trong <code>assets/js/content.js</code>. Khung giao diện, SEO cơ bản, mục lục, CTA và bài liên quan đã sẵn sàng.</p></section>`;
  }

  const rel=$("[data-related]");
  const related=ARTICLES.filter(x=>x.slug!==a.slug && (x.category===a.category || x.category==="guide")).slice(0,3);
  rel.innerHTML=related.map(x=>`<a class="related-card" href="article.html?slug=${x.slug}"><div class="media"><img src="${x.cover}" alt=""></div><div><span class="tag">${x.tag}</span><h3>${escapeHTML(x.title)}</h3><span class="read">Đọc tiếp →</span></div></a>`).join("");
  const share=$("[data-share]"); if(share) share.addEventListener("click",async()=>{try{await navigator.share({title:a.title,url:location.href})}catch{await navigator.clipboard?.writeText(location.href);share.textContent="Đã sao chép liên kết ✓";}});
}
function initSearch(){
  const q=(params().get("q")||"").trim().toLowerCase();
  const input=$("[data-big-search] input"); if(input) input.value=params().get("q")||"";
  const results=$("[data-search-results]"), summary=$("[data-search-summary]");
  const hits=q?ARTICLES.filter(a=>(a.title+" "+a.description+" "+a.categoryName).toLowerCase().includes(q)):ARTICLES;
  summary.textContent=q?`${hits.length} kết quả cho “${params().get("q")}”`:"Tất cả bài viết mẫu";
  results.innerHTML=hits.map(a=>`<article class="category-story reveal is-visible"><a href="article.html?slug=${a.slug}"><div class="media"><img src="${a.cover}" alt=""></div><div><span class="tag">${a.tag}</span><h2>${escapeHTML(a.title)}</h2><p>${escapeHTML(a.description)}</p><div class="meta">${a.date} <i>•</i> ${a.minutes} PHÚT ĐỌC</div></div></a></article>`).join("") || `<div class="empty-state">Chưa có bài phù hợp. Thử từ khóa khác.</div>`;
  $("[data-big-search]")?.addEventListener("submit",e=>{e.preventDefault();location.href="search.html?q="+encodeURIComponent(new FormData(e.target).get("q")||"")});
}
