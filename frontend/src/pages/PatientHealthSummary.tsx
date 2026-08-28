function PatientHealthSummary({
  onBack,
}: {
  onBack: () => void
}) {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">

      <div className="w-full max-w-md min-h-screen bg-slate-50 shadow-xl">

        {/* Header */}
        <header className="bg-white px-5 pt-5 pb-4 border-b border-slate-100">

          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-semibold text-blue-600"
          >
            ← Back
          </button>

          <h1 className="mt-4 text-2xl font-bold text-slate-900">
            Health Summary
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Your personal health information
          </p>

        </header>

        {/* Main */}
        <main className="px-5 py-5">

          {/* Patient Profile */}
          <section className="rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">

                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4.2 3.5-7 8-7s8 2.8 8 7" />
                </svg>

              </div>

              <div>

                <h2 className="text-lg font-bold text-slate-900">
                  Patient Name
                </h2>

                <p className="text-sm text-slate-500">
                  JEEVAN-2026-001
                </p>

              </div>

            </div>

          </section>


          {/* Basic Information */}
          <section className="mt-5 rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">

            <h2 className="text-base font-bold text-slate-900">
              Basic Information
            </h2>

            <div className="mt-4 space-y-4">

              <div className="flex justify-between">
                <span className="text-sm text-slate-500">
                  Blood Group
                </span>

                <span className="text-sm font-semibold text-slate-900">
                  O+
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-sm text-slate-500">
                  Age
                </span>

                <span className="text-sm font-semibold text-slate-900">
                  21
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-sm text-slate-500">
                  Gender
                </span>

                <span className="text-sm font-semibold text-slate-900">
                  Female
                </span>
              </div>

            </div>

          </section>


          {/* Medical Information */}
          <section className="mt-5 rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">

            <h2 className="text-base font-bold text-slate-900">
              Medical Information
            </h2>

            <div className="mt-4 space-y-3">

              <div className="rounded-xl bg-red-50 border border-red-100 p-4">

                <p className="text-xs text-red-500">
                  Allergies
                </p>

                <p className="mt-1 text-sm font-semibold text-red-700">
                  No known allergies
                </p>

              </div>

              <div className="rounded-xl bg-blue-50 border border-blue-100 p-4">

                <p className="text-xs text-blue-500">
                  Current Medication
                </p>

                <p className="mt-1 text-sm font-semibold text-blue-700">
                  No current medication
                </p>

              </div>

              <div className="rounded-xl bg-purple-50 border border-purple-100 p-4">

                <p className="text-xs text-purple-500">
                  Medical Conditions
                </p>

                <p className="mt-1 text-sm font-semibold text-purple-700">
                  No major conditions recorded
                </p>

              </div>

            </div>

          </section>


          {/* Privacy Notice */}
          <section className="mt-5 rounded-2xl bg-green-50 border border-green-200 p-4">

            <p className="text-sm font-semibold text-green-700">
              🔒 Your Health Data is Protected
            </p>

            <p className="mt-1 text-xs text-green-600">
              You control who can access your health information.
            </p>

          </section>

        </main>

      </div>

    </div>
  )
}

export default PatientHealthSummary