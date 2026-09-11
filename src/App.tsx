import {
  BadgeCheck,
  Mail,
  MessageCircle,
  Cloud,
  Cog,
  Headphones,
  Lock,
  Menu,
  Network,
  Server,
  ShieldCheck,
  X,
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

const WHATSAPP_URL = 'https://wa.me/541155795847';

const services = [
  { icon: Headphones, title: 'Soporte técnico', text: 'Asistencia remota y presencial para resolver problemas y mantener los equipos funcionando.' },
  { icon: Network, title: 'Conectividad', text: 'Implementación de conexiones remotas seguras y VPN para trabajo Home-Office.' },
  { icon: Cog, title: 'Mantenimiento', text: 'Mantenimiento y asistencia para equipos, sistemas y usuarios.' },
  { icon: Server, title: 'Servidores', text: 'Implementación, administración y mantenimiento de servidores físicos y virtuales.' },
  { icon: Network, title: 'Redes', text: 'Diseño, configuración y mantenimiento de redes para tu oficina.' },
  { icon: ShieldCheck, title: 'Backups', text: 'Soluciones de backup y recuperación para cuidar la información importante.' },
  { icon: Lock, title: 'Seguridad informática', text: 'Firewalls, VPN, accesos remotos y protección de infraestructura.' },
  { icon: Cloud, title: 'Plataformas y Cloud', text: 'Windows, MacOS, Microsoft 365, Google Workspace, Adobe y servicios Cloud.', extra: [WindowsIcon, AppleIcon] },
];

const benefits = ['Atención personalizada', 'Soporte remoto y presencial', 'Respuesta rápida', 'Soluciones adaptadas a cada empresa', 'Administración integral'];

const monitoringItems = [
  { label: 'Routers monitoreados', status: 'online', value: 42 },
  { label: 'Conexiones VPN activas', status: 'online', value: 68 },
  { label: 'Backups en la nube', status: 'online', value: 95 },
  { label: 'Monitoreo de actualizaciones', status: 'online', value: 33 },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className={`brand ${light ? 'brand-light' : ''}`} aria-label="Seek Sistemas">
      <img className="brand-mark-image" src={light ? "/Logo_Oscuro.png" : "/Logo_Claro.png"} alt="" />
      <div className="brand-copy">
        <div className="brand-name"><strong>SEEK</strong> <span>SISTEMAS</span></div>
        <div className="brand-rule" />
        <div className="brand-subtitle">Servicios IT</div>
      </div>
    </div>
  );
}

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function WindowsIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round" className={className} aria-label="Windows">
      <rect x="3" y="3" width="8" height="8" />
      <rect x="13" y="3" width="8" height="8" />
      <rect x="3" y="13" width="8" height="8" />
      <rect x="13" y="13" width="8" height="8" />
    </svg>
  );
}

function AppleIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="macOS">
      <path d="M16.365 1.43c0 1.14-.415 2.043-1.246 2.708-.831.665-1.782 1.02-2.85.945-.035-1.099.42-2.02 1.257-2.685C14.363 1.674 15.32 1.35 16.365 1.43zM20.6 17.14c-.548 1.26-1.212 2.5-2.057 3.71-.845 1.21-1.88 2.15-3.098 2.15-1.11 0-1.6-.66-2.92-.66-1.31 0-1.86.63-2.9.68-1.16.05-2.28-1.02-3.14-2.24C4.62 18.83 3.2 14.5 4.85 11.4c.9-1.72 2.5-2.8 4.27-2.83 1.16-.02 2.26.78 2.92.78.66 0 2.03-.96 3.42-.82.58.02 2.22.23 3.28 1.74-.09.05-1.95 1.14-1.93 3.4.02 2.71 2.38 3.61 2.4 3.62-.02.06-.38 1.31-1.26 2.59z" />
    </svg>
  );
}

