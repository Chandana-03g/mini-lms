


// "use client";

// import { useSession, signOut } from "next-auth/react";
// import Link from "next/link";
// import { useState } from "react";

// export default function Navbar() {
//   const { data: session } = useSession();
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50">
//       <nav
//         className="
//     mx-auto max-w-full
//     px-8 py-3
//     flex justify-between items-center
//     bg-white/80 backdrop-blur-md
//     shadow-lg
//     border-b border-gray-300
//   "
//       >
//         {/* LOGO */}
//         <Link
//           href="/"
//           className="text-xl font-bold text-purple-900 tracking-wide"
//         >
//           E-Learn
//         </Link>

//         {!session ? (
//           <Link
//             href="/login"
//             className="
//               px-5 py-2
//               bg-purple-600 text-white
//               rounded-lg font-medium
//               hover:bg-purple-700
//               transition
//             "
//           >
//             Login
//           </Link>
//         ) : (
//           <div className="flex items-center gap-8 relative text-gray-900">

//             {/* NAV LINKS */}
//             {[
//               { label: "Courses", href: "/courses" },
//               { label: "My Learning", href: "/my-learning" },
//               { label: "Saved", href: "/saved" },
//             ].map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className="
//                   relative font-medium
//                   hover:text-purple-700
//                   transition
//                   after:absolute after:left-0 after:-bottom-1
//                   after:h-[2px] after:w-0 after:bg-purple-600
//                   after:transition-all after:duration-300
//                   hover:after:w-full
//                 "
//               >
//                 {item.label}
//               </Link>
//             ))}

//             {/* PROFILE */}
//             <div className="relative">
//               <div
//                 onClick={() => setOpen(!open)}
//                 className="
//                   w-9 h-9
//                   rounded-full
//                   bg-purple-600 text-white
//                   flex items-center justify-center
//                   font-semibold
//                   cursor-pointer
//                   hover:ring-2 hover:ring-purple-400
//                   transition
//                 "
//               >
//                 {session.user?.name?.[0]?.toUpperCase()}
//               </div>

//               {open && (
//                 <div
//                   className="
//                     absolute right-0 mt-3
//                     w-40
//                     bg-white
//                     rounded-xl
//                     shadow-xl
//                     border
//                     overflow-hidden
//                   "
//                 >
//                   <div className="px-4 py-2 text-xs text-gray-500 border-b">
//                     Signed in
//                   </div>

//                   <button
//                     onClick={() => signOut({ callbackUrl: "/" })}
//                     className="
//                       w-full px-4 py-2
//                       text-sm text-left
//                       text-red-600
//                       hover:bg-red-50
//                       transition
//                     "
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }



"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow">
        <nav className="px-6 py-3 flex justify-between items-center">
          {/* LOGO */}
          <Link href="/" className="text-xl font-bold text-purple-800">
            E-Learn
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8 relative">
            {[
              { label: "Courses", href: "/courses" },
              { label: "My Learning", href: "/my-learning" },
              { label: "Saved", href: "/saved" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  relative font-medium text-gray-800
                  hover:text-purple-700
                  transition
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-purple-600
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item.label}
              </Link>
            ))}

            {!session ? (
              <Link
                href="/login"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg"
              >
                Login
              </Link>
            ) : (
              <div className="relative">
                {/* PROFILE BUTTON */}
                <div
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="w-9 h-9 rounded-full bg-purple-600 text-white
                             flex items-center justify-center font-semibold
                             cursor-pointer"
                >
                  {session.user?.name?.[0]?.toUpperCase()}
                </div>

                {/* PROFILE DROPDOWN */}
                {profileOpen && (
                  <div
                    className="
                      absolute right-0 mt-3
                      w-40 bg-white rounded-xl
                      shadow-xl border overflow-hidden
                    "
                  >
                    <div className="px-4 py-2 text-xs text-gray-500 border-b">
                      Signed in
                    </div>

                    <button
                      onClick={() => signOut({ callbackUrl: "/" })}
                      className="
                        w-full px-4 py-2 text-sm text-left
                        text-red-600 hover:bg-red-50
                        transition
                      "
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={28} />
          </button>
        </nav>
      </header>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* MOBILE SIDE PANEL */}
      <div
        className={`
          fixed top-0 right-0 z-50 h-full w-1/4 min-w-[260px]
          bg-white shadow-lg text-gray-900
          transform transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="flex justify-end p-4 border-b">
          <button onClick={() => setMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-4 space-y-4">
          {!session ? (
            <Link
              href="/login"
              className="block px-4 py-2 bg-purple-600 text-white rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Login
            </Link>
          ) : (
            <>
              {/* PROFILE */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center">
                  {session.user?.name?.[0]?.toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-medium">Signed in</p>
                  <p className="text-xs text-gray-500">
                    {session.user?.email}
                  </p>
                </div>
              </div>

              <nav className="flex flex-col gap-3 pt-4">
                <Link href="/courses" onClick={() => setMobileOpen(false)}>
                  Courses
                </Link>
                <Link href="/my-learning" onClick={() => setMobileOpen(false)}>
                  My Learning
                </Link>
                <Link href="/saved" onClick={() => setMobileOpen(false)}>
                  Saved
                </Link>

                <button
                  onClick={() => {
                    setMobileOpen(false);
                    signOut({ callbackUrl: "/" });
                  }}
                  className="text-left text-red-600"
                >
                  Logout
                </button>
              </nav>
            </>
          )}
        </div>
      </div>
    </>
  );
}

