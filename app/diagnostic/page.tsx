'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Scan, 
  Sparkles, 
  Upload, 
  Camera, 
  ChevronRight, 
  Check, 
  Droplets, 
  Sun, 
  Moon,
  RefreshCw
} from 'lucide-react'
import { products } from '@/data/products'
import { SkinType, Product } from '@/types'
import { useStore } from '@/lib/store/StoreProvider'
import { useTranslations } from '@/lib/i18n/useTranslations'
import { LuxuryButton } from '@/components/ui/luxury-button'
import { SectionHeader } from '@/components/ui/section-header'
import { ProductCard } from '@/components/store/ProductCard'
import { cn } from '@/lib/utils'

type DiagnosticType = 'skin' | 'hair'
type DiagnosticStep = 'select' | 'upload' | 'questions' | 'analyzing' | 'results'

interface QuestionOption {
    value: string
      label: string
        score?: {
            skinType?: SkinType
                concern?: string
                  }
                  }

                  interface SkinQuestion {
                    id: string
                      question: string
                        options: QuestionOption[]
                        }
const skinQuestions: SkinQuestion[] = [
    {
        id: 'hydration',
            question: 'How does your skin feel after cleansing?',
                options: [
                      {
                              value: 'tight',
                                      label: 'Tight and dry',
                                              score: {
                                                        skinType: 'dry',
                                                                  concern: 'Dehydration'
                                                                          }
                                                                                },
                                                                                      {
                                                                                              value: 'comfortable',
                                                                                                      label: 'Comfortable',
                                                                                                              score: {
                                                                                                                        skinType: 'normal',
                                                                                                                                  concern: 'Maintenance'
                                                                                                                                          }
                                                                                                                                                },
                                                                                                                                                      {
                                                                                                                                                              value: 'oily',
                                                                                                                                                                      label: 'Already getting oily',
                                                                                                                                                                              score: {
                                                                                                                                                                                        skinType: 'oily',
                                                                                                                                                                                                  concern: 'Excess Oil'
                                                                                                                                                                                                          }
                                                                                                                                                                                                                },
                                                                                                                                                                                                                      {
                                                                                                                                                                                                                              value: 'mixed',
                                                                                                                                                                                                                                      label: 'Oily in T-zone, dry elsewhere',
                                                                                                                                                                                                                                              score: {
                                                                                                                                                                                                                                                        skinType: 'combination',
                                                                                                                                                                                                                                                                  concern: 'Uneven Texture'
                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                    ]
                                                                                                                                                                                                                                                                                      },

                                                                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                                                                            id: 'concerns',
                                                                                                                                                                                                                                                                                                question: 'What is your primary skin concern?',
                                                                                                                                                                                                                                                                                                    options: [
                                                                                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                                                                                                  value: 'aging',
                                                                                                                                                                                                                                                                                                                          label: 'Fine lines & wrinkles',
                                                                                                                                                                                                                                                                                                                                  score: {
                                                                                                                                                                                                                                                                                                                                            concern: 'Aging'
                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                                                                                                                                                        value: 'acne',
                                                                                                                                                                                                                                                                                                                                                                                label: 'Breakouts & blemishes',
                                                                                                                                                                                                                                                                                                                                                                                        score: {
                                                                                                                                                                                                                                                                                                                                                                                                  concern: 'Acne'
                                                                                                                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                                                                                                                                                                                              value: 'dullness',
                                                                                                                                                                                                                                                                                                                                                                                                                                      label: 'Dullness & uneven tone',
                                                                                                                                                                                                                                                                                                                                                                                                                                              score: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                        concern: 'Dullness'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    value: 'sensitivity',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            label: 'Redness & sensitivity',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    score: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              skinType: 'sensitive',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        concern: 'Sensitivity'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  id: 'sun',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      question: 'How often do you use sun protection?',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          options: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        value: 'daily',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                label: 'Every day',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        score: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  concern: 'Protected Skin'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              value: 'sometimes',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      label: 'Only when sunny',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              score: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        concern: 'Sun Exposure'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    value: 'rarely',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            label: 'Rarely',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    score: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              concern: 'UV Damage'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          value: 'never',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  label: 'Never',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          score: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    concern: 'High UV Risk'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
]
const hairQuestions: SkinQuestion[] = [
  {
    id: 'hairTexture',
    question: 'How would you describe your hair?',
    options: [
      {
        value: 'dry',
        label: 'Dry & damaged',
        score: {
          concern: 'Dry Hair'
        }
      },
      {
        value: 'oily',
        label: 'Oily scalp',
        score: {
          concern: 'Oily Scalp'
        }
      },
      {
        value: 'frizzy',
        label: 'Frizzy & hard to manage',
        score: {
          concern: 'Frizz'
        }
      },
      {
        value: 'normal',
        label: 'Balanced & healthy',
        score: {
          concern: 'Healthy Hair'
        }
      }
    ]
  },

  {
    id: 'hairGoal',
    question: 'What is your main hair goal?',
    options: [
      {
        value: 'shine',
        label: 'More shine',
        score: {
          concern: 'Lack of Shine'
        }
      },
      {
        value: 'growth',
        label: 'Hair growth',
        score: {
          concern: 'Hair Growth'
        }
      },
      {
        value: 'repair',
        label: 'Repair damage',
        score: {
          concern: 'Hair Damage'
        }
      },
      {
        value: 'hydration',
        label: 'Deep hydration',
        score: {
          concern: 'Dry Hair'
        }
      }
    ]
  }
]

interface AnalysisResult {
  overallScore: number
  skinType: SkinType
  metrics: {
    name: string
    score: number
    description: string
  }[]
  concerns: string[]
  recommendations: Product[]
}

export default function DiagnosticPage() {
  const [diagnosticType, setDiagnosticType] = useState<DiagnosticType>('skin')
  const [step, setStep] = useState<DiagnosticStep>('select')
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null)

  const videoRef = useRef<HTMLVideoElement>(null)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [results, setResults] = useState<AnalysisResult | null>(null)
  
  const { locale, addToCart } = useStore()
  const { t } = useTranslations(locale)
  const isRTL = locale === 'ar'
  useEffect(() => {
    if (step === 'upload') {
        startCamera()
          }

            return () => {
                cameraStream?.getTracks().forEach(track => track.stop())
                  }
                  }, [step])
const startCamera = async () => {
  try {
      const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                    facingMode: 'user'
                          }
                              })

                                  setCameraStream(stream)

                                      if (videoRef.current) {
                                            videoRef.current.srcObject = stream
                                                }
                                                  } catch (error) {
                                                      console.error('Camera error:', error)
                                                        }
                                                        }
                                                        const capturePhoto = () => {
                                                          if (!videoRef.current || !canvasRef.current) return

                                                            const video = videoRef.current
                                                              const canvas = canvasRef.current

                                                                canvas.width = video.videoWidth
                                                                  canvas.height = video.videoHeight

                                                                    const ctx = canvas.getContext('2d')

                                                                      if (!ctx) return

                                                                        ctx.drawImage(video, 0, 0)

                                                                          const imageData = canvas.toDataURL('image/png')

                                                                            setUploadedImage(imageData)

                                                                              cameraStream?.getTracks().forEach(track => track.stop())

                                                                                setStep('questions')
                                                                                }
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string)
        setStep('questions')
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
    
  if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      runAnalysis()
    }
  }
