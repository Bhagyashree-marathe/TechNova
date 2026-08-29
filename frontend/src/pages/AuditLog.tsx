
type AuditLogProps = {
  onBack: () => void
}

function AuditLog({ onBack }: AuditLogProps) {
  const auditRecords = [
    {
      id: 1,
      action: "Health Information Accessed",
      person: "Dr. Priya Sharma",
      role: "Doctor",
      date: "28 August 2026",
      time: "10:42 AM",
      details: "Health Summary and Medical History",
      type: "access",
    },
    {
      id: 2,
      action: "Consent Granted",
      person: "Jeevan Healthcare Center",
      role: "Healthcare Provider",
      date: "28 August 2026",
      time: "10:35 AM",
      details: "Health Summary and Emergency Information",
      type: "consent",
    },
    {
      id: 3,
      action: "QR Health ID Scanned",
      person: "Dr. Priya Sharma",
      role: "Doctor",
      date: "28 August 2026",
      time: "10:30 AM",
      details: "Patient Health ID: JEEVAN-2026-001",
      type: "scan",
    },
    {
      id: 4,
      action: "Medical Record Updated",
      person: "Jeevan Healthcare Center",
      role: "Healthcare Provider",
      date: "27 August 2026",
      time: "04:15 PM",
      details: "Medical history updated",
      type: "update",
    },
    {
      id: 5,
      action: "Consent Revoked",
      person: "Patient",
      role: "Health ID Owner",
      date: "25 August 2026",
      time: "11:20 AM",
      details: "Previous access permission revoked",
      type: "revoke",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">

      {/* Mobile App Container */}
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

            <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
              <span className="text-xl">
                📋
              </span>
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                Audit Log
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Track access to your health information
              </p>
            </div>

          </div>

        </header>


        {/* ================= MAIN ================= */}
        <main className="px-5 py-5 pb-10">

          {/* ================= SECURITY SUMMARY ================= */}
          <section className="rounded-2xl bg-blue-600 p-5 text-white shadow-lg">

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center">
                🔒
              </div>

              <div>
                <p className="text-xs text-blue-100">
                  SECURITY MONITORING
                </p>

                <h2 className="mt-1 text-lg font-bold">
                  Your Health Data Activity
                </h2>
              </div>

            </div>

            <p className="mt-4 text-sm text-blue-100">
              Every access, consent change, and record activity
              is recorded for transparency and security.
            </p>

          </section>


          {/* ================= PATIENT HEALTH ID ================= */}
          <section className="mt-5 rounded-2xl bg-white border border-slate-100 shadow-sm p-5">

            <p className="text-xs text-slate-500">
              Health ID
            </p>

            <p className="mt-1 font-bold text-blue-700">
              JEEVAN-2026-001
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3">

              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-xs text-slate-500">
                  Total Activities
                </p>

                <p className="mt-1 text-xl font-bold text-slate-900">
                  {auditRecords.length}
                </p>
              </div>

              <div className="rounded-xl bg-green-50 p-3">
                <p className="text-xs text-green-600">
                  Security Status
                </p>

                <p className="mt-1 text-sm font-bold text-green-700">
                  Protected
                </p>
              </div>

            </div>

          </section>


          {/* ================= ACTIVITY HISTORY ================= */}
          <section className="mt-6">

            <div className="flex items-center justify-between mb-3">

              <h2 className="text-base font-bold text-slate-900">
                Activity History
              </h2>

              <span className="text-xs text-slate-400">
                Recent
              </span>

            </div>


            <div className="space-y-3">

              {auditRecords.map((record) => (

                <div
                  key={record.id}
                  className="rounded-2xl bg-white border border-slate-100 shadow-sm p-4"
                >

                  <div className="flex items-start gap-3">

                    {/* Activity Icon */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        record.type === "access"
                          ? "bg-blue-100"
                          : record.type === "consent"
                          ? "bg-green-100"
                          : record.type === "scan"
                          ? "bg-purple-100"
                          : record.type === "update"
                          ? "bg-yellow-100"
                          : "bg-red-100"
                      }`}
                    >

                      <span className="text-lg">
                        {record.type === "access"
                          ? "👁️"
                          : record.type === "consent"
                          ? "✓"
                          : record.type === "scan"
                          ? "▦"
                          : record.type === "update"
                          ? "✏️"
                          : "↩️"}
                      </span>

                    </div>


                    {/* Activity Details */}
                    <div className="flex-1">

                      <p className="text-sm font-bold text-slate-900">
                        {record.action}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {record.person} • {record.role}
                      </p>

                      <p className="mt-2 text-xs text-slate-600">
                        {record.details}
                      </p>

                      <p className="mt-2 text-xs text-slate-400">
                        {record.date} • {record.time}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </section>


          {/* ================= SECURITY NOTICE ================= */}
          <section className="mt-5 rounded-2xl bg-blue-50 border border-blue-100 p-4">

            <div className="flex gap-3">

              <span className="text-lg">
                🔐
              </span>

              <div>

                <p className="text-sm font-semibold text-blue-900">
                  Secure Audit Trail
                </p>

                <p className="mt-1 text-xs text-blue-700">
                  Audit records help you see who accessed your
                  health information and when. This improves
                  transparency and protects your privacy.
                </p>

              </div>

            </div>

          </section>

        </main>

      </div>

    </div>
  )
}

export default AuditLog
