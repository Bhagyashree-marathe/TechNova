type BreakGlassAccessProps = {
  onBack: () => void
}

function BreakGlassAccess({ onBack }: BreakGlassAccessProps) {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">

      <div className="w-full max-w-md min-h-screen bg-slate-50 shadow-xl">

        {/* ================= HEADER ================= */}
        <header className="bg-white px-5 pt-5 pb-4 border-b border-slate-100">

          <button
            type="button"
            onClick={onBack}
            className="mb-4 text-blue-600 font-semibold hover:text-blue-800"
          >
            ← Back
          </button>

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
              <span className="text-2xl">
                🔓
              </span>
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                Break-Glass Access
              </h1>

              <p className="text-sm text-slate-500">
                Additional medical information
              </p>
            </div>

          </div>

        </header>


        {/* ================= MAIN ================= */}
        <main className="px-5 py-5 pb-10">

          {/* Warning */}
          <section className="rounded-2xl border border-orange-200 bg-orange-50 p-5">

            <div className="flex gap-3">

              <span className="text-xl">
                ⚠️
              </span>

              <div>

                <h2 className="font-bold text-orange-800">
                  Break-Glass Access Activated
                </h2>

                <p className="mt-2 text-sm text-orange-700">
                  Normal consent is unavailable. Additional
                  medical information is being accessed for
                  emergency treatment.
                </p>

              </div>

            </div>

          </section>


          {/* Patient Identity */}
          <section className="mt-5 rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">

            <h2 className="font-bold text-slate-900">
              Patient Identity
            </h2>

            <div className="mt-4 space-y-3">

              <div className="flex justify-between">

                <span className="text-sm text-slate-500">
                  Name
                </span>

                <span className="text-sm font-semibold text-slate-900">
                  Aarav Sharma
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-sm text-slate-500">
                  Health ID
                </span>

                <span className="text-sm font-semibold text-blue-700">
                  JEEVAN-2026-001
                </span>

              </div>

            </div>

          </section>


          {/* Medical History */}
          <section className="mt-5 rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">

            <h2 className="font-bold text-slate-900">
              Medical History
            </h2>

            <div className="mt-3 space-y-3">

              <div className="rounded-xl bg-slate-50 p-4">

                <p className="text-xs text-slate-500">
                  Previous Diagnosis
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-800">
                  Hypertension
                </p>

              </div>

              <div className="rounded-xl bg-slate-50 p-4">

                <p className="text-xs text-slate-500">
                  Previous Surgery
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-800">
                  Appendectomy - 2023
                </p>

              </div>

            </div>

          </section>


          {/* Detailed Medications */}
          <section className="mt-5 rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">

            <h2 className="font-bold text-slate-900">
              Medication Details
            </h2>

            <div className="mt-3 space-y-3">

              <div className="rounded-xl bg-blue-50 p-4">

                <p className="text-sm font-semibold text-blue-800">
                  Amlodipine 5 mg
                </p>

                <p className="mt-1 text-xs text-blue-600">
                  Once daily
                </p>

              </div>

              <div className="rounded-xl bg-blue-50 p-4">

                <p className="text-sm font-semibold text-blue-800">
                  Paracetamol 500 mg
                </p>

                <p className="mt-1 text-xs text-blue-600">
                  As required
                </p>

              </div>

            </div>

          </section>


          {/* Recent Visit */}
          <section className="mt-5 rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">

            <h2 className="font-bold text-slate-900">
              Recent Medical Visit
            </h2>

            <div className="mt-3">

              <p className="text-xs text-slate-500">
                Last Visit
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-800">
                20 August 2026
              </p>

              <p className="mt-3 text-xs text-slate-500">
                Doctor's Note
              </p>

              <p className="mt-1 text-sm text-slate-700">
                Patient advised regular monitoring and medication.
              </p>

            </div>

          </section>


          {/* Access Record */}
          <section className="mt-5 rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">

            <h2 className="font-bold text-slate-900">
              Access Record
            </h2>

            <div className="mt-3 space-y-3">

              <div className="flex justify-between">

                <span className="text-sm text-slate-500">
                  Access Type
                </span>

                <span className="text-sm font-semibold text-orange-700">
                  Break-Glass
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-sm text-slate-500">
                  Doctor
                </span>

                <span className="text-sm font-semibold text-slate-800">
                  Dr. Priya Sharma
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-sm text-slate-500">
                  Doctor ID
                </span>

                <span className="text-sm font-semibold text-slate-800">
                  DOC-2026-001
                </span>

              </div>

            </div>

          </section>


          {/* Audit Notice */}
          <section className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4">

            <div className="flex gap-3">

              <span className="text-lg">
                🔒
              </span>

              <p className="text-sm text-red-700">
                This Break-Glass access has been recorded in the
                Audit Log for accountability and security.
              </p>

            </div>

          </section>


          {/* Done Button */}
          <button
            type="button"
            onClick={onBack}
            className="mt-5 w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition"
          >
            Done
          </button>

        </main>

      </div>

    </div>
  )
}

export default BreakGlassAccess