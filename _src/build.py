#!/usr/bin/env python3
"""Builds the static site: shared header/footer + page bodies -> *.html, and js/site.js from data + app code."""
import re, time, pathlib
R = pathlib.Path(__file__).resolve().parent.parent
V = time.strftime('%Y%m%d%H%M')
pubs = (R/'_src/pubs.js').read_text().strip()

TH = """const TH={
  social:{n:'Information technology & digital marketing',s:'Information technology',c:'var(--th-social)',d:'How organisations, retailers and tertiary providers adopt information technology and digital channels, and how customers respond.'},
  cx:{n:'Customer experience & value co-creation',s:'Customer experience',c:'var(--th-cx)',d:'How customers and firms create value together for memorable experiences, especially in tourism and hospitality.'},
  ai:{n:'Artificial intelligence in marketing',s:'Artificial intelligence',c:'var(--th-ai)',d:'How AI and digital technologies transform customer experience, from service recovery to online food delivery.'},
  cb:{n:'Relationship marketing & consumer behaviour',s:'Relationship marketing',c:'var(--th-cb)',d:'Relationships with students and customers: satisfaction, service orientation, motivation, empathy and loyalty.'}
};"""
(R/'js/site.js').write_text('{\n'+TH+'\n'+pubs+'\n'+(R/'_src/app.part.js').read_text()+'\n}\n')

SCHOLAR='https://scholar.google.com/citations?user=oiIQG0sAAAAJ&amp;hl=en'
LINKEDIN='https://www.linkedin.com/in/surej-p-john-48a13570/'
RG='https://www.researchgate.net/profile/Surej-John'
EIT='https://www.eit.ac.nz/staff/dr-surej-p-john/'
NAV=[('index.html','Home'),('research.html','Research'),('teaching.html','Teaching'),('consulting.html','Consulting &amp; speaking'),('awards.html','Awards'),('contact.html','Contact')]

def page(fn, title, desc, body, extra_head=''):
    nav=''.join(f'<a href="{h}"{" aria-current=\"page\"" if h==fn else ""}>{t}</a>' for h,t in NAV if h!='contact.html')
    cur=' aria-current="page"' if fn=='contact.html' else ''
    html=f'''<!DOCTYPE html>
<html lang="en-NZ">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:image" content="img/portrait.jpg">
<link rel="stylesheet" href="css/site.css?v={V}">
{extra_head}</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="top"><div class="wrap">
<a class="name" href="index.html">Dr Surej P John</a>
<button class="mtoggle" type="button" aria-expanded="false" aria-controls="menu">Menu</button>
<nav class="menu" id="menu" aria-label="Main">{nav}<a href="contact.html"{cur}>Contact</a><a class="btn btn-solid" href="contact.html">Get in touch</a></nav>
</div></header>
<main id="main">
{body}
</main>
<footer class="foot"><div class="wrap">
<div class="brand"><a class="name" href="index.html">Dr Surej P John</a><p style="margin-top:10px;max-width:34ch">Senior Lecturer in Marketing, School of Business, Eastern Institute of Technology, New Zealand.</p></div>
<div><h4>Pages</h4><ul><li><a href="research.html">Research</a></li><li><a href="teaching.html">Teaching</a></li><li><a href="consulting.html">Consulting &amp; speaking</a></li><li><a href="awards.html">Awards</a></li></ul></div>
<div><h4>Profiles</h4><ul><li><a href="{SCHOLAR}" target="_blank" rel="me noopener">Google Scholar</a></li><li><a href="{RG}" target="_blank" rel="me noopener">ResearchGate</a></li><li><a href="{LINKEDIN}" target="_blank" rel="me noopener">LinkedIn</a></li><li><a href="{EIT}" target="_blank" rel="noopener">EIT staff profile</a></li></ul></div>
<div><h4>Contact</h4><ul><li><a href="mailto:spjohn@eit.ac.nz">Email me</a></li><li><a href="contact.html">Contact form</a></li></ul></div>
<p class="base">&copy; 2026 Dr Surej P John</p>
</div></footer>
<script src="js/site.js?v={V}"></script>
</body>
</html>
'''
    (R/fn).write_text(html)

def closing(h,p,href,label='Get in touch'):
    return f'''<section class="sec navy tight"><div class="wrap close"><div><h2>{h}</h2><p style="margin-top:10px">{p}</p></div><a class="btn btn-solid" href="{href}">{label}</a></div></section>'''

def phead(h,p,img=None,alt=''):
    pic=f'<img src="{img}" alt="" loading="eager">' if img else ''
    return f'<section class="phead{" photo" if img else ""}">{pic}<div class="wrap"><h1>{h}</h1><p>{p}</p></div></section>'

