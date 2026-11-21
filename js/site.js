{
const TH={
  social:{n:'Social media & influencer marketing',s:'Social media',c:'var(--t1)'},
  cx:{n:'Customer experience & value co-creation',s:'Customer experience',c:'var(--t2)'},
  ai:{n:'Artificial intelligence in marketing',s:'Artificial intelligence',c:'var(--t3)'},
  cb:{n:'Relationship marketing & consumer emotions',s:'Relationship marketing',c:'var(--t4)'}
};
const PUBS=[
{y:2026,th:'social',t:'Influencer marketing and tourist behaviour: A systematic literature review of attitudes, intentions and behaviours in tourism',a:'John, S. P., & Supramaniam, K.',v:'International Journal of Tourism Research, 28(1), e70226',d:'10.1002/jtr.70226'},
{y:2025,th:'ai',t:'Technology-enabled value co-creation strategies to mitigate customer mistreatments in tourism and hospitality',a:'John, S. P.',v:'International Hospitality Review (advance online publication)',d:'10.1108/ihr-07-2025-0061'},
{y:2025,th:'ai',t:'Riding the digital wave: Unpacking technology-enabled customer experience in marketing',a:'John, S., Purayidathil, J., & Supramaniyam, S.',v:'Proceedings of ANZMAC 2025, pp. 74–81'},
{y:2024,th:'cx',t:'Value co-creation research in tourism and hospitality management: A systematic literature review',a:'John, S. P., & Supramaniam, S.',v:'Journal of Hospitality and Tourism Management, 58, 96–114',d:'10.1016/j.jhtm.2023.11.008'},
{y:2024,th:'cb',t:'The role of sales personnel empathy and customer-oriented behaviour on female consumers’ emotions and satisfaction: An empirical analysis',a:'Supramaniam, S., John, S. P., & Gaur, S. S.',v:'FIIB Business Review (advance online publication)',d:'10.1177/23197145241241956'},
{y:2023,th:'social',t:'Antecedents and effects of influencer marketing strategies: A systematic literature review and directions for future research',a:'John, S. P., & Supramaniam, S.',v:'Advances in Digital Marketing and eCommerce, pp. 113–119. Springer',d:'10.1007/978-3-031-31836-8_15'},
{y:2023,th:'cx',t:'Value co-creation for a memorable tourism experience: A systematic literature review',a:'John, S. P., & Supramaniam, S.',v:'Proceedings of ANZMAC 2023, pp. 611–613'},
{y:2023,th:'ai',t:'The role of AI in enhancing customer experience: An exploratory analysis',a:'Seth, N., & John, S. P.',v:'Proceedings of ANZMAC 2023, pp. 64–67'},
{y:2022,th:'cb',t:'Factors affecting the success of marketing in higher education: A relationship marketing perspective',a:'John, S. P., & De Villiers, R.',v:'Journal of Marketing for Higher Education (advance online publication)',d:'10.1080/08841241.2022.2116741'},
{y:2022,th:'social',t:'Factors affecting the adoption of social media in marketing of higher education: An empirical analysis',a:'John, S. P., Walford, R., & Purayidathil, J.',v:'FIIB Business Review, 11(4), 422–437',d:'10.1177/23197145211072198'},
{y:2022,th:'cb',t:'Role of service orientation in marketing higher education: An exploratory analysis',a:'John, S. P.',v:'Proceedings of ANZMAC 2022, pp. 403–406'},
{y:2022,th:'cb',t:'The role of salesperson interaction and customer emotions in enhancing brand loyalty: An empirical examination among female intimate apparel shoppers',a:'Supramaniam, S., & John, S. P.',v:'Proceedings of ANZMAC 2022, pp. 499–502'},
{y:2021,th:'social',t:'Social media in FMCG marketing: Understanding how supermarkets use Facebook during the COVID-19 pandemic',a:'John, S. P., & Walford, R.',v:'Advances in Digital Marketing and eCommerce, pp. 184–191. Springer',d:'10.1007/978-3-030-76520-0_19'},
{y:2021,th:'cb',t:'Covid-19 implications for marketing of higher education: An exploratory study',a:'Walford, R., John, S., & Narula, J.',v:'Proceedings of ANZMAC 2021, pp. 489–495'},
{y:2020,th:'social',t:'Elaboration of marketing communication through visual media: An empirical analysis',a:'John, S. P., & De Villiers, R.',v:'Journal of Retailing and Consumer Services, 54, 102052',d:'10.1016/j.jretconser.2020.102052'},
{y:2020,th:'social',t:'Digital marketing strategies in educational tourism: A social media perspective',a:'John, S. P.',v:'Advances in Digital Marketing and eCommerce, pp. 114–121. Springer',d:'10.1007/978-3-030-47595-6_15'},
{y:2020,th:'cb',t:'Role of digital relationships in the marketing of higher education: An exploratory analysis from New Zealand',a:'John, S. P.',v:'Advances in Digital Marketing and eCommerce, pp. 106–113. Springer',d:'10.1007/978-3-030-47595-6_14'},
{y:2020,th:'cb',t:'Determinants of tertiary level student satisfaction in New Zealand',a:'John, S. P., & Walford, R.',v:'Proceedings of the NZABEF Conference, pp. 52–55'},
{y:2019,th:'cb',t:'Future of relationship marketing during the winds of change',a:'John, S.',v:'Proceedings of ANZMAC 2019, pp. 1348–1351'},
{y:2019,th:'social',t:'Role of changing customer involvement and engagement in changing social media marketing landscape',a:'John, S. P., & De Villiers, R.',v:'Proceedings of ANZMAC 2019, pp. 495–499'},
{y:2018,th:'social',t:'Applications of social media for medical tourism marketing: An empirical analysis',a:'John, S., Larke, R., & Kilgour, M.',v:'Anatolia, 29(4), 553–565',d:'10.1080/13032917.2018.1473261'}
];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const cnt=k=>PUBS.filter(p=>p.th===k).length;

/* counts anywhere on the page */
document.querySelectorAll('[data-count]').forEach(el=>{const k=el.dataset.count;el.textContent=k==='all'?PUBS.length:cnt(k)});

/* research map */
const s=document.getElementById('map');
if(s){
  const keys=Object.keys(TH),cap=document.getElementById('mapcap'),capDef=cap?cap.innerHTML:'';
  let first=true;
  const draw=()=>{
    const W=s.clientWidth,H=s.clientHeight;if(!W||!H)return;
    const narrow=W<520,cx=W/2,cy=H/2;
    const R=Math.min(W*0.33,H*0.36);
    const hub=Math.max(52,Math.min(W,H)*0.2);
    const ang=[-140,-40,40,140].map(a=>a*Math.PI/180);
    let out=`<defs><radialGradient id="hg" cx="35%" cy="30%"><stop offset="0" stop-color="#2a4486"/><stop offset="1" stop-color="#0f2147"/></radialGradient></defs>`;
    keys.forEach((k,i)=>{
      const n=cnt(k),x=cx+Math.cos(ang[i])*R*1.18,y=cy+Math.sin(ang[i])*R;
      const r=12+Math.sqrt(n)*7,c=TH[k].c;
      let g=`<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="${c}" stroke-opacity=".35" stroke-width="2"/>`;
      g+=`<circle class="halo" style="animation-delay:${i*0.7}s" cx="${x}" cy="${y}" r="${r+14}" fill="${c}" fill-opacity=".1"/>`;
      PUBS.filter(p=>p.th===k).forEach((p,j)=>{
        const a=j*(2*Math.PI/n)+i,d=r+9+((j%2)*7),px=x+Math.cos(a)*d,py=y+Math.sin(a)*d;
        g+=`<circle class="pd" style="--dx:${(cx-px).toFixed(1)}px;--dy:${(cy-py).toFixed(1)}px;animation-delay:${(0.25+i*0.15+j*0.06).toFixed(2)}s" cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="${p.d?4.5:3.2}" fill="${c}"${p.d?'':` fill-opacity=".55"`}/>`;
      });
      g+=`<circle class="nd" cx="${x}" cy="${y}" r="${r}" fill="${c}"/><text x="${x}" y="${y+6}" text-anchor="middle" fill="#fff" stroke="none" font-family="Space Grotesk,sans-serif" font-weight="600" font-size="${narrow?15:18}">${n}</text>`;
      const ly=Math.sin(ang[i])>0?y+r+34:y-r-24;
      g+=`<text x="${Math.min(Math.max(x,70),W-70)}" y="${ly}" text-anchor="middle" fill="var(--ink)" font-size="14" font-weight="600">${TH[k].s}</text>`;
      out+=`<a class="th" href="research.html#${k}" data-k="${k}" aria-label="${TH[k].n}: ${n} publications. Open on the Research page.">${g}</a>`;
    });
    out+=`<clipPath id="pc"><circle cx="${cx}" cy="${cy}" r="${hub}"/></clipPath><circle cx="${cx}" cy="${cy}" r="${hub+8}" fill="var(--bg)" stroke="var(--line)"/><circle cx="${cx}" cy="${cy}" r="${hub}" fill="url(#hg)"/><text x="${cx}" y="${cy+hub*0.16}" text-anchor="middle" fill="#fff" stroke="none" font-family="Space Grotesk,sans-serif" font-weight="600" font-size="${hub*0.5}">SJ</text><image href="img/portrait.jpg" x="${cx-hub}" y="${cy-hub}" width="${hub*2}" height="${hub*2}" clip-path="url(#pc)" preserveAspectRatio="xMidYMid slice"><title>Dr Surej P John</title></image><circle cx="${cx}" cy="${cy}" r="${hub}" fill="none" stroke="var(--navy)" stroke-width="3"/>`;
    s.innerHTML=out;
    if(first){first=false;s.classList.add('intro');setTimeout(()=>s.classList.remove('intro'),2600)}
  };
  const show=k=>{
    s.classList.toggle('focus',!!k);
    s.querySelectorAll('.th').forEach(t=>t.classList.toggle('on',t.dataset.k===k));
    if(!cap)return;
    if(!k){cap.innerHTML=capDef;return}
    const ps=PUBS.filter(p=>p.th===k),l=ps[0];
    cap.innerHTML=`<b style="color:var(--ink)">${TH[k].n}</b>: ${ps.length} publications, ${ps[ps.length-1].y}&ndash;${l.y}. Latest: <i>${esc(l.t)}</i> (${l.y}). Click to see them all.`;
  };
  s.addEventListener('pointerover',e=>{const t=e.target.closest('.th');show(t?t.dataset.k:null)});
  s.addEventListener('pointerleave',()=>show(null));
  s.addEventListener('focusin',e=>{const t=e.target.closest('.th');if(t)show(t.dataset.k)});
  s.addEventListener('focusout',()=>show(null));
  const ro=new ResizeObserver(draw);ro.observe(s);
}

/* theme cards on home */
const tc=document.getElementById('themes');
if(tc){tc.innerHTML=Object.keys(TH).map(k=>`<div class="card"><span class="count" style="color:${TH[k].c}">${cnt(k)}</span><h3>${TH[k].n}</h3><p>${tc.dataset['d'+k]||''}</p></div>`).join('')}

/* recent pubs on home */
const rp=document.getElementById('recent');
if(rp){rp.innerHTML=PUBS.filter(p=>p.d).slice(0,3).map(p=>`<div class="card"><span class="tag"><span class="dot" style="background:${TH[p.th].c}"></span>${p.y} · ${TH[p.th].s}</span><h3 style="margin-top:10px">${esc(p.t)}</h3><p>${esc(p.v)}</p><p style="margin-top:10px"><a class="more" href="https://doi.org/${p.d}">Read the article</a></p></div>`).join('')}

/* full publication list */
const pl=document.getElementById('pubs');
if(pl){
  let cur=TH[location.hash.slice(1)]?location.hash.slice(1):'all',q='';
  const f=document.getElementById('filters'),qs=document.getElementById('q');
  f.innerHTML=`<button class="chip" type="button" data-k="all" aria-pressed="${cur==='all'}">All (${PUBS.length})</button>`+Object.keys(TH).map(k=>`<button class="chip" type="button" data-k="${k}" aria-pressed="${k===cur}"><span class="dot" style="background:${TH[k].c}"></span>${TH[k].s} (${cnt(k)})</button>`).join('');
  const render=()=>{
    const list=PUBS.filter(p=>(cur==='all'||p.th===cur)&&(!q||(p.t+' '+p.a+' '+p.v).toLowerCase().includes(q)));
    if(!list.length){pl.innerHTML='<p class="empty">No publications match that search. Try a different word or clear the filter.</p>';return}
    const yrs=[...new Set(list.map(p=>p.y))];
    pl.innerHTML=yrs.map(y=>`<div class="yr"><h3>${y}</h3><div>${list.filter(p=>p.y===y).map(p=>`<div class="pub"><span class="t">${esc(p.t)}</span><span class="m">${esc(p.a)} ${esc(p.v)}.${p.d?` <a href="https://doi.org/${p.d}">doi.org/${p.d}</a>`:''}</span><span class="tag"><span class="dot" style="background:${TH[p.th].c};width:9px;height:9px"></span>${TH[p.th].s}</span></div>`).join('')}</div></div>`).join('');
  };
  f.addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;cur=b.dataset.k;f.querySelectorAll('.chip').forEach(c=>c.setAttribute('aria-pressed',c===b));render()});
  qs.addEventListener('input',()=>{q=qs.value.trim().toLowerCase();render()});
  render();
}

