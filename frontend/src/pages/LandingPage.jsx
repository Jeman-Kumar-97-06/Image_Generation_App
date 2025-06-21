import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
const LandingPage = () => {
    return (
    <motion.div 
       style={{
            fontFamily : 'GeoSansLight',
            fontSize: '3vh', // Fits the height of h-32 (~128px) dynamically
            lineHeight: '1',
            // textShadow: '0 0 5px white, 0 0 15px white',
            }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="bg-black text-white h-[100vh]">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1
         style={{
            fontFamily : 'SpaceAge',
            fontSize: '8vh', // Fits the height of h-32 (~128px) dynamically
            lineHeight: '1',
            // textShadow: '0 0 5px white, 0 0 15px white',
            }}
         className="text-5xl text-purple-400">Imaginetix</h1>
        <p className="text-3xl text-black mt-4 mb-5">
          Generate stunning images with AI in seconds!
        </p>
        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
          <Link to='/login' className="mt-10 px-6 py-3 bg-radial from-pink-400 from-40% to-fuchsia-700 rounded-lg text-lg text-white font-bold">
            Get Started
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-semibold text-black">How it works</h2>
        <div className="flex justify-center mt-6 space-x-8">
      <motion.div
        className="backdrop-blur-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-6 rounded-lg shadow-2xl cursor-pointer border border-white/20"
      >
        <h3 className="text-xl text-black font-bold">High-Quality Images</h3>
        <p className="text-black">Uses Image Pig API to generate image.</p>
      </motion.div>
        <motion.div
          className="backdrop-blur-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-6 rounded-lg shadow-2xl cursor-pointer border border-white/20"
        >
          <h3 className="text-xl font-bold text-black">Save generated images</h3>
          <p className="text-black">
            Generate images and save/download them.
            <span className="text-red-500">Login required*</span>
          </p>
        </motion.div>
        <motion.div
          className="backdrop-blur-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-6 rounded-lg shadow-2xl cursor-pointer border border-white/20"
        >
          <h3 className="text-xl font-bold text-red-500">Upto 90 Free images</h3>
          <p className="text-black">That's all my free API Key supports!</p>
        </motion.div>
      </div>
      </section>
      {/* Footer */}
      <footer className="text-center py-3 bg-gray-800 bottom-0 fixed w-[100vw]">
        <p>© 2025 AI Image Generator | Jeman_06_03</p>
      </footer>
    </motion.div>
    )
};

export default LandingPage;