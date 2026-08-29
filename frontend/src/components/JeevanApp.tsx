import { useState } from "react"
import LandingPage from "../pages/LandingPage"

function JeevanApp() {
  const [openApp, setOpenApp] = useState(false)

  // After clicking the Jeevan app icon
  if (openApp) {
    return <LandingPage />
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">

      {/* Jeevan App Icon */}
      <button
        type="button"
        onClick={() => setOpenApp(true)}
        className="group flex flex-col items-center"
      >

        {/* App Logo */}
        <div className="w-24 h-24 rounded-[22px] bg-blue-600 shadow-xl flex items-center justify-center transition duration-200 group-hover:scale-105 group-active:scale-95">

          <svg
            viewBox="0 0 48 48"
            className="w-14 h-14 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            {/* Heart */}
            <path
              d="M24 40S8 31 8 19C8 12 13 8 19 8c3 0 5 2 7 5 2-3 4-5 7-5 6 0 11 4 11 11 0 12-16 21-20 21Z"
            />

            {/* ECG */}
            <path d="M14 23h6l2-4 3 8 3-5h6" />
          </svg>

        </div>

        {/* App Name */}
        <p className="mt-3 text-lg font-bold tracking-wide text-slate-900">
          JEEVAN
        </p>

        <p className="text-xs font-semibold tracking-[0.18em] text-blue-600">
          HEALTH ID
        </p>

      </button>

    </div>
  )
}

export default JeevanApp