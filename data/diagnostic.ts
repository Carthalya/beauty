import { Product } from '@/types'

export interface DiagnosticQuestion {
  id: string
    question: string
      options: {
          value: string
              label: string
                }[]
                }

                export const skinQuestions: DiagnosticQuestion[] = [
                  {
                      id: 'hydration',
                          question: 'How does your skin feel after cleansing?',
                              options: [
                                    { value: 'tight', label: 'Tight and dry' },
                                          { value: 'comfortable', label: 'Comfortable' },
                                                { value: 'oily', label: 'Already getting oily' },
                                                      { value: 'mixed', label: 'Oily in T-zone, dry elsewhere' }
                                                          ]
                                                            },

                                                              {
                                                                  id: 'concerns',
                                                                      question: 'What is your primary skin concern?',
                                                                          options: [
                                                                                { value: 'aging', label: 'Fine lines & wrinkles' },
                                                                                      { value: 'acne', label: 'Breakouts & blemishes' },
                                                                                            { value: 'dullness', label: 'Dullness & uneven tone' },
                                                                                                  { value: 'sensitivity', label: 'Redness & sensitivity' }
                                                                                                      ]
                                                                                                        },

                                                                                                          {
                                                                                                              id: 'sun',
                                                                                                                  question: 'How often do you use sun protection?',
                                                                                                                      options: [
                                                                                                                            { value: 'daily', label: 'Every day' },
                                                                                                                                  { value: 'sometimes', label: 'Only when sunny' },
                                                                                                                                        { value: 'rarely', label: 'Rarely' },
                                                                                                                                              { value: 'never', label: 'Never' }
                                                                                                                                                  ]
                                                                                                                                                    }
                                                                                                                                                    ]

                                                                                                                                                    export const hairQuestions: DiagnosticQuestion[] = [
                                                                                                                                                      {
                                                                                                                                                          id: 'scalp',
                                                                                                                                                              question: 'How would you describe your scalp?',
                                                                                                                                                                  options: [
                                                                                                                                                                        { value: 'dry', label: 'Dry and tight' },
                                                                                                                                                                              { value: 'balanced', label: 'Balanced' },
                                                                                                                                                                                    { value: 'oily', label: 'Gets oily quickly' }
                                                                                                                                                                                        ]
                                                                                                                                                                                          },

                                                                                                                                                                                            {
                                                                                                                                                                                                id: 'damage',
                                                                                                                                                                                                    question: 'What is your main hair concern?',
                                                                                                                                                                                                        options: [
                                                                                                                                                                                                              { value: 'breakage', label: 'Breakage' },
                                                                                                                                                                                                                    { value: 'frizz', label: 'Frizz' },
                                                                                                                                                                                                                          { value: 'hairloss', label: 'Hair loss' },
                                                                                                                                                                                                                                { value: 'dryness', label: 'Dryness' }
                                                                                                                                                                                                                                    ]
                                                                                                                                                                                                                                      },

                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            id: 'styling',
                                                                                                                                                                                                                                                question: 'How often do you use heat styling?',
                                                                                                                                                                                                                                                    options: [
                                                                                                                                                                                                                                                          { value: 'daily', label: 'Every day' },
                                                                                                                                                                                                                                                                { value: 'weekly', label: 'A few times a week' },
                                                                                                                                                                                                                                                                      { value: 'rarely', label: 'Rarely' },
                                                                                                                                                                                                                                                                            { value: 'never', label: 'Never' }
                                                                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                  ]

                                                                                                                                                                                                                                                                                  export const diagnosticLoadingMessages = {
                                                                                                                                                                                                                                                                                    skin: [
                                                                                                                                                                                                                                                                                        'Analyzing skin texture...',
                                                                                                                                                                                                                                                                                            'Detecting hydration levels...',
                                                                                                                                                                                                                                                                                                'Generating skincare recommendations...'
                                                                                                                                                                                                                                                                                                  ],

                                                                                                                                                                                                                                                                                                    hair: [
                                                                                                                                                                                                                                                                                                        'Analyzing scalp condition...',
                                                                                                                                                                                                                                                                                                            'Detecting hair damage...',
                                                                                                                                                                                                                                                                                                                'Generating haircare recommendations...'
                                                                                                                                                                                                                                                                                                                  ]
                                                                                                                                                                                                                                                                                                                  }