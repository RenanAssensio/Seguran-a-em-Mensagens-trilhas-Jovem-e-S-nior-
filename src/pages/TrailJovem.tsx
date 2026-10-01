import { useState } from 'react';
import { Link } from 'react-router';

const topics = [
  { id: 'privacidade', icon: '▣', label: 'Privacidade de Dados' },
  { id: 'engenharia', icon: '⊙', label: 'Engenharia Social' },
  { id: 'identidade', icon: '◈', label: 'Check de Identidade' },
  { id: 'urgencia', icon: '△', label: 'Urgência & Pressão' },
  { id: 'denunciar', icon: '◻', label: 'Como Denunciar' },
];

const scamMechanisms = [
  { id: 'pausa', title: 'A PAUSA: O Botão de Ejetar', content: 'Sentiu medo, empolgação excessiva ou pânico? PARE. O golpista quer que você aja por impulso. Saia da conversa e pense racionalmente por 5 minutos.' },
  { id: 'verificacao', title: 'Verificação de Identidade', content: 'Sempre confirme a identidade por um canal diferente. Se alguém te manda mensagem pedindo algo urgente, ligue para o número que você já tem salvo.' },
  { id: 'urgencia', title: 'O Senso de Urgência', content: 'Golpistas criam urgência artificial. "Você tem 10 minutos" ou "se não fizer agora vai perder" são sinais clássicos de manipulação.' },
];

