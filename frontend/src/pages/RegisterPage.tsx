import { useState } from "react"
import type { FormEvent } from "react"
import LoginPage from "./LoginPage"

function RegisterPage() {
  const [showLogin, setShowLogin] = useState(false)
    const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    mobile: "",
    email: "",
    password: "",
    emergencyContact: {
    name: "",
    relation: "",
    phone: "",
    },
      })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const handleRegister = async (e: FormEvent) => {
  e.preventDefault()
  setError("")
  setIsLoading(true)
    try {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    const data = await response.json()

    if (!response.ok) {
      setError(data.message || "Registration failed")
      return
    }

    alert(`Health ID created successfully: ${data.patient.healthId}`)
    setShowLogin(true)
  } catch (error) {
    console.error("Registration error:", error)
    setError("Unable to connect to the server")
  } finally {
    setIsLoading(false)
  }
}

 


  if (showLogin) {
    return <LoginPage />
  }
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">

      {/* Mobile App Container */}
      <div className="w-full max-w-md min-h-screen bg-white shadow-xl">

        {/* Header */}
        <header className="flex items-center gap-4 px-5 py-5 border-b border-slate-100">

          <button className="text-2xl text-slate-700">
            ←
          </button>

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              Create Your Health ID
            </h1>

            <p className="text-xs text-slate-500">
              Patient Registration
            </p>
          </div>

        </header>


        {/* Main Content */}
        <main className="px-6 py-7">

          {/* Title */}
          <div className="mb-7">

            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">

              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4Z" />
                <path d="M12 8v6" />
                <path d="M9 11h6" />
              </svg>

            </div>

            <h2 className="text-2xl font-bold text-slate-900">
              Create Your Health ID
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Create your secure digital health identity and
              keep your important health information accessible.
            </p>

          </div>


          {/* Registration Form */}
          {error && (
          <div className="mb-4 rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-600">
            {error}
          </div>
        )}
          <form className="space-y-5" onSubmit={handleRegister}>


            {/* Full Name */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

            </div>


            {/* Date of Birth */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Date of Birth
              </label>

              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) =>
                  setFormData({ ...formData, dateOfBirth: e.target.value })
                }
                
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

            </div>


            {/* Gender */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Gender
              </label>

              
              <select
              value={formData.gender}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">
                  Select gender
                </option>

                <option value="Male">
                  Male
                </option>

                <option value="Female">
                  Female
                </option>

                <option value="Other">
                  Other
                </option>

                <option value="prefer-not">
                  Prefer not to say
                </option>

              </select>

            </div>


            {/* Mobile Number */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Mobile Number
              </label>

              <input
                type="tel"
                placeholder="Enter mobile number"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

            </div>


            {/* Email */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

            </div>


            {/* Password */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Create Password
              </label>

              <input
                type="password"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <p className="mt-2 text-xs text-slate-400">
                Use at least 8 characters with a mix of letters and numbers.
              </p>

            </div>


            {/* Emergency Contact */}
           <div>

  <label className="block text-sm font-semibold text-slate-700 mb-2">
    Emergency Contact Name
  </label>

  <input
    type="text"
    placeholder="Enter contact name"
    value={formData.emergencyContact.name}
    onChange={(e) =>
      setFormData({
        ...formData,
        emergencyContact: {
          ...formData.emergencyContact,
          name: e.target.value,
        },
      })
    }
    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
  />

  <label className="block text-sm font-semibold text-slate-700 mb-2 mt-4">
    Relationship
  </label>

  <input
    type="text"
    placeholder="e.g. Guardian, Parent"
    value={formData.emergencyContact.relation}
    onChange={(e) =>
      setFormData({
        ...formData,
        emergencyContact: {
          ...formData.emergencyContact,
          relation: e.target.value,
        },
      })
    }
    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
  />

  <label className="block text-sm font-semibold text-slate-700 mb-2 mt-4">
    Emergency Contact Number
  </label>

  <input
    type="tel"
    placeholder="Emergency contact number"
    value={formData.emergencyContact.phone}
    onChange={(e) =>
      setFormData({
        ...formData,
        emergencyContact: {
          ...formData.emergencyContact,
          phone: e.target.value,
        },
      })
    }
    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
  />

</div>


            {/* Consent */}
            <div className="rounded-xl bg-slate-50 border border-slate-100 p-4">

              <label className="flex items-start gap-3">

                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 accent-blue-600"
                />

                <span className="text-xs leading-5 text-slate-600">
                  I agree to the Terms & Conditions and understand
                  that my health information will be securely managed
                  through my Jeevan Health ID.
                </span>

              </label>

            </div>


            {/* Register Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl shadow-md transition active:scale-[0.98] disabled:opacity-50"
            >
              {isLoading ? "Creating Health ID..." : "Create Health ID"}
            </button>


          </form>


          {/* Login */}
          <div className="text-center mt-6 pb-6">

            <p className="text-sm text-slate-500">
              Already have a Health ID?
            </p>

            <button
             onClick={() => setShowLogin(true)}
              className="mt-1 text-sm font-semibold text-blue-600"
>
             Login →
            </button>

          </div>

        </main>

      </div>

    </div>
  )
}

export default RegisterPage