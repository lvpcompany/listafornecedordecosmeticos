import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import './App.css'

// Importando assets
import listaMaquiagem from './assets/lista_fornecedores_maquiagem.png'
import pagamentoSeguro from './assets/pagamento_seguro.png'
import bonusMentoria from './assets/bonus_mentoria.png'
import garantia15Dias from './assets/garantia_15_dias.png'

function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [loading, setLoading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
    
    if (currentStep === 6) {
      // Após a última pergunta do quiz, mostrar loading
      setLoading(true)
      setLoadingProgress(0)
      
      // Simular progresso de loading
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            setLoading(false)
            setCurrentStep(currentStep + 1)
            return 100
          }
          return prev + 10
        })
      }, 200)
    } else {
      setCurrentStep(currentStep + 1)
    }
  }

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  // Tela inicial
  if (currentStep === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center p-4 quiz-container">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-pink-500 mb-2">Vivendo</h1>
            <h2 className="text-3xl font-bold text-pink-400">de Make</h2>
          </div>
          <div className="w-full progress-bar h-2 rounded-full mb-8"></div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            Fornecedores de Maquiagem BRAIP
          </h3>
          <Button 
            onClick={nextStep}
            className="quiz-button bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg rounded-full"
          >
            Estou Pronta
          </Button>
        </div>
      </div>
    )
  }

  // Pergunta 1
  if (currentStep === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center p-4 quiz-container">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-pink-500 mb-2">Vivendo</h1>
            <h2 className="text-3xl font-bold text-pink-400">de Make</h2>
          </div>
          <div className="w-full progress-bar h-2 rounded-full mb-8"></div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Você consegue comprar maquiagens com facilidade?
          </h3>
          <p className="text-gray-600 mb-8">Seja sincera é importante.</p>
          <div className="space-y-4">
            <Button 
              onClick={() => handleAnswer('q1', 'dificil')}
              className="quiz-button w-full bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg text-left"
            >
              😔 Não, e tá difícil conseguir.
            </Button>
            <Button 
              onClick={() => handleAnswer('q1', 'sites')}
              className="quiz-button w-full bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-lg text-left"
            >
              😑 Compro em sites/catálogos.
            </Button>
            <Button 
              onClick={() => handleAnswer('q1', 'caras')}
              className="quiz-button w-full bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-lg text-left"
            >
              😪 Só encontro maquiagens caras.
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Pergunta 2
  if (currentStep === 2) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center p-4 quiz-container">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-pink-500 mb-2">Vivendo</h1>
            <h2 className="text-3xl font-bold text-pink-400">de Make</h2>
          </div>
          <div className="w-full progress-bar h-2 rounded-full mb-8"></div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Qual é o seu maior obstáculo?
          </h3>
          <p className="text-gray-600 mb-8">Seja sincera...</p>
          <div className="space-y-4">
            <Button 
              onClick={() => handleAnswer('q2', 'capital')}
              className="quiz-button w-full bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg text-left"
            >
              💰 Falta de capital
            </Button>
            <Button 
              onClick={() => handleAnswer('q2', 'conhecimento')}
              className="quiz-button w-full bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-lg text-left"
            >
              😥 Falta de conhecimento
            </Button>
            <Button 
              onClick={() => handleAnswer('q2', 'tempo')}
              className="quiz-button w-full bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-lg text-left"
            >
              😕 Falta de tempo
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Pergunta 3
  if (currentStep === 3) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center p-4 quiz-container">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-pink-500 mb-2">Vivendo</h1>
            <h2 className="text-3xl font-bold text-pink-400">de Make</h2>
          </div>
          <div className="w-full progress-bar h-2 rounded-full mb-8"></div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Você quer começar sua vida de empresária?
          </h3>
          <p className="text-gray-600 mb-8">Descubra o segredo das empresárias de sucesso!</p>
          <div className="space-y-4">
            <Button 
              onClick={() => handleAnswer('q3', 'sim_nao_sei')}
              className="quiz-button w-full bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg text-left"
            >
              😫 Sim, mas não sei como começar
            </Button>
            <Button 
              onClick={() => handleAnswer('q3', 'talvez')}
              className="quiz-button w-full bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-lg text-left"
            >
              🤷 Talvez
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Tela de transição "Continuar"
  if (currentStep === 4) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center p-4 quiz-container">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-pink-500 mb-2">Vivendo</h1>
            <h2 className="text-3xl font-bold text-pink-400">de Make</h2>
          </div>
          <div className="w-full progress-bar h-2 rounded-full mb-8"></div>
          <Button 
            onClick={nextStep}
            className="quiz-button bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg rounded-full"
          >
            Continuar
          </Button>
        </div>
      </div>
    )
  }

  // Pergunta 4
  if (currentStep === 5) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center p-4 quiz-container">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-pink-500 mb-2">Vivendo</h1>
            <h2 className="text-3xl font-bold text-pink-400">de Make</h2>
          </div>
          <div className="w-full progress-bar h-2 rounded-full mb-8"></div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Quanto você gostaria de faturar por mês?
          </h3>
          <p className="text-gray-600 mb-8">Seja sincera...</p>
          <div className="space-y-4">
            <Button 
              onClick={() => handleAnswer('q4', '3000')}
              className="quiz-button w-full bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg text-left"
            >
              💸 Acima de R$ 3.000 por mês.
            </Button>
            <Button 
              onClick={() => handleAnswer('q4', '5000_8000')}
              className="quiz-button w-full bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-lg text-left"
            >
              🤑 Entre R$ 5.000 e R$ 8.000 por mês.
            </Button>
            <Button 
              onClick={() => handleAnswer('q4', '10000')}
              className="quiz-button w-full bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-lg text-left"
            >
              💰 Acima de R$ 10.000 por mês.
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Pergunta 5
  if (currentStep === 6) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center p-4 quiz-container">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-pink-500 mb-2">Vivendo</h1>
            <h2 className="text-3xl font-bold text-pink-400">de Make</h2>
          </div>
          <div className="w-full progress-bar h-2 rounded-full mb-8"></div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Você tem certeza que quer começar?
          </h3>
          <p className="text-gray-600 mb-8">Seja sincera...</p>
          <div className="space-y-4">
            <Button 
              onClick={() => handleAnswer('q5', 'sim_certeza')}
              className="quiz-button w-full bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg text-left"
            >
              😃 Sim, com certeza!
            </Button>
            <Button 
              onClick={() => handleAnswer('q5', 'nao_certeza')}
              className="quiz-button w-full bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-lg text-left"
            >
              🤔 Não tenho certeza
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Pergunta 6
  if (currentStep === 7) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center p-4 quiz-container">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-pink-500 mb-2">Vivendo</h1>
            <h2 className="text-3xl font-bold text-pink-400">de Make</h2>
          </div>
          <div className="w-full progress-bar h-2 rounded-full mb-8"></div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Você quer começar a sua vida de empresária?
          </h3>
          <p className="text-gray-600 mb-8">Descubra o segredo das empresárias de sucesso!</p>
          <div className="space-y-4">
            <Button 
              onClick={() => handleAnswer('q6', 'sim_empresaria')}
              className="quiz-button w-full bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg text-left"
            >
              🤑 Sim, quero começar a vida de empresária!
            </Button>
            <Button 
              onClick={() => handleAnswer('q6', 'sim_ritmo')}
              className="quiz-button w-full bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-lg text-left"
            >
              😊 Sim, mas no meu ritmo
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Tela de Loading
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center p-4 quiz-container">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-pink-500 mb-2">Vivendo</h1>
            <h2 className="text-3xl font-bold text-pink-400">de Make</h2>
          </div>
          <div className="w-full progress-bar h-2 rounded-full mb-8"></div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Carregando...</h3>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div 
              className="loading-bar h-4 rounded-full transition-all duration-300"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600">{loadingProgress}%</p>
          <p className="text-center text-gray-800 mt-4">
            Estou analisando suas respostas e gerando um planejamento estratégico!
          </p>
        </div>
      </div>
    )
  }

  // Tela de Resultado
  if (currentStep === 8) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center p-4 quiz-container">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-pink-500 mb-2">Vivendo</h1>
            <h2 className="text-3xl font-bold text-pink-400">de Make</h2>
          </div>
          <div className="w-full progress-bar h-2 rounded-full mb-8"></div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Perfil Analisado.</h3>
          <p className="text-gray-600 mb-4">Baseado em suas respostas...</p>
          <p className="text-sm text-gray-800 mb-6">
            Esse é seu potencial atual para ter sucesso como empresária no ramo de cosméticos:
          </p>
          
          {/* Gráfico simples */}
          <div className="relative mb-8">
            <div className="chart-container w-full h-32 rounded-lg relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Você
                </div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              <span>Baixo</span>
              <span>Médio</span>
              <span>Alto</span>
            </div>
          </div>

          <div className="bg-green-500 text-white p-4 rounded-lg mb-4">
            <p className="text-sm font-bold">
              SEU PLANEJAMENTO ESTÁ QUASE PRONTO! Para DEFINIRMOS o melhor planejamento, 
              Seja sincera nas próximas TRÊS perguntas.
            </p>
          </div>
          
          <Button 
            onClick={nextStep}
            className="quiz-button bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg rounded-full"
          >
            Continuar
          </Button>
        </div>
      </div>
    )
  }

  // Pergunta 7
  if (currentStep === 9) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center p-4 quiz-container">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-pink-500 mb-2">Vivendo</h1>
            <h2 className="text-3xl font-bold text-pink-400">de Make</h2>
          </div>
          <div className="w-full progress-bar h-2 rounded-full mb-8"></div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Você tem acesso a um celular ou um computador com internet para aprender o método?
          </h3>
          <p className="text-gray-600 mb-8">Seja sincera é importante.</p>
          <div className="space-y-4">
            <Button 
              onClick={() => handleAnswer('q7', 'ambos')}
              className="quiz-button w-full bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg text-left"
            >
              📱💻 Sim, tenho ambos
            </Button>
            <Button 
              onClick={() => handleAnswer('q7', 'um_deles')}
              className="quiz-button w-full bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-lg text-left"
            >
              📱 Tenho apenas um deles
            </Button>
            <Button 
              onClick={() => handleAnswer('q7', 'nao_tenho')}
              className="quiz-button w-full bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-lg text-left"
            >
              ❌ Não tenho acesso no momento
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Pergunta 8
  if (currentStep === 10) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center p-4 quiz-container">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-pink-500 mb-2">Vivendo</h1>
            <h2 className="text-3xl font-bold text-pink-400">de Make</h2>
          </div>
          <div className="w-full progress-bar h-2 rounded-full mb-8"></div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Quanto tempo você pode dedicar por dia ao seu novo negócio?
          </h3>
          <p className="text-gray-600 mb-8">Seja sincera...</p>
          <div className="space-y-4">
            <Button 
              onClick={() => handleAnswer('q8', '30min_1h')}
              className="quiz-button w-full bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg text-left"
            >
              🙂 Entre 30min e 1h por dia
            </Button>
            <Button 
              onClick={() => handleAnswer('q8', '2h')}
              className="quiz-button w-full bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-lg text-left"
            >
              😀 2 Horas por dia
            </Button>
            <Button 
              onClick={() => handleAnswer('q8', 'menos_30min')}
              className="quiz-button w-full bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-lg text-left"
            >
              😉 Menos de 30 min por dia
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Pergunta 9
  if (currentStep === 11) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center p-4 quiz-container">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-pink-500 mb-2">Vivendo</h1>
            <h2 className="text-3xl font-bold text-pink-400">de Make</h2>
          </div>
          <div className="w-full progress-bar h-2 rounded-full mb-8"></div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Você se compromete a seguir o plano que vamos desenvolver para você?
          </h3>
          <p className="text-gray-600 mb-8">Seja sincera...</p>
          <div className="space-y-4">
            <Button 
              onClick={() => handleAnswer('q9', 'sim_comprometo')}
              className="quiz-button w-full bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg text-left"
            >
              🤩 Sim, me comprometo.
            </Button>
            <Button 
              onClick={() => handleAnswer('q9', 'duvidas')}
              className="quiz-button w-full bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-lg text-left"
            >
              🤔 Tenho dúvidas se vou conseguir.
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Tela Final - Depoimentos
  if (currentStep === 12) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center p-4 quiz-container">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-pink-500 mb-2">Vivendo</h1>
            <h2 className="text-3xl font-bold text-pink-400">de Make</h2>
          </div>
          <div className="w-full progress-bar h-2 rounded-full mb-8"></div>
          
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            Elas já estão faturando + de R$ 3 mil em 30 dias e você?
          </h3>

          {/* Simulação de conversa WhatsApp */}
          <div className="bg-green-100 p-4 rounded-lg mb-6 text-left">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-pink-400 rounded-full mr-2"></div>
              <span className="font-bold text-sm">Julia - Aluna VRC</span>
            </div>
            <div className="whatsapp-message bg-white p-3 rounded-lg mb-2">
              <p className="text-sm">Oi Ana tudo bem?</p>
              <p className="text-sm">Passando aqui para agradecer!</p>
              <span className="text-xs text-gray-500">20:53</span>
            </div>
            <div className="whatsapp-message bg-white p-3 rounded-lg mb-2">
              <div className="w-full h-32 bg-gray-200 rounded-lg mb-2 flex items-center justify-center">
                <span className="text-gray-500">📦 Imagem do produto</span>
              </div>
              <p className="text-sm">Fiz o pedido e chegou tudo certinho!</p>
              <span className="text-xs text-gray-500">20:53</span>
            </div>
            <div className="bg-green-200 p-3 rounded-lg">
              <p className="text-sm">Agora essa revenda vem com tudo!</p>
              <span className="text-xs text-gray-500">20:53 ✓✓</span>
            </div>
          </div>

          <h4 className="text-lg font-bold text-gray-800 mb-4">
            Veja o depoimento da Aline enquanto seu plano é finalizado...
          </h4>

          {/* Placeholder para vídeo */}
          <div className="w-full h-48 bg-black rounded-lg mb-6 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">▶</span>
              </div>
              <p className="text-sm">Vídeo de depoimento</p>
            </div>
          </div>

          <Button 
            onClick={nextStep}
            className="quiz-button bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-lg rounded-full w-full"
          >
            VER MEU PLANO PERSONALIZADO!
          </Button>
        </div>
      </div>
    )
  }

  // Página de Vendas
  if (currentStep === 13) {
    return (
      <div className="min-h-screen bg-white quiz-container">
        {/* Header */}
        <div className="bg-gradient-to-b from-pink-50 to-white p-4 text-center">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-pink-500 mb-1">Vivendo</h1>
            <h2 className="text-2xl font-bold text-pink-400">de Make</h2>
          </div>
          <div className="w-full max-w-md mx-auto progress-bar h-2 rounded-full mb-4"></div>
          
          <div className="testimonial-notification bg-pink-100 p-3 rounded-lg mb-4 max-w-md mx-auto">
            <p className="text-pink-700 font-bold text-sm">Resgate agora seu desconto</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto p-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Seu Plano está pronto
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Os melhores produtos e fornecedores para você começar a vida de empresária de sucesso!
          </p>

          {/* Gráfico comparativo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-end space-x-8">
              <div className="text-center">
                <div className="bg-red-500 h-16 w-16 rounded-lg mb-2 flex items-center justify-center quiz-button">
                  <span className="text-white font-bold">20%</span>
                </div>
                <p className="font-bold">HOJE</p>
                <p className="text-sm text-gray-600">Você com pouco dinheiro sem conhecimento e perdida!</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500 h-32 w-16 rounded-lg mb-2 flex items-center justify-center quiz-button">
                  <span className="text-white font-bold">97%</span>
                </div>
                <p className="font-bold">Em 30 dias</p>
                <p className="text-sm text-gray-600">Você vivendo 100% da revenda de cosméticos e faturando mais de R$5.000 em casa!</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Transforme Seu Sonho em Realidade:
          </h3>
          <h4 className="text-2xl font-bold text-center text-pink-500 mb-8">
            ACESSO A FORNECEDORES DE FÁBRICA.
          </h4>

          {/* Imagem do produto */}
          <div className="text-center mb-8">
            <img 
              src={listaMaquiagem} 
              alt="Lista de Fornecedores de Maquiagem" 
              className="mx-auto w-64 h-64 object-contain quiz-button"
            />
          </div>

          <h5 className="text-xl font-bold text-center text-green-600 mb-4">
            INCLUSO NO SEU PLANO:
          </h5>

          <div className="space-y-2 mb-8">
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✅</span>
              <span>+100 Fornecedores <strong>direto da fábrica</strong>. (atualizado)</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✅</span>
              <span>30 Fornecedores <strong>de Bijouterias</strong></span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✅</span>
              <span>25 Produtos <strong>validados fáceis de vender!</strong></span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✅</span>
              <span>Fornecedores <strong>para lojas de preço único</strong>.</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✅</span>
              <span>Fornecedores de <strong>perfumes árabe</strong></span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✅</span>
              <span><strong>ACESSO IMEDIATO!</strong></span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✅</span>
              <span>Estratégias de vendas</span>
            </div>
          </div>

          <div className="bg-red-500 text-white p-2 rounded-lg text-center mb-4">
            <p className="font-bold">DESCONTO EXCLUSIVO APENAS AGORA!</p>
          </div>

          {/* Preço */}
          <div className="price-highlight text-center mb-6">
            <p className="text-lg font-bold mb-2">OFERTA!!!</p>
            <p className="text-lg font-bold mb-2">POR TEMPO LIMITADO!</p>
            <p className="text-lg mb-2">DE <span className="line-through text-red-200">R$97</span> POR</p>
            <p className="text-sm mb-2">apenas</p>
            <p className="text-4xl font-bold mb-2">27,90</p>
            <p className="text-sm mb-4">Pix ou cartão</p>
            <div className="bg-green-600 text-white p-2 rounded-lg">
              <p className="text-sm">90% off</p>
              <p className="text-lg font-bold">R$ 27,90</p>
              <p className="text-sm">à vista</p>
            </div>
          </div>

          <Button className="quiz-button w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg font-bold rounded-lg mb-6">
            RECEBER A LISTA COMPLETA AGORA!
          </Button>

          <p className="text-center text-sm text-gray-600 mb-6">
            <strong>Envio Imediato após a COMPRA</strong> via E-mail!
          </p>

          <div className="testimonial-notification text-center mb-6 p-3 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Mariana</strong> acabou de comprar a lista via <strong>Instagram!</strong>
            </p>
            <p className="text-sm text-gray-600">
              Corra! Faltam apenas <strong>3</strong> ofertas disponíveis nessa promoção
            </p>
          </div>

          {/* Selo de pagamento seguro */}
          <div className="text-center mb-8">
            <img 
              src={pagamentoSeguro} 
              alt="Pagamento 100% Seguro" 
              className="mx-auto w-24 h-24 object-contain quiz-button"
            />
          </div>

          <h5 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Bônus Exclusivo Hoje!
          </h5>

          <div className="text-center mb-6">
            <img 
              src={bonusMentoria} 
              alt="Bônus Mentoria" 
              className="mx-auto w-64 h-64 object-contain quiz-button"
            />
          </div>

          <p className="text-center text-gray-700 mb-6">
            <strong>Adquirindo a lista, somente hoje, você recebe gratuitamente todo o nosso conteúdo de mentoria:</strong>
          </p>

          <p className="text-center text-gray-600 mb-6">
            Guia Fature R$ 500,00 em 48h - Aprenda como e onde vender - Como produzir conteúdo - 
            Controle financeiro - Atendimento ao cliente e muito mais...
          </p>

          <Button className="quiz-button w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg font-bold rounded-lg mb-8">
            RECEBER A LISTA COM BÔNUS AGORA!
          </Button>

          <div className="text-center mb-6">
            <img 
              src={garantia15Dias} 
              alt="Garantia 15 Dias" 
              className="mx-auto w-32 h-32 object-contain quiz-button"
            />
          </div>

          <h5 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Satisfação garantida!
          </h5>

          <p className="text-gray-700 mb-4">
            Você adquire agora o acesso completo do método Viver de Cosméticos pela CONDIÇÃO ESPECIAL DE R$27,90 E TEM 15 DIAS PARA AVALIAR.
          </p>

          <p className="text-gray-700 mb-4">
            Se por algum motivo você achar que este material não é para você, ou que não vale o investimento, 
            basta me enviar uma mensagem que devolvo integralmente o seu dinheiro.
          </p>

          <p className="text-center font-bold text-gray-800 mb-4">
            AGORA A DECISÃO DE MUDAR DE VIDA É SUA!
          </p>

          <p className="text-gray-700 mb-4">
            Eu estou tirando todo o risco das suas mãos e colocando nas minhas.
          </p>

          <p className="text-gray-700 mb-6">
            Faça sua inscrição agora mesmo e veja com seus próprios olhos.
          </p>

          <Button className="quiz-button w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg font-bold rounded-lg mb-8">
            QUERO A LISTA COM BÔNUS AGORA!
          </Button>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500 space-y-2">
            <p>©Vivendo de Make - Todos os direitos reservados.</p>
            <p>
              Este material é <strong>registrado e protegido pela Lei de Direitos Autorais.</strong> A reprodução, 
              distribuição ou compartilhamento não autorizado, total ou parcial, deste conteúdo, sem a devida permissão, 
              está sujeito às penalidades previstas na <strong>Lei n°9.610/98.</strong>
            </p>
            <p>
              <strong>Aviso Legal:</strong> Qualquer uso indevido do material, incluindo revenda não autorizada, 
              reprodução ou distribuição sem consentimento, poderá resultar em sanções legais e medidas judiciais cabíveis.
            </p>
            <p>Contato e Suporte: sandrarhvagas@gmail.com</p>
            <p>Whatsapp: 88985640077</p>
            <p>© 2025 - Criado via inlead.digital | Central de anúncios</p>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default App