# ---------- HOME ----------
jsonld='<script type="application/ld+json">{"@context":"https://schema.org","@type":"Person","name":"Surej P John","honorificPrefix":"Dr","jobTitle":"Senior Lecturer in Marketing","image":"img/portrait.jpg","worksFor":{"@type":"CollegeOrUniversity","name":"Eastern Institute of Technology"},"email":"mailto:spjohn@eit.ac.nz","knowsAbout":["Information technology adoption","Digital marketing","Artificial intelligence in marketing","Customer experience","Value co-creation","Relationship marketing","Tourism marketing","Structural equation modelling"],"sameAs":["https://scholar.google.com/citations?user=oiIQG0sAAAAJ","'+EIT+'","'+LINKEDIN+'","'+RG+'"]}</script>\n<link rel="preload" as="image" href="img/class/applied-research-methods-lg.jpg">\n'
home=f'''
<section class="hero">
<div class="hero-text">
<h1>Dr Surej P John</h1>
<p class="role">Senior Lecturer in Marketing, School of Business, Eastern Institute of Technology, New Zealand</p>
<p class="intro">I research how technology, relationships and customer experience shape the choices people make, and I teach marketing that is grounded in evidence.</p>
<div class="actions"><a class="btn btn-solid" href="contact.html">Get in touch</a><a class="btn btn-ghost" href="research.html">View publications</a><a class="tlink" href="{SCHOLAR}" target="_blank" rel="me noopener">Google Scholar profile</a></div>
</div>
<figure class="hero-photo" style="margin:0"><img src="img/class/applied-research-methods-lg.jpg" width="2000" height="1126" alt="Dr Surej P John with his postgraduate Applied Research Methods class at EIT"><figcaption>With my postgraduate Applied Research Methods class</figcaption></figure>
</section>

<section class="sec"><div class="wrap split">
<header><h2>Marketing scholar, teacher and research supervisor</h2></header>
<div>
<p class="lead">My work sits where marketing meets technology: how people adopt new tools, how AI changes service, and how organisations build lasting relationships with customers and students.</p>
<p>I hold a PhD in Information Technology and an MBA in Marketing, and I have taught at universities in New Zealand and Thailand since 2007. More than 50 master&rsquo;s students have completed their research under my supervision.</p>
<div class="creds">
<div><div class="cr"><b>Section editor</b><ul class="jlist"><li>Australasian Journal of Information Systems</li></ul></div><div class="cr"><b>Editorial board member</b><ul class="jlist"><li>FIIB Business Review</li><li>Journal of Hospitality and Tourism Management</li><li>FOCUS: Journal of International Business</li></ul></div></div>
<div class="cr"><b>Reviewer</b><ul class="jlist"><li>Annals of Tourism Research</li><li>Tourism Management</li><li>Current Issues in Tourism</li><li>Australasian Marketing Journal</li><li>Journal of Consumer Behaviour</li><li>Journal of Hospitality and Tourism Technology</li><li>Journal of Travel and Tourism Marketing</li><li>Journal of Strategic Marketing</li><li>Journal of Travel Research</li><li>Anatolia</li><li>International Journal of E-Commerce</li></ul></div>
</div>
</div>
</div></section>

<section class="sec mist"><div class="wrap split">
<header><h2>Currently</h2><p>What I am working on now.</p></header>
<ul class="now">
<li><span class="when">2026</span><div><b>Beyond Automation: How AI Capabilities Transform Customer Experience in Online Food Delivery Services.</b> A new study funded by an EIT research grant. <a href="research.html">Research</a></div></li>
<li><span class="when">Sep 2026</span><div><b>E-Commerce in the AI Era.</b> International guest lecture for MBA students at Amity University Chhattisgarh, India. <a href="consulting.html">Speaking</a></div></li>
<li><span class="when">2026</span><div><b>Influencer marketing and tourist behaviour.</b> A systematic literature review published in the International Journal of Tourism Research. <a href="research.html">Publications</a></div></li>
</ul>
</div></section>

<section class="sec"><div class="wrap split">
<header><h2>Research</h2><p><span data-count="all"></span> journal articles, book chapters and conference papers since 2012, across four connected themes.</p><p style="margin-top:14px"><a class="tlink" href="research.html">All publications</a></p></header>
<div>
<div class="tline" id="tline" role="group" aria-label="Publications by year, coloured by theme"></div>
<div class="legend" id="tlegend"></div>
<p class="tl-cap" id="tlcap" aria-live="polite">Each square is one publication. Point to a square to see its title, or select it to open that theme.</p>
<ul class="themes" id="themes" style="margin-top:28px"></ul>
</div>
</div></section>

<section class="sec mist"><div class="wrap split">
<header><h2>Recent publications</h2><p><a class="tlink" href="research.html">See all <span data-count="all"></span></a></p></header>
<ul class="bib" id="recent"></ul>
</div></section>

<section class="sec navy"><div class="wrap">
<h2 style="margin-bottom:36px">How we can work together</h2>
<div class="cols">
<div><h3>Prospective students</h3><p>Postgraduate courses in digital marketing, research methods and strategy, and supervision for master&rsquo;s research projects.</p><a class="tlink" href="teaching.html">Teaching</a></div>
<div><h3>Research collaborators</h3><p>Co-authoring on technology, customer experience and tourism, and support with structural equation modelling and systematic reviews.</p><a class="tlink" href="research.html">Research</a></div>
<div><h3>Industry partners</h3><p>Workshops, talks and applied projects on information technology and digital strategy, customer experience and marketing for education providers.</p><a class="tlink" href="consulting.html">Consulting &amp; speaking</a></div>
</div>
</div></section>
'''
page('index.html','Dr Surej P John','Dr Surej P John is a Senior Lecturer in Marketing at EIT, New Zealand, researching information technology and digital marketing, artificial intelligence in marketing, customer experience and relationship marketing.',home,jsonld)

