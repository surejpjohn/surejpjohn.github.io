const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const cnt=k=>PUBS.filter(p=>p.th===k).length;
const sq=k=>`<span class="sq" style="--c:${TH[k].c}"></span>`;

/* mobile menu */
const top=document.querySelector('.top'),mt=document.querySelector('.mtoggle');
if(top&&mt){mt.addEventListener('click',()=>{const o=top.classList.toggle('open');mt.setAttribute('aria-expanded',o)})}

document.querySelectorAll('[data-count]').forEach(el=>{const k=el.dataset.count;el.textContent=k==='all'?PUBS.length:cnt(k)});

/* publication timeline (home) */
const tl=document.getElementById('tline');
if(tl){
  const ys=PUBS.map(p=>p.y),y0=Math.min(...ys),y1=Math.max(...ys),cap=document.getElementById('tlcap'),capDef=cap.innerHTML;
  const order=Object.keys(TH);
  let cols='',yrs='',i=0;
  for(let y=y0;y<=y1;y++){
    const ps=PUBS.filter(p=>p.y===y).sort((a,b)=>order.indexOf(a.th)-order.indexOf(b.th));
    cols+=`<div class="tl-col">${ps.map(p=>`<button type="button" style="--c:${TH[p.th].c};animation-delay:${(i++)*35}ms" data-i="${PUBS.indexOf(p)}" aria-label="${p.y}: ${esc(p.t)}"></button>`).join('')}</div>`;
    yrs+=`<span>${y}</span>`;
  }
  tl.innerHTML=`<div class="tl-cols">${cols}</div><div class="tl-years">${yrs}</div>`;
  tl.classList.add('play');
  const show=b=>{tl.querySelectorAll('button.on').forEach(x=>x.classList.remove('on'));if(!b){cap.innerHTML=capDef;return}b.classList.add('on');const p=PUBS[b.dataset.i];cap.innerHTML=`<b>${esc(p.t)}</b><br>${esc(p.v)}, ${p.y}. ${TH[p.th].s}.`};
  tl.addEventListener('pointerover',e=>show(e.target.closest('button')));
  tl.addEventListener('pointerleave',()=>show(null));
  tl.addEventListener('focusin',e=>show(e.target.closest('button')));
  tl.addEventListener('click',e=>{const b=e.target.closest('button');if(b)location.href='research.html#'+PUBS[b.dataset.i].th});
  const lg=document.getElementById('tlegend');
  if(lg)lg.innerHTML=order.map(k=>`<span>${sq(k)}${TH[k].s}</span>`).join('');
}

/* themes list (home) */
const tm=document.getElementById('themes');
if(tm){tm.innerHTML=Object.keys(TH).map(k=>`<li><h3>${sq(k)}<a href="research.html#${k}" style="color:inherit;text-decoration:none">${TH[k].n}</a></h3><p>${TH[k].d}</p><a class="n" href="research.html#${k}">${cnt(k)} papers</a></li>`).join('')}

/* recent publications (home) */
const bibItem=p=>`<li><span class="t">${esc(p.t)}</span><span class="m">${esc(p.a)} ${esc(p.v)}${p.y?', '+p.y:''}.${p.d?` <a href="https://doi.org/${p.d}" target="_blank" rel="noopener">doi.org/${p.d}</a>`:''}</span><span class="tag">${sq(p.th)}${TH[p.th].s}</span></li>`;
const rp=document.getElementById('recent');
if(rp){rp.innerHTML=PUBS.filter(p=>p.d).slice(0,3).map(bibItem).join('')}

/* full publication list (research) */
const pl=document.getElementById('pubs');
if(pl){
  let cur=TH[location.hash.slice(1)]?location.hash.slice(1):'all',q='';
  const f=document.getElementById('filters'),qs=document.getElementById('q');
  f.innerHTML=`<button class="chip" type="button" data-k="all" aria-pressed="${cur==='all'}">All (${PUBS.length})</button>`+Object.keys(TH).map(k=>`<button class="chip" type="button" data-k="${k}" aria-pressed="${k===cur}">${sq(k)}${TH[k].s} (${cnt(k)})</button>`).join('');
  const render=()=>{
    const list=PUBS.filter(p=>(cur==='all'||p.th===cur)&&(!q||(p.t+' '+p.a+' '+p.v).toLowerCase().includes(q)));
    if(!list.length){pl.innerHTML='<p class="empty">No publications match that search. Try another word, or choose All.</p>';return}
    const yrs=[...new Set(list.map(p=>p.y))];
    pl.innerHTML=yrs.map(y=>`<div class="yr"><h3>${y}</h3><ul class="bib">${list.filter(p=>p.y===y).map(p=>bibItem({...p,y:0})).join('')}</ul></div>`).join('');
  };
  f.addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;cur=b.dataset.k;f.querySelectorAll('.chip').forEach(c=>c.setAttribute('aria-pressed',c===b));render()});
  qs.addEventListener('input',()=>{q=qs.value.trim().toLowerCase();render()});
  render();
}

