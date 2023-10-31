'use client';
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return (
    <div>
      The current theme is: {theme}
      <div className="bg-red-400 text-black dark:bg-black dark:text-white">Ebad</div>
      <button onClick={() => setTheme("dark")}>Dark theme</button>
      <br />
      <button onClick={() => setTheme("light")}>Light theme</button>
    </div>
  )
}