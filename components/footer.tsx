export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-24 px-4 border-t border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-16">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Contact & Collaboration</h2>
            <div className="text-lg text-slate-300 space-y-3">
              <p>John Doe, Jane Smith, Alex Johnson</p>
              <p>Department of Materials Science & Engineering</p>
              <a
                href="mailto:researcher@university.edu"
                className="text-indigo-400 hover:text-indigo-300 transition-colors inline-block"
              >
                researcher@university.edu
              </a>
            </div>
          </div>

          {/* Full Paper Link */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-100">Read the Full Paper</h3>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors text-lg"
            >
              Access Full Research Paper
            </a>
            <p className="text-sm text-slate-400">Published in Journal of Materials Discovery, 2024</p>
          </div>

          {/* Data Source Attribution */}
          <div className="space-y-6 pt-8 border-t border-slate-800">
            <h3 className="text-xl font-semibold text-slate-100">Data Sources & Acknowledgments</h3>
            <div className="text-slate-300 space-y-3">
              <p>
                This research utilizes computational materials data from the{" "}
                <a
                  href="https://materialsproject.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 underline"
                >
                  Materials Project
                </a>
                , supported by the U.S. Department of Energy.
              </p>
              <p className="text-sm text-slate-400">
                Materials Project API | DOE Office of Science | Basic Energy Sciences
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-slate-500 pt-8">
            <p>© 2025 AI-Driven Materials Discovery Research Team</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
