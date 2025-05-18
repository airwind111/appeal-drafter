'use client';
import { useState } from 'react';

const steps = [
  'Appeal Type',
  'Appellant',
  'Upload',
  'Custom Grounds',
  'Advocate Info',
  'Draft Language',
  'Stay Application',
  'Generate'
];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    appealType: '',
    appellant: '',
    file: null,
    customGrounds: '',
    advocate: '',
    draftLanguage: '',
    stay: false,
  });

  const goNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const goBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6 text-black">
      <h1 className="text-2xl font-bold mb-4">Appeal Draft Generator</h1>

      {/* Step indicator */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`rounded-full px-3 py-1 text-sm whitespace-nowrap ${
              i === currentStep
                ? 'bg-blue-600 text-white'
                : 'bg-gray-300 text-black'
            }`}
          >
            {i + 1}. {step}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="bg-white shadow p-4 rounded">
        {currentStep === 0 && (
          <div>
            <label className="block mb-2 font-medium">Appeal Type:</label>
            <select
              className="border p-2 w-full"
              value={formData.appealType}
              onChange={(e) =>
                setFormData({ ...formData, appealType: e.target.value })
              }
            >
              <option value="">-- Select --</option>
              <option value="Regular">Regular Civil Appeal</option>
              <option value="Miscellaneous">Miscellaneous Appeal</option>
            </select>
          </div>
        )}

        {currentStep === 1 && (
          <div>
            <label className="block mb-2 font-medium">Appellant:</label>
            <select
              className="border p-2 w-full"
              value={formData.appellant}
              onChange={(e) =>
                setFormData({ ...formData, appellant: e.target.value })
              }
            >
              <option value="">-- Select --</option>
              <option value="Plaintiff">Plaintiff</option>
              <option value="Defendant">Defendant</option>
            </select>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <label className="block mb-2 font-medium">Upload Judgment PDF:</label>
            <input
              type="file"
              accept=".pdf"
              className="border p-2 w-full"
              onChange={(e) =>
                setFormData({ ...formData, file: e.target.files?.[0] || null })
              }
            />
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <label className="block mb-2 font-medium">Custom Grounds:</label>
            <textarea
              className="border p-2 w-full"
              rows={4}
              placeholder="Mention any personal or legal grounds here..."
              value={formData.customGrounds}
              onChange={(e) =>
                setFormData({ ...formData, customGrounds: e.target.value })
              }
            />
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <label className="block mb-2 font-medium">Advocate Info:</label>
            <input
              type="text"
              className="border p-2 w-full"
              placeholder="Name of Advocate (optional)"
              value={formData.advocate}
              onChange={(e) =>
                setFormData({ ...formData, advocate: e.target.value })
              }
            />
          </div>
        )}

        {currentStep === 5 && (
          <div>
            <label className="block mb-2 font-medium">Draft Language:</label>
            <select
              className="border p-2 w-full"
              value={formData.draftLanguage}
              onChange={(e) =>
                setFormData({ ...formData, draftLanguage: e.target.value })
              }
            >
              <option value="">-- Select Language --</option>
              <option value="English">English</option>
              <option value="Marathi">Marathi</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        )}

        {currentStep === 6 && (
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.stay}
              onChange={(e) =>
                setFormData({ ...formData, stay: e.target.checked })
              }
            />
            <label className="font-medium">Do you want to request stay?</label>
          </div>
        )}

        {currentStep === 7 && (
          <div>
            <p className="font-semibold mb-2">Click below to generate draft:</p>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded"
              onClick={() => alert("This will be connected to GPT-4")}
            >
              Generate Appeal Draft
            </button>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={goBack}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Back
        </button>
        {currentStep < steps.length - 1 && (
          <button
            onClick={goNext}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Next
          </button>
        )}
      </div>
    </main>
  );
}
