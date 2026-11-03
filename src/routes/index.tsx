import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode, type ImgHTMLAttributes } from "react";
import { ArrowUpRight, ArrowRight, MapPin, Phone, Instagram, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero-desktop.png";
import heroMobile from "@/assets/hero-mobile.png";
import heroMobileWebp from "@/assets/hero-mobile.webp";
import pink from "@/assets/arranjo-magnolias.png";
import gold from "@/assets/vasos-dourados.png";
import plants from "@/assets/plantas-permanentes.png";
import wall from "@/assets/parede-verde.png";
import tree from "@/assets/natal-arvore.png";
import wreath from "@/assets/natal-guirlanda.png";
import facade from "@/assets/fachada.png";

import heroWebp from "@/assets/hero-desktop.webp";
import pinkWebp from "@/assets/arranjo-magnolias.webp";
import goldWebp from "@/assets/vasos-dourados.webp";
import plantsWebp from "@/assets/plantas-permanentes.webp";
import wallWebp from "@/assets/parede-verde.webp";
import treeWebp from "@/assets/natal-arvore.webp";
import wreathWebp from "@/assets/natal-guirlanda.webp";
import facadeWebp from "@/assets/fachada.webp";
const optimizedImages = new Map([
  [hero, heroWebp],
  [pink, pinkWebp],
  [gold, goldWebp],
  [plants, plantsWebp],
  [wall, wallWebp],
  [tree, treeWebp],
  [wreath, wreathWebp],
  [facade, facadeWebp],
]);
function Photo(props: ImgHTMLAttributes<HTMLImageElement>) {
  const optimized = optimizedImages.get(props.src ?? "");
  return (
    <picture style={{ display: "contents" }}>
      {optimized && <source srcSet={optimized} type="image/webp" />}
      <img {...props} />
    </picture>
  );
}

const wa = (message: string) => `https://wa.me/5547991627940?text=${encodeURIComponent(message)}`;
const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Demais+Flores+e+Decor+Av.+Marginal+Leste+2120+Balneario+Camboriu";
const HELLO = "Olá, Demais Flores e Decor! Gostaria de conhecer as opções de arranjos e decoração.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Demais Flores & Decor | Beleza que permanece em Balneário Camboriú" },
      {
        name: "description",
        content:
          "Arranjos permanentes, plantas, vasos, paredes verdes e decoração de Natal em Balneário Camboriú. Conheça a Demais Flores & Decor.",
      },
      { property: "og:title", content: "Demais Flores & Decor — A diferença está nos detalhes" },
      {
        property: "og:description",
        content:
          "Flores permanentes e decoração para dar personalidade ao seu espaço. Visite nossa loja em Balneário Camboriú.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: hero },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        type: "image/webp",
        href: heroWebp,
        media: "(min-width: 601px)",
      },
      {
        rel: "preload",
        as: "image",
        type: "image/webp",
        href: heroMobileWebp,
        media: "(max-width: 600px)",
      },
    ],
  }),
  component: Index,
});