# ---------- RESEARCH ----------
research=phead('Research','How digital channels, AI and human interaction create value for customers, students and visitors. Most of my work uses survey data analysed with structural equation modelling, alongside systematic literature reviews and qualitative analysis.')+'''
<section class="sec"><div class="wrap split">
<header><h2>Grants and funding</h2></header>
<div class="grant"><span class="amt">NZ$3,500</span><div><h3>Beyond Automation: How AI Capabilities Transform Customer Experience in Online Food Delivery Services</h3><p class="muted" style="margin-top:8px">Research grant from Eastern Institute of Technology (EIT), awarded 13 July 2026.</p></div></div>
</div></section>

<section class="sec mist"><div class="wrap split">
<header><h2>Current projects</h2></header>
<ul class="rows one">
<li><h3>AI capabilities and customer experience in online food delivery</h3><p>Funded by the EIT research grant above.</p></li>
<li><h3>Student satisfaction in New Zealand tertiary education</h3><p>What drives satisfaction among tertiary students, and how providers can respond.</p></li>
<li><h3>Retailers&rsquo; adoption of information technology</h3><p>How retailers adopt and spread IT when forming their marketing strategies.</p></li>
</ul>
</div></section>

<section class="sec"><div class="wrap split">
<header><h2>Editorial and review roles</h2></header>
<ul class="rows">
<li><h3>Section editor</h3><ul class="jlist"><li>Australasian Journal of Information Systems</li></ul></li>
<li><h3>Editorial board member</h3><ul class="jlist"><li>FIIB Business Review</li><li>Journal of Hospitality and Tourism Management</li><li>FOCUS: Journal of International Business</li></ul></li>
<li><h3>Reviewer</h3><ul class="jlist"><li>Annals of Tourism Research</li><li>Tourism Management</li><li>Current Issues in Tourism</li><li>Australasian Marketing Journal</li><li>Journal of Consumer Behaviour</li><li>Journal of Hospitality and Tourism Technology</li><li>Journal of Travel and Tourism Marketing</li><li>Journal of Strategic Marketing</li><li>Journal of Travel Research</li><li>Anatolia</li><li>International Journal of E-Commerce</li></ul></li>
<li><h3>Methods</h3><p>Structural equation modelling and multivariate analysis (SPSS, AMOS), systematic literature reviews, and qualitative analysis in NVivo.</p></li>
</ul>
</div></section>

<section class="sec" id="conferences"><div class="wrap">
<h2 style="margin-bottom:10px">Conferences</h2>
<p class="muted" style="margin-bottom:28px">Presenting my research at the Australian and New Zealand Marketing Academy (ANZMAC) conference.</p>
<div class="gal three">
<figure><a href="img/conf/anzmac-2025-presenting.jpg" target="_blank" rel="noopener"><img src="img/conf/anzmac-2025-presenting.jpg" width="1400" height="788" loading="lazy" decoding="async" alt="Dr John presenting the paper Riding the digital wave at ANZMAC 2025" style="object-position:60% 50%"></a><figcaption>Presenting &ldquo;Riding the digital wave: Unpacking technology-enabled customer experience in marketing&rdquo; at ANZMAC 2025</figcaption></figure>
<figure><a href="img/conf/anzmac-2025.jpg" target="_blank" rel="noopener"><img src="img/conf/anzmac-2025.jpg" width="1400" height="788" loading="lazy" decoding="async" alt="Dr John at the ANZMAC 2025 conference"></a><figcaption>At ANZMAC 2025</figcaption></figure>
<figure><a href="img/conf/anzmac-2023-online.jpg" target="_blank" rel="noopener"><img src="img/conf/anzmac-2023-online.jpg" width="683" height="911" loading="lazy" decoding="async" alt="Dr John at his laptop giving an online presentation for ANZMAC 2023" style="object-position:50% 28%"></a><figcaption>Presenting online at ANZMAC 2023</figcaption></figure>
<figure><a href="img/conf/anzmac-2019.jpg" target="_blank" rel="noopener"><img src="img/conf/anzmac-2019.jpg" width="1400" height="933" loading="lazy" decoding="async" alt="Dr John presenting on critical success factors in relationship marketing at ANZMAC 2019"></a><figcaption>Presenting research on relationship marketing at ANZMAC 2019, Wellington</figcaption></figure>
</div>
</div></section>

<section class="sec mist" id="publications"><div class="wrap">
<h2 style="margin-bottom:10px">Publications</h2>
<p class="muted" style="margin-bottom:24px"><span data-count="all"></span> journal articles, book chapters and conference papers since 2012. Filter by theme or search by keyword.</p>
<div class="tools"><div><label for="q" class="small" style="display:block;margin-bottom:6px">Search publications</label><input id="q" class="search" type="search" placeholder="For example tourism, adoption, influencer" autocomplete="off"></div></div>
<div class="chips" id="filters" role="group" aria-label="Filter by theme" style="margin:14px 0 8px"></div>
<div id="pubs" aria-live="polite"></div>
</div></section>
'''+closing('Looking for a research collaborator?','I am open to co-authoring, joint grant applications and methods support.','contact.html#research')
page('research.html','Research | Dr Surej P John','Publications, grants and research projects by Dr Surej P John on information technology adoption, digital marketing, artificial intelligence, customer experience and relationship marketing.',research)

