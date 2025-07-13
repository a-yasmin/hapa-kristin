"use client"

import Box from "@/components/Box"
import Button from "@/components/Button"
import Text from "@/components/Text"
import VStack from "@/components/VStack"

export default function Test() {
  return (
    <main className="p-10 space-y-12 bg-gray-50 min-h-screen text-black">
      <section>
        <h2 className="text-2xl font-bold mb-2 ">🅰️ Arimo (font-sans)</h2>
        <p className="font-sans text-lg">
          This is Arimo — clean, modern, and great for UI text. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">🔠 Nunito Sans (font-alt)</h2>
        <p className="font-alt text-lg">
          This is Nunito Sans — friendly and rounded. Vivamus euismod augue et
          lorem efficitur dignissim.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">
          📜 Libre Baskerville (font-serif)
        </h2>
        <p className="font-serif text-lg italic">
          This is Libre Baskerville — classic and elegant. “Design is not just
          what it looks like and feels like. Design is how it works.”
        </p>
      </section>

      <section>
        <VStack>
          <Box className="p-4 bg-primary">
            <Text>Hello</Text>
          </Box>
          <Button onClick={() => console.log("clicked")}>Click me</Button>
        </VStack>
      </section>
    </main>
  )
}
