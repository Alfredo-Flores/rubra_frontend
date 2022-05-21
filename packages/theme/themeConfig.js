// default configuration for links and images
const defaultConfig = {
  home: {
    bannerA: {
      link: '/c/libretas',
      image: {
        mobile: '/homepage/cuaderno_1.jpg',
        desktop: '/homepage/cuaderno_1.jpg'
      }
    },
    bannerB: {
      link: '/c/libretas',
      image: '/homepage/cuaderno_2.jpg'
    },
    bannerC: {
      link: '/c/libretas',
      image: '/homepage/cuaderno_3.jpg'
    },
    bannerD: {
      link: '/c/libretas',
      image: '/homepage/cuaderno_4.jpg'
    }
  }
};
// configuration used for links and images for demo purposes
const demoConfig = {
  home: {
    bannerA: {
      link: '/c/libretas',
      image: {
        mobile: '/homepage/cuaderno_1.jpg',
        desktop: '/homepage/cuaderno_1.jpg'
      }
    },
    bannerB: {
      link: '/c/libretas',
      image: '/homepage/cuaderno_2.webp'
    },
    bannerC: {
      link: '/c/libretas',
      image: '/homepage/cuaderno_3.jpg'
    },
    bannerD: {
      link: '/c/libretas',
      image: '/homepage/cuaderno_4.jpg'
    }
  }
};

export default (() => {
  if (process.env.IS_DEMO) {
    return demoConfig;
  }
  return defaultConfig;
})();