# ---------- TEACHING ----------
def ev(rows):
    return ''.join(f'<li><span class="el">{l}</span><span class="eb" role="img" aria-label="{sa}% strongly agree, {100-sa}% agree"><i style="width:{sa}%"></i><i class="a" style="width:{100-sa}%"></i></span><span class="ev-n">100%</span></li>' for l,sa in rows)
e26=ev([('The content of the course was interesting',67),('The assessments tested me on what I had been taught',62),('The course helped me develop my learning skills',60),('The content matched the course outline',60),('The assessments matched the learning outcomes',54)])
e21=ev([('Has a positive relationship with students',68),('Is enthusiastic about the subject',68),('Is knowledgeable about the subject',63),('Is effective in helping me learn',58),('Provides useful feedback that helps my learning',53),('Made the content interesting and engaging',47)])
def fig(f,w,h,cap,alt): return f'<figure><a href="img/class/{f}.jpg" target="_blank" rel="noopener"><img src="img/class/{f}.jpg" width="{w}" height="{h}" loading="lazy" decoding="async" alt="{alt}"></a><figcaption>{cap}</figcaption></figure>'
teaching=phead('Teaching','I teach marketing as a practical discipline grounded in evidence. Students work with real brands, real data and current research, so they leave able to analyse a market and make a case for a decision.','img/class/strategic-marketing.jpg')+f'''
<section class="sec"><div class="wrap split">
<header><h2>Postgraduate courses</h2><p>Courses I teach at postgraduate level at EIT.</p></header>
<div>
<ul class="rows">
<li><h3>Digital Marketing</h3><p>Social media, search, content and analytics, and how to plan and measure digital campaigns.</p></li>
<li><h3>Applied Research Methods</h3><p>Designing a study, collecting data and analysing it with quantitative and qualitative methods.</p></li>
<li><h3>Systematic Literature Reviews</h3><p>Planning, running and reporting rigorous reviews, from search strategy to synthesis.</p></li>
<li><h3>International Marketing</h3><p>Entering and competing in overseas markets, and adapting strategy across cultures.</p></li>
<li><h3>Strategic Marketing</h3><p>Analysing markets and competitors and building marketing strategies that hold up.</p></li>
</ul>
<p class="muted" style="margin-top:22px">I also teach Marketing Research, Consumer Behaviour, Marketing Management, Quantitative Analysis and Business Functions.</p>
</div>
</div></section>

<section class="sec navy"><div class="wrap split">
<header><h2>Research supervision</h2><p>Supervising research is one of the most rewarding parts of my work.</p></header>
<div>
<p class="statement">More than 50 master&rsquo;s students have completed their research under my supervision.</p>
<div class="cols" style="grid-template-columns:repeat(2,minmax(0,1fr))">
<div><h3>Where I supervise</h3><p>EIT, and as a research supervisor at the University of Waikato, Auckland University of Technology (AUT) and Southern Institute of Technology (SIT).</p></div>
<div><h3>Topics I enjoy supervising</h3><p>Technology adoption, technology impacts in retailing and consumer services, services marketing, and tourism management.</p></div>
</div>
<p style="margin-top:28px">Thinking about a master&rsquo;s research project in one of these areas? Send me a short outline of your topic and I&rsquo;ll let you know whether it&rsquo;s a good fit.</p>
<p style="margin-top:18px"><a class="btn btn-ghost" href="contact.html#students">Send a topic outline</a></p>
</div>
</div></section>

<section class="sec"><div class="wrap">
<h2 style="margin-bottom:10px">Student evaluations</h2>
<p class="muted">Results from EIT&rsquo;s anonymous student surveys for my postgraduate Digital Marketing course (DBPG 8.200). Every student agreed with each statement below.</p>
<div class="key" style="margin:14px 0 30px"><span><span class="sq" style="--c:var(--navy)"></span>Strongly agree</span><span><span class="sq" style="--c:#8ea7d9"></span>Agree</span><span>Figure on the right: share who agreed or strongly agreed</span></div>
<div class="evals">
<div><h3>Digital Marketing, Trimester 1 2026</h3><p class="small">Hawke&rsquo;s Bay campus, 13 to 15 respondents</p><ul class="evl">{e26}</ul>
<blockquote>&ldquo;The best thing is how Dr. John delivered the course. He provided detailed feedback on our first assessment which guided us on the preparation of our assessment 2.&rdquo;</blockquote>
<blockquote>&ldquo;The course was very insightful, interactive, and relevant to current trends.&rdquo;</blockquote></div>
<div><h3>Digital Marketing, Term 3 2021</h3><p class="small">Auckland campus, 19 respondents, ratings of my teaching</p><ul class="evl">{e21}</ul>
<blockquote>&ldquo;His teaching style is very appropriate for a postgraduate course - guiding the students, getting their feedback, helping the class to learn from one another, instead of just spoonfeeding the knowledge.&rdquo;</blockquote>
<blockquote>&ldquo;Surej encourages class participation without being pushy or aggressive.&rdquo;</blockquote></div>
</div>
<p class="small" style="margin-top:24px">In 2021, 95% also agreed that delivery was well organised and that expectations were clear; the remaining 5% (one student) were neutral.</p>
</div></section>

<section class="sec mist"><div class="wrap">
<h2 style="margin-bottom:28px">In the classroom</h2>
<div class="gal">
{fig('applied-research-methods',1400,788,'With my postgraduate Applied Research Methods students','Dr Surej P John with a large class of postgraduate Applied Research Methods students')}
{fig('strategic-marketing',1400,1050,'A group of brilliant Strategic Marketing students','Dr John with four Strategic Marketing students in front of a classroom screen')}
{fig('marketing-research',1400,788,'With a group of Marketing Research students','Dr John with six Marketing Research students in a classroom')}
{fig('marketing-class-2019',1044,783,'A 2019 marketing class, after a session on ethics and social responsibility','Dr John with nine marketing students in front of a slide titled Ethics and social responsibility')}
{fig('best-student-consumer-behaviour-2019',1400,1049,'With the best-performing student in Consumer Behaviour, 2019','Dr John presenting a gift to the best-performing Consumer Behaviour student')}
{fig('internship-1',1400,1050,'Completion of business internship','Dr John with a student celebrating the completion of her business internship')}
{fig('internship-2',788,1400,'Completion of business internship','Dr John with a student in front of his internship presentation')}
</div>
</div></section>

<section class="sec"><div class="wrap split">
<header><h2>Teaching experience</h2><p>University teaching in New Zealand and Thailand, at undergraduate and postgraduate level.</p></header>
<ul class="rows when-list">
<li><span class="when">Now</span><div><h3>Eastern Institute of Technology, New Zealand</h3><p>Senior Lecturer in Marketing, School of Business. Marketing, research methods and decision-making courses.</p></div></li>
<li><span class="when">3 years</span><div><h3>Waikato Management School, University of Waikato</h3><p>International Marketing, Customer Relationship Marketing, Principles of Marketing and Marketing Research; supervised master&rsquo;s dissertations.</p></div></li>
<li><span class="when">2007&ndash;2015</span><div><h3>Assumption University, Bangkok</h3><p>Lecturer, then Assistant Professor of Marketing. Operations management, pricing strategies and quantitative analysis.</p></div></li>
</ul>
</div></section>
'''+closing('Thinking about studying marketing?','Ask about courses, research topics or supervision.','contact.html#students')
page('teaching.html','Teaching | Dr Surej P John','Dr Surej P John teaches postgraduate digital marketing, research methods, systematic literature reviews and strategic marketing at EIT, New Zealand, and has supervised more than 50 master’s research students.',teaching)

