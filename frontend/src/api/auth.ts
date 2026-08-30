const API_BASE_URL = "https://technova-1-h8od.onrender.com/api"

export async function loginPatient(
  identifier: string,
  password: string
) {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      identifier,
      password,
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || "Login failed")
  }

  return data
}