function WhatsApp({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.15-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.13l-.35-.21-2.75.7.73-2.67-.23-.37A8 8 0 1 1 12 20Zm4.4-5.6c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12s-.62.78-.76.94c-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.59 4.1 3.63.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}
function ContactButton({
  children = "Conversar com a equipe",
  message = HELLO,
  light = false,
}: {
  children?: ReactNode;
  message?: string;
  light?: boolean;
}) {
  return (
    <a
      className={`contact-button ${light ? "button-light" : ""}`}
      href={wa(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsApp />
      {children}
      <ArrowUpRight size={18} />
    </a>
  );
}
const collection = [
  {
    image: pink,
    category: "Arranjos",
    name: "Arranjos permanentes",
    note: "Magnólias rosadas e ramos em composições permanentes.",
  },
  {
    image: plants,
    category: "Plantas",
    name: "Plantas e vasos",
    note: "Plantas permanentes e vasos para levar vida e personalidade aos ambientes.",
  },
  {
    image: gold,
    category: "Decor",
    name: "Objetos de decoração",
    note: "Vasos, lanternas e peças para completar a decoração.",
  },
];
const reviews = [
  {
    name: "Brenda",
    text: "Ela me acompanhou com muita paciência, cuidado e dedicação durante a escolha do meu arranjo, sempre muito atenciosa e gentil.",
  },
  { name: "Adriana Aboud", text: "Excelente atendimento! Produtos bonitos!" },
  {
    name: "Sonia Sedrez",
    text: "Loja mto bonita e elegante. Uma ótima variedade em itens para decoração. Aqui vc encontra vasos de todos os tamanhos e gostos. Flores lindíssimas.",
  },
];
function Choices({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend>{label}</legend>
      <div className="chips">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={value === option}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
function ProjectBuilder() {
  const [interest, setInterest] = useState("Arranjo permanente");
  const [space, setSpace] = useState("Minha casa");
  const [palette, setPalette] = useState("Neutros e naturais");
  const [details, setDetails] = useState("");
  const message = `Olá, Demais Flores e Decor! Gostaria de sugestões e um orçamento.\n• Interesse: ${interest}\n• Ambiente: ${space}\n• Cores: ${palette}${details.trim() ? `\n• Detalhes: ${details.trim()}` : ""}\nPodem me ajudar com opções e valores?`;
  return (
    <div className="builder">
      <Choices
        label="01. O que você está imaginando?"
        options={[
          "Arranjo permanente",
          "Plantas e vasos",
          "Parede verde",
          "Decoração de Natal",
          "Objetos de decoração",
        ]}
        value={interest}
        onChange={setInterest}
      />
      <Choices
        label="02. Para qual espaço?"
        options={["Minha casa", "Empresa ou escritório", "Condomínio", "Para presentear"]}
        value={space}
        onChange={setSpace}
      />
      <Choices
        label="03. Qual a sua paleta?"
        options={["Neutros e naturais", "Verdes", "Tons de rosa", "Coloridos", "Quero sugestões"]}
        value={palette}
        onChange={setPalette}
      />
      <label className="details-label" htmlFor="details">
        Quer contar mais algum detalhe? <span>(opcional)</span>
      </label>
      <textarea
        id="details"
        maxLength={700}
        rows={3}
        placeholder="Medidas do ambiente, sua ideia ou o que você procura…"
        value={details}
        onChange={(event) => setDetails(event.target.value)}
      />
      <details className="message-preview">
        <summary>Ver a mensagem que será enviada</summary>
        <p>{message}</p>
      </details>
      <ContactButton message={message}>Pedir sugestões no WhatsApp</ContactButton>
      <p className="fineprint">
        A conversa continua com nossa equipe. Disponibilidade e valores sob consulta.
      </p>
    </div>
  );
}
function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="site-shell design-v2">
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <header className="immersive-header wrap">
        <a href="#" className="brand" aria-label="Demais Flores e Decor, início">
          <Photo src={logo} alt="" width="52" height="52" />
          <span>
            demais<span className="brand-dot">!</span>
            <small>FLORES & DECOR</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Menu principal">
          <a href="#colecao">Produtos</a>
          <a href="#natal">
            Natal <span className="nav-dot" />
          </a>
          <a href="#projeto">Seu projeto</a>
          <a href="#loja">A loja</a>
        </nav>
        <a className="header-contact" href={wa(HELLO)} target="_blank" rel="noopener noreferrer">
          Fale no WhatsApp <ArrowUpRight size={18} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      {menuOpen && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Menu para celular">
          {[
            ["#colecao", "Produtos"],
            ["#natal", "Natal"],
            ["#projeto", "Seu projeto"],
            ["#loja", "Visite a loja"],
          ].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
              <ArrowUpRight size={18} />
            </a>
          ))}
        </nav>
      )}
      <main id="conteudo">
        <section className="immersive-hero" aria-labelledby="hero-title">
          <picture className="immersive-photo">
            <source media="(max-width: 600px)" srcSet={heroMobileWebp} type="image/webp" />
            <source media="(max-width: 600px)" srcSet={heroMobile} type="image/png" />
            <source srcSet={heroWebp} type="image/webp" />
            <img
              src={hero}
              alt="Flores permanentes em rosa suave, seguradas diante de uma parede de folhagens verdes"
              width="1920"
              height="1080"
              fetchPriority="high"
            />
          </picture>
          <div className="immersive-content wrap">
            <h1 id="hero-title">
              <span>Flores & decor</span>
              <em>para a sua casa.</em>
            </h1>
            <p>
              Arranjos permanentes, plantas e decoração em Balneário Camboriú. Encontre com a nossa
              equipe as peças para o seu espaço.
            </p>
            <ContactButton message="Olá, Demais! Vim pelo site e quero sugestões e um orçamento para decorar meu espaço.">
              Pedir orçamento no WhatsApp
            </ContactButton>
            <a href="#avaliacoes" className="immersive-rating">
              <span aria-hidden="true">★★★★★</span>
              <strong>4,7 no Google</strong>
              <span>267 avaliações</span>
            </a>
          </div>
          <a href="#colecao" className="hero-explore">
            Conheça nossos arranjos <ArrowRight size={17} />
          </a>
        </section>
        <div className="quick-contact wrap">
          <p>Tem uma foto do ambiente? Envie no WhatsApp e peça sugestões para compor.</p>
          <a
            href={wa(
              "Olá, Demais! Posso enviar uma foto do meu ambiente para receber sugestões de arranjos e decoração?",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enviar minha referência <ArrowUpRight size={18} />
          </a>
        </div>
        <section id="colecao" className="section wrap">
          <div className="section-heading">
            <div>
              <h2>
                Arranjos, plantas e peças
                <br />
                para o seu espaço.
              </h2>
            </div>
            <p>
              Conheça uma seleção da nossa loja. Gostou de uma composição? Fale com a equipe para
              consultar opções e valores.
            </p>
          </div>
          <div className="collection-grid">
            {collection.map((item) => (
              <a
                className="collection-card"
                key={item.name}
                href={wa(
                  `Olá, Demais! Me interessei por ${item.category.toLowerCase()} no site. Gostaria de conhecer as opções e valores.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="collection-image">
                  <Photo src={item.image} alt={item.name} width="700" height="950" loading="lazy" />
                  <span className="image-category">{item.category}</span>
                  <span className="card-arrow">
                    <WhatsApp className="size-5" />
                  </span>
                </div>
                <div className="card-title">
                  <h3>{item.name}</h3>
                </div>
                <p>{item.note}</p>
                <span className="collection-action">Consultar pelo WhatsApp</span>
              </a>
            ))}
          </div>
          <p className="collection-note">
            Inspire-se nas composições. Consulte nossa equipe sobre peças, medidas e
            disponibilidade.
          </p>
        </section>
        <section id="natal" className="christmas-section">
          <div className="wrap christmas-grid">
            <div className="christmas-images">
              <Photo
                className="christmas-tree"
                src={tree}
                alt="Árvore de Natal decorada em dourado e vinho, com flores e luzes"
                width="720"
                height="900"
                loading="lazy"
              />
              <Photo
                className="christmas-wreath"
                src={wreath}
                alt="Guirlanda de Natal com laços, flores vermelhas e bolas douradas na porta de madeira"
                width="400"
                height="520"
                loading="lazy"
              />
            </div>
            <div className="christmas-copy">
              <p className="eyebrow">Natal na Demais</p>
              <h2>
                O Natal começa
                <br />
                nos detalhes.
              </h2>
              <p>
                Árvores, guirlandas e arranjos para preparar a casa para os encontros de fim de ano.
                Conheça as opções de Natal da Demais.
              </p>
              <p className="season-note">Escolha os detalhes do seu Natal com a nossa equipe.</p>
              <ContactButton
                light
                message="Olá, Demais! Quero conhecer as opções de árvores, guirlandas e decoração de Natal."
              >
                Consultar opções de Natal
              </ContactButton>
            </div>
          </div>
        </section>
        <section className="section wrap green-section">
          <div className="green-copy">
            <h2>
              Paredes verdes.
              <br />
              Mais natureza no ambiente.
            </h2>
            <p>
              Folhagens permanentes para compor paredes em casas, escritórios e espaços comerciais.
              Envie uma foto e as medidas para conversar sobre o seu projeto.
            </p>
            <p>Conte com nossa equipe para conversar sobre composição e montagem no seu espaço.</p>
            <a
              href={wa(
                "Olá, Demais! Gostaria de um orçamento para uma parede verde. Posso enviar as medidas e uma foto do ambiente?",
              )}
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir orçamento de parede verde <ArrowUpRight size={19} />
            </a>
          </div>
          <div className="green-image">
            <Photo
              src={wall}
              alt="Parede verde com folhagens permanentes ao lado de uma porta de madeira ripada"
              width="720"
              height="900"
              loading="lazy"
            />
          </div>
        </section>
        <section id="projeto" className="project-section">
          <div className="wrap project-grid">
            <div className="project-copy">
              <h2>
                Conte o que procura.
                <br />A gente ajuda a escolher.
              </h2>
              <p>
                Você pode falar direto com a equipe ou selecionar suas preferências ao lado para
                adiantar a conversa.
              </p>
              <div className="direct-project-contact">
                <ContactButton>Pedir orçamento no WhatsApp</ContactButton>
                <p>Prefere conversar? Não é preciso preencher as opções.</p>
              </div>
              <div className="project-steps">
                {[
                  [
                    "Escolha o que inspira você",
                    "Selecione as opções que combinam com a sua ideia.",
                  ],
                  [
                    "Converse com nossa equipe",
                    "Envie fotos e medidas do seu espaço pelo WhatsApp.",
                  ],
                  ["Encontre a sua composição", "Consulte sugestões, possibilidades e valores."],
                ].map(([title, description], index) => (
                  <div key={title}>
                    <span>0{index + 1}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ProjectBuilder />
          </div>
        </section>
        <section id="avaliacoes" className="section wrap reviews-section">
          <div className="reviews-heading">
            <h2>Quem conhece a Demais conta.</h2>
            <div className="review-score">
              <strong>4,7</strong>
              <div>
                <span className="stars">★★★★★</span>
                <p>267 avaliações no Google</p>
              </div>
            </div>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <figure key={review.name}>
                <span className="stars" aria-label="5 estrelas">
                  ★★★★★
                </span>
                <blockquote>“{review.text}”</blockquote>
                <figcaption>
                  <span>{review.name[0]}</span>
                  <div>
                    {review.name}
                    <small>Avaliação no Google · trecho</small>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
        <section id="loja" className="store-section">
          <div className="wrap store-grid">
            <figure className="store-image">
              <Photo
                src={facade}
                alt="Fachada da Demais Flores e Decor na Avenida Marginal Leste"
                width="1200"
                height="880"
                loading="lazy"
              />
            </figure>
            <div className="store-copy">
              <h2>Venha escolher de perto.</h2>
              <p>
                Venha conhecer de perto as texturas, cores e possibilidades da Demais Flores &
                Decor.
              </p>
              <address>
                <div>
                  <MapPin size={20} />
                  <span>
                    Av. Marginal Leste, 2120 — Centro
                    <br />
                    Balneário Camboriú, SC · CEP 88330-116
                  </span>
                </div>
                <div>
                  <Phone size={19} />
                  <a href="tel:+554720330520">(47) 2033-0520</a>
                </div>
                <div>
                  <WhatsApp />
                  <a href={wa(HELLO)} target="_blank" rel="noopener noreferrer">
                    (47) 99162-7940
                  </a>
                </div>
              </address>
              <div className="store-hours">
                <strong>Horário de atendimento</strong>
                <span>Segunda a sexta · 9h às 18h</span>
                <span>Sábado · 9h às 16h</span>
              </div>
              <p className="store-amenities">
                Estacionamento gratuito · Entrada com acessibilidade
              </p>
              <div className="store-actions">
                <a className="contact-button" href={MAPS} target="_blank" rel="noopener noreferrer">
                  Como chegar <ArrowUpRight size={18} />
                </a>
                <a
                  className="text-link"
                  href="https://www.instagram.com/demaisfloresedecor/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={18} /> Siga a Demais
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="wrap footer-main">
          <a href="#" className="brand">
            <Photo src={logo} alt="Demais" width="48" height="48" />
            <span>
              demais!<small>FLORES & DECOR</small>
            </span>
          </a>
          <p>A diferença está nos detalhes.</p>
          <a href={wa(HELLO)} target="_blank" rel="noopener noreferrer">
            Fale no WhatsApp <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="wrap footer-bottom">
          <span>Demais Flores & Decor · Balneário Camboriú, SC</span>
          <span>Flores permanentes. Detalhes para todos os seus espaços.</span>
        </div>
      </footer>
      <a
        className="floating-contact"
        href={wa(HELLO)}
        aria-label="Conversar com a Demais pelo WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsApp className="size-7" />
        <span>Pedir orçamento no WhatsApp</span>
      </a>
    </div>
  );
}