export default function TrailJovem() {
  const [activeTopic, setActiveTopic] = useState('privacidade');
  const [openMechanism, setOpenMechanism] = useState<string | null>('pausa');
  const progress = 35;

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-[#E2E0DC] bg-white">
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#E2E0DC] rounded-full px-3 py-1 text-xs text-[#6B7280] mb-5 uppercase tracking-widest">
              Módulo de Trilha Jovens
            </div>
            <h1 className="font-['DM_Serif_Display'] text-5xl md:text-6xl text-[#0F1B2D] leading-[1.05] mb-5">
              Sua Vida Digital, Sua Segurança.
            </h1>
            <p className="text-[#4B5563] text-lg leading-relaxed mb-6">
              Aprenda a navegar com inteligência, proteger sua privacidade e identificar perfis falsos antes que eles se tornem um problema.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <Link to="/quiz/desafio" className="inline-flex items-center gap-2 bg-[#0F1B2D] text-white text-sm font-medium px-5 py-2.5 rounded hover:bg-[#1E3050] transition-colors">
                Começar Trilha
              </Link>
              <a href="#conteudo" className="inline-flex items-center gap-2 border border-[#0F1B2D] text-[#0F1B2D] text-sm font-medium px-5 py-2.5 rounded hover:bg-[#F8F7F4] transition-colors">
                Ver Conteúdo
              </a>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-medium text-[#6B7280] uppercase tracking-widest">Progresso da Leitura</span>
                <span className="text-xs font-semibold text-[#E85D04]">{progress}%</span>
              </div>
              <div className="h-1.5 bg-[#E2E0DC] rounded-full overflow-hidden">
                <div className="h-full bg-[#E85D04] rounded-full" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
          <div className="hidden md:block relative">
            <img
              src="https://images.unsplash.com/photo-1570101945621-945409a6370f?w=600&h=420&fit=crop&auto=format"
              alt="Jovem usando smartphone"
              className="w-full h-80 object-cover rounded-lg"
            />
            <div className="absolute bottom-4 right-4 bg-[#0F1B2D] text-white text-xs font-semibold px-3 py-1.5 rounded uppercase tracking-widest">
              Proteção Digital Ativa
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-[#E2E0DC] bg-[#F8F7F4]">
        <div className="max-w-6xl mx-auto px-6 py-2.5 text-xs text-[#6B7280] flex items-center gap-2">
          <Link to="/" className="hover:text-[#0F1B2D] transition-colors">Início</Link>
          <span>›</span>
          <Link to="/trilhas/mecanismos-defesa" className="hover:text-[#0F1B2D] transition-colors">Trilhas</Link>
          <span>›</span>
          <span className="text-[#0F1B2D]">Trilha Jovens</span>
        </div>
      </div>

      {/* Content with sidebar */}
      <section id="conteudo" className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-widest mb-4">Tópicos do Módulo</p>
            <nav className="space-y-1">
              {topics.map(({ id, icon, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveTopic(id)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded text-sm text-left transition-colors ${
                    activeTopic === id
                      ? 'bg-[#0F1B2D] text-white'
                      : 'text-[#4B5563] hover:bg-[#F8F7F4]'
                  }`}
                >
                  <span>{icon}</span> {label}
                </button>
              ))}
            </nav>
            <div className="mt-8 border border-[#E2E0DC] rounded-lg p-4 bg-[#F8F7F4]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#E85D04]">⊙</span>
                <span className="text-xs font-semibold text-[#0F1B2D]">Dica de Especialista</span>
              </div>
              <p className="text-xs text-[#6B7280] leading-relaxed">Sua senha deve ser como sua escova de dentes: escolha uma boa, não compartilhe com ninguém e troque de vez em quando.</p>
            </div>
          </aside>

          {/* Main content */}
          <div className="space-y-16">
            {/* Privacidade Total */}
            <div>
              <div className="flex items-start gap-3 mb-6">
                <div className="w-8 h-8 border border-[#E2E0DC] rounded flex items-center justify-center text-[#6B7280] flex-shrink-0">▣</div>
                <div>
                  <h2 className="font-['DM_Serif_Display'] text-3xl text-[#0F1B2D] mb-1">Sua Pegada Digital: Privacidade Total</h2>
                  <p className="text-[#6B7280]">Seus dados são o seu bem mais precioso. Proteger sua privacidade não é apenas se esconder, é ter o controle sobre quem pode acessar sua vida real através da tela.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                {[
                  { icon: '△', title: 'Dados Sensíveis', desc: 'Nunca compartilhe CPF, endereço, escola ou telefone em perfis públicos ou com pessoas que você "acabou de conhecer" online, por mais legais que pareçam.' },
                  { icon: '◻', title: 'Fotos e Metadados', desc: 'Muitas fotos revelam sua localização sem querer (uniforme escolar, vista da janela). Antes de postar, dê um zoom nos detalhes do fundo.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="border border-[#E2E0DC] rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#E85D04]">{icon}</span>
                      <span className="text-xs font-semibold text-[#0F1B2D] uppercase tracking-wide">{title}</span>
                    </div>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <div className="border border-[#E2E0DC] rounded-lg p-5 bg-[#F8F7F4]">
                <p className="text-xs font-semibold text-[#0F1B2D] uppercase tracking-widest mb-3">✓ Regras de Ouro da Privacidade</p>
                <div className="grid grid-cols-2 gap-3">
                  {['Perfil Privado é o padrão (sempre)', 'Use senhas fortes e 2FA em tudo', 'Limpe sua lista de amigos a cada 3 meses', 'Pense antes de marcar sua localização'].map((rule) => (
                    <div key={rule} className="flex items-center gap-2 text-sm text-[#4B5563]">
                      <span className="text-emerald-500">✓</span> {rule}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Engenharia Social */}
            <div>
              <div className="flex items-start gap-3 mb-6">
                <div className="w-8 h-8 border border-[#E2E0DC] rounded flex items-center justify-center text-[#6B7280] flex-shrink-0">⊙</div>
                <div>
                  <h2 className="font-['DM_Serif_Display'] text-3xl text-[#0F1B2D] mb-1">Engenharia Social: O Golpe do Papo</h2>
                  <p className="text-[#6B7280]">Golpistas não hackeiam sistemas, eles hackeiam PESSOAS. Eles usam gatilhos emocionais para fazer você agir sem pensar. Aprenda a quebrar esse ciclo.</p>
                </div>
              </div>
              <div className="border border-[#E2E0DC] rounded-lg overflow-hidden mb-5">
                <div className="bg-[#F8F7F4] border-b border-[#E2E0DC] px-4 py-2.5">
                  <p className="text-xs font-semibold text-[#0F1B2D] uppercase tracking-widest">Os Mecanismos do Golpe:</p>
                </div>
                {scamMechanisms.map(({ id, title, content }) => (
                  <div key={id} className="border-b border-[#E2E0DC] last:border-0">
                    <button
                      onClick={() => setOpenMechanism(openMechanism === id ? null : id)}
                      className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-[#F8F7F4] transition-colors"
                    >
                      <span className="text-sm font-medium text-[#0F1B2D]">{title}</span>
                      <span className="text-[#6B7280]">{openMechanism === id ? '∧' : '∨'}</span>
                    </button>
                    {openMechanism === id && (
                      <div className="px-4 pb-4">
                        <p className="text-sm text-[#6B7280] leading-relaxed">{content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <blockquote className="border-l-4 border-[#E85D04] pl-5 py-2">
                <p className="font-['DM_Serif_Display'] text-xl text-[#0F1B2D] italic">"Se está com pressa, desconfie."</p>
                <p className="text-sm text-[#6B7280] mt-1">A urgência é a ferramenta favorita de quem quer te enganar</p>
              </blockquote>
            </div>

            {/* Links Phishing */}
            <div>
              <div className="flex items-start gap-3 mb-6">
                <div className="w-8 h-8 border border-[#E2E0DC] rounded flex items-center justify-center text-[#6B7280] flex-shrink-0">◎</div>
                <div>
                  <h2 className="font-['DM_Serif_Display'] text-3xl text-[#0F1B2D] mb-1">Links: Clique com Cuidado</h2>
                  <p className="text-[#6B7280]">O 'Phishing' é a técnica de pescar seus dados através de links maliciosos que parecem legítimos. Um clique errado pode comprometer toda a sua segurança.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { num: '1', title: 'Verifique o Domínio', desc: 'Observe se o endereço está escrito corretamente (ex: g00gle.com em vez de google.com).' },
                  { num: '2', title: 'Cuidado com Promoções', desc: 'Se a oferta parece boa demais para ser verdade, provavelmente é um golpe para roubar dados.' },
                  { num: '3', title: 'HTTPS é Obrigatório', desc: 'O cadeado na barra de endereços indica que a conexão é criptografada, mas não garante que o site é honesto.' },
                ].map(({ num, title, desc }) => (
                  <div key={num} className="border border-[#E2E0DC] rounded-lg p-5">
                    <div className="font-['DM_Serif_Display'] text-3xl text-[#E2E0DC] mb-3">{num}</div>
                    <h4 className="font-semibold text-sm text-[#0F1B2D] mb-2">{title}</h4>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Denúncia */}
            <div>
              <div className="flex items-start gap-3 mb-6">
                <div className="w-8 h-8 border border-[#E2E0DC] rounded flex items-center justify-center text-[#6B7280] flex-shrink-0">◻</div>
                <div>
                  <h2 className="font-['DM_Serif_Display'] text-3xl text-[#0F1B2D] mb-1">Denúncia e Diálogo: Atitude que Protege</h2>
                  <p className="text-[#6B7280]">Sofrer um golpe ou ser importunado não é sua culpa. O erro está em quem te ataca. Saber como reagir e denunciar é o que desativa o criminoso.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="border border-[#E2E0DC] rounded-lg p-5">
                  <p className="text-xs font-semibold text-[#E85D04] uppercase tracking-widest mb-3">Como Agir Agora?</p>
                  <ul className="space-y-3">
                    {[
                      { icon: '◻', text: 'Print de Tudo: Capture telas de conversas, perfis e links falsos e a sua prova oficial.' },
                      { icon: '⊙', text: 'Denuncie no App: Use as ferramentas de Report da própria rede social. Elas funcionam e podem banir o golpista.' },
                      { icon: '△', text: 'SaferNet: Em casos graves de assédio ou crimes de ódio, utilize canais como a SaferNet Brasil para orientação.' },
                    ].map(({ icon, text }) => (
                      <li key={text} className="flex items-start gap-2.5 text-sm text-[#4B5563]">
                        <span className="text-[#6B7280] mt-0.5 flex-shrink-0">{icon}</span> {text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-[#E2E0DC] rounded-lg p-5 bg-[#F8F7F4]">
                  <div className="space-y-3">
                    <div className="bg-[#DCF8C6] rounded-lg px-4 py-3 text-sm">"Ei, vi que meu amigo postou um link de sorteio estranho. Vou avisar ele que a conta pode estar comprometida."</div>
                    <div className="bg-white border border-[#E2E0DC] rounded-lg px-4 py-3 text-sm">"Mãe, um perfil estranho começou a me mandar mensagens insistentes. Vou bloquear e te mostrar os prints."</div>
                  </div>
                  <p className="text-xs font-semibold text-[#0F1B2D] uppercase tracking-widest mt-4">Transparência = Segurança</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#E2E0DC] bg-[#F8F7F4] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-['DM_Serif_Display'] text-4xl text-[#0F1B2D] mb-3">Pronto para testar seus conhecimentos?</h2>
          <p className="text-[#6B7280] mb-8">Agora que você aprendeu as bases da segurança digital para jovens, que tal colocar em prática o que aprendeu em nosso simulador de situações reais?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/quiz" className="inline-flex items-center gap-2 bg-[#0F1B2D] text-white text-sm font-medium px-6 py-3 rounded hover:bg-[#1E3050] transition-colors uppercase tracking-wide">
              Ir para o Quiz
            </Link>
            <Link to="/trilhas/mecanismos-defesa" className="inline-flex items-center gap-2 border border-[#0F1B2D] text-[#0F1B2D] text-sm font-medium px-6 py-3 rounded hover:bg-white transition-colors">
              Revisar Conteúdo
            </Link>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <Link to="/" className="text-sm text-[#6B7280] hover:text-[#0F1B2D] transition-colors">← Voltar para Home</Link>
        </div>
      </section>
    </div>
  );
}
