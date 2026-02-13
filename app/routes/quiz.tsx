import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Link } from "@remix-run/react";
import {
  TreeStructure,
  GraduationCap,
  Leaf,
  CloudSun,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
} from "phosphor-react";

export const meta: MetaFunction = () => ({
  title: "Find Your Program - SEDS",
  description:
    "Take a short quiz to discover which SEDS program aligns with your interests and how you can make the most impact.",
});

type Program = {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color: string;
};

const programs: Program[] = [
  {
    id: "nrm",
    name: "Natural Resource Management",
    description:
      "Watershed restoration, check dams, and water conservation across Anantapur's drought-prone landscape.",
    icon: <TreeStructure className="w-6 h-6" />,
    href: "/natural-resource-management",
    color: "blue",
  },
  {
    id: "education",
    name: "Education & Child Welfare",
    description:
      "Campus school, child sponsorships, and educational programs for children from rural villages.",
    icon: <GraduationCap className="w-6 h-6" />,
    href: "/education",
    color: "amber",
  },
  {
    id: "lcf",
    name: "Low Carbon Farming",
    description:
      "Organic farming methods, reduced pesticide use, and sustainable agriculture practices for smallholder farmers.",
    icon: <Leaf className="w-6 h-6" />,
    href: "/low-carbon-farming",
    color: "green",
  },
  {
    id: "cdm",
    name: "Clean Development Mechanism",
    description:
      "Carbon credit projects, biogas installations, and clean energy solutions for rural households.",
    icon: <CloudSun className="w-6 h-6" />,
    href: "/clean-development-mechanism",
    color: "teal",
  },
];

type Question = {
  id: number;
  question: string;
  options: { label: string; scores: Record<string, number> }[];
};

const questions: Question[] = [
  {
    id: 1,
    question: "What environmental issue concerns you most?",
    options: [
      {
        label: "Water scarcity and drought",
        scores: { nrm: 3, lcf: 1, cdm: 0, education: 0 },
      },
      {
        label: "Lack of educational opportunities for children",
        scores: { nrm: 0, lcf: 0, cdm: 0, education: 3 },
      },
      {
        label: "Harmful farming practices and soil degradation",
        scores: { nrm: 1, lcf: 3, cdm: 1, education: 0 },
      },
      {
        label: "Climate change and carbon emissions",
        scores: { nrm: 1, lcf: 1, cdm: 3, education: 0 },
      },
    ],
  },
  {
    id: 2,
    question: "How would you most like to see your support used?",
    options: [
      {
        label: "Building water infrastructure like check dams and borewells",
        scores: { nrm: 3, lcf: 0, cdm: 1, education: 0 },
      },
      {
        label: "Providing school supplies, meals, and tuition for children",
        scores: { nrm: 0, lcf: 0, cdm: 0, education: 3 },
      },
      {
        label: "Training farmers in organic and sustainable techniques",
        scores: { nrm: 1, lcf: 3, cdm: 0, education: 0 },
      },
      {
        label: "Installing biogas units and clean energy systems",
        scores: { nrm: 0, lcf: 0, cdm: 3, education: 0 },
      },
    ],
  },
  {
    id: 3,
    question: "Which kind of change inspires you most?",
    options: [
      {
        label: "Seeing barren land turn green and water tables rise",
        scores: { nrm: 3, lcf: 1, cdm: 0, education: 0 },
      },
      {
        label: "Watching a child become the first in their family to graduate",
        scores: { nrm: 0, lcf: 0, cdm: 0, education: 3 },
      },
      {
        label: "Farmers breaking free from the pesticide cycle",
        scores: { nrm: 0, lcf: 3, cdm: 1, education: 0 },
      },
      {
        label: "Communities reducing their carbon footprint sustainably",
        scores: { nrm: 0, lcf: 1, cdm: 3, education: 0 },
      },
    ],
  },
  {
    id: 4,
    question: "If you visited Anantapur, what would you want to see first?",
    options: [
      {
        label: "Restored watersheds and thriving village tanks",
        scores: { nrm: 3, lcf: 0, cdm: 0, education: 0 },
      },
      {
        label: "The SEDS campus school and children learning",
        scores: { nrm: 0, lcf: 0, cdm: 0, education: 3 },
      },
      {
        label: "Organic demonstration farms and seed banks",
        scores: { nrm: 0, lcf: 3, cdm: 0, education: 0 },
      },
      {
        label: "Biogas units and solar installations in villages",
        scores: { nrm: 0, lcf: 0, cdm: 3, education: 0 },
      },
    ],
  },
  {
    id: 5,
    question: "What motivates you to support a cause?",
    options: [
      {
        label: "Long-term ecological impact over decades",
        scores: { nrm: 3, lcf: 2, cdm: 1, education: 0 },
      },
      {
        label: "Directly changing a person's life trajectory",
        scores: { nrm: 0, lcf: 0, cdm: 0, education: 3 },
      },
      {
        label: "Empowering communities with practical skills",
        scores: { nrm: 1, lcf: 3, cdm: 1, education: 1 },
      },
      {
        label: "Measurable, data-driven outcomes like carbon offsets",
        scores: { nrm: 1, lcf: 0, cdm: 3, education: 0 },
      },
    ],
  },
];

