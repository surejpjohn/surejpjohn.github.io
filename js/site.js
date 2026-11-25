{
const TH={
  social:{n:'Information technology & digital marketing',s:'Information technology',c:'var(--th-social)',d:'How organisations, retailers and tertiary providers adopt information technology and digital channels, and how customers respond.'},
  cx:{n:'Customer experience & value co-creation',s:'Customer experience',c:'var(--th-cx)',d:'How customers and firms create value together for memorable experiences, especially in tourism and hospitality.'},
  ai:{n:'Artificial intelligence in marketing',s:'Artificial intelligence',c:'var(--th-ai)',d:'How AI and digital technologies transform customer experience, from service recovery to online food delivery.'},
  cb:{n:'Relationship marketing & consumer behaviour',s:'Relationship marketing',c:'var(--th-cb)',d:'Relationships with students and customers: satisfaction, service orientation, motivation, empathy and loyalty.'}
};
const PUBS=[
{y:2026,th:'social',t:'Influencer marketing and tourist behaviour: A systematic literature review of attitudes, intentions and behaviours in tourism',a:'John, S. P., & Supramaniam, K.',v:'International Journal of Tourism Research, 28(1), e70226',d:'10.1002/jtr.70226'},
{y:2025,th:'ai',t:'Technology-enabled value co-creation strategies to mitigate customer mistreatments in tourism and hospitality',a:'John, S. P.',v:'International Hospitality Review (advance online publication)',d:'10.1108/ihr-07-2025-0061'},
{y:2025,th:'cx',t:'Disruptive waves: Customer mistreatment in a dynamic marketing environment',a:'John, S., & Supramaniyam, S.',v:'Proceedings of ANZMAC 2025, pp. 57–62'},
{y:2025,th:'ai',t:'Riding the digital wave: Unpacking technology-enabled customer experience in marketing',a:'John, S., Purayidathil, J., & Supramaniyam, S.',v:'Proceedings of ANZMAC 2025, pp. 66–70'},
{y:2024,th:'cx',t:'Value co-creation research in tourism and hospitality management: A systematic literature review',a:'John, S. P., & Supramaniam, S.',v:'Journal of Hospitality and Tourism Management, 58, 96–114',d:'10.1016/j.jhtm.2023.11.008'},
{y:2024,th:'cb',t:'The role of sales personnel empathy and customer-oriented behaviour on female consumers’ emotions and satisfaction: An empirical analysis',a:'Supramaniam, S., John, S. P., & Gaur, S. S.',v:'FIIB Business Review (advance online publication)',d:'10.1177/23197145241241956'},
{y:2023,th:'social',t:'Antecedents and effects of influencer marketing strategies: A systematic literature review and directions for future research',a:'John, S. P., & Supramaniam, S.',v:'Advances in Digital Marketing and eCommerce, pp. 113–119. Springer',d:'10.1007/978-3-031-31836-8_15'},
{y:2023,th:'cx',t:'Value co-creation for a memorable tourism experience: A systematic literature review',a:'John, S. P., & Supramaniam, S.',v:'Proceedings of ANZMAC 2023, pp. 611–613'},
{y:2023,th:'ai',t:'The role of AI in enhancing customer experience: An exploratory analysis',a:'Seth, N., & John, S. P.',v:'Proceedings of ANZMAC 2023, pp. 64–67'},
{y:2022,th:'cb',t:'Factors affecting the success of marketing in higher education: A relationship marketing perspective',a:'John, S. P., & De Villiers, R.',v:'Journal of Marketing for Higher Education (advance online publication)',d:'10.1080/08841241.2022.2116741'},
{y:2022,th:'social',t:'Factors affecting the adoption of social media in marketing of higher education: An empirical analysis',a:'John, S. P., Walford, R., & Purayidathil, J.',v:'FIIB Business Review, 11(4), 422–437',d:'10.1177/23197145211072198'},
{y:2022,th:'cb',t:'Role of service orientation in marketing higher education: An exploratory analysis',a:'John, S. P., & De Villiers, R.',v:'Proceedings of ANZMAC 2022, pp. 403–406'},
{y:2022,th:'cb',t:'The role of salesperson interaction and customer emotions in enhancing brand loyalty: An empirical examination among female intimate apparel shoppers',a:'Supramaniam, S., & John, S. P.',v:'Proceedings of ANZMAC 2022, pp. 499–502'},
{y:2021,th:'social',t:'Social media in FMCG marketing: Understanding how supermarkets use Facebook during the COVID-19 pandemic',a:'John, S. P., & Walford, R.',v:'Advances in Digital Marketing and eCommerce, pp. 184–191. Springer',d:'10.1007/978-3-030-76520-0_19'},
{y:2021,th:'cb',t:'Covid-19 implications for marketing of higher education: An exploratory study',a:'Walford, R., John, S., & Narula, J.',v:'Proceedings of ANZMAC 2021, pp. 489–495'},
{y:2020,th:'social',t:'Elaboration of marketing communication through visual media: An empirical analysis',a:'John, S. P., & De Villiers, R.',v:'Journal of Retailing and Consumer Services, 54, 102052',d:'10.1016/j.jretconser.2020.102052'},
{y:2020,th:'social',t:'Digital marketing strategies in educational tourism: A social media perspective',a:'John, S. P.',v:'Advances in Digital Marketing and eCommerce, pp. 114–121. Springer',d:'10.1007/978-3-030-47595-6_15'},
{y:2020,th:'cb',t:'Role of digital relationships in the marketing of higher education: An exploratory analysis from New Zealand',a:'John, S. P.',v:'Advances in Digital Marketing and eCommerce, pp. 106–113. Springer',d:'10.1007/978-3-030-47595-6_14'},
{y:2020,th:'cb',t:'Determinants of tertiary level student satisfaction in New Zealand',a:'John, S. P., & Walford, R.',v:'New Zealand Applied Business Conference (NZABC 2020), pp. 52–55'},
{y:2019,th:'cb',t:'Future of relationship marketing during the winds of change',a:'John, S.',v:'Proceedings of ANZMAC 2019, pp. 1348–1351'},
{y:2019,th:'social',t:'Role of customer engagement and involvement in changing social media marketing landscape',a:'John, S. P., & De Villiers, R.',v:'Proceedings of ANZMAC 2019, pp. 495–499'},
{y:2018,th:'social',t:'Applications of social media for medical tourism marketing: An empirical analysis',a:'John, S., Larke, R., & Kilgour, M.',v:'Anatolia, 29(4), 553–565',d:'10.1080/13032917.2018.1473261'},
{y:2017,th:'social',t:'An analysis of the social media practices for sustainable medical tourism destination marketing',a:'John, S. P.',v:'International Journal of Tourism Policy, 7(3), 222–249'},
{y:2016,th:'cb',t:'Tourist growth and the implications for retail marketing strategy: Insights from Japan',a:'Larke, R., Kilgour, M., & John, S. P.',v:'Journal of Travel & Tourism Marketing, 33(5), 658–670'},
{y:2016,th:'cb',t:'An analysis of push and pull motivators investigated in medical tourism research published from 2000 to 2016',a:'John, S. P., & Larke, R.',v:'Tourism Review International, 20(2–3), 73–90'},
{y:2015,th:'social',t:'The integration of information technology in higher education: A study of faculty’s attitude towards IT adoption in the teaching process',a:'John, S. P.',v:'Contaduría y Administración, 60, 230–252 (also published in Spanish)'},
{y:2014,th:'social',t:'Relationship between trust and e-commerce adoption: A study of potential moderators',a:'John, S. P.',v:'World Business, Finance and Management Conference, Auckland, New Zealand (Best Paper Award)'},
{y:2014,th:'social',t:'An empirical study about the role of personality traits in information technology adoption',a:'Sriyabhand, T., & John, S. P.',v:'Humanities, Arts and Social Sciences Studies, 67–90'},
{y:2013,th:'social',t:'Influence of computer self-efficacy on information technology adoption',a:'John, S. P.',v:'International Journal of Information Technology, 19(1), 1–13'},
{y:2013,th:'social',t:'Measurement of B2C e-commerce acceptance in Thailand: An application of unified theory of acceptance and use of technology',a:'John, S. P.',v:'Assumption University'},
{y:2013,th:'social',t:'An introduction to IT governance and various IT governance frameworks in business world',a:'John, S. P.',v:'Proceedings of the Asian Conference on Corporate Governance and Business Sustainability'},
{y:2012,th:'social',t:'What are the factors influencing the information technology adoption in Asian region? A study of the B2C e-commerce systems success',a:'John, S. P.',v:'Humanities, Arts and Social Sciences Studies, 71–96'},
{y:2012,th:'cb',t:'An analysis of personality traits and learning styles as predictors of academic performance',a:'Pornsakulvanich, V., Dumrongsiri, N., Sajampun, P., Sornsri, S., John, S. P., Sriyabhand, T., Nuntapanich, C., Chantarawandi, C., Wongweeranonchai, P., & Jiradilok, S.',v:'ABAC Journal, 32(3), 1–19'}
];
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
    const ix={t:col('title'),e:col('employer'),l:col('location'),ty:col('type'),c:col('clos'),k:col('link'),n:col('note'),r:col('region')};
    const g=(r,k)=>ix[k]>=0?(r[ix[k]]||'').trim():'';
    const today=new Date();today.setHours(0,0,0,0);
    const jobs=rows.slice(1).map(r=>({t:g(r,'t'),e:g(r,'e'),l:g(r,'l'),ty:g(r,'ty'),d:parseDate(g(r,'c')),k:safeUrl(g(r,'k')),n:g(r,'n'),r:g(r,'r')}))
      .filter(x=>x.t&&(!x.d||x.d>=today))
      .sort((a,b)=>(a.d?a.d.getTime():Infinity)-(b.d?b.d.getTime():Infinity));
    if(!jobs.length){jb.innerHTML=`<div class="jobs-empty"><p>No featured openings right now. New roles are shared regularly in the <a href="${fb}" target="_blank" rel="noopener">Postgrad Careers Hub Facebook group</a>, and you can search the job sites below.</p></div>`;return}
    const REG=[["Hawke's Bay",/hawke|napier|hastings|wairoa|havelock north|waipukurau|waipawa/],["Northland",/northland|whang[aā]rei|kerikeri|kaitaia|dargaville/],["Auckland",/auckland|manukau|takapuna|north shore|wiri|east tamaki|rosedale|glen eden|newmarket|albany|henderson|penrose|mo?u?n?t\.? wellington|onehunga|botany|papakura|pukekohe|takanini|morningside|parnell|ponsonby|ellerslie|mt eden/],["Waikato",/waikato|hamilton|morrinsville|cambridge|te awamutu|matamata|taup[oō]|thames|huntly|tokoroa|putaruru|te kuiti/],["Bay of Plenty",/bay of plenty|tauranga|rotorua|whakat[aā]ne|maunganui|te puke|edgecumbe|tauriko|kawerau|[oō]p[oō]tiki/],["Gisborne",/gisborne|tair[aā]whiti/],["Taranaki",/taranaki|new plymouth|h[aā]wera|stratford/],["Manawatū-Whanganui",/manawat|palmerston north|whanganui|wanganui|levin|feilding|ohakune/],["Wellington",/(^|[^t] )wellington|^wellington|lower hutt|upper hutt|porirua|k[aā]piti|petone|masterton|wairarapa|paraparaumu/],["Nelson, Tasman & Marlborough",/nelson|tasman|marlborough|blenheim|motueka/],["Canterbury",/canterbury|christchurch|timaru|ashburton|rangiora|rolleston|kaik[oō]ura/],["West Coast",/west coast|greymouth|hokitika|westport/],["Otago",/otago|dunedin|queenstown|w[aā]naka|oamaru|cromwell|ettrick/],["Southland",/southland|invercargill|te anau/]];
    const MULTI='Multiple locations',WIDE='New Zealand-wide & remote',OTHER='Other locations';
    const regionOf=x=>{if(x.r){const r=REG.find(([n])=>n.toLowerCase()===x.r.toLowerCase());return r?r[0]:x.r}
      const l=x.l.toLowerCase().replace(/mo?u?n?t\.? wellington/g,'mount-wellington auckland');
      const hit=REG.filter(([,re])=>re.test(l)).map(([n])=>n);
      if(hit.length===1)return hit[0];if(hit.length>1)return MULTI;
      return /new zealand|nz-?wide|nationwide|remote|various|anywhere/.test(l)?WIDE:OTHER};
    const order=REG.map(r=>r[0]).concat([MULTI,WIDE,OTHER]);
    const groups={};jobs.forEach(x=>{const r=regionOf(x);(groups[r]=groups[r]||[]).push(x)});
    const names=Object.keys(groups).sort((a,b)=>{const ia=order.indexOf(a),ib=order.indexOf(b);return (ia<0?order.length-1:ia)-(ib<0?order.length-1:ib)});
    const slug=n=>'jobs-'+n.toLowerCase().normalize('NFD').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
    const item=x=>{const days=x.d?Math.round((x.d-today)/864e5):null;const soon=days!==null&&days<=7;
      return `<li><div class="jb-main"><h4>${esc(x.t)}</h4><p class="jb-meta">${[x.e,x.l].filter(Boolean).map(esc).join(', ')}</p>${x.n?`<p class="jb-note">${esc(x.n)}</p>`:''}<p class="jb-tags">${x.ty?`<span class="jb-type">${esc(x.ty)}</span>`:''}${x.d?`<span class="jb-close${soon?' soon':''}">${soon?(days===0?'Closes today':'Closes soon: '):'Closes '}${days===0?'':fmt(x.d)}</span>`:''}</p></div>${x.k?`<a class="btn btn-solid" href="${esc(x.k)}" target="_blank" rel="noopener">View advert</a>`:''}</li>`};
    jb.innerHTML=(names.length>1?`<nav class="jb-regions" aria-label="Jump to a region"><p>Jump to a region:</p><ul>${names.map(n=>`<li><a href="#${slug(n)}">${esc(n)} <span>${groups[n].length}</span></a></li>`).join('')}</ul></nav>`:'')
      +names.map(n=>`<section class="jb-group" id="${slug(n)}" aria-labelledby="${slug(n)}-h"><h3 id="${slug(n)}-h">${esc(n)} <span class="jb-count">${groups[n].length} ${groups[n].length===1?'role':'roles'}</span></h3><ul class="jobs">${groups[n].map(item).join('')}</ul></section>`).join('');
  }).catch(()=>{jb.innerHTML=`<div class="jobs-empty"><p>The featured openings can&rsquo;t be loaded right now. See the latest roles in the <a href="${fb}" target="_blank" rel="noopener">Postgrad Careers Hub Facebook group</a> or search the job sites below.</p></div>`});
}

}