# ---------- CONSULTING ----------
consulting=phead('Consulting &amp; speaking','I help organisations make marketing decisions based on evidence, drawing on my published research and on survey and data analysis to answer practical questions about customers, channels and experience.','img/class/marketing-research.jpg')+'''
<section class="sec"><div class="wrap split">
<header><h2>Areas of expertise</h2></header>
<ul class="rows one">
<li><h3>Social media &amp; influencer strategy</h3><p>Choosing channels and influencers, measuring engagement, and what research says works for tourism, retail and education brands.</p></li>
<li><h3>Customer experience &amp; value co-creation</h3><p>Designing experiences with customers, using technology and AI well, and recovering when service goes wrong.</p></li>
<li><h3>Marketing for education providers</h3><p>Student satisfaction, relationship marketing and digital recruitment for tertiary and private training providers.</p></li>
<li><h3>Customer research &amp; analytics</h3><p>Survey design, structural equation modelling and clear reporting that managers can act on.</p></li>
</ul>
</div></section>

<section class="sec mist"><div class="wrap split">
<header><h2>Ways to work together</h2><p>Available for workshops, keynotes and guest lectures, applied research projects, customer surveys and analysis, and research methods training.</p></header>
<ul class="rows">
<li><h3>Talks &amp; keynotes</h3><p>Conference sessions, industry events and guest lectures on digital marketing and customer experience.</p></li>
<li><h3>Workshops &amp; training</h3><p>Hands-on sessions for marketing teams, or methods training in SPSS, AMOS and NVivo for researchers.</p></li>
<li><h3>Applied research</h3><p>Customer and stakeholder studies, from survey design to analysis and recommendations.</p></li>
</ul>
</div></section>

<section class="sec"><div class="wrap split">
<header><h2>Recent talks and workshops</h2></header>
<ul class="rows when-list">
<li><span class="when">8 Oct 2026</span><div><h3>Research Workshop for the CERT Volunteer Research Team</h3><p>An online workshop for the Community Education &amp; Research Trust (CERT) on planning research, data collection, data analysis, and qualitative and quantitative methods, to strengthen community research capability in New Zealand.</p><a class="talkimg" href="img/talks/cert-research-workshop-2026.jpg" target="_blank" rel="noopener"><img src="img/talks/cert-research-workshop-2026.jpg" width="800" height="666" loading="lazy" decoding="async" alt="Banner for the CERT and EIT research workshop led by Dr Surej P John, Thursday 8 October 2026, online"></a></div></li>
<li><span class="when">9 Sep 2026</span><div><h3>E-Commerce in the AI Era: Trends, Marketing &amp; Consumer Behaviour</h3><p>International guest lecture for MBA students, hosted by Amity Business School and the Centre for International Affairs, Amity University Chhattisgarh, Raipur, India. <a href="img/certs/amity-letter-of-appreciation.jpg" target="_blank" rel="noopener">Read the letter of appreciation</a>.</p></div></li>
</ul>
</div></section>
'''+closing('Have a project or event in mind?','Tell me what you need and when, and we can discuss the best format.','contact.html#industry')
page('consulting.html','Consulting &amp; Speaking | Dr Surej P John','Workshops, talks and applied research by Dr Surej P John on social media strategy, influencer marketing, customer experience and marketing for education providers.',consulting)

