import { RainbowButton } from "@/components/magicui/rainbow-button"

export function GitHubStarButton() {
  return (
    <RainbowButton
      onClick={() => window.open("https://github.com/theayushgaur/flutter-web-canvas", "_blank")}
      className="px-6 py-1.5 text-sm font-medium h-8"
    >
      Star on GitHub
    </RainbowButton>
  )
} 