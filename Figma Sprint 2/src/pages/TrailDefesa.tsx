import { Link } from 'react-router';
import { useState } from 'react';

const accordionItems = [
  {
    id: 'consultor',
    icon: '◈',
    title: 'A Prova Social: O Consultor',
    content: 'Escolha um filho, neto ou vizinho para ser seu "consultor de segurança". Recebeu algo estranho? Não faça nada antes de mostrar pra ele.',
  },
  {
    id: 'chamada',
    icon: '☎',
    title: 'Chamada de Voz Obrigatória',
    content: 'Sempre que uma mensagem pedir dinheiro ou dados, ligue para o número que você já tem salvo na sua agenda — nunca para o número da mensagem suspeita.',
  },
  {
    id: 'nao',
    icon: '◎',
    title: 'O Poder do "Não" e da Calma',
    content: 'Você tem o direito de dizer "não" e de pedir tempo. Golpistas odeiam quando você diz que vai pensar. A urgência é a arma deles — a calma é a sua.',
  },
];

export default function TrailDefesa() {
  const [openAccordion, setOpenAccordion] = useState<string | null>('consultor');

  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 border border-[#E2E0DC] rounded-full px-3 py-1 text-xs text-[#6B7280] mb-5 uppercase tracking-widest">
            Trilha de Aprendizado · Nível Básico
          </div>
          <h1 className="font-['DM_Serif_Display'] text-5xl md:text-6xl text-[#0F1B2D] leading-[1.05] mb-5">
            Mecanismos de Defesa Digital
          </h1>
          <p className="text-[#4B5563] text-lg leading-relaxed mb-8">
            Aprenda a reconhecer as táticas de manipulação (engenharia social) e saiba como usar a Pausa, a Verificação e a Identidade para se proteger de urgências falsas.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/quiz/desafio" className="inline-flex items-center gap-2 bg-[#0F1B2D] text-white text-sm font-medium px-5 py-2.5 rounded hover:bg-[#1E3050] transition-colors">
              Começar agora →
            </Link>
            <a href="#materiais" className="inline-flex items-center gap-2 border border-[#0F1B2D] text-[#0F1B2D] text-sm font-medium px-5 py-2.5 rounded hover:bg-[#F8F7F4] transition-colors">
              Ver materiais de apoio
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600&h=420&fit=crop&auto=format"
            alt="Pessoa usando smartphone"
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Urgência */}
      <section className="border-t border-[#E2E0DC] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-8 h-8 border border-[#E2E0DC] rounded flex items-center justify-center text-[#E85D04]">⊙</div>
            <div>
              <h2 className="font-['DM_Serif_Display'] text-3xl text-[#0F1B2D] mb-2">O Gatilho da Urgência</h2>
              <p className="text-[#6B7280] max-w-xl">Golpistas tentam te fazer agir sem pensar, criando uma falsa sensação de desespero. O seu primeiro superpoder é a <strong>PAUSA</strong>.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            {[
              { icon: '△', title: 'A Pressão do Agora', desc: 'Mensagens que dizem que algo terrível vai acontecer se você não responder em 5 minutos (ex: bloqueio de conta ou multa).' },
              { icon: '◎', title: 'O Pânico Familiar', desc: "Um 'neto' ou 'filho' desesperado que precisa de dinheiro agora para uma emergência médica ou acidente fictício." },
              { icon: '⊙', title: 'A Regra da Pausa', desc: 'Sempre que sentir medo ou pressa ao ler uma mensagem, pare tudo. Respire e conte até dez antes de clicar em qualquer lugar.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="border border-[#E2E0DC] rounded-lg p-6 bg-white">
                <div className="w-8 h-8 border border-[#E2E0DC] rounded flex items-center justify-center text-[#6B7280] mb-4 text-sm">{icon}</div>
                <h3 className="font-semibold text-[#0F1B2D] mb-2">{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verificação */}
      <section className="border-t border-[#E2E0DC] py-16 bg-[#F8F7F4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border border-[#E2E0DC] rounded-lg overflow-hidden bg-white grid grid-cols-1 md:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=600&h=400&fit=crop&auto=format"
              alt="Verificação independente"
              className="w-full h-64 md:h-auto object-cover"
            />
            <div className="p-8 flex flex-col justify-center">
              <p className="text-xs font-semibold text-[#E85D04] uppercase tracking-widest mb-3">Mecanismo</p>
              <h2 className="font-['DM_Serif_Display'] text-3xl text-[#0F1B2D] mb-4">Verificação Independente</h2>
              <p className="text-sm text-[#6B7280] mb-5 leading-relaxed">Nunca confie na informação que vem da própria mensagem suspeita. Saia do aplicativo e verifique por conta própria usando canais que você já conhece.</p>
              <ul className="space-y-3">
                {['Se for um banco, use o número que está no verso do seu cartão físico.', 'Se for um parente, ligue para o número que você já tem salvo na sua agenda.'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#4B5563]">
                    <span className="text-emerald-500 mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Identidade / Falso Filho */}
      <section className="border-t border-[#E2E0DC] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-start gap-3 mb-8">
            <div className="w-8 h-8 border border-[#E2E0DC] rounded flex items-center justify-center text-[#6B7280]">◈</div>
            <div>
              <h2 className="font-['DM_Serif_Display'] text-3xl text-[#0F1B2D] mb-2">Identidade e o "Falso Filho"</h2>
              <p className="text-[#6B7280] max-w-xl">Golpistas usam a afetividade para burlar sua segurança. Aprenda a validar quem está do outro lado antes de qualquer ação.</p>
            </div>
          </div>

          <div className="border border-[#E2E0DC] rounded-lg overflow-hidden mb-6">
            <div className="bg-[#F8F7F4] border-b border-[#E2E0DC] px-4 py-2.5 flex items-center gap-2">
              <span className="text-xs font-semibold text-[#E85D04] uppercase tracking-widest">A Armadilha da Identidade</span>
              <span className="text-xs text-[#6B7280]">— Novo Número (Suposto Familiar)</span>
            </div>
            <div className="p-5 space-y-3">
              {[
                "Vó, troquei de número! Tive um problema com o celular antigo e perdi todos os contatos. Salva esse aqui?",
                "Tô numa situação difícil aqui na oficina, meu cartão não passou. Consegue fazer um PIX rapidinho? Te pago assim que chegar em casa.",
              ].map((msg, i) => (
                <div key={i} className={`max-w-md rounded-lg px-4 py-3 text-sm leading-relaxed ${i === 0 ? 'bg-[#DCF8C6]' : 'bg-[#F3F4F6]'} ${i === 0 ? '' : 'ml-auto text-right'}`}>
                  {msg}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="border border-[#E2E0DC] rounded-lg p-5">
              <p className="text-xs font-semibold text-[#E85D04] uppercase tracking-widest mb-2">Sinal de Alerta</p>
              <p className="text-sm text-[#4B5563] leading-relaxed">O golpista evita chamadas de vídeo e áudios longos, preferindo sempre o texto para esconder a voz real.</p>
            </div>
            <div className="border border-[#E2E0DC] rounded-lg p-5">
              <p className="text-xs font-semibold text-[#0F1B2D] uppercase tracking-widest mb-2">Teste de Identidade</p>
              <p className="text-sm text-[#4B5563] leading-relaxed">Faça uma pergunta que apenas o verdadeiro familiar saberia, como o nome de um animal de estimação de infância.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rede de Segurança */}
      <section className="border-t border-[#E2E0DC] py-16 bg-[#F8F7F4]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 border border-[#E2E0DC] rounded flex items-center justify-center text-[#6B7280]">⛨</div>
              <div>
                <h2 className="font-['DM_Serif_Display'] text-3xl text-[#0F1B2D] mb-2">Sua Rede de Segurança</h2>
                <p className="text-[#6B7280]">A engenharia social isola a vítima. Quebre esse ciclo compartilhando suas dúvidas com pessoas de confiança.</p>
              </div>
            </div>
            <div className="space-y-2">
              {accordionItems.map(({ id, icon, title, content }) => (
                <div key={id} className="border border-[#E2E0DC] rounded-lg bg-white overflow-hidden">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === id ? null : id)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-[#F8F7F4] transition-colors"
                  >
                    <span className="flex items-center gap-3 text-sm font-medium text-[#0F1B2D]">
                      <span className="text-[#6B7280]">{icon}</span> {title}
                    </span>
                    <span className="text-[#6B7280] text-lg">{openAccordion === id ? '∧' : '∨'}</span>
                  </button>
                  {openAccordion === id && (
                    <div className="px-4 pb-4 pt-1">
                      <p className="text-sm text-[#6B7280] leading-relaxed">{content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1592890288564-76628a30a657?w=600&h=420&fit=crop&auto=format"
              alt="Pessoa usando smartphone"
              className="w-full h-72 object-cover rounded-lg mb-4"
            />
            <button className="w-full border border-[#0F1B2D] text-[#0F1B2D] text-sm font-semibold py-3 rounded hover:bg-[#0F1B2D] hover:text-white transition-colors uppercase tracking-widest">
              Conversar É Proteger
            </button>
          </div>
        </div>
      </section>

      {/* CTA Quiz */}
      <section className="border-t border-[#E2E0DC] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-['DM_Serif_Display'] text-4xl text-[#0F1B2D] mb-3">Pronto para testar seus conhecimentos?</h2>
          <p className="text-[#6B7280] mb-8">Agora que você conhece os principais perigos, que tal praticar com alguns cenários reais em nosso quiz educativo?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/quiz" className="inline-flex items-center gap-2 bg-[#0F1B2D] text-white text-sm font-medium px-6 py-3 rounded hover:bg-[#1E3050] transition-colors">
              Ir para o Quiz →
            </Link>
            <Link to="/" className="inline-flex items-center gap-2 border border-[#0F1B2D] text-[#0F1B2D] text-sm font-medium px-6 py-3 rounded hover:bg-[#F8F7F4] transition-colors">
              Voltar ao Início
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
