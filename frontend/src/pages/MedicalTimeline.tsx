function MedicalTimeline({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">

      <div className="w-full max-w-md min-h-screen bg-slate-50 shadow-xl">

        {/* Header */}
        <header className="bg-white px-5 py-5 border-b border-slate-100">
          <div className="flex items-center gap-4">

            {/* Back Button */}
            <button
              type="button"
              onClick={onBack}
              className="text-2xl text-slate-700 hover:text-blue-600"
            >
              ←
            </button>

            <div>
              <h1 className="text-lg font-bold text-slate-900">
                Medical Timeline
              </h1>

              <p className="text-xs text-slate-500">
                Your medical history
              </p>
            </div>

          </div>
        </header>


        <main className="px-5 py-6 pb-10">

          {/* Intro */}
          <div className="mb-6">

            <h2 className="text-xl font-bold text-slate-900">
              Medical History
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              View your consultations, treatments, tests and medical records.
            </p>

          </div>


          {/* Timeline */}
          <div className="relative">

            {/* Vertical Line */}
            <div className="absolute left-5 top-2 bottom-2 w-px bg-slate-200" />


            {/* Timeline Item 1 */}
            <div className="relative flex gap-4 pb-7">

              <div className="relative z-10 w-10 h-10 rounded-full bg-blue-100 border-4 border-slate-50 flex items-center justify-center">

                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M3 10h18" />
                  <path d="M5 10v9h14v-9" />
                  <path d="M4 10l2-6h12l2 6" />
                  <path d="M9 19v-5h6v5" />
                </svg>

              </div>

              <div className="flex-1 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">

                <div className="flex justify-between gap-3">

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Doctor Consultation
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      General Medicine
                    </p>
                  </div>

                  <span className="text-[10px] font-medium text-slate-400">
                    Recent
                  </span>

                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">

                  <p className="text-xs text-slate-500">
                    Consultation record
                  </p>

                  <p className="mt-1 text-sm text-slate-700">
                    Medical consultation recorded securely.
                  </p>

                </div>

              </div>

            </div>


            {/* Timeline Item 2 */}
            <div className="relative flex gap-4 pb-7">

              <div className="relative z-10 w-10 h-10 rounded-full bg-purple-100 border-4 border-slate-50 flex items-center justify-center">

                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M8 3v4M16 3v4" />
                  <rect x="4" y="5" width="16" height="16" rx="2" />
                  <path d="M8 11h8M8 15h5" />
                </svg>

              </div>

              <div className="flex-1 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">

                <div className="flex justify-between gap-3">

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Medical Visit
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Follow-up consultation
                    </p>
                  </div>

                  <span className="text-[10px] font-medium text-slate-400">
                    Previous
                  </span>

                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">

                  <p className="text-xs text-slate-500">
                    Treatment
                  </p>

                  <p className="mt-1 text-sm text-slate-700">
                    Follow-up treatment information.
                  </p>

                </div>

              </div>

            </div>


            {/* Timeline Item 3 */}
            <div className="relative flex gap-4 pb-7">

              <div className="relative z-10 w-10 h-10 rounded-full bg-green-100 border-4 border-slate-50 flex items-center justify-center">

                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M5 4h14v16H5z" />
                  <path d="M8 8h8M8 12h6M8 16h4" />
                </svg>

              </div>

              <div className="flex-1 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">

                <div className="flex justify-between gap-3">

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Diagnostic Test
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Laboratory / diagnostic record
                    </p>
                  </div>

                  <span className="text-[10px] font-medium text-slate-400">
                    Previous
                  </span>

                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">

                  <p className="text-xs text-slate-500">
                    Report
                  </p>

                  <p className="mt-1 text-sm text-slate-700">
                    Diagnostic report stored securely.
                  </p>

                </div>

              </div>

            </div>


            {/* Timeline Item 4 */}
            <div className="relative flex gap-4">

              <div className="relative z-10 w-10 h-10 rounded-full bg-orange-100 border-4 border-slate-50 flex items-center justify-center">

                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M12 5v14" />
                  <path d="M5 12h14" />
                </svg>

              </div>

              <div className="flex-1 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">

                <div className="flex justify-between gap-3">

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Health Record Created
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Jeevan Health ID
                    </p>
                  </div>

                  <span className="text-[10px] font-medium text-slate-400">
                    Earlier
                  </span>

                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">

                  <p className="text-xs text-slate-500">
                    Digital health identity
                  </p>

                  <p className="mt-1 text-sm text-slate-700">
                    Your secure Jeevan Health ID was created.
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* Privacy Notice */}
          <div className="mt-7 rounded-2xl bg-blue-50 border border-blue-100 p-4">

            <div className="flex items-start gap-3">

              <span className="text-blue-600">
                🔒
              </span>

              <div>

                <p className="text-sm font-semibold text-slate-800">
                  Secure Medical Records
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Your medical history is securely maintained and access
                  is controlled according to your permissions.
                </p>

              </div>

            </div>

          </div>

        </main>

      </div>
    </div>
  )
}

export default MedicalTimeline