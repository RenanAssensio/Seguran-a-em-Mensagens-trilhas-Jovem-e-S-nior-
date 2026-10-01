export default function Footer() {
  return (
    <footer className="bg-[#F8F7F4] border-t border-[#E2E0DC] mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-5 rounded border border-[#0F1B2D] flex items-center justify-center text-xs">⛨</span>
            <span className="text-xs font-semibold text-[#0F1B2D] uppercase tracking-widest">Aviso de Emergência</span>
          </div>
          <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
            Se você ou alguém que você conhece foi vítima de um crime cibernético, não hesite em procurar as autoridades locais ou delegacias especializadas.
          </p>
          <div className="border border-[#E2E0DC] rounded px-4 py-3 flex items-center gap-3 bg-white">
            <span className="text-lg">☎</span>
            <div>
              <p className="text-xs text-[#6B7280]">Disque Denúncia</p>
              <p className="text-sm font-semibold text-[#0F1B2D]">181</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-[#0F1B2D] uppercase tracking-widest mb-3">Recursos Educativos</p>
          <ul className="space-y-2">
            {['Termos de Uso e Privacidade', 'Como identificar golpes', 'Sobre o Projeto'].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-[#4B5563] hover:text-[#0F1B2D] transition-colors flex items-center gap-2">
                  <span className="text-[#E85D04]">—</span> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold text-[#0F1B2D] uppercase tracking-widest mb-3">Mantenha-se Seguro</p>
          <p className="text-sm text-[#4B5563] leading-relaxed">
            A educação é a melhor ferramenta contra golpes digitais. Compartilhe este conhecimento com seus familiares e amigos.
          </p>
        </div>
      </div>
      <div className="border-t border-[#E2E0DC] px-6 py-4 text-center">
        <p className="text-xs text-[#9CA3AF]">© 2024 Segurança em Mensagens. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