/* contact form */
const fm=document.getElementById('cform');
if(fm){
  const done=document.getElementById('done'),out=document.getElementById('msgout'),ml=document.getElementById('mailbtn'),cp=document.getElementById('copybtn');
  const params=location.hash.slice(1);
  if(['students','research','industry'].includes(params)){const sel=document.getElementById('who');sel.value={students:'Prospective student',research:'Research collaborator',industry:'Industry partner'}[params]}
  fm.addEventListener('submit',e=>{
    e.preventDefault();
    let ok=true;
    fm.querySelectorAll('[required]').forEach(i=>{const w=i.closest('.f');const bad=!i.value.trim()||(i.type==='email'&&!/^\S+@\S+\.\S+$/.test(i.value));w.classList.toggle('bad',bad);if(bad&&ok){i.focus();ok=false}});
    if(!ok)return;
    const v=id=>document.getElementById(id).value.trim();
    const subj=`[${v('who')}] ${v('subject')||'Enquiry from website'}`;
    const body=`Name: ${v('name')}\nEmail: ${v('email')}\nOrganisation: ${v('org')||'-'}\nI am a: ${v('who')}\n\n${v('message')}`;
    out.textContent=`To: spjohn@eit.ac.nz\nSubject: ${subj}\n\n${body}`;
    ml.href=`mailto:spjohn@eit.ac.nz?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
    done.classList.add('show');done.scrollIntoView({behavior:'smooth',block:'nearest'});
  });
  cp.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(out.textContent);cp.textContent='Copied'}catch(_){cp.textContent='Select the text above to copy'}});
}
}
