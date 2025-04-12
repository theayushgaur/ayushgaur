
import { RainbowButton } from "@/components/magicui/rainbow-button"
import { Github } from "lucide-react"

export function GitHubStarButton() {
  return (
    <RainbowButton
      onClick={() => window.open("https://github.com/theayushgaur/flutter-web-canvas", "_blank")}
      className="px-4 py-1.5 text-sm font-medium h-8 flex items-center gap-1.5 rounded-full"
    >
      <Github className="h-3.5 w-3.5" />
      <span>Star on GitHub</span>
    </RainbowButton>
  )
} 
