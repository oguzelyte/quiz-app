import ActionsWithValuesImg from "../assets/actions-with-values.png";
import SelfDisciplineImg from "../assets/self-discipline.png";
import SelfDiscoveryImg from "../assets/self-discovery.png";
import SelfEsteemImg from "../assets/self-esteem.png";
import { QUIZZES, THEMES, type QuizId, type Theme } from "./constants";
import type { LandingData, Subject } from "./types";

export const defaultQuizId: QuizId = QUIZZES.timeManagement;

export const defaultTheme: Theme = THEMES.blue;

export const landingContent: Record<QuizId, LandingData> = {
  [QUIZZES.timeManagement]: {
    id: QUIZZES.timeManagement,
    title: "Time",
    heroTitle: `Discover <span class='text-lime-50'>who you are</span> and unleash <span
        class='text-primary'>what you can be</span
      >`,
    heroText: `Build your personality blueprint one question at a time. <br
        class='max-sm:hidden'
      />Hundreds of tests, one unique you.`,
    landingContentTitle:
      "There are no weaknesses, only strengths waiting to shine.",
    landingContentText:
      "Once we identify a subject to improve we will suggest you to take on unique journeys or challenges to improve certain parts of your life.",
    cta: "Get started now",
    theme: THEMES.orange,
  },
  [QUIZZES.sleepManagement]: {
    id: QUIZZES.sleepManagement,
    title: "Sleep",
    heroTitle: `Uncover your <span class='text-lime-50'>sleep style</span> and wake up to your <span class='text-primary'>full potential</span>`,
    heroText: `Tired of feeling tired? Understand your sleep habits and reclaim your rest. <br class='max-sm:hidden' />Better nights start with self-awareness.`,
    landingContentTitle: "Better sleep unlocks your best self.",
    landingContentText:
      "Discover personalized suggestions and challenges to improve your sleep habits, boost energy levels, and feel more refreshed every day.",
    cta: "Take the quiz",
    theme: THEMES.blue,
  },
  [QUIZZES.productivity]: {
    id: QUIZZES.productivity,
    title: "Productivity",
    heroTitle: `Boost your <span class='text-lime-50'>focus</span> and unlock your <span class='text-primary'>flow state</span>`,
    heroText: `Find out what fuels your productivity and what holds it back. <br class='max-sm:hidden' />Work smarter with personalized insights.`,
    landingContentTitle:
      "Productivity isn’t about doing more, it’s about doing what matters.",
    landingContentText:
      "Once we uncover your productivity style, we’ll guide you through custom challenges to help you work smarter, reduce distractions, and achieve your goals efficiently.",
    cta: "Start boosting now",
    theme: THEMES.green,
  },
};

export const subjects: Subject[] = [
  {
    title: "Self-esteem",
    description: "21-day journey",
    image: SelfEsteemImg,
  },
  {
    title: "Self-discovery",
    description: "21-day journey",
    image: SelfDiscoveryImg,
  },
  {
    title: "Self-discipline",
    description: "28-day journey",
    image: SelfDisciplineImg,
  },
  {
    title: "Align Your Actions with Your Values",
    description: "28-day journey",
    image: ActionsWithValuesImg,
  },
];
