import { Link } from 'react-router';
import alfredoImg from '@/imports/Alfredo.jpg';
import enzoImg from '@/imports/Enzo.jpg';

const stats = [
  { value: '8 em 10', label: 'TENTATIVAS DE GOLPE', desc: 'ocorrem via aplicativos de mensagens instantâneas no Brasil' },
  { value: '+R$ 1.1B', label: 'PREJUÍZO ESTIMADO', desc: 'causado por golpes de engenharia social anualmente' },
  { value: '45%', label: 'ALVO: IDOSOS', desc: 'Pessoas com mais de 60 anos são as alvos preferenciais de falsários' },
];

const defesas = [
  { icon: '◻', title: 'Mensagens Suspeitas', desc: 'Aprenda a identificar erros de português, urgência artificial e links maliciosos enviados por desconhecidos.' },
  { icon: '◎', title: 'Verificação de Identidade', desc: 'Técnicas simples para confirmar se aquele parente ou amigo pedindo ajuda é realmente quem diz ser.' },
  { icon: '▣', title: 'Proteção de Dados', desc: 'Entenda quais informações nunca devem ser compartilhadas, como senhas, códigos de SMS e documentos.' },
  { icon: '⊙', title: 'Autenticação Segura', desc: 'Como configurar a verificação em duas etapas e outras camadas de segurança em seus aplicativos.' },
  { icon: '⊞', title: 'Segurança de Dispositivos', desc: 'Mantenha seu smartphone protegido contra acessos não autorizados e aplicativos maliciosos.' },
  { icon: '◈', title: 'Diálogo Familiar', desc: 'Promovemos a conversa entre gerações como a barreira mais forte contra o isolamento e a fraude.' },
];

