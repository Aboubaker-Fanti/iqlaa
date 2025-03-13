import { Question } from '../types';

export const allQuestions: Question[] = [
  // FTND Questions
  {
    id: 'ftnd_1',
    text: '⏰ How soon after waking up do you reach for your first cigarette?',
    options: [
      { value: 3, text: '🏃‍♂️ Within 5 minutes - Can\'t wait!' },
      { value: 2, text: '⏱️ 6-30 minutes - Pretty soon' },
      { value: 1, text: '☕ 31-60 minutes - After my coffee' },
      { value: 0, text: '🌅 After 60 minutes - I\'m pretty relaxed about it' }
    ],
    category: 'FTND'
  },
  {
    id: 'ftnd_2',
    text: '🚫 Do you struggle to avoid smoking in no-smoking areas?',
    options: [
      { value: 1, text: '😅 Yes - It\'s really tough' },
      { value: 0, text: '😎 No - I can handle it' }
    ],
    category: 'FTND'
  },
  {
    id: 'ftnd_3',
    text: '🤔 Which cigarette would be the hardest to give up?',
    options: [
      { value: 1, text: '🌅 The first one in the morning' },
      { value: 0, text: '🌙 Any other during the day' }
    ],
    category: 'FTND'
  },
  {
    id: 'ftnd_4',
    text: '📊 How many cigarettes do you smoke per day?',
    options: [
      { value: 3, text: '🔥 31 or more' },
      { value: 2, text: '💨 21-30' },
      { value: 1, text: '🚬 11-20' },
      { value: 0, text: '📉 10 or less' }
    ],
    category: 'FTND'
  },
  // HONC Questions
  {
    id: 'honc_1',
    text: '💪 Have you tried to quit smoking but couldn\'t make it stick?',
    options: [
      { value: 1, text: '😔 Yes - It\'s been challenging' },
      { value: 0, text: '🎯 No - Haven\'t tried yet' }
    ],
    category: 'HONC'
  },
  {
    id: 'honc_2',
    text: '🤷‍♂️ Do you smoke now because it\'s really hard to quit?',
    options: [
      { value: 1, text: '😩 Yes - It\'s tough to stop' },
      { value: 0, text: '🌟 No - Other reasons' }
    ],
    category: 'HONC'
  },
  {
    id: 'honc_3',
    text: '😴 Have you ever felt like you really needed a cigarette?',
    options: [
      { value: 1, text: '🎯 Yes - Often feel this way' },
      { value: 0, text: '✨ No - Not really' }
    ],
    category: 'HONC'
  },
  // GN-SBQ Questions
  {
    id: 'gnsbq_1',
    text: '🌪️ Do you smoke more during stress?',
    options: [
      { value: 4, text: '😰 Always - It\'s my stress relief' },
      { value: 3, text: '😟 Often' },
      { value: 2, text: '🤔 Sometimes' },
      { value: 1, text: '😌 Rarely' },
      { value: 0, text: '😊 Never' }
    ],
    category: 'GN-SBQ'
  },
  {
    id: 'gnsbq_2',
    text: '🎭 Do you smoke to avoid negative emotions?',
    options: [
      { value: 4, text: '💔 Always - It helps me cope' },
      { value: 3, text: '😢 Often' },
      { value: 2, text: '🤷‍♂️ Sometimes' },
      { value: 1, text: '🌟 Rarely' },
      { value: 0, text: '💪 Never' }
    ],
    category: 'GN-SBQ'
  },
  // MTQS Questions
  {
    id: 'mtqs_1',
    text: '🎯 How motivated are you to quit smoking?',
    options: [
      { value: 3, text: '🚀 Very motivated - Ready to quit!' },
      { value: 2, text: '🌱 Somewhat motivated' },
      { value: 1, text: '🤔 Thinking about it' },
      { value: 0, text: '😴 Not motivated right now' }
    ],
    category: 'MTQS'
  },
  {
    id: 'mtqs_2',
    text: '💭 If you decided to quit now, how confident are you that you would succeed?',
    options: [
      { value: 3, text: '💪 Very confident - I can do this!' },
      { value: 2, text: '🌟 Somewhat confident' },
      { value: 1, text: '😟 Not very confident' },
      { value: 0, text: '😔 Not confident at all' }
    ],
    category: 'MTQS'
  },
  // Emotional Triggers
  {
    id: 'trigger_1',
    text: '🎉 Do you automatically smoke during social gatherings?',
    options: [
      { value: 3, text: '🔄 Always - It\'s automatic' },
      { value: 2, text: '👥 Usually' },
      { value: 1, text: '🤔 Sometimes' },
      { value: 0, text: '🚫 Never' }
    ],
    category: 'TRIGGERS'
  },
  {
    id: 'trigger_2',
    text: '☕ Do you always smoke with your morning coffee/tea?',
    options: [
      { value: 3, text: '✨ Yes - It\'s my morning ritual' },
      { value: 2, text: '🌅 Most mornings' },
      { value: 1, text: '📅 Occasionally' },
      { value: 0, text: '🚫 Never' }
    ],
    category: 'TRIGGERS'
  },
  // Physical Dependence
  {
    id: 'physical_1',
    text: '🤒 Do you get headaches when you go too long without smoking?',
    options: [
      { value: 3, text: '😖 Always - It\'s really uncomfortable' },
      { value: 2, text: '😕 Often' },
      { value: 1, text: '🤔 Sometimes' },
      { value: 0, text: '😊 Never' }
    ],
    category: 'PHYSICAL'
  },
  {
    id: 'physical_2',
    text: '😤 Do you get irritable when you can\'t smoke?',
    options: [
      { value: 3, text: '😠 Very irritable' },
      { value: 2, text: '😟 Somewhat irritable' },
      { value: 1, text: '😐 A little' },
      { value: 0, text: '😊 Not at all' }
    ],
    category: 'PHYSICAL'
  },
  // Lifestyle Impact
  {
    id: 'lifestyle_1',
    text: '💰 Have you ever chosen to buy cigarettes instead of something else you needed?',
    options: [
      { value: 3, text: '😔 Yes, often' },
      { value: 2, text: '🤔 Sometimes' },
      { value: 1, text: '📅 Rarely' },
      { value: 0, text: '💪 Never' }
    ],
    category: 'LIFESTYLE'
  },
  {
    id: 'lifestyle_2',
    text: '🏃‍♂️ Has smoking affected your physical activities or sports?',
    options: [
      { value: 3, text: '😮‍💨 Yes, significantly' },
      { value: 2, text: '🤔 Somewhat' },
      { value: 1, text: '🌱 A little bit' },
      { value: 0, text: '💪 Not at all' }
    ],
    category: 'LIFESTYLE'
  },
  // Health Awareness
  {
    id: 'health_1',
    text: '🫁 Have you noticed any breathing problems since you started smoking?',
    options: [
      { value: 3, text: '😔 Yes, significant problems' },
      { value: 2, text: '😕 Some problems' },
      { value: 1, text: '🤔 Minor issues' },
      { value: 0, text: '😊 No problems' }
    ],
    category: 'HEALTH'
  },
  {
    id: 'health_2',
    text: '👃 Has your sense of smell or taste changed since you started smoking?',
    options: [
      { value: 3, text: '😔 Yes, dramatically' },
      { value: 2, text: '👎 Somewhat' },
      { value: 1, text: '🤔 A little bit' },
      { value: 0, text: '😊 No change' }
    ],
    category: 'HEALTH'
  }
];