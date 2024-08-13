// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import SectionHeading from "./section-heading";
// import { BsArrowRight } from "react-icons/bs";

// export default function BlogSection() {
//   return (
//     <section id="blog" className="mb-auto max-w-[50rem] text-center sm:mb-0">
//       <motion.h2
//         className="mb-8 mt-4 text-3xl font-bold sm:text-4xl"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{
//           duration: 0.5,
//         }}
//       >
//         <SectionHeading>My blog</SectionHeading>
//       </motion.h2>

//       <motion.div
//         className="flex flex-col items-center justify-center gap-8"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{
//           type: "spring",
//           stiffness: 120,
//           delay: 0.2,
//         }}
//       >
//         <motion.div
//           className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition mt-8"
//           initial={{ opacity: 0, y: 100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             delay: 0.1,
//           }}
//         >
//           <Link href="https://sandbox-blog.netlify.app/user/Wesley_swe" target="_blank">
//             Visit My Blog{" "}
//           </Link>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }
