'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  ChevronRight,
  Globe2,
  Menu,
  MessageCircle,
  MousePointer2,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  X,
  Zap,
} from 'lucide-react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KanpriTech%20Text-UIE9oaIAckO6UDX6IabFtdzu2CT2Pr.png'
const whatsappUrl = 'https://wa.me/917751973970?text=Hi%20KanpriTech%2C%20I%27m%20interested%20in%20your%20Digital%20Marketing%20services%20and%20would%20like%20to%20discuss%20my%20requirements.'

const packages = [
  { name: 'Growth Starter', price: '$199', keywords: '15', description: 'A focused foundation for building search visibility.', pillars: ['SEO', 'Local visibility', 'SMO'], features: ['Full website SEO audit', '15 focus keywords', 'Keyword research', 'On-page SEO', 'Local visibility optimization', 'Social media optimization', 'Monthly performance reporting'] },
  { name: 'Growth Accelerator', price: '$399', keywords: '40', description: 'More coverage and momentum for growing businesses.', pillars: ['SEO', 'Local visibility', 'SMO'], features: ['Full website SEO audit', '40 focus keywords', 'Technical SEO', 'Keyword research', 'Competitor analysis', 'Local visibility optimization', 'Social media optimization', 'Monthly performance reporting'] },
  { name: 'Growth Pro', price: '$599', keywords: '60', description: 'A balanced growth engine across modern discovery.', pillars: ['SEO', 'Local visibility', 'SMO', 'GEO', 'AEO'], features: ['Full website SEO audit', '60 focus keywords', 'Technical SEO', 'Competitor analysis', 'Generative Engine Optimization', 'Answer Engine Optimization', 'Social media optimization', 'Strategic consultation', 'Monthly performance reporting'], recommended: true },
  { name: 'Growth Elite', price: '$999', keywords: '100', description: 'Deeper optimization for ambitious growth teams.', pillars: ['SEO', 'Local visibility', 'SMO', 'GEO', 'AEO', 'Performance marketing'], features: ['Full website SEO audit', '100 focus keywords', 'Technical SEO', 'Competitor analysis', 'Generative Engine Optimization', 'Answer Engine Optimization', 'Performance marketing support', 'Advanced local visibility', 'Strategic consultation', 'Monthly performance reporting'] },
  { name: 'Growth Enterprise', price: '$1,499', keywords: '150', description: 'Comprehensive visibility for complex organizations.', pillars: ['SEO', 'Local visibility', 'SMO', 'GEO', 'AEO', 'Performance marketing'], features: ['Full website SEO audit', '150 focus keywords', 'Technical SEO', 'Competitor analysis', 'Generative Engine Optimization', 'Answer Engine Optimization', 'Performance marketing support', 'Advanced local visibility', 'Strategic consultation', 'Monthly performance reporting'] },
]

const services = [
  { icon: Search, short: 'SEO', title: 'Search Engine Optimization', text: 'Build a durable foundation for discovery through technical, on-page and off-page optimization.', tags: ['Website audit', 'Keyword research', 'On-page SEO', 'Technical SEO', 'Competitor analysis'] },
  { icon: Target, short: 'LOCAL', title: 'Local Visibility Optimization', text: 'Make it easier for nearby customers to find and choose your business across local search.', tags: ['Local SEO', 'Maps visibility', 'Business profiles', 'Location pages', 'Review guidance'] },
  { icon: Globe2, short: 'SMO', title: 'Social Media Optimization', text: 'Create a consistent, discoverable social presence that supports your wider growth strategy.', tags: ['Profile optimization', 'Content direction', 'Audience research', 'Social signals', 'Channel planning'] },
  { icon: Sparkles, short: 'GEO', title: 'Generative Engine Optimization', text: 'Prepare your brand for the new ways people discover answers through generative search.', tags: ['AI discovery', 'Entity signals', 'Content structure', 'Brand visibility', 'Answer readiness'] },
  { icon: Zap, short: 'AEO', title: 'Answer Engine Optimization', text: 'Shape useful, structured content for answer engines and high-intent search journeys.', tags: ['FAQ strategy', 'Structured content', 'Intent mapping', 'Question research', 'Content clarity'] },
  { icon: BarChart3, short: 'PPC', title: 'Performance Marketing', text: 'Connect paid search and social campaigns to clear business objectives and measurable learning.', tags: ['Google Ads', 'Meta Ads', 'Campaign planning', 'Audience targeting', 'Performance review'] },
]

