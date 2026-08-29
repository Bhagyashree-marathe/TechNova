type JeevanLogoProps = {
  size?: "small" | "medium" | "large"
}

function JeevanLogo({ size = "medium" }: JeevanLogoProps) {
  const sizes = {
    small: {
      box: "w-12 h-12",
      icon: "w-7 h-7",
      title: "text-lg",
      subtitle: "text-[9px]",
    },
    medium: {
      box: "w-20 h-20",
      icon: "w-11 h-11",
      title: "text-2xl",
      subtitle: "text-xs",
    },
    large: {
      box: "w-28 h-28",
      icon: "w-16 h-16",
      title: "text-4xl",
      subtitle: "text-sm",
    },
  }

  const s = sizes[size]

  return (
    <div className="flex flex-col items-center">
      {/* Logo Icon */}
      <div
        className={`${s.box} rounded-3xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center shadow-lg`}
      >
        <svg
          viewBox="0 0 100 100"
          className={s.icon}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Heart */}
          <path
            d="M50 78
               C45 73 20 58 20 38
               C20 25 30 18 41 18
               C47 18 52 22 55 27
               C58 22 63 18 69 18
               C80 18 88 25 88 38
               C88 58 63 73 50 78Z"
            fill="white"
          />

          {/* Medical Cross */}
          <rect
            x="44"
            y="29"
            width="12"
            height="30"
            rx="3"
            fill="#2563EB"
          />

          <rect
            x="35"
            y="38"
            width="30"
            height="12"
            rx="3"
            fill="#2563EB"
          />

          {/* Digital ID Lines */}
          <path
            d="M28 67H39"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <path
            d="M61 67H72"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* App Name */}
      <h1
        className={`${s.title} mt-4 font-bold tracking-tight text-slate-900`}
      >
        Jeevan
      </h1>

      <p
        className={`${s.subtitle} font-semibold tracking-[0.2em] text-blue-600 uppercase`}
      >
        Health ID
      </p>
    </div>
  )
}

export default JeevanLogo