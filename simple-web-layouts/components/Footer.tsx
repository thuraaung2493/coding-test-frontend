export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Links Section */}
          <div className="md:col-span-2 space-y-8 md:space-y-0 md:flex md:justify-between">
            <div className="space-y-4">
              <div className="text-2xl font-bold">LOGO</div>
              <div className="flex space-x-6 md:space-x-0 md:flex-col md:space-y-2">
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  About
                </a>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Contact
                </a>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Careers
                </a>
              </div>
            </div>

            {/* Link Columns */}
            <div className="grid grid-cols-2 gap-8 md:flex md:space-x-12">
              <div>
                <h3 className="font-bold mb-3 text-sm md:text-base">
                  Discovery
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  {['Title', 'Accounts', 'Terms', 'Inspiration'].map((item) => (
                    <li key={item} className="hover:text-white">
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-3 text-sm md:text-base">
                  Resources
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  {['Guide', 'Printed', 'Support', 'FAQ'].map((item) => (
                    <li key={item} className="hover:text-white">
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-1">
            <div className="max-w-xs">
              <h3 className="font-bold mb-4 text-sm md:text-base">
                Newsletter
              </h3>
              <div className="flex border border-gray-600 rounded-lg focus-within:border-white transition-colors">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none"
                />
                <button className="px-4 py-3 hover:bg-gray-700 transition-colors rounded-r-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                </button>
              </div>
              <p className="mt-3 text-xs text-gray-400">
                Subscribe to our latest updates
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1">
            <h3 className="font-bold mb-4 text-sm md:text-base text-center">
              Follow Us
            </h3>
            <div className="flex space-x-6 justify-start md:justify-end">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.895 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.895-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2.527 18.5c-1.306 0-2.36-.543-2.984-1.447-.639-.927-.766-2.183-.38-3.342l.668-2.478H5.5V9.227h2.018l.26-1.019c.26-1.019.668-2.183 1.409-3.095C10.171 4.013 11.267 3.5 12.624 3.5c1.52 0 2.613.434 3.342 1.306.562.66.894 1.553.957 2.66h-2.686c-.07-.6-.26-1.062-.575-1.395-.395-.408-.971-.612-1.842-.612-.9 0-1.553.23-1.965.7-.395.447-.612 1.096-.612 1.947 0 .36.035.7.087.995H12.5v2.313h-1.965l-.33 1.268c-.208.816-.087 1.447.33 1.925.434.485 1.096.728 2.073.728.9 0 1.553-.23 1.965-.7.395-.447.612-1.096.612-1.947h2.66c0 1.553-.485 2.77-1.447 3.68-.927.882-2.27 1.322-4.03 1.322zm9.184-3.16h-2.313v-2.313h2.313v2.313zm0-4.656h-2.313V8.37h2.313v2.313z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} LOGO. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
