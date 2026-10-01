import { useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { seniorQuestions, youthQuestions } from '../data/quizData';

const scenarioImages = [
  'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600&h=320&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1592890288564-76628a30a657?w=600&h=320&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=600&h=320&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1570101945621-945409a6370f?w=600&h=320&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?w=600&h=320&fit=crop&auto=format',
];

export default function QuizQuestion() {
  const [params] = useSearchParams();
  const trilha = params.get('trilha') ?? 'senior';
  const modo = params.get('modo') ?? 'individual';

  const questions = trilha === 'jovem' ? youthQuestions : seniorQuestions;
  const isJuntos = modo === 'juntos';

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<'A' | 'B' | 'C' | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<Array<{ correct: boolean; chosen: string }>>([]);

  const question = questions[currentIndex];
  const progressPct = ((currentIndex + (showFeedback ? 1 : 0)) / questions.length) * 100;
  const imgSrc = scenarioImages[currentIndex % scenarioImages.length];

  const handleSelect = (id: 'A' | 'B' | 'C') => {
    if (showFeedback) return;
    setSelected(id);
  };

  const handleConfirm = () => {
    if (!selected) return;
    const isCorrect = selected === question.correct;
    if (isCorrect) setScore((s) => s + 1);
    setAnswers((prev) => [...prev, { correct: isCorrect, chosen: selected }]);
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentIndex + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
      setShowFeedback(false);
    }
  };

  // ── Results screen ──────────────────────────────────────────────────────────
  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    const label =
      pct >= 80 ? { text: 'Excelente!', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-300' }
      : pct >= 50 ? { text: 'Bom progresso!', color: 'text-amber-600', bg: 'bg-amber-50 border-amber-300' }
      : { text: 'Continue aprendendo', color: 'text-[#E85D04]', bg: 'bg-orange-50 border-orange-300' };

    const message =
      pct >= 80
        ? 'Você demonstrou ótimo conhecimento sobre segurança digital. Compartilhe o que aprendeu com sua família!'
        : pct >= 50
        ? 'Você está no caminho certo. Revise os tópicos onde errou e tente novamente para reforçar o aprendizado.'
        : 'Não desanime — o importante é aprender. Leia as trilhas educativas e refaça o quiz para melhorar seu desempenho.';

    return (
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <div className="w-16 h-16 border border-[#E2E0DC] rounded-full flex items-center justify-center text-2xl mx-auto mb-6">⛨</div>
        <div className="inline-flex items-center gap-2 border border-[#E2E0DC] rounded-full px-3 py-1 text-xs text-[#6B7280] mb-4 uppercase tracking-widest">
          {trilha === 'jovem' ? 'Trilha Jovens' : 'Trilha Sênior'} · {isJuntos ? 'Aprender Juntos' : 'Individual'}
        </div>
        <h1 className="font-['DM_Serif_Display'] text-5xl text-[#0F1B2D] mb-3">Resultado Final</h1>

        <div className={`inline-block border rounded-xl px-10 py-8 my-8 ${label.bg}`}>
          <p className={`font-['DM_Serif_Display'] text-6xl mb-2 ${label.color}`}>{score}/{questions.length}</p>
          <p className={`text-sm font-semibold uppercase tracking-widest ${label.color}`}>{label.text}</p>
          <div className="mt-4 h-2 bg-white/60 rounded-full overflow-hidden w-48 mx-auto">
            <div className="h-full bg-current rounded-full transition-all" style={{ width: `${pct}%` }} />
          </div>
          <p className="text-xs mt-1 opacity-70">{pct}% de acertos</p>
        </div>

        <p className="text-[#4B5563] mb-8 max-w-lg mx-auto leading-relaxed">{message}</p>

        {/* Per-question summary */}
        <div className="text-left border border-[#E2E0DC] rounded-lg overflow-hidden mb-10">
          <div className="bg-[#F8F7F4] px-4 py-3 border-b border-[#E2E0DC]">
            <p className="text-xs font-semibold text-[#0F1B2D] uppercase tracking-widest">Resumo das respostas</p>
          </div>
          <div className="divide-y divide-[#E2E0DC]">
            {answers.map((a, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${a.correct ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-600'}`}>
                  {a.correct ? '✓' : '✗'}
                </span>
                <span className="text-sm text-[#0F1B2D] flex-1">{questions[i].context}</span>
                <span className="text-xs text-[#6B7280]">Respondeu: <strong>{a.chosen}</strong></span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to={`/quiz/desafio?trilha=${trilha}&modo=${modo}`}
            onClick={() => {
              setCurrentIndex(0);
              setSelected(null);
              setShowFeedback(false);
              setScore(0);
              setFinished(false);
              setAnswers([]);
            }}
            className="inline-flex items-center gap-2 bg-[#0F1B2D] text-white text-sm font-medium px-6 py-3 rounded hover:bg-[#1E3050] transition-colors"
          >
            Refazer Quiz
          </Link>
          <Link to="/quiz" className="inline-flex items-center gap-2 border border-[#0F1B2D] text-[#0F1B2D] text-sm font-medium px-6 py-3 rounded hover:bg-[#F8F7F4] transition-colors">
            Escolher outra trilha
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 border border-[#E2E0DC] text-[#6B7280] text-sm font-medium px-6 py-3 rounded hover:bg-[#F8F7F4] transition-colors">
            Voltar ao Início
          </Link>
        </div>
      </div>
    );
  }

  // ── Question screen ─────────────────────────────────────────────────────────
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-2">
        <div>
          <span className="inline-flex items-center border border-[#E2E0DC] rounded-full px-3 py-1 text-xs text-[#6B7280] uppercase tracking-widest">
            {question.badge}
          </span>
          <h1 className="font-['DM_Serif_Display'] text-3xl text-[#0F1B2D] mt-2">Desafio de Segurança</h1>
        </div>
        <div className="text-right flex-shrink-0 ml-4">
          <span className="text-sm text-[#6B7280] font-medium">Cenário {currentIndex + 1} de {questions.length}</span>
          {isJuntos && (
            <div className="mt-1 inline-flex items-center gap-1.5 text-xs text-[#E85D04] font-medium">
              <span>◈</span> Modo Aprender Juntos
            </div>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-[#E2E0DC] rounded-full overflow-hidden mb-8 mt-4">
        <div className="h-full bg-[#0F1B2D] rounded-full transition-all duration-500" style={{ width: `${progressPct}%` }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Scenario */}
        <div className="space-y-4">
          <div className="border border-[#E2E0DC] rounded-lg overflow-hidden">
            <img
              src={imgSrc}
              alt="Cenário de mensagem suspeita"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 border border-[#E2E0DC] rounded flex items-center justify-center text-xs text-[#6B7280]">ⓘ</span>
                <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-widest">Contexto da Situação</span>
              </div>
              <h2 className="font-['DM_Serif_Display'] text-2xl text-[#0F1B2D] mb-3">{question.context}</h2>
              <p className="text-sm text-[#4B5563] leading-relaxed mb-2">{question.intro}</p>
              {question.message && (
                <div className="bg-[#F8F7F4] border border-[#E2E0DC] rounded-lg px-4 py-3 text-sm text-[#0F1B2D] italic leading-relaxed">
                  {question.message}
                </div>
              )}
            </div>
          </div>

          {/* Discussion prompt — always shown but labeled differently by mode */}
          <div className={`border border-dashed rounded-lg p-4 flex items-start gap-3 ${isJuntos ? 'border-[#E85D04] bg-orange-50' : 'border-[#E2E0DC]'}`}>
            <div className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 text-sm ${isJuntos ? 'bg-[#E85D04] text-white' : 'bg-[#F8F7F4] text-[#6B7280]'}`}>
              {isJuntos ? '◈' : '◻'}
            </div>
            <div>
              <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${isJuntos ? 'text-[#E85D04]' : 'text-[#6B7280]'}`}>
                {isJuntos ? 'Ponto de Diálogo — Discutam Juntos' : 'Vamos Conversar?'}
              </p>
              <p className="text-sm text-[#0F1B2D] italic leading-relaxed">
                "{question.discussionPrompt}"
              </p>
            </div>
          </div>
        </div>

        {/* Right: Question + Options */}
        <div className="space-y-4">
          <div className="border border-[#E2E0DC] rounded-lg p-6">
            <h3 className="font-semibold text-[#0F1B2D] mb-5">{question.question}</h3>
            <div className="space-y-3">
              {question.options.map(({ id, text }) => {
                let style = 'border-[#E2E0DC] hover:border-[#9CA3AF] bg-white';
                if (showFeedback) {
                  if (id === question.correct) style = 'border-emerald-500 bg-emerald-50';
                  else if (id === selected) style = 'border-red-400 bg-red-50';
                } else if (selected === id) {
                  style = 'border-[#0F1B2D] bg-[#F8F7F4]';
                }
                return (
                  <button
                    key={id}
                    onClick={() => handleSelect(id)}
                    disabled={showFeedback}
                    className={`w-full border rounded-lg px-4 py-3.5 text-left flex items-start gap-3 transition-colors ${style} ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    <span className="w-6 h-6 border border-current rounded text-xs flex items-center justify-center flex-shrink-0 font-semibold mt-0.5">{id}</span>
                    <span className="text-sm text-[#4B5563] leading-relaxed">{text}</span>
                  </button>
                );
              })}
            </div>

            {selected && !showFeedback && (
              <button
                onClick={handleConfirm}
                className="w-full mt-4 bg-[#0F1B2D] text-white text-sm font-medium py-3 rounded hover:bg-[#1E3050] transition-colors"
              >
                Confirmar Resposta
              </button>
            )}

            {showFeedback && selected && (
              <div className={`mt-4 p-4 rounded-lg border ${selected === question.correct ? 'border-emerald-300 bg-emerald-50' : 'border-amber-300 bg-amber-50'}`}>
                <p className={`text-xs font-semibold uppercase tracking-widest mb-1.5 ${selected === question.correct ? 'text-emerald-700' : 'text-amber-700'}`}>
                  {selected === question.correct ? '✓ Resposta Correta!' : '○ Resposta Incorreta'}
                </p>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {question.explanations[selected]}
                </p>
              </div>
            )}

            <div className="mt-4 flex items-center gap-2 text-xs text-[#6B7280]">
              <span>⛨</span>
              <span>Escolha a opção que parece mais segura</span>
            </div>
          </div>

          {/* Tip */}
          <div className="border border-dashed border-[#E2E0DC] rounded-lg px-4 py-3 flex items-start gap-2">
            <span className="text-[#E85D04] text-sm flex-shrink-0">⊙</span>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              <strong className="text-[#0F1B2D]">Dica de segurança: </strong>{question.tip}
            </p>
          </div>

          {/* Navigation after feedback */}
          {showFeedback && (
            <div className="flex gap-3">
              <Link to="/quiz" className="border border-[#0F1B2D] text-[#0F1B2D] text-sm font-medium py-3 px-4 rounded text-center hover:bg-[#F8F7F4] transition-colors">
                ← Sair
              </Link>
              <button
                onClick={handleNext}
                className="flex-1 bg-[#0F1B2D] text-white text-sm font-medium py-3 rounded hover:bg-[#1E3050] transition-colors"
              >
                {currentIndex + 1 >= questions.length ? 'Ver Resultado Final →' : 'Próximo Cenário →'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
