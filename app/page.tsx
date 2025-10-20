import Footer from "@/components/footer"
import SearchSection from "@/components/search-section"
import MethodologySection from "@/components/methodology-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            AI-Driven Materials Discovery: A Computational Approach
          </h1>

          <p className="text-xl text-gray-600 mt-4">John Doe, Jane Smith, Alex Johnson</p>

          <div className="mt-8 h-64 md:h-96 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />
        </div>
      </section>

      <SearchSection />

      <MethodologySection />

      <Footer />
    </main>
  )
}
