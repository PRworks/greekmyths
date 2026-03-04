/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Trophy, 
  RotateCcw, 
  ChevronRight, 
  Crown, 
  Shield, 
  User,
  CheckCircle2,
  XCircle,
  Upload,
  Image as ImageIcon,
  AlertCircle
} from 'lucide-react';
import { Difficulty, Question, QUESTIONS } from './data';

const FEEDBACK_MESSAGES = {
  correct: [
    "Holy Hera! You're a genius!",
    "By Zeus's beard, that's right!",
    "Athena would be proud!",
    "Great Hades! You nailed it!",
    "A legendary answer!"
  ],
  incorrect: [
    "Thundered! Not quite.",
    "Poseidon's waves washed that one away.",
    "The Fates have spoken... try again!",
    "Ares says: Fight harder next time!",
    "Hermes missed the delivery on that one."
  ]
};

export default function App() {
  const [gameState, setGameState] = useState<'landing' | 'quiz' | 'result'>('landing');
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.MORTAL);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleLevelSelect = (level: Difficulty) => {
    setDifficulty(level);
    const pool = QUESTIONS.filter(q => q.difficulty === level);
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 10);
    setQuizQuestions(selected);
    setGameState('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsAnswered(false);
    setSelectedOption(null);
  };

  const handleAnswer = (option: string) => {
    if (isAnswered) return;
    
    setSelectedOption(option);
    setIsAnswered(true);
    
    const correct = option === currentQuestion.correctAnswer;
    if (correct) {
      setScore(prev => prev + 1);
      setFeedbackMessage(FEEDBACK_MESSAGES.correct[Math.floor(Math.random() * FEEDBACK_MESSAGES.correct.length)]);
    } else {
      setFeedbackMessage(FEEDBACK_MESSAGES.incorrect[Math.floor(Math.random() * FEEDBACK_MESSAGES.incorrect.length)]);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setIsAnswered(false);
      setSelectedOption(null);
      setFeedbackMessage("");
    } else {
      setGameState('result');
    }
  };

  const resetGame = () => {
    setGameState('landing');
    setScore(0);
    setCurrentQuestionIndex(0);
    setIsAnswered(false);
    setSelectedOption(null);
  };

  return (
    <div className="min-h-screen bg-[#f4e4bc] text-[#2c1810] font-sans selection:bg-[#d4af37] selection:text-white overflow-x-hidden">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/parchment.png')]"></div>

      <main className="relative z-10 max-w-2xl mx-auto px-4 py-8 min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          {gameState === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col items-center justify-center text-center space-y-8"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                >
                  <Zap className="w-24 h-24 text-[#d4af37]" />
                </motion.div>
                <div className="absolute -top-4 -right-4">
                  <Crown className="w-10 h-10 text-[#d4af37] rotate-12" />
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic text-[#2c1810]">
                  Greek Mythology <br />
                  <span className="text-[#d4af37]">Quest</span>
                </h1>
                <p className="text-xl font-medium opacity-80 max-w-md mx-auto">
                  Are you ready to climb Mount Olympus? Choose your path, young hero!
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
                <LevelButton 
                  icon={<User className="w-6 h-6" />}
                  title="Mortal" 
                  subtitle="Easy - For beginners"
                  color="bg-emerald-100 border-emerald-500 text-emerald-900"
                  onClick={() => handleLevelSelect(Difficulty.MORTAL)}
                />
                <LevelButton 
                  icon={<Shield className="w-6 h-6" />}
                  title="Hero" 
                  subtitle="Medium - For adventurers"
                  color="bg-blue-100 border-blue-500 text-blue-900"
                  onClick={() => handleLevelSelect(Difficulty.HERO)}
                />
                <LevelButton 
                  icon={<Crown className="w-6 h-6" />}
                  title="God" 
                  subtitle="Hard - For legends"
                  color="bg-amber-100 border-amber-500 text-amber-900"
                  onClick={() => handleLevelSelect(Difficulty.GOD)}
                />
              </div>
            </motion.div>
          )}

          {gameState === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="flex-1 flex flex-col space-y-6"
            >
              {/* Ancient Greek Style Title */}
              <div className="text-center space-y-1">
                <h1 className="text-2xl md:text-3xl font-black uppercase tracking-[0.2em] text-[#2c1810]" style={{ fontFamily: "'Cinzel', serif" }}>
                  Greek Mythology Quest
                </h1>
                <div className="h-0.5 w-24 bg-[#d4af37] mx-auto rounded-full"></div>
              </div>

              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest opacity-60">Level: {difficulty}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold uppercase tracking-widest opacity-60">Score: {score}</span>
                </div>
              </div>

              {/* Progress Bar (Lightning Bolt) */}
              <div className="relative h-4 bg-black/5 rounded-full overflow-hidden border border-black/10">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-[#d4af37]"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                    <Zap className="w-6 h-6 text-[#d4af37] fill-[#d4af37] animate-pulse" />
                  </div>
                </motion.div>
              </div>

              {/* Question Card */}
              <div className="bg-white rounded-3xl p-6 border-2 border-black/5 space-y-6">
                <div className="aspect-square max-w-[300px] mx-auto w-full rounded-2xl overflow-hidden bg-stone-100 relative border-2 border-black/5 flex items-center justify-center">
                  <img 
                    src={currentQuestion.iconUrl}
                    alt="Mythology illustration"
                    className="w-4/5 h-4/5 object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 text-[#2c1810] font-bold text-sm bg-white/80 px-3 py-1 rounded-full border border-black/5">
                    Quest {currentQuestionIndex + 1} / {quizQuestions.length}
                  </div>
                </div>

                <h2 className="text-2xl font-bold leading-tight text-center">
                  {currentQuestion.text}
                </h2>

                <div className="grid grid-cols-1 gap-3">
                  {currentQuestion.options.map((option, idx) => {
                    const isCorrect = option === currentQuestion.correctAnswer;
                    const isSelected = option === selectedOption;
                    
                    let buttonClass = "w-full text-left p-4 rounded-xl border-2 font-bold transition-all duration-200 flex items-center justify-between ";
                    
                    if (!isAnswered) {
                      buttonClass += "bg-white border-black/10 hover:border-[#d4af37] hover:bg-[#fff9e6]";
                    } else {
                      if (isCorrect) {
                        buttonClass += "bg-emerald-100 border-emerald-500 text-emerald-900";
                      } else if (isSelected) {
                        buttonClass += "bg-red-100 border-red-500 text-red-900";
                      } else {
                        buttonClass += "bg-white border-black/5 opacity-50";
                      }
                    }

                    return (
                      <motion.button
                        key={idx}
                        whileHover={!isAnswered ? { scale: 1.02 } : {}}
                        whileTap={!isAnswered ? { scale: 0.98 } : {}}
                        onClick={() => handleAnswer(option)}
                        disabled={isAnswered}
                        className={buttonClass}
                      >
                        <span>{option}</span>
                        {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                        {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-600" />}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Feedback & Next Button */}
              <AnimatePresence>
                {isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div className={`p-4 rounded-2xl text-center font-bold text-lg ${
                      selectedOption === currentQuestion.correctAnswer 
                        ? 'bg-emerald-500 text-white shadow-[0_4px_0_rgb(5,150,105)]' 
                        : 'bg-red-500 text-white shadow-[0_4px_0_rgb(185,28,28)]'
                    }`}>
                      {feedbackMessage}
                    </div>
                    
                    <button
                      onClick={nextQuestion}
                      className="w-full bg-[#2c1810] text-white py-4 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center space-x-2 hover:bg-[#3d2217] transition-colors shadow-lg"
                    >
                      <span>{currentQuestionIndex === quizQuestions.length - 1 ? 'See Results' : 'Next Quest'}</span>
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {gameState === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col items-center justify-center text-center space-y-8"
            >
              {/* Ancient Greek Style Title */}
              <div className="text-center space-y-1">
                <h1 className="text-2xl md:text-3xl font-black uppercase tracking-[0.2em] text-[#2c1810]" style={{ fontFamily: "'Cinzel', serif" }}>
                  Greek Mythology Quest
                </h1>
                <div className="h-0.5 w-24 bg-[#d4af37] mx-auto rounded-full"></div>
              </div>

              <div className="relative">
                <Trophy className="w-32 h-32 text-[#d4af37] drop-shadow-2xl" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg"
                >
                  <Crown className="w-8 h-8 text-[#d4af37]" />
                </motion.div>
              </div>

              <div className="space-y-2">
                <h2 className="text-4xl font-black uppercase italic">Quest Complete!</h2>
                <p className="text-xl font-medium opacity-70">You have proven your worth as a {difficulty}.</p>
              </div>

              <div className="bg-white rounded-3xl p-8 border-2 border-black/5 w-full">
                <div className="text-6xl font-black text-[#d4af37] mb-2">{score}/{quizQuestions.length}</div>
                <div className="text-lg font-bold opacity-60 uppercase tracking-widest">Correct Answers</div>
                
                <div className="mt-6 pt-6 border-t border-black/5">
                  <p className="italic text-lg">
                    {score === quizQuestions.length 
                      ? "Unbelievable! You are truly a God of Mythology!" 
                      : score >= 7 
                      ? "Fantastic! The Muses sing of your knowledge!" 
                      : "A brave effort! Even Hercules had to start somewhere."}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
                <button
                  onClick={resetGame}
                  className="bg-[#2c1810] text-white py-4 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center space-x-2 hover:bg-[#3d2217] transition-colors shadow-lg"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>Try Another Level</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Decorative Pillars (Desktop only) */}
      <div className="hidden xl:block fixed left-8 top-1/2 -translate-y-1/2 w-12 h-[80vh] bg-[#2c1810] rounded-full opacity-5"></div>
      <div className="hidden xl:block fixed right-8 top-1/2 -translate-y-1/2 w-12 h-[80vh] bg-[#2c1810] rounded-full opacity-5"></div>
    </div>
  );
}

function LevelButton({ icon, title, subtitle, color, onClick }: { 
  icon: React.ReactNode; 
  title: string; 
  subtitle: string; 
  color: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.03, x: 5 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`flex items-center p-4 rounded-2xl border-2 transition-all text-left space-x-4 ${color}`}
    >
      <div className="bg-white/50 p-3 rounded-xl">
        {icon}
      </div>
      <div>
        <div className="font-black text-xl uppercase italic leading-none">{title}</div>
        <div className="text-sm font-bold opacity-70">{subtitle}</div>
      </div>
    </motion.button>
  );
}
