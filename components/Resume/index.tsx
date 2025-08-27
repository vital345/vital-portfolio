export default function ResumeSection() {
  return (
    <section className="w-full bg-gray-950 text-white py-20 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-x-4 justify-center">
      <div className="max-w-4xl text-center space-y-8 flex flex-col justify-center align-middle">
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
        </div>
      </div>
      <div className="mt-8 md:mt-0 flex items-center justify-center">
        <div className="rounded-xl shadow-sm p-4 w-[400px] h-[600px] md:w-[640px] md:h-[800px] flex items-center justify-center">
          <embed
            src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
            type="application/pdf"
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