const currentQuestions =
  diagnosticType === 'skin'
    ? skinQuestions
    : hairQuestions
const runAnalysis = () => {
  setStep('analyzing')

  setTimeout(() => {
    if (diagnosticType === 'skin') {
      const typeCounter: Record<string, number> = {}

      skinQuestions.forEach(question => {
        const selected = question.options.find(
          o => o.value === answers[question.id]
        )

        if (selected?.score?.skinType) {
          const type = selected.score.skinType

          typeCounter[type] = (typeCounter[type] || 0) + 1
        }
      })

      const detectedSkinType =
        (Object.entries(typeCounter).sort((a, b) => b[1] - a[1])[0]?.[0] as SkinType) ||
        'normal'

      const concerns = skinQuestions
        .map(q =>
          q.options.find(o => o.value === answers[q.id])?.score?.concern
        )
        .filter(Boolean) as string[]

      const recommendations = products.filter(product =>
        product.skinTypes?.includes(detectedSkinType)
      )

      setResults({
        overallScore: 82,
        skinType: detectedSkinType,
        metrics: [
          {
            name: 'Hydration',
            score: detectedSkinType === 'dry' ? 55 : 82,
            description: 'Skin hydration level'
          },
          {
            name: 'Texture',
            score: 75,
            description: 'Skin texture quality'
          },
          {
            name: 'Protection',
            score: 80,
            description: 'Barrier condition'
          }
        ],
        concerns,
        recommendations: recommendations.slice(0, 3)
      })
    } else {
      const hairConcerns = hairQuestions
        .map(q =>
          q.options.find(o => o.value === answers[q.id])?.score?.concern
        )
        .filter(Boolean) as string[]

      const recommendations = products.filter(
        p => p.category === 'haircare' || p.hairTypes
      )

      setResults({
        overallScore: 79,
        skinType: 'normal',
        metrics: [
          {
            name: 'Hydration',
            score: 70,
            description: 'Hair hydration'
          },
          {
            name: 'Damage',
            score: 65,
            description: 'Hair damage level'
          },
          {
            name: 'Shine',
            score: 84,
            description: 'Hair luminosity'
          }
        ],
        concerns: hairConcerns,
        recommendations: recommendations.slice(0, 3)
      })
    }

    setStep('results')
  }, 2500)
}

  const resetDiagnostic = () => {
    setStep('select')
    setUploadedImage(null)
    setAnswers({})
    setCurrentQuestion(0)
    setResults(null)
  }

  return (
    <div className="pt-24 min-h-screen" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="AI-Powered"
            title={t('diagnostic.title')}
            subtitle={t('diagnostic.description')}
            className="text-primary-foreground [&_span]:text-gold [&_p]:text-primary-foreground/70"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {/* Step: Select Type */}
            {step === 'select' && (
              <motion.div
                key="select"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {[
                  {
                    type: 'skin' as DiagnosticType,
                    title: t('diagnostic.skinDiagnostic'),
                    description: t('diagnostic.skinDescription'),
                    icon: Scan,
                    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80'
                  },
                  {
                    type: 'hair' as DiagnosticType,
                    title: t('diagnostic.hairDiagnostic'),
                    description: t('diagnostic.hairDescription'),
                    icon: Sparkles,
                    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80'
                  }
                ].map((option) => (
                  <motion.button
                    key={option.type}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setDiagnosticType(option.type)
                      setStep('upload')
                    }}
                    className={cn(
                      'relative overflow-hidden rounded-2xl border-2 transition-colors text-left group',
                      diagnosticType === option.type 
                        ? 'border-gold' 
                        : 'border-border hover:border-gold/50'
                    )}
                  >
                    <div className="relative h-48">
                      <Image
                        src={option.image}
                        alt={option.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                          <option.icon className="w-5 h-5 text-gold" />
                        </div>
                        <h3 className="font-serif text-xl">{option.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {option.description}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            )}

            {/* Step: Upload */}
{/* Step: Upload */}
{step === 'upload' && (
  <motion.div
      key="upload"
          initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                      className="max-w-2xl mx-auto"
                        >
                            <div className="text-center mb-8">
                                  <h2 className="font-serif text-3xl mb-4">
                                          {diagnosticType === 'skin'
                                                    ? 'Skin Scan'
                                                              : 'Hair Scan'}
                                                                    </h2>

                                                                          <p className="text-muted-foreground">
                                                                                  Position your face inside the frame and capture a clear image.
                                                                                        </p>
                                                                                            </div>

                                                                                                <div className="relative rounded-3xl overflow-hidden border border-border bg-black aspect-[4/5] max-w-md mx-auto">

                                                                                                      <video
                                                                                                              ref={videoRef}
                                                                                                                      autoPlay
                                                                                                                              playsInline
                                                                                                                                      muted
                                                                                                                                              className="w-full h-full object-cover"
                                                                                                                                                    />

                                                                                                                                                          <canvas
                                                                                                                                                                  ref={canvasRef}
                                                                                                                                                                          className="hidden"
                                                                                                                                                                                />

                                                                                                                                                                                      {/* Face Guide */}
                                                                                                                                                                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                                                                                                                                                                    <div className="w-[70%] h-[80%] border-2 border-white/50 rounded-[45%]" />
                                                                                                                                                                                                          </div>

                                                                                                                                                                                                              </div>

                                                                                                                                                                                                                  <div className="flex justify-center mt-8 gap-4">

                                                                                                                                                                                                                        <button
                                                                                                                                                                                                                                onClick={() => setStep('select')}
                                                                                                                                                                                                                                        className="px-6 py-3 border border-border rounded-full hover:border-gold transition-colors"
                                                                                                                                                                                                                                              >
                                                                                                                                                                                                                                                      Back
                                                                                                                                                                                                                                                            </button>

                                                                                                                                                                                                                                                                  <motion.button
                                                                                                                                                                                                                                                                          whileHover={{ scale: 1.05 }}
                                                                                                                                                                                                                                                                                  whileTap={{ scale: 0.95 }}
                                                                                                                                                                                                                                                                                          onClick={capturePhoto}
                                                                                                                                                                                                                                                                                                  className="w-20 h-20 rounded-full bg-gold flex items-center justify-center shadow-2xl"
                                                                                                                                                                                                                                                                                                        >
                                                                                                                                                                                                                                                                                                                <div className="w-16 h-16 rounded-full border-4 border-white" />
                                                                                                                                                                                                                                                                                                                      </motion.button>

                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                            </motion.div>
                                                                                                                                                                                                                                                                                                                            )}
            {/* Step: Questions */}
            {step === 'questions' && (
              <motion.div
                key="questions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-lg mx-auto"
              >
                {/* Progress */}
                <div className="mb-8">
<div className="flex justify-between text-sm text-muted-foreground mb-2">
  <span>Question {currentQuestion + 1} of {currentQuestions.length}</span>
  <span>{Math.round(((currentQuestion + 1) / currentQuestions.length) * 100)}%</span>
</div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
animate={{ width: `${((currentQuestion + 1) / currentQuestions.length) * 100}%` }}
                      className="h-full bg-gold"
                    />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                  >
                    <h2 className="font-serif text-2xl mb-8 text-center">
                    {currentQuestions[currentQuestion].question}
                    </h2>

                    <div className="space-y-3">
                    {currentQuestions[currentQuestion].options.map((option) => (
                        <button
                          key={option.value}
                          onClick={() =>
  handleAnswer(currentQuestions[currentQuestion].id, option.value)
}
                          className="w-full p-4 text-left border border-border rounded-xl hover:border-gold hover:bg-gold/5 transition-all flex items-center justify-between group"
                        >
                          <span>{option.label}</span>
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            )}

            {/* Step: Analyzing */}
            {step === 'analyzing' && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-lg mx-auto text-center py-16"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="w-20 h-20 rounded-full border-4 border-gold border-t-transparent mx-auto mb-8"
                />
                <h2 className="font-serif text-2xl mb-4">{t('diagnostic.analyzing')}</h2>
                <p className="text-muted-foreground">
                  Our AI is analyzing your profile to create personalized recommendations.
                </p>

                <div className="mt-8 space-y-3">
                  {['Analyzing skin texture', 'Detecting concerns', 'Generating recommendations'].map((text, i) => (
                    <motion.div
                      key={text}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.8 }}
                      className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="w-4 h-4 text-gold" />
                      {text}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step: Results */}
            {step === 'results' && results && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Score Card */}
                <div className="bg-card border border-border rounded-2xl p-8 mb-8">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative">
                      <svg className="w-40 h-40 transform -rotate-90">
                        <circle
                          cx="80"
                          cy="80"
                          r="70"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          className="text-secondary"
                        />
                        <motion.circle
                          cx="80"
                          cy="80"
                          r="70"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          strokeLinecap="round"
                          className="text-gold"
                          initial={{ strokeDasharray: '0 440' }}
                          animate={{ strokeDasharray: `${(results.overallScore / 100) * 440} 440` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 }}
                          className="font-serif text-4xl"
                        >
                          {results.overallScore}
                        </motion.span>
                        <span className="text-sm text-muted-foreground">{t('diagnostic.overallScore')}</span>
                      </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
<h2 className="font-serif text-2xl mb-2">
    {diagnosticType === 'skin'
        ? 'Your Skin Analysis'
            : 'Your Hair Analysis'}
            </h2>
            <p className="text-muted-foreground mb-4">
                {diagnosticType === 'skin' ? 'Skin Type:' : 'Hair Profile:'}

                  <span className="text-gold capitalize ml-2">
                      {results.skinType}
                        </span>
                        </p>
                      <div className="flex flex-wrap gap-2">
                        {results.concerns.map((concern) => (
                          <span
                            key={concern}
                            className="px-3 py-1 bg-secondary rounded-full text-sm"
                          >
                            {concern}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                  {results.metrics.map((metric, index) => (
                    <motion.div
                      key={metric.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-card border border-border rounded-xl p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{metric.name}</span>
                        <span className="text-sm text-gold">{metric.score}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${metric.score}%` }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="h-full bg-gold"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">{metric.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Routine */}
<div className="mb-12">
    <h3 className="font-serif text-2xl mb-6 text-center">
        {diagnosticType === 'skin'
              ? t('diagnostic.routine')
                    : 'Hair Care Routine'}
                      </h3>

                        {diagnosticType === 'skin' ? (
                            <div className="grid md:grid-cols-2 gap-6">
                                  <div className="bg-card border border-border rounded-xl p-6">
                                          <div className="flex items-center gap-3 mb-4">
                                                    <Sun className="w-5 h-5 text-gold" />
                                                              <h4 className="font-medium">{t('diagnostic.morning')}</h4>
                                                                      </div>

                                                                              <ol className="space-y-3">
                                                                                        {[
                                                                                                    'Gentle Cleanser',
                                                                                                                'Vitamin C Serum',
                                                                                                                            'Hydrating Moisturizer',
                                                                                                                                        'SPF 50'
                                                                                                                                                  ].map((step, i) => (
                                                                                                                                                              <li key={step} className="flex items-center gap-3">
                                                                                                                                                                            <span className="w-6 h-6 rounded-full bg-gold/10 text-gold text-xs flex items-center justify-center">
                                                                                                                                                                                            {i + 1}
                                                                                                                                                                                                          </span>
                                                                                                                                                                                                                        <span className="text-sm">{step}</span>
                                                                                                                                                                                                                                    </li>
                                                                                                                                                                                                                                              ))}
                                                                                                                                                                                                                                                      </ol>
                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                  <div className="bg-card border border-border rounded-xl p-6">
                                                                                                                                                                                                                                                                          <div className="flex items-center gap-3 mb-4">
                                                                                                                                                                                                                                                                                    <Moon className="w-5 h-5 text-gold" />
                                                                                                                                                                                                                                                                                              <h4 className="font-medium">{t('diagnostic.evening')}</h4>
                                                                                                                                                                                                                                                                                                      </div>

                                                                                                                                                                                                                                                                                                              <ol className="space-y-3">
                                                                                                                                                                                                                                                                                                                        {[
                                                                                                                                                                                                                                                                                                                                    'Oil Cleanser',
                                                                                                                                                                                                                                                                                                                                                'Gentle Cleanser',
                                                                                                                                                                                                                                                                                                                                                            'Retinol Serum',
                                                                                                                                                                                                                                                                                                                                                                        'Night Cream'
                                                                                                                                                                                                                                                                                                                                                                                  ].map((step, i) => (
                                                                                                                                                                                                                                                                                                                                                                                              <li key={step} className="flex items-center gap-3">
                                                                                                                                                                                                                                                                                                                                                                                                            <span className="w-6 h-6 rounded-full bg-gold/10 text-gold text-xs flex items-center justify-center">
                                                                                                                                                                                                                                                                                                                                                                                                                            {i + 1}
                                                                                                                                                                                                                                                                                                                                                                                                                                          </span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                        <span className="text-sm">{step}</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </ol>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ) : (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <div className="grid md:grid-cols-2 gap-6">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div className="bg-card border border-border rounded-xl p-6">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <div className="flex items-center gap-3 mb-4">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <Droplets className="w-5 h-5 text-gold" />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <h4 className="font-medium">Hair Wash Routine</h4>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <ol className="space-y-3">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  {[
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              'Gentle Shampoo',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          'Hydrating Conditioner',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      'Hair Mask'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ].map((step, i) => (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <li key={step} className="flex items-center gap-3">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <span className="w-6 h-6 rounded-full bg-gold/10 text-gold text-xs flex items-center justify-center">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          {i + 1}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <span className="text-sm">{step}</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </ol>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <div className="bg-card border border-border rounded-xl p-6">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <div className="flex items-center gap-3 mb-4">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <Sparkles className="w-5 h-5 text-gold" />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <h4 className="font-medium">Daily Care</h4>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <ol className="space-y-3">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      {[
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  'Apply Hair Serum',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              'Use Heat Protection',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          'Massage Scalp'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ].map((step, i) => (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <li key={step} className="flex items-center gap-3">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <span className="w-6 h-6 rounded-full bg-gold/10 text-gold text-xs flex items-center justify-center">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              {i + 1}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <span className="text-sm">{step}</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </ol>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    )}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>

                {/* Recommendations */}
                <div>
                  <h3 className="font-serif text-2xl mb-6 text-center">{t('diagnostic.recommendations')}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {results.recommendations.map((product, index) => (
                      <ProductCard key={product.id} product={product} index={index} />
                    ))}
                  </div>
                </div>

                {/* Reset */}
                <div className="text-center mt-12">
                  <button
                    onClick={resetDiagnostic}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Take Another Diagnostic
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
