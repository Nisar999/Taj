"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Stamp from "@/components/ui/Stamp";

type Step = "IDENTITY" | "PALATE" | "LOYALTY" | "SUBMITTING" | "PENDING";

const PALATE_QUESTIONS = [
  {
    question: "How do you feel about pineapple on pizza?",
    options: [
      { text: "A culinary travesty", value: "correct" },
      { text: "It is acceptable", value: "incorrect" },
      { text: "I enjoy the sweetness", value: "incorrect" },
    ],
  },
  {
    question: "Your steak is served medium-well. Your reaction?",
    options: [
      { text: "Immediate return to kitchen", value: "correct" },
      { text: "Eat it anyway", value: "incorrect" },
      { text: "Ask for more sauce", value: "incorrect" },
    ],
  },
  {
    question: "What is the correct way to eat a croissant?",
    options: [
      { text: "Slowly, admiring the layers", value: "correct" },
      { text: "Quickly, while walking", value: "incorrect" },
      { text: "With a fork and knife", value: "incorrect" },
    ],
  },
];

export default function JoinPage() {
  const [step, setStep] = useState<Step>("IDENTITY");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    palateScore: 0,
    pledged: false,
  });
  const [currentPalateQuestion, setCurrentPalateQuestion] = useState(0);
  const [isStamping, setIsStamping] = useState(false);
  const [caseFile, setCaseFile] = useState<number | null>(null);

  React.useEffect(() => {
    setCaseFile(Math.floor(Math.random() * 1000000));
  }, []);

  const handleNextIdentity = () => {
    if (formData.name && formData.email) {
      setStep("PALATE");
    }
  };

  const handlePalateAnswer = (value: string) => {
    if (value === "correct") {
      setFormData((prev) => ({ ...prev, palateScore: prev.palateScore + 1 }));
    }

    if (currentPalateQuestion < PALATE_QUESTIONS.length - 1) {
      setCurrentPalateQuestion(currentPalateQuestion + 1);
    } else {
      setStep("LOYALTY");
    }
  };

  const handlePledge = () => {
    setFormData((prev) => ({ ...prev, pledged: true }));
    setStep("SUBMITTING");

    // Trigger the stamp animation
    setTimeout(() => {
      setIsStamping(true);
      setTimeout(() => {
        setStep("PENDING");
      }, 1500);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 p-4 md:p-8 flex flex-col items-center justify-center font-mono overflow-hidden relative">
      <div className="max-w-xl w-full bg-zinc-900 border-2 border-zinc-800 p-4 md:p-8 shadow-2xl relative">

        <AnimatePresence mode="wait">
          {step === "IDENTITY" && (
            <motion.div
              key="identity"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="border-b-2 border-zinc-700 pb-4 mb-6">
                <h1 className="text-3xl font-black uppercase tracking-tighter text-white">Identity Verification</h1>
                <p className="text-zinc-500 text-sm">DEPARTMENT OF GASTRONOMIC CLEARANCE</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase text-zinc-500 mb-1">Full Legal Name</label>
                  <input
                    type="text"
                    className="w-full bg-black border border-zinc-700 p-2 outline-none focus:border-white transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="ALFRED PENKTON"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase text-zinc-500 mb-1">Secure Communication Channel (Email)</label>
                  <input
                    type="email"
                    className="w-full bg-black border border-zinc-700 p-2 outline-none focus:border-white transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="SECRET@SOCIETY.COM"
                  />
                </div>
              </div>

              <button
                onClick={handleNextIdentity}
                className="w-full bg-white text-black font-bold py-3 uppercase hover:bg-zinc-300 transition-colors"
              >
                Proceed to Assessment
              </button>
            </motion.div>
          )}

          {step === "PALATE" && (
            <motion.div
              key="palate"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="border-b-2 border-zinc-700 pb-4 mb-6">
                <h1 className="text-3xl font-black uppercase tracking-tighter text-white">Palate Assessment</h1>
                <p className="text-zinc-500 text-sm">FAILURE TO ANSWER CORRECTLY WILL RESULT IN IMMEDIATE EXPULSION</p>
              </div>

              <div className="space-y-6">
                <div className="text-lg text-white">
                  {PALATE_QUESTIONS[currentPalateQuestion].question}
                </div>
                <div className="grid gap-3">
                  {PALATE_QUESTIONS[currentPalateQuestion].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handlePalateAnswer(opt.value)}
                      className="w-full text-left p-3 border border-zinc-700 hover:border-white hover:bg-zinc-800 transition-all text-sm"
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === "LOYALTY" && (
            <motion.div
              key="loyalty"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="border-b-2 border-zinc-700 pb-4 mb-6">
                <h1 className="text-3xl font-black uppercase tracking-tighter text-white">Loyalty Pledge</h1>
                <p className="text-zinc-500 text-sm">MANDATORY ANTI-VEGETARIAN AGREEMENT</p>
              </div>

              <div className="bg-black p-6 border border-zinc-800 text-zinc-400 text-sm leading-relaxed h-48 overflow-y-auto italic">
                "I, the undersigned, hereby swear upon the sacred flame of the grill, that I shall never knowingly promote, consume, or encourage the consumption of meat-substitutes made from soy, pea-protein, or other synthetic abominations. I acknowledge that a garden is for vegetables, and a plate is for meat. I accept that my membership is contingent upon my commitment to the carnivore way."
              </div>

              <button
                onClick={handlePledge}
                className="w-full bg-red-700 text-white font-bold py-3 uppercase hover:bg-red-600 transition-colors"
              >
                Sign in Blood (Accept)
              </button>
            </motion.div>
          )}

          {step === "SUBMITTING" && (
            <motion.div
              key="submitting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-12 space-y-6"
            >
              <div className="text-2xl font-black uppercase animate-pulse text-white">
                Processing Application...
              </div>
              <div className="text-xs text-zinc-500 text-center">
                SCRUTINIZING PALATE RESPONSES<br />
                VERIFYING BLOOD LINEAGE<br />
                CONSULTING THE HIGH COUNCIL
              </div>
            </motion.div>
          )}

          {step === "PENDING" && (
            <motion.div
              key="pending"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center space-y-6"
            >
              <div className="text-4xl font-black uppercase text-white tracking-tighter">
                Pending Divine's Decree
              </div>
              <p className="text-zinc-500 max-w-xs mx-auto">
                Your application has been uploaded to the Eternal Archive. Do not contact us. We will contact you if you are deemed worthy.
              </p>
              <div className="text-xs bg-zinc-800 px-3 py-1 rounded text-zinc-400">
                Case File: #{caseFile !== null ? caseFile : "..."}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {isStamping && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Stamp text="REQUEST CLEARANCE" isVisible={true} color="red" />
          </div>
        )}
      </div>

      <div className="mt-8 text-[10px] text-zinc-600 uppercase tracking-widest">
        &copy; 1924 Taj United Club. All rights reserved. Unauthorized access is a crime.
      </div>
    </div>
  );
}
