import { Question } from '../types';

export const allQuestionsAr: Question[] = [
  // FTND Questions
  {
    id: 'ftnd_1',
    text: '⏰ متى تدخن سيجارتك الأولى بعد الاستيقاظ؟',
    options: [
      { value: 3, text: '🏃‍♂️ خلال 5 دقائق - لا أستطيع الانتظار!' },
      { value: 2, text: '⏱️ 6-30 دقيقة - قريباً جداً' },
      { value: 1, text: '☕ 31-60 دقيقة - بعد قهوتي' },
      { value: 0, text: '🌅 بعد 60 دقيقة - أنا مرتاح بشأن ذلك' }
    ],
    category: 'FTND'
  },
  {
    id: 'ftnd_2',
    text: '🚫 هل تجد صعوبة في تجنب التدخين في الأماكن الممنوع فيها التدخين؟',
    options: [
      { value: 1, text: '😅 نعم - إنه صعب حقاً' },
      { value: 0, text: '😎 لا - أستطيع التحكم في ذلك' }
    ],
    category: 'FTND'
  },
  {
    id: 'ftnd_3',
    text: '🤔 أي سيجارة سيكون من الأصعب التخلي عنها؟',
    options: [
      { value: 1, text: '🌅 الأولى في الصباح' },
      { value: 0, text: '🌙 أي سيجارة أخرى خلال اليوم' }
    ],
    category: 'FTND'
  },
  {
    id: 'ftnd_4',
    text: '📊 كم سيجارة تدخن يومياً؟',
    options: [
      { value: 3, text: '🔥 31 أو أكثر' },
      { value: 2, text: '💨 21-30' },
      { value: 1, text: '🚬 11-20' },
      { value: 0, text: '📉 10 أو أقل' }
    ],
    category: 'FTND'
  },
  // HONC Questions
  {
    id: 'honc_1',
    text: '💪 هل حاولت الإقلاع عن التدخين ولم تستطع الاستمرار؟',
    options: [
      { value: 1, text: '😔 نعم - كان تحدياً صعباً' },
      { value: 0, text: '🎯 لا - لم أحاول بعد' }
    ],
    category: 'HONC'
  },
  {
    id: 'honc_2',
    text: '🤷‍♂️ هل تدخن الآن لأنه من الصعب جداً الإقلاع؟',
    options: [
      { value: 1, text: '😩 نعم - من الصعب التوقف' },
      { value: 0, text: '🌟 لا - لأسباب أخرى' }
    ],
    category: 'HONC'
  },
  {
    id: 'honc_3',
    text: '😴 هل سبق أن شعرت بأنك بحاجة ماسة لسيجارة؟',
    options: [
      { value: 1, text: '🎯 نعم - أشعر بذلك كثيراً' },
      { value: 0, text: '✨ لا - ليس حقاً' }
    ],
    category: 'HONC'
  },
  // GN-SBQ Questions
  {
    id: 'gnsbq_1',
    text: '🌪️ هل تدخن أكثر أثناء التوتر؟',
    options: [
      { value: 4, text: '😰 دائماً - إنه مخفف للتوتر' },
      { value: 3, text: '😟 غالباً' },
      { value: 2, text: '🤔 أحياناً' },
      { value: 1, text: '😌 نادراً' },
      { value: 0, text: '😊 أبداً' }
    ],
    category: 'GN-SBQ'
  },
  {
    id: 'gnsbq_2',
    text: '🎭 هل تدخن لتجنب المشاعر السلبية؟',
    options: [
      { value: 4, text: '💔 دائماً - يساعدني في التأقلم' },
      { value: 3, text: '😢 غالباً' },
      { value: 2, text: '🤷‍♂️ أحياناً' },
      { value: 1, text: '🌟 نادراً' },
      { value: 0, text: '💪 أبداً' }
    ],
    category: 'GN-SBQ'
  },
  // MTQS Questions
  {
    id: 'mtqs_1',
    text: '🎯 ما مدى تحفيزك للإقلاع عن التدخين؟',
    options: [
      { value: 3, text: '🚀 متحفز جداً - مستعد للإقلاع!' },
      { value: 2, text: '🌱 متحفز نوعاً ما' },
      { value: 1, text: '🤔 أفكر في الأمر' },
      { value: 0, text: '😴 غير متحفز حالياً' }
    ],
    category: 'MTQS'
  },
  {
    id: 'mtqs_2',
    text: '💭 إذا قررت الإقلاع الآن، ما مدى ثقتك في نجاحك؟',
    options: [
      { value: 3, text: '💪 واثق جداً - أستطيع فعل ذلك!' },
      { value: 2, text: '🌟 واثق نوعاً ما' },
      { value: 1, text: '😟 لست واثقاً كثيراً' },
      { value: 0, text: '😔 لست واثقاً على الإطلاق' }
    ],
    category: 'MTQS'
  },
  // Emotional Triggers
  {
    id: 'trigger_1',
    text: '🎉 هل تدخن تلقائياً في المناسبات الاجتماعية؟',
    options: [
      { value: 3, text: '🔄 دائماً - بشكل تلقائي' },
      { value: 2, text: '👥 عادةً' },
      { value: 1, text: '🤔 أحياناً' },
      { value: 0, text: '🚫 أبداً' }
    ],
    category: 'TRIGGERS'
  },
  {
    id: 'trigger_2',
    text: '☕ هل تدخن دائماً مع قهوة/شاي الصباح؟',
    options: [
      { value: 3, text: '✨ نعم - إنه طقسي الصباحي' },
      { value: 2, text: '🌅 معظم الصباحات' },
      { value: 1, text: '📅 أحياناً' },
      { value: 0, text: '🚫 أبداً' }
    ],
    category: 'TRIGGERS'
  },
  // Physical Dependence
  {
    id: 'physical_1',
    text: '🤒 هل تصاب بالصداع عندما تمر فترة طويلة دون تدخين؟',
    options: [
      { value: 3, text: '😖 دائماً - إنه مزعج حقاً' },
      { value: 2, text: '😕 غالباً' },
      { value: 1, text: '🤔 أحياناً' },
      { value: 0, text: '😊 أبداً' }
    ],
    category: 'PHYSICAL'
  },
  {
    id: 'physical_2',
    text: '😤 هل تصبح سريع الانفعال عندما لا تستطيع التدخين؟',
    options: [
      { value: 3, text: '😠 منفعل جداً' },
      { value: 2, text: '😟 منفعل نوعاً ما' },
      { value: 1, text: '😐 قليلاً' },
      { value: 0, text: '😊 لا على الإطلاق' }
    ],
    category: 'PHYSICAL'
  },
  // Lifestyle Impact
  {
    id: 'lifestyle_1',
    text: '💰 هل سبق أن اخترت شراء السجائر بدلاً من شيء آخر كنت تحتاجه؟',
    options: [
      { value: 3, text: '😔 نعم، كثيراً' },
      { value: 2, text: '🤔 أحياناً' },
      { value: 1, text: '📅 نادراً' },
      { value: 0, text: '💪 أبداً' }
    ],
    category: 'LIFESTYLE'
  },
  {
    id: 'lifestyle_2',
    text: '🏃‍♂️ هل أثر التدخين على نشاطاتك البدنية أو الرياضية؟',
    options: [
      { value: 3, text: '😮‍💨 نعم، بشكل كبير' },
      { value: 2, text: '🤔 نوعاً ما' },
      { value: 1, text: '🌱 قليلاً' },
      { value: 0, text: '💪 لا على الإطلاق' }
    ],
    category: 'LIFESTYLE'
  },
  // Health Awareness
  {
    id: 'health_1',
    text: '🫁 هل لاحظت أي مشاكل في التنفس منذ أن بدأت التدخين؟',
    options: [
      { value: 3, text: '😔 نعم، مشاكل كبيرة' },
      { value: 2, text: '😕 بعض المشاكل' },
      { value: 1, text: '🤔 مشاكل بسيطة' },
      { value: 0, text: '😊 لا توجد مشاكل' }
    ],
    category: 'HEALTH'
  },
  {
    id: 'health_2',
    text: '👃 هل تغيرت حاسة الشم أو التذوق لديك منذ أن بدأت التدخين؟',
    options: [
      { value: 3, text: '😔 نعم، بشكل كبير' },
      { value: 2, text: '👎 نوعاً ما' },
      { value: 1, text: '🤔 قليلاً' },
      { value: 0, text: '😊 لا تغيير' }
    ],
    category: 'HEALTH'
  }
];