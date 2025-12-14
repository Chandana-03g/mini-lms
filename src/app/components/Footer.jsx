export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h2 className="text-xl font-semibold text-white">
              E-Learn
            </h2>
            <p className="mt-2 text-sm max-w-sm text-gray-300">
              Learn new skills with focused, bite-sized courses designed for
              modern developers.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h3 className="text-white font-medium mb-3">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-purple-400 cursor-pointer transition">
                  Courses
                </li>
                <li className="hover:text-purple-400 cursor-pointer transition">
                  My Learning
                </li>
                <li className="hover:text-purple-400 cursor-pointer transition">
                  Saved
                </li>
              </ul>
            </div>

            
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-10 pt-4 text-sm text-center text-gray-400">
          © {new Date().getFullYear()} E-Learn. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