/* contact form */
const fm=document.getElementById('cform');
if(fm){
  const done=document.getElementById('done'),out=document.getElementById('msgout'),ml=document.getElementById('mailbtn'),cp=document.getElementById('copybtn');
  const h=location.hash.slice(1),map={students:'Prospective student',research:'Research collaborator',industry:'Industry partner'};
  if(map[h])document.getElementById('who').value=map[h];
  fm.addEventListener('submit',e=>{
    e.preventDefault();let ok=true;
    fm.querySelectorAll('[required]').forEach(i=>{const w=i.closest('.f');const bad=!i.value.trim()||(i.type==='email'&&!/^\S+@\S+\.\S+$/.test(i.value));w.classList.toggle('bad',bad);if(bad&&ok){i.focus();ok=false}});
    if(!ok)return;
    const v=id=>document.getElementById(id).value.trim();
    const subj=`[${v('who')}] ${v('subject')||'Enquiry from website'}`;
    const body=`Name: ${v('name')}\nEmail: ${v('email')}\nOrganisation: ${v('org')||'-'}\nI am a: ${v('who')}\n\n${v('message')}`;
    out.textContent=`To: spjohn@eit.ac.nz\nSubject: ${subj}\n\n${body}`;
    ml.href=`mailto:spjohn@eit.ac.nz?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
    done.classList.add('show');done.scrollIntoView({behavior:'smooth',block:'nearest'});
  });
  cp.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(out.textContent);cp.textContent='Copied'}catch(_){cp.textContent='Select the text above to copy it'}});
}

/* featured job openings from a published Google Sheet (CSV) */
const jb=document.getElementById('jobs');
if(jb&&jb.dataset.src){
  const parseCSV=t=>{const rows=[];let row=[],f='',q=false;for(let i=0;i<t.length;i++){const c=t[i];if(q){if(c==='"'){if(t[i+1]==='"'){f+='"';i++}else q=false}else f+=c}else if(c==='"')q=true;else if(c===','){row.push(f);f=''}else if(c==='\n'||c==='\r'){if(c==='\r'&&t[i+1]==='\n')i++;row.push(f);rows.push(row);row=[];f=''}else f+=c}if(f!==''||row.length){row.push(f);rows.push(row)}return rows};
  const fb='https://www.facebook.com/groups/2581477435669903/';
  const safeUrl=u=>{try{const x=new URL(u.trim());return /^https?:$/.test(x.protocol)?x.href:''}catch(e){return ''}};
  const parseDate=s=>{s=(s||'').trim();let m=s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);if(m)return new Date(+m[1],m[2]-1,+m[3]);m=s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);if(m)return new Date(+m[3],m[2]-1,+m[1]);const d=new Date(s);return isNaN(d)?null:d};
  const fmt=d=>d.toLocaleDateString('en-NZ',{day:'numeric',month:'short',year:'numeric'});
  fetch(jb.dataset.src,{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error(r.status);return r.text()}).then(t=>{
    const rows=parseCSV(t).filter(r=>r.some(c=>c.trim()));
    if(!rows.length)throw new Error('empty');
    const h=rows[0].map(x=>x.trim().toLowerCase());
    const col=n=>h.findIndex(x=>x.startsWith(n));
    const ix={t:col('title'),e:col('employer'),l:col('location'),ty:col('type'),c:col('clos'),k:col('link'),n:col('note')};
    const g=(r,k)=>ix[k]>=0?(r[ix[k]]||'').trim():'';
    const today=new Date();today.setHours(0,0,0,0);
    const jobs=rows.slice(1).map(r=>({t:g(r,'t'),e:g(r,'e'),l:g(r,'l'),ty:g(r,'ty'),d:parseDate(g(r,'c')),k:safeUrl(g(r,'k')),n:g(r,'n')}))
      .filter(x=>x.t&&(!x.d||x.d>=today))
      .sort((a,b)=>(a.d?a.d.getTime():Infinity)-(b.d?b.d.getTime():Infinity));
    if(!jobs.length){jb.innerHTML=`<div class="jobs-empty"><p>No featured openings right now. New roles are shared regularly in the <a href="${fb}" target="_blank" rel="noopener">Postgrad Careers Hub Facebook group</a>, and you can search the job sites below.</p></div>`;return}
    jb.innerHTML='<ul class="jobs">'+jobs.map(x=>{const days=x.d?Math.round((x.d-today)/864e5):null;const soon=days!==null&&days<=7;
      return `<li><div class="jb-main"><h3>${esc(x.t)}</h3><p class="jb-meta">${[x.e,x.l].filter(Boolean).map(esc).join(', ')}</p>${x.n?`<p class="jb-note">${esc(x.n)}</p>`:''}<p class="jb-tags">${x.ty?`<span class="jb-type">${esc(x.ty)}</span>`:''}${x.d?`<span class="jb-close${soon?' soon':''}">${soon?(days===0?'Closes today':'Closes soon: '):'Closes '}${days===0?'':fmt(x.d)}</span>`:''}</p></div>${x.k?`<a class="btn btn-solid" href="${esc(x.k)}" target="_blank" rel="noopener">View advert</a>`:''}</li>`}).join('')+'</ul>';
  }).catch(()=>{jb.innerHTML=`<div class="jobs-empty"><p>The featured openings can&rsquo;t be loaded right now. See the latest roles in the <a href="${fb}" target="_blank" rel="noopener">Postgrad Careers Hub Facebook group</a> or search the job sites below.</p></div>`});
}