function SignalField({ count = 8, variant = 'dark' }: { count?: number; variant?: 'dark' | 'light' }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        top: Math.random() * 92,
        left: Math.random() * 80,
        dx: 200 + Math.random() * 280,
        dy: (Math.random() - 0.5) * 240,
        duration: 6 + Math.random() * 6,
        delay: Math.random() * 7,
      })),
    [count]
  );

  return (
    <div className={`signal-field signal-field-${variant}`} aria-hidden="true">
      {dots.map((d, i) => (
        <span
          key={i}
          className="signal-dot"
          style={{ top: `${d.top}%`, left: `${d.left}%`, '--dx': `${d.dx}px`, '--dy': `${d.dy}px`, animationDuration: `${d.duration}s`, animationDelay: `${d.delay}s` } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

function TechVisual() {
  const [items, setItems] = useState(monitoringItems);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) =>
        prev.map((item) => {
          const delta = Math.round((Math.random() - 0.5) * 18);
          const value = Math.max(14, Math.min(97, item.value + delta));
          return { ...item, value };
        })
      );
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tech-visual">
      <div className="tech-window">
        <div className="tech-titlebar">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
          <span className="tech-title">seek-monitor · sistema</span>
        </div>
        <div className="tech-body">
          <div className="tech-status-row">
            <span className="tech-status-label">ESTADO DEL SISTEMA</span>
            <span className="tech-status-badge">OPERATIVO</span>
          </div>
          {items.map((item) => (
            <div className="tech-monitor-row" key={item.label}>
              <span className="tech-monitor-dot" />
              <span className="tech-monitor-name">{item.label}</span>
              <div className="tech-bar-track">
                <div className="tech-bar-fill" style={{ width: `${item.value}%` }} />
              </div>
              <span className="tech-monitor-value">{item.value}%</span>
            </div>
          ))}
          <div className="tech-footer-line">
            <span className="tech-pulse" />
            <span>Monitoreo activo · Respuesta en tiempo real</span>
          </div>
        </div>
      </div>
      <div className="tech-badge tech-badge-1"><Server size={18} strokeWidth={1.8} /> <span>Servidores</span></div>
      <div className="tech-badge tech-badge-2"><Network size={18} strokeWidth={1.8} /> <span>Redes</span></div>
      <div className="tech-badge tech-badge-3"><ShieldCheck size={18} strokeWidth={1.8} /> <span>Seguridad</span></div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const closeMenu = () => setMenuOpen(false);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="logo-link" href="#inicio" onClick={closeMenu}><Logo /></a>
          <button className="menu-toggle" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
            <a href="#servicios" onClick={closeMenu}>Servicios</a>
            <a href="#por-que" onClick={closeMenu}>Por qué Seek</a>
            <a href="#contacto" className="nav-cta nav-cta-wa" onClick={closeMenu}>
              <WhatsAppIcon size={15} /> Hablemos
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio" ref={heroRef} onMouseMove={handleHeroMouseMove}>
          <div className="hero-grid" />
          <div className="hero-glow" />
          <SignalField count={16} variant="dark" />
          <div className="container hero-content">
            <div className="hero-text">
              <p className="eyebrow"><span className="eyebrow-line" /> SERVICIOS IT PARA PYMES</p>
              <h1>La tecnología de tu empresa, <em>en buenas manos.</em></h1>
              <p className="hero-lead">Soporte, mantenimiento y soluciones IT para que tu infraestructura simplemente funcione.</p>
              <div className="hero-actions">
                <a className="text-link" href="#servicios">Ver servicios <span>↓</span></a>
              </div>
            </div>
            <div className="hero-aside"><TechVisual /></div>
          </div>
          <div className="container hero-footer"><span>01 — UNA FORMA SIMPLE DE TRABAJAR</span><span className="scroll-note">SCROLL PARA CONOCER MÁS <span className="scroll-arrow">↓</span></span></div>
        </section>

        <section className="intro-section">
          <SignalField count={7} variant="light" />
          <div className="container intro-grid">
            <div className="reveal"><p className="eyebrow dark"><span className="eyebrow-line" /> QUÉ HAGO</p><h2><span className="accent-text">Soluciones claras para</span> problemas reales.</h2></div>
            <div className="intro-copy reveal" style={{ transitionDelay: '120ms' }}><p className="intro-lead">TECNOLOGÍA QUE FUNCIONA - SOPORTE QUE ACOMPAÑA.</p><p>Trabajo con empresas y oficinas para resolver problemas, mantener sus sistemas funcionando y hacer que la tecnología sea una herramienta, no un problema.</p></div>
          </div>
        </section>

        <section className="services-section" id="servicios">
          <SignalField count={7} variant="light" />
          <div className="container">
            <div className="section-heading reveal"><div><p className="eyebrow dark"><span className="eyebrow-line" /> SERVICIOS</p><h2>Lo que puedo resolver<br /><span>por tu empresa.</span></h2></div><p className="heading-note"><span className="heading-note-lead">EXPERIENCIA TÉCNICA - COMUNICACIÓN CERCANA</span><br />Soluciones que se adaptan a tu forma de trabajar.</p></div>
            <div className="services-grid">{services.map(({ icon: Icon, title, text, extra }, index) => <article className="service-card reveal" style={{ transitionDelay: `${(index % 4) * 80}ms` }} key={title}><span className="service-number">0{index + 1}</span><Icon className="service-icon" size={30} strokeWidth={1.5} /><h3>{title}</h3><p>{text}</p>{extra && <div className="platform-icons">{extra.map((ExtraIcon, i) => <ExtraIcon key={i} size={18} />)}</div>}</article>)}</div>
          </div>
        </section>

        <section className="why-section" id="por-que">
          <SignalField count={9} variant="dark" />
          <div className="container why-grid">
            <div className="why-statement reveal"><p className="eyebrow light"><span className="eyebrow-line" /> POR QUÉ SEEK</p><h2>Un único punto de contacto para tu <em>infraestructura IT.</em></h2></div>
            <div className="why-detail reveal" style={{ transitionDelay: '120ms' }}><p>Cuando llamás a Seek Sistemas hablás directo con quien va a resolver el problema. Al trabajar de forma independiente y directa, conocés exactamente quién gestiona la infraestructura de tu empresa. Sin mesas de ayuda que derivan tickets impersonales, sin demoras de call center y sin pagar estructuras corporativas innecesarias.</p><ul>{benefits.map((benefit) => <li key={benefit}><BadgeCheck size={20} />{benefit}</li>)}</ul></div>
          </div>
        </section>

        <section className="working-section">
          <SignalField count={6} variant="light" />
          <div className="container working-grid"><div className="reveal"><p className="eyebrow dark"><span className="eyebrow-line" /> CÓMO TRABAJAMOS</p><h2>Un servicio a tu medida.</h2></div><div className="working-options reveal" style={{ transitionDelay: '120ms' }}><div><span>01</span><h3>Abonos mensuales</h3><p>Soporte continuo para tu empresa.</p></div><div><span>02</span><h3>Trabajos a convenir</h3><p>Soluciones puntuales, cuando las necesitás.</p></div></div></div>
        </section>

        <section className="contact-section" id="contacto">
          <SignalField count={9} variant="dark" />
          <div className="container contact-inner">
            <div className="reveal"><p className="eyebrow light"><span className="eyebrow-line" /> CONTACTO</p><h2>¿Hablamos de lo que<br /><em>necesitás?</em></h2></div>
            <div className="contact-action reveal" style={{ transitionDelay: '120ms' }}>
              <p>Contame qué necesitás resolver y vemos juntos la mejor forma de encararlo.</p>
              <div className="contact-links">
                <a className="contact-link-item" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <span className="contact-link-icon"><MessageCircle size={22} /></span>
                  <span className="contact-link-text"><span className="contact-link-label">WhatsApp</span><span className="contact-link-value">11 5579 5847</span></span>
                </a>
                <a className="contact-link-item" href="mailto:info@seeksistemas.com">
                  <span className="contact-link-icon"><Mail size={22} /></span>
                  <span className="contact-link-text"><span className="contact-link-label">Email</span><span className="contact-link-value">info@seeksistemas.com</span></span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <SignalField count={4} variant="dark" />
        <div className="container footer-inner">
          <Logo light />
          <div className="footer-right">
            <span>Servicios IT para empresas chicas</span>
            <a href="#inicio">Volver arriba ↑</a>
          </div>
        </div>
      </footer>

      <a className="wa-float" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <WhatsAppIcon size={28} />
        <span className="wa-float-pulse" />
      </a>
    </div>
  );
}

export default App;
