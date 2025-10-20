export default function MethodologySection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Research Methodology</h2>
        <div className="prose prose-slate max-w-none space-y-6">
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Computational Approach</h3>
            <p className="text-gray-600 leading-relaxed">
              Our research employs density functional theory (DFT) calculations to predict material properties. Detailed
              methodology content will be added here.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Data Processing</h3>
            <p className="text-gray-600 leading-relaxed">
              High-throughput screening techniques are utilized to process large datasets from the Materials Project
              database. Implementation details coming soon.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">AI/ML Techniques</h3>
            <p className="text-gray-600 leading-relaxed">
              Machine learning models are trained to identify patterns and predict material properties. Technical
              specifications will be documented here.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Validation Methods</h3>
            <p className="text-gray-600 leading-relaxed">
              Cross-validation and experimental comparison ensure the accuracy of our computational predictions.
              Validation results to be added.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
