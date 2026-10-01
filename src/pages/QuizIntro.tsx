import { useState } from 'react';
import { Link } from 'react-router';

const steps = [
  { num: '01', icon: '⊞', title: 'Escolha sua Trilha', desc: 'Selecione o conteúdo mais adequado para o seu perfil ou para quem você está ajudando.' },
  { num: '02', icon: '◎', title: 'Analise os Cenários', desc: 'Veja exemplos reais de mensagens e decida se são seguras ou se tratam de um golpe.' },
  { num: '03', icon: '⊙', title: 'Receba Feedback', desc: 'Aprenda com cada resposta e entenda os sinais de alerta para se manter protegido.' },
];

const trails = [
  { id: 'senior', icon: '◈', label: 'Trilha Sênior', desc: 'Focada em golpes financeiros e mensagens de suporte falso.' },
  { id: 'jovem', icon: '⛨', label: 'Trilha Jovens', desc: 'Focada em privacidade, redes sociais e perfis falsos.' },
];

const modes = [
  { id: 'individual', label: 'Modo Individual', desc: 'Responda sozinho para testar seus conhecimentos pessoais e identificar áreas de melhoria.' },
  { id: 'juntos', label: 'Modo "Aprender Juntos"', desc: 'Recomendado para familiares. Um jovem e um idoso discutem as questões juntos para promover o diálogo.' },
];

export default function QuizIntro() {
  const [selectedTrail, setSelectedTrail] = useState<string>('senior');
  const [selectedMode, setSelectedMode] = useState<string>('individual');

  const summary = {
    trilha: selectedTrail === 'senior' ? 'Sênior' : 'Jovem',
    modo: selectedMode === 'individual' ? 'Individual' : 'Aprender Juntos',
    questoes: '10 Questões',
    tempo: '~8 Minutos',
  };

  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 border border-[#E2E0DC] rounded-full px-3 py-1 text-xs text-[#6B7280] mb-5 uppercase tracking-widest">
            ⊙ Introdução ao Quiz
          </div>
          <h1 className="font-['DM_Serif_Display'] text-5xl md:text-6xl text-[#0F1B2D] leading-[1.05] mb-5">
            Teste seu conhecimento sobre mecanismos de engenharia social.
          </h1>
          <p className="text-[#4B5563] leading-relaxed">
            Este quiz foi desenvolvido para testar os conhecimentos sobre os mecanismos de engenharia social aprendidos nas trilhas. Identifique golpes e proteja-se no mundo digital de forma prática.
          </p>
        </div>
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?w=600&h=420&fit=crop&auto=format"
            alt="Pessoa com smartphone"
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Como funciona */}
      <section className="border-t border-[#E2E0DC] py-16 bg-[#F8F7F4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-['DM_Serif_Display'] text-3xl text-[#0F1B2D] mb-2">Como funciona o processo</h2>
            <p className="text-[#6B7280] max-w-lg mx-auto">Siga estes três passos simples para completar sua jornada de aprendizado e garantir sua segurança.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map(({ num, icon, title, desc }) => (
              <div key={num} className="border border-[#E2E0DC] rounded-lg p-6 bg-white">
                <div className="w-9 h-9 border border-[#E2E0DC] rounded flex items-center justify-center text-[#6B7280] mb-4 text-lg">{icon}</div>
                <p className="text-xs font-semibold text-[#E85D04] uppercase tracking-widest mb-1">Passo {num}</p>
                <h3 className="font-['DM_Serif_Display'] text-xl text-[#0F1B2D] mb-2">{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Config + Summary */}
      <section className="border-t border-[#E2E0DC] py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          <div className="space-y-10">
            {/* Trail */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-7 h-7 border border-[#E2E0DC] rounded flex items-center justify-center text-[#6B7280] text-sm">◈</div>
                <h2 className="font-semibold text-[#0F1B2D]">1. Escolha a Trilha de Conhecimento</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {trails.map(({ id, icon, label, desc }) => (
                  <button
                    key={id}
                    onClick={() => setSelectedTrail(id)}
                    className={`border rounded-lg p-5 text-left transition-colors ${
                      selectedTrail === id ? 'border-[#0F1B2D] bg-[#F8F7F4]' : 'border-[#E2E0DC] hover:border-[#9CA3AF]'
                    }`}
                  >
                    <div className="w-8 h-8 border border-[#E2E0DC] rounded flex items-center justify-center text-[#6B7280] mb-3 text-sm">{icon}</div>
                    <p className="text-xs font-semibold text-[#0F1B2D] uppercase tracking-widest mb-1">{label}</p>
                    <p className="text-sm text-[#6B7280]">{desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Mode */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-7 h-7 border border-[#E2E0DC] rounded flex items-center justify-center text-[#6B7280] text-sm">◈</div>
                <h2 className="font-semibold text-[#0F1B2D]">2. Selecione o Modo de Resposta</h2>
              </div>
              <div className="space-y-3">
                {modes.map(({ id, label, desc }) => (
                  <button
                    key={id}
                    onClick={() => setSelectedMode(id)}
                    className={`w-full border rounded-lg px-5 py-4 text-left transition-colors flex items-start gap-3 ${
                      selectedMode === id ? 'border-[#0F1B2D] bg-[#F8F7F4]' : 'border-[#E2E0DC] hover:border-[#9CA3AF]'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 mt-0.5 ${selectedMode === id ? 'border-[#0F1B2D] bg-[#0F1B2D]' : 'border-[#9CA3AF]'}`} />
                    <div>
                      <p className="text-sm font-semibold text-[#0F1B2D] uppercase tracking-wide">{label}</p>
                      <p className="text-sm text-[#6B7280] mt-0.5">{desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="border border-[#E2E0DC] rounded-lg p-6 h-fit">
            <h3 className="font-semibold text-[#0F1B2D] mb-0.5">Resumo do Quiz</h3>
            <p className="text-xs text-[#E85D04] uppercase tracking-widest mb-5">Pronto para Começar</p>
            <div className="space-y-3 mb-5">
              {[
                { label: 'Trilha Escolhida:', value: summary.trilha },
                { label: 'Modo de Jogo:', value: summary.modo },
                { label: 'Total de Questões:', value: summary.questoes },
                { label: 'Tempo Estimado:', value: summary.tempo },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between border-b border-[#E2E0DC] pb-3 last:border-0 last:pb-0">
                  <span className="text-sm text-[#6B7280]">{label}</span>
                  <span className="text-sm font-semibold text-[#0F1B2D] uppercase tracking-wide">{value}</span>
                </div>
              ))}
            </div>
            <div className="border border-[#E2E0DC] rounded bg-[#F8F7F4] px-4 py-3 flex items-start gap-2 mb-5">
              <span className="text-[#6B7280] text-sm mt-0.5">⊙</span>
              <p className="text-xs text-[#6B7280] leading-relaxed">Não se preocupe em acertar tudo. O objetivo principal é o aprendizado e a prevenção.</p>
            </div>
            <Link
              to={`/quiz/desafio?trilha=${selectedTrail}&modo=${selectedMode}`}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#0F1B2D] text-white text-sm font-medium py-3 rounded hover:bg-[#1E3050] transition-colors"
            >
              Iniciar Quiz Agora →
            </Link>
            <p className="text-xs text-[#9CA3AF] text-center mt-3">Ao iniciar, você concorda com nossos termos de privacidade educativa.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
