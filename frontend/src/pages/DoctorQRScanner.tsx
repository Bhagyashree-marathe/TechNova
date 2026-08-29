
import { useState } from "react"

type DoctorQRScannerProps = {
  onBack: () => void
  onPatientFound?: (healthId: string) => void
}

function DoctorQRScanner({
  onBack,
  onPatientFound,
}: DoctorQRScannerProps) {
  const [scanned, setScanned] = useState(false)
  const [healthId, setHealthId] = useState("")

  // Demo scan function
  // Later this will be replaced with the real camera QR scanner
  const handleDemoScan = () => {
    const demoHealthId = "JEEVAN-2026-001"

    setHealthId(demoHealthId)
    setScanned(true)

    if (onPatientFound) {
      onPatientFound(demoHealthId)
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">

      {/* Mobile App Container */}
      <div className="w-full max-w-md min-h-screen bg-slate-50 shadow-xl">

        {/* Header */}
        <header className="bg-white px-5 pt-5 pb-4 border-b border-slate-100">

          <button
            type="button"
            onClick={onBack}
            className="mb-4 text-blue-600 font-medium"
          >
            ← Back
          </button>

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <span className="text-2xl">
                ▦
              </span>
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                Scan Health ID
              </h1>

              <p className="text-sm text-slate-500">
                Scan patient's QR code
              </p>
            </div>

          </div>

        </header>

        <main className="px-5 py-6">

          {/* Scanner Area */}
          <section className="rounded-2xl bg-white border border-slate-100 shadow-sm p-5">

            <h2 className="text-base font-bold text-slate-900">
              QR Scanner
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Position the patient's Health ID QR code inside the frame.
            </p>

            {/* Scanner Frame */}
            <div className="relative mt-6 h-64 rounded-2xl bg-slate-900 overflow-hidden flex items-center justify-center">

              {/* Scanner corners */}
              <div className="absolute top-8 left-8 w-10 h-10 border-t-4 border-l-4 border-green-400 rounded-tl-lg" />

              <div className="absolute top-8 right-8 w-10 h-10 border-t-4 border-r-4 border-green-400 rounded-tr-lg" />

              <div className="absolute bottom-8 left-8 w-10 h-10 border-b-4 border-l-4 border-green-400 rounded-bl-lg" />

              <div className="absolute bottom-8 right-8 w-10 h-10 border-b-4 border-r-4 border-green-400 rounded-br-lg" />

              {/* QR icon */}
              <div className="w-32 h-32 border-2 border-white/60 rounded-xl flex items-center justify-center">

                <div className="grid grid-cols-3 gap-2">

                  <div className="w-7 h-7 border-4 border-white rounded-sm" />
                  <div className="w-7 h-7 bg-white rounded-sm" />
                  <div className="w-7 h-7 border-4 border-white rounded-sm" />

                  <div className="w-7 h-7 bg-white rounded-sm" />
                  <div className="w-7 h-7 border-4 border-white rounded-sm" />
                  <div className="w-7 h-7 bg-white rounded-sm" />

                  <div className="w-7 h-7 border-4 border-white rounded-sm" />
                  <div className="w-7 h-7 bg-white rounded-sm" />
                  <div className="w-7 h-7 border-4 border-white rounded-sm" />

                </div>

              </div>

              {/* Scanning line */}
              <div className="absolute left-12 right-12 top-1/2 h-0.5 bg-green-400" />

            </div>

            <p className="mt-4 text-center text-xs text-slate-500">
              Scan a patient's Jeevan Health ID QR
            </p>

            {/* Demo Button */}
            <button
              type="button"
              onClick={handleDemoScan}
              className="mt-5 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              Simulate QR Scan
            </button>

          </section>


          {/* Scan Result */}
          {scanned && (
            <section className="mt-5 rounded-2xl bg-white border border-green-200 shadow-sm p-5">

              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center">

                  <span className="text-green-600 text-xl">
                    ✓
                  </span>

                </div>

                <div>
                  <p className="text-sm font-bold text-green-700">
                    QR Code Detected
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    Patient Health ID found
                  </p>
                </div>

              </div>

              <div className="mt-4 rounded-xl bg-blue-50 p-4">

                <p className="text-xs text-slate-500">
                  Health ID
                </p>

                <p className="mt-1 font-bold text-blue-700">
                  {healthId}
                </p>

              </div>

              <button
                type="button"
                onClick={() => {
                  if (onPatientFound) {
                    onPatientFound(healthId)
                  }
                }}
                className="mt-4 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white"
              >
                View Patient
              </button>

            </section>
          )}


          {/* Security Notice */}
          <section className="mt-5 rounded-2xl bg-blue-50 border border-blue-100 p-4">

            <div className="flex gap-3">

              <span className="text-lg">
                🔒
              </span>

              <p className="text-sm text-blue-700">
                Patient information is only displayed according to
                consent and access permissions.
              </p>

            </div>

          </section>

        </main>

      </div>
    </div>
  )
}

export default DoctorQRScanner

