export default function Footer() {
  return (
    <footer className="bg-[#636568] text-gray-400 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-950">
              E-Learn
            </h2>
            <p className="mt-2 text-sm max-w-sm text-white">
              Learn new skills with focused, bite-sized courses designed for
              modern developers.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h3 className="text-gray-950 font-medium mb-2">Platform</h3>
              <ul className="space-y-1 text-sm text-white">
                <li>Courses</li>
                <li>My Learning</li>
                <li>Saved</li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-950 font-medium mb-2">Support</h3>
              <ul className="space-y-1 text-sm text-white">
                <li>Help</li>
                <li>Contact</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-white text-sm text-center">
          © {new Date().getFullYear()} E-Learn. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