# ---------- AWARDS ----------
certs=[('meta-measure-optimize-social-media.jpg','Measure and Optimize Social Media Marketing Campaigns','Meta','24 February 2023','N8DY5TWVBGQ8'),
('meta-intro-social-media-marketing.jpg','Introduction to Social Media Marketing','Meta','21 February 2023','HMEDQUDJUQWS'),
('ibm-python-data-science-ai.jpg','Python for Data Science &amp; AI: Hands-On Development','IBM','29 June 2024','VBXT9Z8LTYN6'),
('ibm-data-visualization-dashboards.jpg','Data Visualization and Dashboards with Excel and Cognos','IBM','23 June 2024','F89YVZ2ZS5AZ'),
('ibm-data-analytics-foundations.jpg','Data Analytics Foundations: Turn Data into Insights','IBM','19 June 2024','47QDTP4YH4TW')]
def doc(f,w,h,alt,crop=False): return f'<a class="doc{" crop" if crop else ""}" href="img/certs/{f}" target="_blank" rel="noopener"><img src="img/certs/{f}" width="{w}" height="{h}" loading="lazy" decoding="async" alt="{alt}"></a>'
cc=''.join(f'<div>{doc(f,1100,852,"Course certificate: "+t.replace("&amp;","and"))}<h3>{t}</h3><p>{iss}, offered through Coursera, {d}</p><a class="tlink" href="https://coursera.org/verify/{c}" target="_blank" rel="noopener">Verify certificate</a></div>' for f,t,iss,d,c in certs)
awards=phead('Awards &amp; certifications','Awards and recognition for my research, reviewing and teaching, my formal teaching qualification, and the professional certificates I have completed to keep my digital marketing and data skills current.')+f'''
<section class="sec"><div class="wrap split">
<header><h2>Awards</h2></header>
<div>
<div class="award">{doc('fiib-most-impactful-paper-2024.jpg',1100,758,'Most Impactful Paper Award 2024 certificate from FIIB Business Review and Sage')}<div><h3>Most Impactful Paper Award 2024, FIIB Business Review</h3><p>Awarded by FIIB Business Review (Sage) for &ldquo;Factors Affecting the Adoption of Social Media in Marketing of Higher Education: An Empirical Analysis&rdquo;, signed by editor Sudhir Rana and executive editor Radhika Shrivastava.</p></div></div>
<div class="award">{doc('jhtm-best-reviewer-award.jpg',1100,843,'Best Reviewer Recognition Award from the Journal of Hospitality and Tourism Management')}<div><h3>Best Reviewer Recognition Award, Journal of Hospitality &amp; Tourism Management</h3><p>Presented by Elsevier for a significant contribution in reviewing articles for the journal, while at Waikato Management School, University of Waikato. Signed by co-editors-in-chief Professor Marianna Sigala and Professor Marg Deery.</p></div></div>
<div class="award">{doc('best-paper-wbfmc-2014.jpg',745,1100,'Best Paper Certificate from the World Business, Finance and Management Conference 2014')}<div><h3>Best Paper Award, World Business, Finance and Management Conference 2014</h3><p>For &ldquo;Relationship between Trust and E-Commerce Adoption: A Study of Potential Moderators&rdquo;, presented at the international conference held in Auckland, New Zealand, on 8&ndash;9 December 2014, while at Assumption University, Thailand.</p></div></div>
</div>
</div></section>

<section class="sec mist"><div class="wrap split">
<header><h2>Recognition</h2></header>
<div>
<div class="award">{doc('elsevier-jhtm-reviewer.jpg',1100,778,'Elsevier Certificate of Reviewing from the Journal of Hospitality and Tourism Management')}<div><h3>Elsevier Certificate of Reviewing, Journal of Hospitality and Tourism Management</h3><p>Awarded by the editors for 19 reviews contributed to the journal between December 2015 and June 2025.</p></div></div>
<div class="award">{doc('wiley-reviewer-2025.jpg',1100,850,'Wiley Reviewer Certificate 2025 for the Journal of Consumer Behaviour')}<div><h3>Wiley Reviewer Certificate 2025</h3><p>Awarded by Wiley for serving as a reviewer for the <i>Journal of Consumer Behaviour</i>, signed by co-editors-in-chief Steven D&rsquo;Alessandro and Varsha Jain.</p></div></div>
<div class="award">{doc('sage-fiib-reviewer-2026.jpg',707,1000,'Sage Certificate of Reviewing from FIIB Business Review')}<div><h3>Sage Certificate of Reviewing, FIIB Business Review</h3><p>Awarded by the editor in recognition of a manuscript review completed on 17 September 2026. The manuscript title is blurred to keep the review confidential.</p></div></div>
<div class="award" id="amity-letter">{doc('amity-letter-of-appreciation.jpg',1000,1414,'Letter of appreciation from Amity University Chhattisgarh')}<div><h3>Letter of appreciation, Amity University Chhattisgarh</h3><p>For an international guest lecture to MBA students, &ldquo;E-Commerce in the AI Era: Trends, Marketing &amp; Consumer Behaviour&rdquo;, on 9 September 2026, from Amity Business School and the Centre for International Affairs.</p><p style="margin-top:12px"><a class="tlink" href="img/certs/amity-letter-of-appreciation.jpg" target="_blank" rel="noopener">Read the full letter</a></p></div></div>
<div class="award">{doc('ibec-2015-presentation.jpg',874,1100,'Certificate of presentation from the 14th International Business and Economy Conference 2015')}<div><h3>Certificate of presentation, 14th International Business &amp; Economy Conference (IBEC 2015)</h3><p>For presenting &ldquo;The Integration of Information Technology in Higher Education: A Study of Faculty&rsquo;s Attitude towards IT Adoption in the Teaching Process&rdquo; at Assumption University, Bangkok, on 5&ndash;8 January 2015.</p></div></div>
</div>
</div></section>

<section class="sec"><div class="wrap split">
<header><h2>Teaching qualification</h2></header>
<div class="award" style="border:0;padding:0">{doc('nz-certificate-adult-tertiary-teaching.jpg',1024,634,'New Zealand Certificate in Adult and Tertiary Teaching (Level 5) awarded by the Open Polytechnic of New Zealand')}<div><h3>New Zealand Certificate in Adult and Tertiary Teaching (Level 5)</h3><p>Awarded by the Open Polytechnic of New Zealand (Kuratini Tuwhera), 18 November 2019. A New Zealand Qualifications Framework qualification (NZQF 2993) in adult and tertiary teaching practice.</p></div></div>
</div></section>

<section class="sec mist"><div class="wrap">
<h2 style="margin-bottom:10px">Professional certificates</h2>
<p class="muted" style="margin-bottom:32px">Online courses authorised by Meta and IBM and offered through Coursera. Each can be checked on Coursera.</p>
<div class="certs">{cc}</div>
</div></section>
'''+closing('Looking for a speaker or reviewer?','I welcome invitations for guest lectures, keynotes and journal reviewing.','contact.html#industry')
page('awards.html','Awards &amp; Certifications | Dr Surej P John','Awards, recognition and certifications of Dr Surej P John: Wiley reviewer recognition, international guest lecture appreciation, the New Zealand Certificate in Adult and Tertiary Teaching, and professional certificates from Meta and IBM.',awards)

