"use client";

import { useEffect, useMemo, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { Disclaimer } from "@/components/Disclaimer";
import { ImageCredits } from "@/components/ImageCredits";
import { QuestionStep } from "@/components/QuestionStep";
import { ResultsScreen } from "@/components/ResultsScreen";
import { StartScreen } from "@/components/StartScreen";
import { TopBanner } from "@/components/TopBanner";
import { questions } from "@/data/questions";
import { getDiagnosisResults } from "@/lib/diagnosis";
import type { AnswerOption, Answers, AnswerValue, Question } from "@/types/diagnosis";

type Step = "start" | "questions" | "results";

const toAnswerArray = (answer: AnswerValue | undefined) =>
  Array.isArray(answer) ? answer : answer ? [answer] : [];

const toggleMultipleAnswer = (currentAnswer: AnswerValue | undefined, option: AnswerOption) => {
  const currentOptions = toAnswerArray(currentAnswer);
  const alreadySelected = currentOptions.some((currentOption) => currentOption.id === option.id);

  if (alreadySelected) {
    return currentOptions.filter((currentOption) => currentOption.id !== option.id);
  }

  const optionIdsToClear = new Set(option.clearsOptionIds ?? []);
  const filteredOptions = currentOptions.filter((currentOption) => {
    if (optionIdsToClear.has(currentOption.id)) {
      return false;
    }

    if (currentOption.clearsOptionIds?.includes(option.id)) {
      return false;
    }

    if (option.exclusiveGroup && currentOption.exclusiveGroup === option.exclusiveGroup) {
      return false;
    }

    return true;
  });

  return [...filteredOptions, option];
};

const isAnswered = (question: Question, answer: AnswerValue | undefined) => {
  const selectedOptions = toAnswerArray(answer);
  const selectedGroups = new Set(selectedOptions.map((option) => option.group).filter(Boolean));
  const hasEnoughSelections = selectedOptions.length >= (question.minSelections ?? 1);
  const hasRequiredGroups = (question.requiredGroups ?? []).every((group) => selectedGroups.has(group));

  return hasEnoughSelections && hasRequiredGroups;
};

export default function Home() {
  const [step, setStep] = useState<Step>("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const currentQuestion = questions[currentQuestionIndex];
  const results = useMemo(() => getDiagnosisResults(answers), [answers]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step, currentQuestionIndex]);

  const startDiagnosis = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setStep("questions");
  };

  const selectOption = (option: AnswerOption) => {
    setAnswers((current) => ({
      ...current,
      [currentQuestion.id]: currentQuestion.multiple
        ? toggleMultipleAnswer(current[currentQuestion.id], option)
        : option,
    }));
  };

  const goNext = () => {
    if (!isAnswered(currentQuestion, answers[currentQuestion.id])) {
      return;
    }

    if (currentQuestionIndex === questions.length - 1) {
      setStep("results");
      return;
    }

    setCurrentQuestionIndex((current) => current + 1);
  };

  const goBack = () => {
    if (currentQuestionIndex === 0) {
      setStep("start");
      return;
    }

    setCurrentQuestionIndex((current) => current - 1);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      {step === "questions" && <TopBanner />}
      {step === "start" && <StartScreen onStart={startDiagnosis} />}
      {step === "questions" && (
        <QuestionStep
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          selectedAnswer={answers[currentQuestion.id]}
          canGoBack
          onSelect={selectOption}
          onNext={goNext}
          onBack={goBack}
        />
      )}
      {step === "results" && <ResultsScreen results={results} answers={answers} onRestart={startDiagnosis} />}
      <Disclaimer />
      <ImageCredits />
    </div>
  );
}
