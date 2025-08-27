export default function ResumeSection() {
  return (
    <section className="w-full bg-gray-950 text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Here’s My Resume
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          You’ve seen my career journey and key contributions above. For a
          complete overview including skills, and education feel free to
          download or view my resume.
        </p>

        <div className="flex justify-center gap-6 pt-4">
          <a
            href="/resume.pdf"
            download
            className="bg-blue-950 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-xl shadow-md transition"
          >
            Download Resume
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 text-gray-300 hover:text-white hover:border-white font-medium px-6 py-3 rounded-xl transition"
          >
            View Online
          </a>
        </div>
      </div>
    </section>
  );
}