const comparisonGroups = [
  { name: 'SEO fundamentals', rows: [['Full website SEO audit', '✓', '✓', '✓', '✓', '✓'], ['Focus keywords', '15', '40', '60', '100', '150'], ['Keyword research', '✓', '✓', '✓', '✓', '✓'], ['On-page SEO', '✓', '✓', '✓', '✓', '✓'], ['Technical SEO', '—', '✓', '✓', '✓', '✓']] },
  { name: 'Research & competitor intelligence', rows: [['Competitor analysis', '1 competitor', '3 competitors', '5 competitors', '5 competitors', '5 competitors'], ['Search intent and opportunity mapping', '✓', '✓', '✓', '✓', '✓'], ['Monthly performance reporting', '✓', '✓', '✓', '✓', '✓'], ['Strategic consultation', '—', '✓', '✓', '✓', '✓']] },
  { name: 'Off-page & authority building', rows: [['Authority building guidance', '—', '—', '✓', '✓', '✓'], ['Off-page SEO direction', '—', '✓', '✓', '✓', '✓'], ['Content guidance', '—', '✓', '✓', '✓', '✓']] },
  { name: 'Local visibility & maps', rows: [['Local visibility optimization', '✓', '✓', '✓', '✓', '✓'], ['Business profile optimization', '✓', '✓', '✓', '✓', '✓'], ['Maps visibility guidance', '✓', '✓', '✓', '✓', '✓'], ['Advanced local SEO', '—', '—', '—', '✓', '✓']] },
  { name: 'Social media optimization', rows: [['Social profile optimization', '✓', '✓', '✓', '✓', '✓'], ['Content and channel guidance', '✓', '✓', '✓', '✓', '✓'], ['Audience and social signal direction', '—', '✓', '✓', '✓', '✓']] },
  { name: 'Generative Engine Optimization (GEO)', rows: [['GEO strategy', '—', '—', '✓', '✓', '✓'], ['AI discovery readiness', '—', '—', '✓', '✓', '✓'], ['Entity and brand visibility signals', '—', '—', '✓', '✓', '✓']] },
  { name: 'Answer Engine Optimization (AEO)', rows: [['AEO optimization', '—', '—', '✓', '✓', '✓'], ['FAQ and question-led content direction', '—', '—', '✓', '✓', '✓'], ['Structured answer readiness', '—', '—', '✓', '✓', '✓']] },
  { name: 'Performance marketing & ads', rows: [['Performance marketing support', '—', '—', '—', '✓', '✓'], ['Google Ads and Meta Ads direction', '—', '—', '—', '✓', '✓'], ['Campaign planning and performance review', '—', '—', '—', '✓', '✓']] },
]

const faqs = [
  ['What is included in KanpriTech’s digital marketing packages?', 'Each plan combines a different level of SEO, local visibility, social optimization and modern discovery services. The comparison table above shows the package-wise inclusions and quantities.'],
  ['Which digital marketing package is right for my business?', 'It depends on your current visibility, market and the breadth of support you need. Growth Pro is a balanced starting point for businesses wanting coverage across traditional and modern discovery channels.'],
  ['What is the difference between SEO, GEO and AEO?', 'SEO improves visibility in traditional search. GEO focuses on how brands are discovered in generative experiences. AEO structures useful content for answer engines and question-led search.'],
  ['How long does SEO take to show results?', 'SEO is an ongoing process. The timeline depends on your website, market, competition and the work included in your selected plan. We use reporting to track progress and guide the next priorities.'],
  ['Does KanpriTech manage social media and paid campaigns?', 'Social Media Optimization and performance marketing support are available in selected packages. Advertising budgets are separate from the monthly service fee.'],
  ['Can I upgrade my package later?', 'Yes. We can review your needs as your business evolves and recommend a package with the right level of coverage.'],
]

function Logo({ className = '' }: { className?: string }) {
  return <img src={logoUrl} alt="KanpriTech" className={className} />
}

