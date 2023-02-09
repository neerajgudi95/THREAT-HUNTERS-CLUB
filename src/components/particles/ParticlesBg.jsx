// import Particles from "react-tsparticles";
// import "./particles.css";
// const ParticlesBg = () => {
//   return <Particles className="thc__particles" options={particle} />;
// };

// export default ParticlesBg;
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { particle } from "../../utils/particles";

const ParticlesBg = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={particle}
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};

export default ParticlesBg;
