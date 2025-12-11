import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  Upload,
  Play,
  Pause,
  Scissors,
  Wand2,
  Download,
  Trash2,
  Film,
  Music,
  Layers,
  Sparkles,
  RefreshCw,
  Maximize,
  Mic,
  Type,
  Crop,
  Video,
  Image as ImageIcon,
  Grid,
  Zap,
  MoreHorizontal,
  MonitorPlay,
  UserSquare,
  Rocket,
  LayoutTemplate,
  Youtube,
  Instagram,
  Facebook,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  X,
  MoveRight,
  Share2
} from 'lucide-react';

// --- Datos de Herramientas IA (Pestaña AI Tools) ---
const AI_TOOLS = [
  { id: 'silence', name: 'Detección de Silencio', icon: <Mic className="w-5 h-5" />, desc: 'Elimina pausas automáticamente', color: 'text-red-400 bg-red-400/10' },
  { id: 'cutout', name: 'Recorte de Retrato IA', icon: <UserSquare className="w-5 h-5" />, desc: 'Quita el fondo sin pantalla verde', color: 'text-blue-400 bg-blue-400/10' },
  { id: 'reframe', name: 'Reencuadre Auto', icon: <Crop className="w-5 h-5" />, desc: 'Convierte horizontal a vertical (9:16)', color: 'text-green-400 bg-green-400/10' },
  { id: 'captions', name: 'Subtítulos Auto', icon: <Type className="w-5 h-5" />, desc: 'Transcribe audio a texto', color: 'text-yellow-400 bg-yellow-400/10' },
  { id: 'enhance', name: 'Mejorar Video', icon: <Sparkles className="w-5 h-5" />, desc: 'Corrige color e iluminación', color: 'text-purple-400 bg-purple-400/10' },
  { id: 'script', name: 'Guion a Video', icon: <Film className="w-5 h-5" />, desc: 'Genera video desde texto', color: 'text-pink-400 bg-pink-400/10' },
];

