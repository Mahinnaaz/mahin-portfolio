import { motion } from "framer-motion";

function Home() {
  return (
    <section id="hero" className="hero">

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="hero-content">

        <motion.span
          className="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Available for Opportunities 🚀
        </motion.span>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="highlight">Mahin Naaz</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Software Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          BCA Graduate with hands-on experience in building
          modern web applications using React.js, Node.js,
          Express.js, MongoDB, and REST APIs. Passionate about
          creating scalable solutions and delivering seamless
          user experiences.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a href="#projects" className="btn">
            View Projects
          </a>

          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>

          <a
            href="/Mahin_Naaz_Resume.pdf"
            download
            className="btn btn-outline"
          >
            Resume
           </a>
        </motion.div>


      </div>
    </section>
  );
}

export default Home;