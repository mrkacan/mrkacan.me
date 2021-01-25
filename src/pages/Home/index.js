import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { If } from 'react-if';
import Menu from './components/Menu';
import ContainerBox from '../../component/ContainerBox';

const leftDividerDefaultConfig = {
  initial: { opacity: 0, translateX: -100 },
  animate: { opacity: 1, translateX: 1 },
  transition: { duration: 0.5 },
};

const titleDefaultConfig = {
  initial: { opacity: 0, translateX: -100 },
  animate: { opacity: 1, translateX: 0 },
  transition: { duration: 0.5, delay: 0.3 },
};

const jobDescriptionDefaultConfig = {
  initial: { opacity: 0, translateY: -100 },
  animate: { opacity: 1, translateY: 0 },
  transition: { duration: 0.7, delay: 0.3 },
};
const brandDefaultConfig = {
  initial: { opacity: 0, translateX: -800 },
  animate: { opacity: 1, translateX: 0 },
  transition: { duration: 0.7, delay: 0.6 },
};

const Index = () => {
  const [isRender, setIsRender] = useState(false);
  const [animationConfigs, setAnimationConfigs] = useState({
    leftDividerConfig: null,
    titleConfig: null,
    jobDescriptionConfig: null,
    brandConfig: null,
    isMenuAnimating: false,
  });

  useEffect(() => {
    async function checkAnimationState() {
      const isHomeAnimationShowed = sessionStorage.getItem('isHomeAnimationShowed');

      if (!isHomeAnimationShowed) {
        setAnimationConfigs({
          leftDividerConfig: leftDividerDefaultConfig,
          titleConfig: titleDefaultConfig,
          jobDescriptionConfig: jobDescriptionDefaultConfig,
          brandConfig: brandDefaultConfig,
          isMenuAnimating: true,
        });
      }

      setIsRender(true);

      return true;
    }

    checkAnimationState();

    return () => true;
  }, []);

  const {
    leftDividerConfig,
    titleConfig,
    jobDescriptionConfig,
    brandConfig,
    isMenuAnimating,
  } = animationConfigs;

  return (
    <>
      <ContainerBox
        isHome
      >
        <If condition={isRender}>
          <>
            <div
              className="ek-me-top-title flex justify-start content-center"
            >
              <div className="flex justify-start items-center">
                <motion.div
                  className="ek-me-left-divider"
                  {...leftDividerConfig}
                />
                <div>
                  <div
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="text-xl md:text-3xl font-normal md:font-light "
                      {...titleConfig}
                    >
                      Emre Kaçan
                    </motion.div>
                  </div>
                  <div className="overflow-hidden">
                    <motion.div
                      className="text-base md:text-2xl max-w-prose font-light md:font-extralight"
                      {...jobDescriptionConfig}
                    >
                      Senior React & React Native Developer
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className="bg-brandColor ek-me-top-description font-light md:font-light flex flex-col justify-center items-start"
              {...brandConfig}
            >
              <div className="text-white text-xs md:text-base mb-2 ek-me-description-text">
                I am a developer working in the JavaScript ecosystem, specializing in React and
                React
                Native technologies.
              </div>
              <div className="text-white text-xs md:text-base ek-me-description-text">
                Looking for Remote Full/Part-time, Project-based, and Contract-based job
                opportunities.
              </div>
            </motion.div>
            <div
              className="ek-me-content m-auto p-1 ek-me-bottom grid grid-cols-2 md:grid-cols-3 gap-0"
            >
              <Menu animate={isMenuAnimating} />
            </div>
          </>
        </If>
      </ContainerBox>
    </>
  );
};

export default Index;
