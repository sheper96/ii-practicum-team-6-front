import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Hero = () =>{
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true }); //animation when inView

    // return(
    //     <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-00 to-gray-400 text-black text-center px-6 shadow-md rounded-lg border-gray-300">
    //      <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl shadow-sm">
    //         Find Your Team, Build Your Dream
    //  </h1>

        return (
            <motion.section
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-400 text-black text-center px-6 shadow-md rounded-lg border border-gray-300"
            >
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl font-bold sm:text-5xl lg:text-6xl shadow-sm"
              >
                Find Your Team, Build Your Dream
              </motion.h1>
        {/* <p className="mt-2 text-md sm:text-xl max-w-2xl">
            Share ideas, form teams, and create amazing projects.
        </p>
        <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-md border border-white hover:bg-gray-500 hover:hsadow-lg transition">
                <Link to="/projects">Browse Projects</Link>
            </button>
        </div> */}

<motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-2 text-md sm:text-xl max-w-2xl"
      >
        Share ideas, form teams, and create amazing projects.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-6 flex gap-4"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-md shadow-md border border-gray-400 hover:bg-gray-500 hover:shadow-lg transition"
        >
          <Link to="/projects">Browse Projects</Link>
        </motion.button>
      </motion.div>
        </motion.section>
    );
};

export default Hero;