const trails = [
  {
    badge: 'Mais Popular',
    badgeColor: 'bg-[#E85D04] text-white',
    title: 'Trilha Idosos',
    desc: 'Aprenda a identificar os golpes mais comuns direcionados à terceira idade, como o Golpe do Pix e o perfil falso de familiares.',
    items: ['Identificando perfis falsos', 'Golpes financeiros comuns', 'Privacidade nas redes sociais', 'Quando suspeitar de uma mensagem'],
    to: '/trilhas/mecanismos-defesa',
    img: alfredoImg,
  },
  {
    badge: 'Educação Ativa',
    badgeColor: 'bg-[#0F1B2D] text-white',
    title: 'Trilha Jovens',
    desc: 'Foco em segurança de dados, superexposição digital, bullying online e como ajudar familiares mais velhos a se protegerem.',
    items: ['Segurança de contas e 2FA', 'Identificando engenharia social', 'Responsabilidade digital', 'Denunciando abusos e fraudes'],
    to: '/trilhas/jovem',
    img: enzoImg,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 border border-[#E2E0DC] rounded-full px-3 py-1 text-xs text-[#6B7280] mb-6 uppercase tracking-widest">
            Educação Digital · Segurança
          </div>
          <h1 className="font-['DM_Serif_Display'] text-5xl md:text-6xl leading-[1.05] text-[#0F1B2D] mb-6">
            A engenharia social é o motor dos golpes digitais.
          </h1>
          <p className="text-[#4B5563] text-lg leading-relaxed mb-8">
            Proteja-se dominando os mecanismos de defesa: <strong>Pausar</strong> para refletir, <strong>Verificar</strong> a fonte, confirmar a <strong>Identidade</strong> e nunca ceder à falsa <strong>Urgência</strong>.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            <Link to="/quiz" className="inline-flex items-center gap-2 bg-[#0F1B2D] text-white text-sm font-medium px-5 py-2.5 rounded hover:bg-[#1E3050] transition-colors">
              Testar Meus Conhecimentos
            </Link>
            <Link to="/trilhas/mecanismos-defesa" className="inline-flex items-center gap-2 border border-[#0F1B2D] text-[#0F1B2D] text-sm font-medium px-5 py-2.5 rounded hover:bg-[#F8F7F4] transition-colors">
              Ver Trilhas Educativas
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {['#C084FC','#60A5FA','#34D399','#F87171'].map((c) => (
                <div key={c} className="w-8 h-8 rounded-full border-2 border-white" style={{ background: c }} />
              ))}
            </div>
            <p className="text-sm text-[#6B7280]">Junte-se às mais de <strong className="text-[#0F1B2D]">5.000 pessoas</strong> que já aprenderam a se proteger online.</p>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute -top-4 -right-4 w-full h-full border border-[#E2E0DC] rounded-lg" />
          <img
            src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?w=600&h=480&fit=crop&auto=format"
            alt="Smartphone com ícone de segurança"
            className="relative w-full h-80 object-cover rounded-lg"
          />
          <div className="absolute bottom-4 right-4 bg-white border border-[#E2E0DC] rounded px-3 py-2 flex items-center gap-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-[#0F1B2D]">Proteção Ativa</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[#E2E0DC] bg-[#F8F7F4]">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E2E0DC]">
          {stats.map(({ value, label, desc }) => (
            <div key={label} className="px-8 py-4 first:pl-0 last:pr-0 text-center md:text-left">
              <p className="font-['DM_Serif_Display'] text-4xl text-[#0F1B2D] mb-1">{value}</p>
              <p className="text-xs font-semibold text-[#E85D04] uppercase tracking-widest mb-1">{label}</p>
              <p className="text-sm text-[#6B7280]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Defesas */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="font-['DM_Serif_Display'] text-4xl text-[#0F1B2D] mb-3">Mecanismos de Defesa</h2>
          <p className="text-[#6B7280] max-w-xl mx-auto">O dossiê de segurança aponta que o conhecimento sobre como os golpistas manipulam emoções é a barreira mais eficaz.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {defesas.map(({ icon, title, desc }) => (
            <div key={title} className="border border-[#E2E0DC] rounded-lg p-6 hover:border-[#0F1B2D] transition-colors group">
              <div className="w-9 h-9 border border-[#E2E0DC] rounded flex items-center justify-center text-[#6B7280] mb-4 group-hover:border-[#E85D04] group-hover:text-[#E85D04] transition-colors text-lg">
                {icon}
              </div>
              <h3 className="font-semibold text-[#0F1B2D] mb-2 text-sm uppercase tracking-wide">{title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trails */}
      <section className="bg-[#F8F7F4] border-y border-[#E2E0DC]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-start justify-between mb-10">
            <div>
              <h2 className="font-['DM_Serif_Display'] text-4xl text-[#0F1B2D] mb-2">Escolha sua Trilha de Aprendizado</h2>
              <p className="text-[#6B7280]">Conteúdo personalizado para diferentes perfis de usuários, focando nos desafios específicos de cada faixa etária.</p>
            </div>
            <a href="#" className="hidden md:inline-flex items-center gap-1 text-xs font-medium text-[#6B7280] hover:text-[#0F1B2D] uppercase tracking-widest whitespace-nowrap mt-2 transition-colors">
              ⊞ Explorar mais recursos
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trails.map(({ badge, badgeColor, title, desc, items, to, img }) => (
              <div key={title} className="bg-white border border-[#E2E0DC] rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <img src={img} alt={title} className="w-full h-52 object-cover" />
                <div className="p-6">
                  <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded uppercase tracking-widest mb-3 ${badgeColor}`}>{badge}</span>
                  <h3 className="font-['DM_Serif_Display'] text-2xl text-[#0F1B2D] mb-2">{title}</h3>
                  <p className="text-sm text-[#6B7280] mb-4 leading-relaxed">{desc}</p>
                  <p className="text-xs font-semibold text-[#0F1B2D] uppercase tracking-widest mb-2">O que você vai aprender:</p>
                  <ul className="space-y-1.5 mb-6">
                    {items.map((item) => (
                      <li key={item} className="text-sm text-[#4B5563] flex items-center gap-2">
                        <span className="text-[#E85D04]">+</span> {item}
                      </li>
                    ))}
                  </ul>
                  <Link to={to} className="inline-flex items-center gap-2 text-sm font-medium text-[#0F1B2D] border-b border-[#0F1B2D] pb-0.5 hover:text-[#E85D04] hover:border-[#E85D04] transition-colors">
                    Começar Trilha →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz CTA */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <div className="w-12 h-12 border border-[#E2E0DC] rounded-full flex items-center justify-center text-xl mx-auto mb-6">⛨</div>
        <h2 className="font-['DM_Serif_Display'] text-4xl text-[#0F1B2D] mb-4">Pronto para testar seus instintos?</h2>
        <p className="text-[#6B7280] mb-8 text-lg">Nosso quiz interativo apresenta cenários reais de mensagens para você decidir o que é seguro e o que é golpe.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/quiz/desafio" className="inline-flex items-center gap-2 bg-[#0F1B2D] text-white text-sm font-medium px-6 py-3 rounded hover:bg-[#1E3050] transition-colors">
            Iniciar Simulação de Quiz
          </Link>
          <Link to="/trilhas/mecanismos-defesa" className="inline-flex items-center gap-2 border border-[#0F1B2D] text-[#0F1B2D] text-sm font-medium px-6 py-3 rounded hover:bg-[#F8F7F4] transition-colors">
            Ler Guia Rápido de Segurança
          </Link>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-[#0F1B2D] px-6 py-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start">
          <blockquote className="font-['DM_Serif_Display'] text-3xl md:text-4xl text-white leading-snug italic flex-1">
            "A tecnologia deve unir as pessoas, não ser uma ferramenta de exploração. A educação intergeracional é nossa melhor defesa contra o crime digital."
          </blockquote>
          <div className="flex items-center gap-3 md:self-end">
            <div className="w-10 h-10 rounded bg-[#1E3050] flex items-center justify-center text-white text-sm">ES</div>
            <div>
              <p className="text-sm font-semibold text-white">Equipe Segurança em Mensagens</p>
              <p className="text-xs text-[#9CA3AF]">Iniciativa de Proteção Digital</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