// Componente Principal
const VideoEditor = () => {
  // --- Estados de la Aplicación ---
  const [activeView, setActiveView] = useState('generator'); // 'generator' | 'editor' | 'tools'

  // Estados del Generador (Control de Misión)
  const [genTheme, setGenTheme] = useState('Agujeros negros');
  const [genEmotion, setGenEmotion] = useState('viral');
  const [referenceImage, setReferenceImage] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedData, setGeneratedData] = useState(null);
  const [selectedPlatformPreview, setSelectedPlatformPreview] = useState('youtube_short'); // Para previsualizar guiones

  // Estados del Editor
  const [mediaLibrary, setMediaLibrary] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: '¡Hola! Soy Aira. Sube la imagen de referencia de Astro en el Generador para mantener la consistencia del personaje.'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentClipIndex, setCurrentClipIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  // Estados de Efectos Activos
  const [videoStyle, setVideoStyle] = useState({});
  const [aspectRatio, setAspectRatio] = useState('aspect-video');
  const [showCaptions, setShowCaptions] = useState(false);
  const [removedBackground, setRemovedBackground] = useState(false);

  // Referencias DOM
  const fileInputRef = useRef(null);
  const referenceInputRef = useRef(null);
  const videoRef = useRef(null);
  const chatEndRef = useRef(null);

  // --- Lógica del Reproductor ---
  useEffect(() => {
    if (timeline.length > 0 && videoRef.current) {
      const clip = timeline[currentClipIndex];
      if (videoRef.current.src !== clip.url) {
        videoRef.current.src = clip.url;
        if (isPlaying) videoRef.current.play();
      }
    }
  }, [currentClipIndex, timeline]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // --- Funciones del Generador ---
  const handleReferenceUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setReferenceImage(URL.createObjectURL(file));
    }
  };

  const removeReferenceImage = (e) => {
    e.stopPropagation();
    setReferenceImage(null);
    if(referenceInputRef.current) referenceInputRef.current.value = "";
  };

  const handleGenerateScript = async () => {
    if (!genTheme) return;
    setIsGenerating(true);

    // Simular llamada a API (Tiempo de "Pensar")
    await new Promise(r => setTimeout(r, 2000));

    // MOCK DATA: Simulando la respuesta estricta del Prompt de MPA
    // Cada escena tiene exactamente 16 palabras (aprox) para cumplir la regla.
    const mockResponse = {
      tema_base: genTheme,
      objetivo: genEmotion,
      guiones_por_plataforma: {
        youtube_short: [
          {
            id: 1,
            script: "¡Alerta exploradores! ¿Se han preguntado qué pasaría realmente si cayeran en un agujero negro justo ahora?", // 16 palabras
            visualStart: 'Astro flotando, cara de sorpresa, fondo estelar tranquilo.',
            visualEnd: 'Cámara se aleja rápido revelando un agujero negro masivo detrás.',
            colorStart: 'bg-slate-900', colorEnd: 'bg-orange-900'
          },
          {
            id: 2,
            script: "Sentirían un tirón gravitatorio tan inmenso que sus pies se estirarían más rápido que su cabeza.", // 16 palabras
            visualStart: 'Astro cayendo pies por delante, distorsión visual.',
            visualEnd: 'Cuerpo de Astro alargándose cómicamente (efecto espaguetización).',
            colorStart: 'bg-indigo-900', colorEnd: 'bg-purple-900'
          },
          {
            id: 3,
            script: "Este fenómeno se llama espaguetización y básicamente los convertiría en fideos humanos muy delgados y largos.", // 16 palabras
            visualStart: 'Primer plano del casco de Astro vibrando por la fuerza.',
            visualEnd: 'Astro convertido en un haz de luz neón hacia el centro.',
            colorStart: 'bg-purple-900', colorEnd: 'bg-black'
          },
          {
            id: 4,
            script: "Suscríbanse a Mi Pequeño Astronauta para descubrir más secretos increíbles del cosmos en el próximo viaje.", // 16 palabras (CTA YouTube)
            visualStart: 'Pantalla negra total.',
            visualEnd: 'Astro reaparece sano y salvo saludando a cámara.',
            colorStart: 'bg-black', colorEnd: 'bg-blue-600'
          }
        ],
        tiktok: [
          {
            id: 1,
            script: "¡Ojo aquí! Esto es lo que pasaría si cayeras en un agujero negro en este instante.", // Tono más directo TikTok
            visualStart: 'Astro señalando a cámara con urgencia.',
            visualEnd: 'Zoom agresivo al agujero negro.',
            colorStart: 'bg-slate-800', colorEnd: 'bg-red-900'
          },
          // ... (Simulamos que el resto es similar pero adaptado)
          { id: 2, script: "Sentirían un tirón gravitatorio tan inmenso que sus pies se estirarían más rápido que su cabeza.", visualStart: '...', visualEnd: '...', colorStart: 'bg-indigo-900', colorEnd: 'bg-purple-900' },
          { id: 3, script: "Este fenómeno se llama espaguetización y básicamente los convertiría en fideos humanos muy delgados y largos.", visualStart: '...', visualEnd: '...', colorStart: 'bg-purple-900', colorEnd: 'bg-black' },
          {
            id: 4,
            script: "Si esto te voló la cabeza, guarda el video y comenta qué teoría te gusta más.", // CTA TikTok
            visualStart: '...', visualEnd: '...', colorStart: 'bg-black', colorEnd: 'bg-pink-600'
          }
        ],
        instagram_reel: [
          {
            id: 1,
            script: "¿Sabías que caer en un agujero negro sería la experiencia más hermosa y aterradora del universo?", // Tono estético Insta
            visualStart: 'Astro mirando el horizonte de sucesos con asombro.',
            visualEnd: 'Luz dorada bañando el traje de Astro.',
            colorStart: 'bg-blue-900', colorEnd: 'bg-yellow-600'
          },
           // ...
          { id: 2, script: "Sentirían un tirón gravitatorio tan inmenso que sus pies se estirarían más rápido que su cabeza.", visualStart: '...', visualEnd: '...', colorStart: 'bg-indigo-900', colorEnd: 'bg-purple-900' },
          { id: 3, script: "Este fenómeno se llama espaguetización y básicamente los convertiría en fideos humanos muy delgados y largos.", visualStart: '...', visualEnd: '...', colorStart: 'bg-purple-900', colorEnd: 'bg-black' },
          {
            id: 4,
            script: "Comparte este reel con alguien que ame el espacio y guarda el video para verlo luego.", // CTA Insta
            visualStart: '...', visualEnd: '...', colorStart: 'bg-black', colorEnd: 'bg-purple-500'
          }
        ]
      }
    };

    setGeneratedData(mockResponse);
    setIsGenerating(false);
  };

  const handleTransferToEditor = () => {
    // Usamos el guion de la plataforma seleccionada actualmente
    const activeScript = generatedData.guiones_por_plataforma[selectedPlatformPreview];

    const newClips = activeScript.map((scene, idx) => ({
      id: `gen-${scene.id}-${Math.random()}`,
      name: `Escena ${idx + 1}: ${idx === 0 ? 'Hook' : idx === activeScript.length - 1 ? 'Cierre' : 'Desarrollo'}`,
      url: '',
      type: 'image',
      timelineId: Math.random(),
      duration: '00:08', // Ajustado a ~8s por escena según prompt
      isGenerated: true,
      color: scene.colorEnd,
      scriptText: scene.script // Guardamos el texto para mostrarlo
    }));

    setTimeline(newClips);
    setMediaLibrary(newClips);
    addMessage('ai', `He transferido el guion versión ${selectedPlatformPreview.toUpperCase()} al editor. Duración estimada: 32s.`);
    setActiveView('editor');
  };

  // --- Funciones del Editor ---
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newMedia = files.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      url: URL.createObjectURL(file),
      type: file.type.startsWith('video') ? 'video' : 'image',
      duration: '00:05'
    }));

    setMediaLibrary(prev => [...prev, ...newMedia]);
    addMessage('ai', `He importado ${files.length} medios.`);
  };

  const processAICommand = async (text, toolId = null) => {
    setIsProcessing(true);
    const lowerText = text.toLowerCase();
    await new Promise(r => setTimeout(r, 1200));
    let response = "Procesando...";

    if (toolId === 'reframe' || lowerText.includes('9:16')) {
      setAspectRatio('aspect-[9/16] max-w-[300px]');
      response = "Reencuadre a 9:16 aplicado.";
    } else if (toolId === 'silence') {
      response = "Silencios eliminados.";
    } else if (toolId === 'cutout') {
      setRemovedBackground(true);
      response = "Fondo eliminado.";
    } else if (toolId === 'captions') {
      setShowCaptions(true);
      response = "Subtítulos generados.";
    } else if (toolId === 'enhance') {
      setVideoStyle({ filter: 'contrast(1.2) saturate(1.3)' });
      response = "Color mejorado.";
    }

    setIsProcessing(false);
    return response;
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const userText = inputText;
    addMessage('user', userText);
    setInputText('');
    const aiResponse = await processAICommand(userText);
    addMessage('ai', aiResponse);
  };

  const addMessage = (sender, text) => {
    setChatMessages(prev => [...prev, { id: Date.now(), sender, text }]);
  };

  // --- Renderizado ---
  return (
    <div className="flex h-full min-h-[calc(100vh-theme(spacing.16))] bg-[#0f1016] text-gray-100 font-sans overflow-hidden">

      {/* 1. BARRA LATERAL */}
      <div className="w-16 flex flex-col items-center py-4 bg-[#13141c] border-r border-gray-800 z-20">
        <div className="mb-6 p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg shadow-lg">
           <Zap className="w-6 h-6 text-white" />
        </div>
        <div className="flex flex-col gap-6 w-full">
          <button
            onClick={() => setActiveView('generator')}
            className={`flex flex-col items-center gap-1 p-2 w-full border-l-2 transition-all ${activeView === 'generator' ? 'border-purple-500 text-purple-400' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
          >
            <Rocket className="w-5 h-5" />
            <span className="text-[9px]">Generador</span>
          </button>
          <button
            onClick={() => setActiveView('editor')}
            className={`flex flex-col items-center gap-1 p-2 w-full border-l-2 transition-all ${activeView === 'editor' ? 'border-purple-500 text-purple-400' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
          >
            <MonitorPlay className="w-5 h-5" />
            <span className="text-[9px]">Editor</span>
          </button>
          <button
            onClick={() => setActiveView('tools')}
            className={`flex flex-col items-center gap-1 p-2 w-full border-l-2 transition-all ${activeView === 'tools' ? 'border-purple-500 text-purple-400' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
          >
            <Grid className="w-5 h-5" />
            <span className="text-[9px]">AI Tools</span>
          </button>
        </div>
      </div>

      {/* 2. ÁREA CENTRAL DINÁMICA */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#0f1016] overflow-hidden">

        {/* === VISTA: GENERADOR (CONTROL DE MISIÓN) === */}
        {activeView === 'generator' && (
          <div className="flex h-full">
            {/* Panel Izquierdo: Inputs */}
            <div className="w-1/3 bg-[#13141c] p-8 flex flex-col border-r border-gray-800 overflow-y-auto">
              <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Rocket className="text-purple-500" /> Control de Misión
              </h1>

              <div className="space-y-6">
                <div>
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Tema Base</label>
                  <input
                    type="text"
                    value={genTheme}
                    onChange={(e) => setGenTheme(e.target.value)}
                    placeholder="Ej: Agujeros negros..."
                    className="w-full bg-[#1a1b26] border border-gray-700 rounded-xl p-4 text-white focus:border-purple-500 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Objetivo Emocional</label>
                  <select
                    value={genEmotion}
                    onChange={(e) => setGenEmotion(e.target.value)}
                    className="w-full bg-[#1a1b26] border border-gray-700 rounded-xl p-4 text-white focus:border-purple-500 focus:outline-none appearance-none"
                  >
                    <option value="viral">Viral / Dinámico</option>
                    <option value="educational">Educativo / Serio</option>
                    <option value="cinematic">Cinemático / Dramático</option>
                  </select>
                </div>

                {/* --- SECCIÓN: IMAGEN DE REFERENCIA --- */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Imagen de Referencia</label>
                    <span className="text-[9px] bg-yellow-500/20 text-yellow-500 px-1.5 py-0.5 rounded font-bold">Nano Banana Pro</span>
                  </div>

                  <button
                    onClick={() => !referenceImage && referenceInputRef.current.click()}
                    className={`
                      w-full aspect-video rounded-xl border-2 border-dashed transition-all relative overflow-hidden group text-left
                      ${referenceImage ? 'border-purple-500 bg-gray-900' : 'border-gray-700 bg-[#1a1b26] hover:border-purple-500 hover:bg-gray-800 cursor-pointer'}
                    `}
                    aria-label="Upload reference image"
                  >
                    {referenceImage ? (
                      <>
                        <img src={referenceImage} alt="Referencia" className="w-full h-full object-cover opacity-80" />
                        <button
                          onClick={removeReferenceImage}
                          className="absolute top-2 right-2 p-1 bg-black/50 hover:bg-red-500/80 rounded-full text-white transition-colors"
                          aria-label="Remove image"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-[10px] text-white flex items-center justify-center">
                           <Sparkles className="w-3 h-3 text-purple-400 mr-1" /> Estilo Bloqueado
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-gray-500 gap-2">
                        <div className="p-3 bg-gray-800 rounded-full group-hover:bg-purple-500/20 transition-colors">
                          <ImageIcon className="w-6 h-6 group-hover:text-purple-400" />
                        </div>
                        <div className="text-center px-4">
                          <span className="text-xs block text-gray-400 group-hover:text-gray-300">Sube tu Astro Chibi</span>
                          <span className="text-[10px] text-gray-600 block mt-1">Definirá el estilo de cada escena.</span>
                        </div>
                      </div>
                    )}
                  </button>
                  <input type="file" ref={referenceInputRef} onChange={handleReferenceUpload} className="hidden" accept="image/*" />
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleGenerateScript}
                    disabled={!genTheme || isGenerating}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-900/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isGenerating ? (
                      <><RefreshCw className="w-5 h-5 animate-spin" /> Generando Guion MPA...</>
                    ) : (
                      <><Wand2 className="w-5 h-5" /> Generar Guion y Assets</>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Panel Derecho: Resultados (Escaleta Visual) */}
            <div className="flex-1 bg-[#0f1016] p-8 overflow-y-auto">
              {!generatedData ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-600 opacity-50">
                  <LayoutTemplate className="w-24 h-24 mb-4 stroke-1" />
                  <p className="text-lg">Configura tu misión para generar el guion oficial.</p>
                </div>
              ) : (
                <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{generatedData.tema_base}</h2>
                      <div className="flex gap-2">
                         <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide">{generatedData.objetivo}</span>
                         {referenceImage && <span className="bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded text-xs font-bold uppercase flex items-center gap-1"><Sparkles className="w-3 h-3"/> Ref Activa</span>}
                      </div>
                    </div>
                    <button
                      onClick={handleTransferToEditor}
                      className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors"
                    >
                      Abrir en Editor <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Selector de Plataforma */}
                  <div className="flex gap-1 mb-8 bg-[#13141c] p-1 rounded-lg w-fit border border-gray-800">
                    {Object.keys(generatedData.guiones_por_plataforma).map(platform => (
                      <button
                        key={platform}
                        onClick={() => setSelectedPlatformPreview(platform)}
                        className={`
                          px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2
                          ${selectedPlatformPreview === platform
                            ? 'bg-purple-600 text-white shadow-md'
                            : 'text-gray-500 hover:text-gray-300 hover:bg-[#1a1b26]'}
                        `}
                      >
                         {platform === 'youtube_short' && <Youtube className="w-3 h-3" />}
                         {platform === 'tiktok' && <Smartphone className="w-3 h-3" />}
                         {platform === 'instagram_reel' && <Instagram className="w-3 h-3" />}
                         {platform.replace('_', ' ')}
                      </button>
                    ))}
                  </div>

                  {/* Listado de Escenas */}
                  <div className="space-y-8">
                    {generatedData.guiones_por_plataforma[selectedPlatformPreview].map((scene, idx) => (
                      <div key={scene.id} className="bg-[#1a1b26] border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-colors">
                        {/* Cabecera Escena */}
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                            <span className="bg-purple-500/10 px-2 py-1 rounded">ESCENA {idx + 1}</span>
                            <span className="text-gray-400 font-normal">~8 seg</span>
                          </div>
                        </div>

                        <div className="flex gap-6">
                          {/* Columna Guion */}
                          <div className="w-1/3 space-y-4">
                            <div>
                              <p className="text-gray-500 text-[10px] uppercase font-bold mb-1 flex items-center gap-1"><Mic className="w-3 h-3"/> Voz de Astro</p>
                              <div className="bg-[#13141c] p-4 rounded-lg border border-gray-800 relative">
                                <p className="text-lg text-white font-medium italic font-serif leading-relaxed">
                                  "{scene.script}"
                                </p>
                                <p className="text-[9px] text-gray-600 mt-2 text-right">
                                  {scene.script.split(' ').length} palabras (Objetivo: 16)
                                </p>
                              </div>
                            </div>
                            <div className="bg-blue-900/10 p-3 rounded-lg border border-blue-500/20">
                              <p className="text-blue-400 text-[10px] font-bold mb-1">Veo 3.1 Prompt</p>
                              <p className="text-gray-400 text-xs font-mono leading-tight truncate">
                                Visuals: {scene.visualStart}.. {referenceImage ? '(using Astro Ref)' : ''}
                              </p>
                            </div>
                          </div>

                          {/* Columna Visual (Start/End) */}
                          <div className="flex-1 flex gap-4">
                            {/* Frame Inicio */}
                            <div className="flex-1 space-y-2">
                              <p className="text-gray-500 text-[10px] uppercase font-bold text-center">Frame Inicio</p>
                              <div className={`aspect-[9/16] rounded-xl relative overflow-hidden group shadow-lg ${scene.colorStart}`}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                   <ImageIcon className="w-12 h-12 text-white/30" />
                                </div>
                                {referenceImage && (
                                  <img src={referenceImage} className="absolute bottom-2 right-2 w-8 h-8 rounded-full border border-white/50 opacity-50" title="Ref usada" />
                                )}
                                <div className="absolute bottom-3 left-3 right-3 text-[10px] text-white/90 font-medium leading-tight">
                                  {scene.visualStart}
                                </div>
                              </div>
                              <button className="w-full py-1.5 bg-[#252836] hover:bg-purple-600 border border-gray-700 hover:border-purple-500 rounded text-[10px] text-gray-300 hover:text-white transition-colors flex items-center justify-center gap-1">
                                <Wand2 className="w-3 h-3" /> Generar Imagen
                              </button>
                            </div>

                            {/* Flecha Transición */}
                            <div className="flex flex-col justify-center items-center text-gray-600 pt-6">
                              <MoveRight className="w-6 h-6" />
                              <span className="text-[9px]">Veo 3.1</span>
                            </div>

                            {/* Frame Final */}
                            <div className="flex-1 space-y-2">
                              <p className="text-gray-500 text-[10px] uppercase font-bold text-center">Frame Final</p>
                              <div className={`aspect-[9/16] rounded-xl relative overflow-hidden group shadow-lg ${scene.colorEnd}`}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                   <Sparkles className="w-12 h-12 text-white/30" />
                                </div>
                                <div className="absolute bottom-3 left-3 right-3 text-[10px] text-white/90 font-medium leading-tight">
                                  {scene.visualEnd}
                                </div>
                              </div>
                              <button className="w-full py-1.5 bg-[#252836] hover:bg-purple-600 border border-gray-700 hover:border-purple-500 rounded text-[10px] text-gray-300 hover:text-white transition-colors flex items-center justify-center gap-1">
                                <Wand2 className="w-3 h-3" /> Generar Imagen
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* === VISTA: AI TOOLS GRID === */}
        {activeView === 'tools' && (
          <div className="flex-1 p-8 overflow-y-auto">
             <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <Sparkles className="text-purple-500" /> Centro Creativo IA
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {AI_TOOLS.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => { setActiveView('editor'); processAICommand(tool.name, tool.id); }}
                  className="bg-[#1f212e] border border-gray-800 hover:border-purple-500 hover:bg-[#252836] p-4 rounded-xl text-left transition-all group flex flex-col justify-between h-40 relative overflow-hidden"
                >
                  <div className={`p-2 rounded-lg w-fit mb-3 ${tool.color} group-hover:scale-110 transition-transform`}>{tool.icon}</div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1 text-gray-200">{tool.name}</h3>
                    <p className="text-xs text-gray-500 leading-tight">{tool.desc}</p>
                  </div>
                  <div className="absolute top-2 right-2 bg-purple-600 text-[9px] font-bold px-1.5 py-0.5 rounded text-white">AI</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* === VISTA: EDITOR === */}
        {activeView === 'editor' && (
           <div className="flex flex-col h-full">
             <div className="flex-1 flex min-h-0">
              <div className="w-64 bg-[#1a1b26] border-r border-gray-800 flex flex-col">
                <div className="h-10 border-b border-gray-800 flex items-center px-4 font-semibold text-xs text-gray-300 flex justify-between">
                  <span>MEDIOS</span>
                  <span className="text-gray-500">{mediaLibrary.length} items</span>
                </div>
                <div className="p-2 grid grid-cols-2 gap-2 overflow-y-auto content-start flex-1">
                  <button onClick={() => fileInputRef.current.click()} className="aspect-square border border-dashed border-gray-700 rounded bg-gray-800/50 hover:bg-gray-800 hover:border-purple-500 flex flex-col items-center justify-center cursor-pointer transition-colors text-left">
                    <Upload className="w-5 h-5 text-gray-500 mb-1" />
                    <span className="text-[10px] text-gray-500">Importar</span>
                  </button>
                  {mediaLibrary.map(item => (
                    <button
                      key={item.id}
                      onClick={() => { setTimeline(prev => [...prev, { ...item, timelineId: Math.random() }]); }}
                      className={`aspect-square rounded overflow-hidden relative group cursor-pointer border border-transparent hover:border-purple-500 ${item.isGenerated ? item.color : 'bg-black'} p-0 text-left`}
                    >
                      {!item.isGenerated && (item.type === 'video' ? <video src={item.url} className="w-full h-full object-cover"/> : <img src={item.url} className="w-full h-full object-cover"/>)}
                      <div className="absolute bottom-0 w-full bg-black/60 p-1 text-[9px] truncate text-white">{item.name}</div>
                      {item.isGenerated && <Sparkles className="absolute top-1 right-1 w-3 h-3 text-white" />}
                    </button>
                  ))}
                </div>
                <input type="file" ref={fileInputRef} className="hidden" multiple onChange={handleFileUpload} accept="video/*,image/*" />
              </div>
              <div className="flex-1 bg-[#0f1016] flex items-center justify-center p-4 relative">
                <div className={`relative transition-all duration-500 shadow-2xl ${aspectRatio} bg-black`}>
                  {timeline.length > 0 ? (
                    <div className={`w-full h-full flex items-center justify-center text-white ${timeline[currentClipIndex]?.color || 'bg-black'}`} style={videoStyle}>
                      {!timeline[currentClipIndex]?.isGenerated ? (
                         <video
                          ref={videoRef}
                          muted
                          className={`w-full h-full object-cover ${removedBackground ? 'mask-image-gradient' : ''}`}
                          onEnded={() => { if (currentClipIndex < timeline.length - 1) setCurrentClipIndex(prev => prev + 1); else setIsPlaying(false); }}
                          onClick={() => setIsPlaying(!isPlaying)}
                        />
                      ) : (
                        <div className="text-center p-4">
                           <ImageIcon className="w-16 h-16 mx-auto mb-2 opacity-50" />
                           <p className="text-sm font-bold">{timeline[currentClipIndex].name}</p>
                           {timeline[currentClipIndex].scriptText && (
                             <p className="text-xs text-yellow-400 mt-2 bg-black/50 p-2 rounded max-w-xs mx-auto italic">
                               "{timeline[currentClipIndex].scriptText}"
                             </p>
                           )}
                           <p className="text-[10px] text-gray-400 mt-2">[Video Generado por Veo 3.1]</p>
                        </div>
                      )}

                      {removedBackground && <div className="absolute top-2 left-2 bg-blue-600/80 text-[10px] px-2 py-1 rounded">Fondo Eliminado</div>}
                      {showCaptions && <div className="absolute bottom-10 left-0 right-0 text-center"><span className="bg-black/50 text-yellow-300 px-3 py-1 text-lg font-bold rounded">Texto autogenerado...</span></div>}
                    </div>
                  ) : (
                    <div className="text-gray-600 flex flex-col items-center">
                      <Film className="w-12 h-12 mb-2 opacity-20" />
                      <span className="text-xs">Vista Previa</span>
                    </div>
                  )}
                </div>
                {timeline.length > 0 && (
                  <div className="absolute bottom-8 flex gap-4 bg-[#1f212e]/90 p-2 rounded-full border border-gray-700 backdrop-blur">
                     <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-purple-400">
                       {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                     </button>
                  </div>
                )}
              </div>
            </div>
            {/* Timeline Area */}
            <div className="h-64 bg-[#13141c] border-t border-gray-800 flex flex-col">
              <div className="h-10 bg-[#1a1b26] flex items-center px-4 justify-between border-b border-gray-800">
                <div className="flex gap-4">
                  <button className="text-gray-400 hover:text-white"><Scissors className="w-4 h-4" /></button>
                  <button className="text-gray-400 hover:text-white"><Trash2 className="w-4 h-4" /></button>
                </div>
                <div className="text-xs text-gray-500">00:00:00 / 00:01:30</div>
              </div>
              <div className="flex-1 overflow-y-auto p-2 space-y-1 relative">
                <div className="absolute top-0 bottom-0 left-[120px] w-px bg-red-500 z-30 pointer-events-none"></div>

                {/* Pista V1 */}
                <div className="flex h-16 bg-[#0f1016] rounded border border-gray-800 relative group hover:border-gray-700">
                  <div className="w-24 bg-[#1f212e] border-r border-gray-800 flex flex-col justify-center items-center text-xs text-gray-500 flex-shrink-0 z-10">
                    <Video className="w-4 h-4 mb-1" />
                    <span>Video 1</span>
                  </div>
                  <div className="flex-1 flex items-center p-1 overflow-hidden relative">
                    {timeline.length === 0 && <span className="text-xs text-gray-700 ml-4 select-none">Arrastra clips o genera una misión...</span>}
                    {timeline.map((clip, idx) => (
                      <button
                        key={clip.timelineId}
                        onClick={() => setCurrentClipIndex(idx)}
                        className={`h-full min-w-[120px] ${clip.isGenerated ? clip.color : 'bg-blue-900/40'} border border-white/10 rounded mx-0.5 flex items-center justify-center relative cursor-pointer overflow-hidden ${currentClipIndex === idx ? 'ring-2 ring-yellow-500' : ''}`}
                      >
                         <span className="relative text-[10px] text-white font-medium z-10 truncate px-2">{clip.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
           </div>
        )}
      </div>

      {/* 3. AGENTE IA */}
      {activeView !== 'generator' && (
        <div className="w-80 border-l border-gray-800 bg-[#13141c] flex flex-col shadow-xl">
           <div className="h-12 border-b border-gray-800 flex items-center px-4 justify-between bg-[#1a1b26]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
              <span className="font-bold text-sm text-purple-400">AIRA COPILOT</span>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] rounded-2xl p-3 text-sm ${msg.sender === 'user' ? 'bg-purple-600 text-white' : 'bg-[#252836] border border-gray-700 text-gray-200'}`}>{msg.text}</div>
              </div>
            ))}
            {isProcessing && <div className="text-xs text-purple-400 animate-pulse">Pensando...</div>}
             <div ref={chatEndRef} />
          </div>
          <div className="p-4 bg-[#1a1b26] border-t border-gray-800">
             <form onSubmit={handleSendMessage} className="relative">
              <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Comandos IA..." className="w-full bg-[#0f1016] border border-gray-700 rounded-xl py-3 pl-3 pr-10 text-sm focus:border-purple-500 focus:outline-none text-white" />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-purple-500 hover:text-white"><Wand2 className="w-4 h-4" /></button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default VideoEditor;
