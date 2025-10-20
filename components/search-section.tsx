export default function SearchSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Search Materials Database</h2>
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <p className="text-gray-600 mb-4">Interactive search functionality coming soon</p>
          <div className="space-y-4 text-sm text-gray-500">
            <p>This section will include:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Search bar for materials by name or formula</li>
              <li>Advanced filters (band gap, density, crystal system)</li>
              <li>Results grid with material cards</li>
              <li>Pagination controls</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
