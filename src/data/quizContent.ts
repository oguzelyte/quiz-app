import { ANSWER_TYPE, QUIZZES } from "./constants";
import { type Quiz } from "./types";

export const quizzes: Record<string, Quiz> = {
  [QUIZZES.timeManagement]: {
    title: "Time management",
    questions: [
      {
        questionId: "daily-goals",
        question:
          "Do you set daily goals or a to-do list before starting your day?",
        type: ANSWER_TYPE.YES_NO,
      },
      {
        questionId: "procrastinate-important-tasks",
        question:
          "Do you often find yourself procrastinating on important tasks?",
        type: ANSWER_TYPE.YES_NO,
      },
      {
        questionId: "planner-or-digital-tool",
        question: "Do you use a planner or digital tool to track your tasks?",
        type: ANSWER_TYPE.YES_NO,
      },
      {
        questionId: "time-blocking",
        question: "Do you allocate specific time blocks for different tasks?",
        type: ANSWER_TYPE.YES_NO,
      },
      {
        questionId: "frequent-distractions",
        question: "Do distractions frequently interrupt your workflow?",
        type: ANSWER_TYPE.YES_NO,
      },
      {
        questionId: "run-out-of-time",
        question:
          "Do you feel like you often run out of time to complete your tasks?",
        type: ANSWER_TYPE.YES_NO,
      },
      {
        questionId: "prioritize-tasks",
        question: "Do you prioritize tasks based on urgency and importance?",
        type: ANSWER_TYPE.YES_NO,
      },
      {
        questionId: "reflect-on-time",
        question:
          "Do you regularly reflect on how you spent your time and adjust accordingly?",
        type: ANSWER_TYPE.YES_NO,
      },
      {
        questionId: "biggest-time-wasters",
        question: "What are your biggest time-wasters?",
        type: ANSWER_TYPE.MULTI,
        options: [
          "Social media",
          "Unnecessary meetings",
          "Multitasking",
          "Lack of planning",
          "Procrastination",
          "Other",
        ],
      },
      {
        questionId: "handle-interruptions",
        question: "How do you manage unexpected interruptions?",
        type: ANSWER_TYPE.MULTI,
        options: [
          "Pause my current task and address it immediately",
          "Delegate the task if possible",
          "Ignore it until I complete my current task",
          "Schedule a later time to handle it",
          "Other",
        ],
      },
    ],
  },
  [QUIZZES.productivity]: {
    title: "Productivity",
    questions: [
      {
        questionId: "start-day-with-plan",
        question: "Do you start your day with a clear plan or goal?",
        type: ANSWER_TYPE.YES_NO,
      },
      {
        questionId: "overwhelmed-workload",
        question: "Do you often feel overwhelmed by your workload?",
        type: ANSWER_TYPE.YES_NO,
      },
      {
        questionId: "take-regular-breaks",
        question: "Do you take regular breaks to maintain focus and energy?",
        type: ANSWER_TYPE.YES_NO,
      },
      {
        questionId: "stay-focused-on-tasks",
        question:
          "Do you find it easy to stay focused on tasks without distractions?",
        type: ANSWER_TYPE.YES_NO,
      },
      {
        questionId: "set-deadlines",
        question: "Do you set deadlines for yourself even when not required?",
        type: ANSWER_TYPE.YES_NO,
      },
      {
        questionId: "important-tasks-early",
        question:
          "Do you usually complete your most important tasks early in the day?",
        type: ANSWER_TYPE.YES_NO,
      },
      {
        questionId: "use-productivity-tools",
        question:
          "Do you use any tools or techniques to track and improve productivity?",
        type: ANSWER_TYPE.YES_NO,
      },
      {
        questionId: "satisfied-daily-accomplishment",
        question:
          "Do you feel satisfied with how much you accomplish in a day?",
        type: ANSWER_TYPE.YES_NO,
      },
      {
        questionId: "biggest-productivity-obstacles",
        question: "What are your biggest obstacles to productivity?",
        type: ANSWER_TYPE.MULTI,
        options: [
          "Distractions (phone, social media, notifications)",
          "Poor time management",
          "Lack of motivation",
          "Multitasking too much",
          "Unclear priorities",
          "Other",
        ],
      },
      {
        questionId: "productivity-strategies",
        question: "What strategies do you use to improve productivity?",
        type: ANSWER_TYPE.MULTI,
        options: [
          "Time blocking or Pomodoro technique",
          "Using a task manager or planner",
          "Eliminating distractions",
          "Setting clear goals and priorities",
          "Taking breaks to recharge",
          "Other",
        ],
      },
    ],
  },
  [QUIZZES.sleepManagement]: {
    title: "Sleep Management",
    questions: [
      {
        questionId: "get-enough-sleep",
        question: "Do you get at least 7-8 hours of sleep on most nights?",
        type: ANSWER_TYPE.YES_NO,
      },
      {
        questionId: "consistent-sleep-schedule",
        question: "Do you have a consistent bedtime and wake-up time?",
        type: ANSWER_TYPE.YES_NO,
      },
      {
        questionId: "trouble-sleeping",
        question: "Do you struggle to fall asleep or stay asleep?",
        type: ANSWER_TYPE.YES_NO,
      },
      {
        questionId: "feel-well-rested",
        question: "Do you feel well-rested when you wake up?",
        type: ANSWER_TYPE.YES_NO,
      },
      {
        questionId: "avoid-screens-before-bed",
        question:
          "Do you avoid screens (phone, TV, computer) at least 30 minutes before bed?",
        type: ANSWER_TYPE.YES_NO,
      },
      {
        questionId: "caffeine-before-bed",
        question: "Do you consume caffeine or heavy meals close to bedtime?",
        type: ANSWER_TYPE.YES_NO,
      },
      {
        questionId: "groggy-mornings",
        question: "Do you wake up feeling groggy or tired most mornings?",
        type: ANSWER_TYPE.YES_NO,
      },
      {
        questionId: "use-sleep-aids",
        question:
          "Do you use any sleep aids or relaxation techniques to help you sleep?",
        type: ANSWER_TYPE.YES_NO,
      },
      {
        questionId: "sleep-quality-factors",
        question: "What are the biggest factors affecting your sleep quality?",
        type: ANSWER_TYPE.MULTI,
        options: [
          "Stress or anxiety",
          "Noise or light disturbances",
          "Poor sleep schedule",
          "Caffeine or alcohol consumption",
          "Using screens before bed",
          "Other",
        ],
      },
      {
        questionId: "improve-sleep-methods",
        question: "What methods do you use to improve your sleep?",
        type: ANSWER_TYPE.MULTI,
        options: [
          "Keeping a regular sleep schedule",
          "Creating a dark and quiet sleep environment",
          "Avoiding caffeine or heavy meals before bed",
          "Using relaxation techniques (meditation, deep breathing, etc.)",
          "Exercising during the day",
          "Other",
        ],
      },
    ],
  },
};