function calculateResults(answers: Record<number, number>) {
  const scores: Record<string, number> = { nrm: 0, lcf: 0, cdm: 0, education: 0 };

  for (const [qId, optionIdx] of Object.entries(answers)) {
    const question = questions.find((q) => q.id === Number(qId));
    if (!question) continue;
    const option = question.options[optionIdx];
    if (!option) continue;
    for (const [program, score] of Object.entries(option.scores)) {
      scores[program] += score;
    }
  }

  const sorted = Object.entries(scores).sort(([, a], [, b]) => b - a);
  return sorted.map(([id, score]) => ({
    program: programs.find((p) => p.id === id)!,
    score,
  }));
}

const colorMap: Record<string, { bg: string; text: string; ring: string; light: string }> = {
  blue: { bg: "bg-blue-600", text: "text-blue-600", ring: "ring-blue-600", light: "bg-blue-50" },
  amber: { bg: "bg-amber-600", text: "text-amber-600", ring: "ring-amber-600", light: "bg-amber-50" },
  green: { bg: "bg-green-600", text: "text-green-600", ring: "ring-green-600", light: "bg-green-50" },
  teal: { bg: "bg-teal-600", text: "text-teal-600", ring: "ring-teal-600", light: "bg-teal-50" },
};

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const totalQuestions = questions.length;
  const progress = showResults
    ? 100
    : Math.round((Object.keys(answers).length / totalQuestions) * 100);

  function selectAnswer(optionIndex: number) {
    setAnswers((prev) => ({
      ...prev,
      [questions[currentQuestion].id]: optionIndex,
    }));
  }

  function next() {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  }

  function prev() {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }

  function restart() {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  }

  const currentAnswer = answers[questions[currentQuestion]?.id];
  const results = showResults ? calculateResults(answers) : [];
  const topResult = results[0];
  const maxScore = topResult?.score ?? 1;

  return (
    <div className="not-prose">
      {/* Hero */}
      <section className="bg-green-600 py-12">
        <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0 text-center">
            <h1 className="font-display text-3xl md:text-4xl text-white mb-4">
              Find the best way to support.
            </h1>
            <p className="text-green-100 max-w-2xl mx-auto m-0">
              Answer a few quick questions to see which program aligns with your interests.
            </p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-surface-tertiary">
        <div
          className="h-1 bg-green-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {!showResults ? (
        /* Question Card */
        <section className="py-12 bg-surface-primary">
          <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
            <div className="max-w-xl mx-auto">
              <p className="text-sm text-content-tertiary m-0 mb-2">
                Question {currentQuestion + 1} of {totalQuestions}
              </p>
              <h2 className="font-display text-xl md:text-2xl text-content-primary mb-6">
                {questions[currentQuestion].question}
              </h2>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, idx) => {
                  const isSelected = currentAnswer === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => selectAnswer(idx)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        isSelected
                          ? "border-green-600 bg-green-50"
                          : "border-outline bg-surface-primary hover:border-green-300"
                      }`}
                    >
                      <span className="text-sm text-content-secondary">
                        {option.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={prev}
                  disabled={currentQuestion === 0}
                  className="flex items-center gap-1 text-sm text-content-tertiary hover:text-content-secondary disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  onClick={next}
                  disabled={currentAnswer === undefined}
                  className="flex items-center gap-1 text-sm bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  {currentQuestion === totalQuestions - 1
                    ? "See Results"
                    : "Next"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* Results */
        <section className="py-12 bg-surface-primary">
          <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
            <div className="max-w-xl mx-auto">
              {topResult && (
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-100 px-4 py-2 rounded-full text-sm mb-4">
                      <CheckCircle className="w-4 h-4" />
                      Your match
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl text-content-primary mb-3">
                      {topResult.program.name}
                    </h2>
                    <p className="text-content-secondary m-0 mb-6">
                      Based on your answers, this program is the best fit for how you want to make an impact.
                    </p>
                    <Link
                      to={topResult.program.href}
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors no-underline"
                    >
                      Support this program
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}

              <h3 className="font-display text-lg text-content-primary mb-4">
                All Programs Ranked
              </h3>
              <div className="space-y-4">
                {results.map(({ program, score }, idx) => {
                  const c = colorMap[program.color] ?? colorMap.green;
                  const pct =
                    maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
                  return (
                    <Link
                      key={program.id}
                      to={program.href}
                      className="block p-4 rounded-lg border border-outline hover:border-outline-strong transition-colors no-underline"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-semibold text-content-tertiary w-5">
                          #{idx + 1}
                        </span>
                        <div className={c.text}>{program.icon}</div>
                        <span className="font-display text-content-primary text-sm">
                          {program.name}
                        </span>
                      </div>
                      <div className="ml-8">
                        <div className="w-full bg-surface-tertiary rounded-full h-2">
                          <div
                            className={`${c.bg} h-2 rounded-full transition-all duration-500`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <p className="text-xs text-content-tertiary m-0 mt-2">
                          {program.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={restart}
                  className="text-sm text-content-tertiary hover:text-content-secondary px-6 py-2 border border-outline-strong rounded-lg transition-colors"
                >
                  Retake Quiz
                </button>
                <Link
                  to="/donate"
                  className="text-sm bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors no-underline text-center"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