function SectionIntro({ eyebrow, title, text, align = 'center' }: { eyebrow: string; title: string; text: string; align?: 'center' | 'left' }) {
  return <div className={`section-intro ${align === 'left' ? 'text-left' : 'text-center'}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p className="section-copy">{text}</p></div>
}

function DashboardVisual() {
  return <div className="dashboard-wrap" aria-label="Conceptual marketing intelligence dashboard">
    <div className="dashboard-glow" />
    <div className="dashboard-card">
      <div className="dashboard-top"><div><span className="mini-label">MARKETING INTELLIGENCE</span><h3>Visibility overview</h3></div><div className="live-dot"><i /> Live view</div></div>
      <div className="dashboard-tabs"><span className="active">Search</span><span>AI discovery</span><span>Social</span></div>
      <div className="chart-area"><div className="chart-labels"><span>Discovery</span><span>Visibility</span><span>Traffic</span><span>Opportunity</span></div><div className="bars">{[38, 56, 47, 72, 64, 86, 77, 96].map((height, i) => <div className="bar" key={i} style={{ height: `${height}%`, animationDelay: `${i * 80}ms` }} />)}</div><svg className="chart-line" viewBox="0 0 480 130" preserveAspectRatio="none" aria-hidden="true"><path d="M0 112 C55 108, 70 90, 112 96 S170 80, 205 82 S258 55, 292 64 S350 31, 390 42 S438 18, 480 9" /></svg></div>
      <div className="dashboard-stats"><div><span>SEO visibility</span><strong>Foundation</strong></div><div><span>AI visibility</span><strong>Emerging</strong></div><div><span>Lead opportunities</span><strong>In motion</strong></div></div>
    </div>
    <div className="floating-chip chip-one"><TrendingUp /> <span><b>Growth</b><small>Where momentum leads</small></span></div><div className="floating-chip chip-two"><Globe2 /> <span><b>Discovery</b><small>Where demand starts</small></span></div>
  </div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState('Not Sure / Need Recommendation')
  const [openFaq, setOpenFaq] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const choosePlan = (name: string, price: string) => { setSelectedPackage(`${name} – ${price}/month`); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }
  const scrollTo = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }

  return <main>
    <header className="site-header"><div className="nav-shell"><a href="#top" aria-label="KanpriTech home"><Logo className="logo" /></a><nav className={menuOpen ? 'mobile-open' : ''} aria-label="Main navigation">{[['Services', 'services'], ['Pricing', 'pricing'], ['Compare Plans', 'compare'], ['FAQ', 'faq'], ['Contact', 'contact']].map(([label, id]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}<button className="nav-cta" onClick={() => scrollTo('contact')}>Get free consultation <ArrowRight /></button></nav><button className="menu-btn" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div></header>

    <section className="hero" id="top"><div className="hero-grid"><div className="hero-copy"><p className="eyebrow"><span /> Digital marketing by KanpriTech</p><h1>Turn search visibility into <em>business growth.</em></h1><p className="hero-text">SEO, AI Search, Social Media and Performance Marketing strategies designed to help your business get discovered, attract qualified audiences and generate more opportunities.</p><div className="hero-actions"><button className="button button-primary" onClick={() => scrollTo('contact')}>Get free consultation <ArrowRight /></button><button className="button button-ghost" onClick={() => scrollTo('pricing')}>View plans & pricing <ChevronRight /></button></div><a className="whatsapp-link" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp us</a></div><DashboardVisual /></div><div className="hero-orb orb-one" /><div className="hero-orb orb-two" /></section>

    <section className="section services-section" id="services"><div className="container"><SectionIntro eyebrow="One strategy, every discovery channel" title="Digital marketing built for modern discovery" text="From traditional search to AI-powered discovery, KanpriTech brings multiple digital growth channels together under one strategy." /><div className="service-grid">{services.map(({ icon: Icon, short, title, text, tags }) => <article className="service-card" key={short}><div className="service-icon"><Icon /></div><span className="service-short">{short}</span><h3>{title}</h3><p>{text}</p><div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></div></section>

    <section className="section pricing-section" id="pricing"><div className="container"><SectionIntro eyebrow="Plans that scale with your ambition" title="Choose the right growth plan" text="Flexible digital marketing packages designed for businesses at different stages of growth." /><div className="pricing-grid">{packages.map(plan => <article className={`price-card ${plan.recommended ? 'featured' : ''}`} key={plan.name}>{plan.recommended && <span className="recommend-badge">Recommended</span>}<p className="plan-name">{plan.name}</p><div className="price"><strong>{plan.price}</strong><span>/ month</span></div><p className="keyword-count"><strong>{plan.keywords}</strong> focus keywords</p><p className="plan-description">{plan.description}</p><div className="price-divider" /><p className="included-label">Core pillars included</p><div className="pillar-list">{plan.pillars.map(pillar => <span key={pillar}>{pillar}</span>)}</div><p className="included-label">Package highlights</p><ul>{plan.features.map(feature => <li key={feature}><Check /> {feature}</li>)}</ul><button className={`plan-button ${plan.recommended ? 'selected' : ''}`} onClick={() => choosePlan(plan.name, plan.price)}>Choose this plan <ArrowRight /></button></article>)}</div></div></section>

    <section className="section compare-section" id="compare"><div className="container"><SectionIntro eyebrow="Clarity before commitment" title="Compare all features" text="A detailed breakdown of deliverables across all five growth plans." /><div className="table-shell"><div className="table-scroll"><table><thead><tr><th>Feature & capability</th>{packages.map(plan => <th key={plan.name} className={plan.recommended ? 'recommended-col' : ''}><span>{plan.name}</span><strong>{plan.price}<small>/mo</small></strong><small>{plan.keywords} keywords</small><button onClick={() => choosePlan(plan.name, plan.price)}>Select <ArrowRight /></button></th>)}</tr></thead>{comparisonGroups.map(group => <tbody key={group.name}><tr className="group-row"><th colSpan={6}>{group.name}</th></tr>{group.rows.map(row => <tr key={row[0]}>{row.map((cell, i) => i === 0 ? <th key={i}>{cell}</th> : <td key={i} className={cell === '—' ? 'dash' : cell === '✓' ? 'check' : ''}>{cell}</td>)}</tr>)}</tbody>)}</table></div></div></div></section>

    <section className="cta-strip"><div><p className="eyebrow">Need a second opinion?</p><h2>Not sure which plan is right for you?</h2><p>Tell us about your business and we&apos;ll help identify the most suitable digital marketing package.</p></div><div className="cta-actions"><button className="button button-light" onClick={() => scrollTo('contact')}>Get free consultation <ArrowRight /></button><a className="button button-outline-light" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp us</a></div></section>

    <section className="section faq-section" id="faq"><div className="container faq-layout"><SectionIntro eyebrow="Questions, answered" title="Frequently asked questions" text="Everything you need to know before choosing your digital marketing plan." align="left" /><div className="faq-list">{faqs.map(([question, answer], i) => <div className={`faq-item ${openFaq === i ? 'open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{question}</span><ChevronDown /></button>{openFaq === i && <p>{answer}</p>}</div>)}</div></div></section>

    <section className="section contact-section" id="contact"><div className="container contact-grid"><div className="contact-copy"><p className="eyebrow">Let&apos;s start a conversation</p><h2>Let&apos;s talk about your growth.</h2><p>Tell us about your business and what you want to achieve. Our team will help you identify the right digital marketing approach.</p><div className="contact-details"><a href="mailto:contact@kanpritech.com"><span>Email</span>contact@kanpritech.com</a><a href="tel:+917751973970"><span>Phone / WhatsApp</span>+91 7751973970</a><a href={whatsappUrl} target="_blank" rel="noreferrer"><span>Office</span>506, Saheed Nagar Rd, opp. SBI Branch, Bhubaneswar, Odisha 751007</a></div></div><form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}><div className="form-row"><label>Full name *<input required name="name" placeholder="Your name" /></label><label>Business / company<input name="company" placeholder="Company name" /></label></div><div className="form-row"><label>Business email *<input required type="email" name="email" placeholder="you@company.com" /></label><label>Phone / WhatsApp *<input required pattern="[+0-9 ()-]{7,}" name="phone" placeholder="+91 00000 00000" /></label></div><div className="form-row"><label>Interested in *<select required defaultValue=""><option value="" disabled>Select a service</option><option>Complete Digital Marketing</option><option>SEO</option><option>Local SEO</option><option>Social Media Marketing</option><option>GEO</option><option>AEO</option><option>Performance Marketing</option><option>Not Sure / Need Consultation</option></select></label><label>Preferred package<select value={selectedPackage} onChange={(e) => setSelectedPackage(e.target.value)}><option>Not Sure / Need Recommendation</option>{packages.map(p => <option key={p.name}>{p.name} – {p.price}/month</option>)}</select></label></div><label>Message / requirement *<textarea required name="message" placeholder="Tell us a little about your goals..." rows={4} /></label><label className="consent"><input required type="checkbox" /> I agree to be contacted by KanpriTech regarding my enquiry.</label>{submitted ? <div className="success-message" role="status"><Check /> Thanks — your enquiry is ready to be reviewed.</div> : <button className="button button-primary submit-button" type="submit">Request free consultation <ArrowRight /></button>}</form></div></section>

    <footer className="footer"><div className="container footer-grid"><div><Logo className="footer-logo" /><p>Digital marketing solutions built for modern search, AI discovery and sustainable business growth.</p><div className="socials"><a href="#top" aria-label="LinkedIn"><Globe2 /></a><a href="#top" aria-label="Instagram"><MessageCircle /></a></div></div><div><h3>Explore</h3><button onClick={() => scrollTo('services')}>Services</button><button onClick={() => scrollTo('pricing')}>Pricing</button><button onClick={() => scrollTo('compare')}>Compare plans</button><button onClick={() => scrollTo('faq')}>FAQ</button></div><div><h3>Contact</h3><a href="mailto:contact@kanpritech.com">contact@kanpritech.com</a><a href="tel:+917751973970">+91 7751973970</a><p>506, Saheed Nagar Rd,<br />Bhubaneswar, Odisha 751007</p></div></div><div className="container footer-bottom"><span>© 2026 KanpriTech. All rights reserved.</span><span>Built for modern discovery.</span></div></footer>
    <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with KanpriTech on WhatsApp"><MessageCircle /><span>Chat with us</span></a><div className="mobile-cta"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a><button onClick={() => scrollTo('contact')}>Free consultation <ArrowRight /></button></div>
  </main>
}