# ---------- CONTACT ----------
contact=phead('Get in touch','Whether you are a prospective student, a researcher or an organisation, send me a message and tell me a little about what you have in mind.')+f'''
<section class="sec"><div class="wrap contact">
<form class="form" id="cform" novalidate>
<div class="two">
<div class="f"><label for="name">Your name</label><input id="name" name="name" autocomplete="name" required><div class="err">Enter your name.</div></div>
<div class="f"><label for="email">Email address</label><input id="email" name="email" type="email" autocomplete="email" required><div class="err">Enter a valid email address, such as name@example.com.</div></div>
</div>
<div class="two">
<div class="f"><label for="who">I am a</label><select id="who" name="who"><option>Prospective student</option><option>Current student</option><option>Research collaborator</option><option>Industry partner</option><option>Event organiser</option><option>Other</option></select></div>
<div class="f"><label for="org">Organisation (optional)</label><input id="org" name="org" autocomplete="organization"></div>
</div>
<div class="f"><label for="subject">Subject</label><input id="subject" name="subject"></div>
<div class="f"><label for="message">Message</label><textarea id="message" name="message" required></textarea><div class="err">Write a short message.</div></div>
<div><button class="btn btn-solid" type="submit">Prepare my email</button></div>
<div class="done" id="done" role="status"><b>Your email is ready.</b> Open it in your email app to send it, or copy it into any email.
<pre id="msgout"></pre>
<div class="actions"><a class="btn btn-solid" id="mailbtn" href="mailto:spjohn@eit.ac.nz">Open in email app</a><button class="btn btn-ghost" type="button" id="copybtn">Copy message</button></div></div>
</form>
<aside class="card-navy">
<img class="sketch" src="img/portrait-sketch.jpg" width="721" height="900" alt="Pencil sketch portrait of Dr Surej P John">
<h2>Contact details</h2>
<p>School of Business, Eastern Institute of Technology (EIT), New Zealand</p>
<dl>
<dt>Email</dt><dd><a href="mailto:spjohn@eit.ac.nz">spjohn@eit.ac.nz</a></dd>
<dt>Phone</dt><dd><a href="tel:+6468301370">06 830 1370</a></dd>
<dt>LinkedIn</dt><dd><a href="{LINKEDIN}" target="_blank" rel="me noopener">linkedin.com/in/surej-p-john</a></dd>
<dt>Staff profile</dt><dd><a href="{EIT}" target="_blank" rel="noopener">eit.ac.nz/staff/dr-surej-p-john</a></dd>
</dl>
</aside>
</div></section>
'''
page('contact.html','Contact | Dr Surej P John','Contact Dr Surej P John, Senior Lecturer in Marketing at EIT, New Zealand, about study, research collaboration, consulting or speaking.',contact)
print('built', V)
