import React, { useEffect, useState, memo } from "react";
// import FadeInComponent to apply to the component that we wanna lazy load a fadeIn effect (optional)
import FadeInComponent from "./FadeInComponent";
import "./LazyLoadingComponent.css";

/**
 *
 *  @param dataIndexElement ==> 'data-index' attribute to identify the intersection with the user's view from IntersectionObserver
 *  @param pathComponent ==> relative path of the component to load
 *  @param fadeInEffect ==> fadeIn class listed in animate.css file (https://daneden.github.io/animate.css/) or (https://github.com/daneden/animate.css)
 *  @param debugMode ==> if its value is true, then it will show some console.log message to help the developer understand what's happening. Otherwise it won't show anything.
 *
 *  LazyLoadingComponent goal's is to allow the user to lazy loading the component
 *  which relative path is passed by argument with an optional fadeIn effect from animate.css
 */
const LazyLoadingComponent = memo(
  ({
    dataIndexElement = 0,
    pathComponent = "",
    fadeInEffect = "undefined"
  }) => {
    // ComponentToLoad (is the state of the component)
    // ComponentToLoad final's value will be the component to load inside the FadeInComponent
    // Example: ComponentToLoad ==> <FadeInComponent><MYCOMPONENTLAZYLOADED/></FadeInComponent>
    const [componentToLoad, setComponentToLoad] = useState(null);

    // options argument for IntersectionObserver
    const options = {
      threshold: 0.3
    };

    // lazyLoading function will check if the element with the id (idElementActivation) has already intersected the screen
    // and if yes, then the component with path (pathComponent) will be dinamically loaded and returned inside the FadeInComponent
    // which will apply the animation if it was passed by argument (fadeInEffect)
    const lazyLoading = target => {
      const io = new IntersectionObserver((entries, observer) => {
        // for each entry the code verifies with isIntersecting if the user's view
        // is already been intersecting with the component having id (idElementActivation)
        entries.forEach(entry => {
          // if the component with id = idElementActivation intersect the user's view,
          // isIntersecting's value will be true
          if (entry.isIntersecting) {
            // using a dynamic import to 'lazy load' the component
            import(`../${pathComponent}`).then(async res => {
              const ComponentLazyLoaded = res.default;
              setComponentToLoad(
                <FadeInComponent fadeInEffect={fadeInEffect}>
                  <ComponentLazyLoaded />
                </FadeInComponent>
              );
            });
            // disable the observer (further checks aren't necessary)
            observer.disconnect();
          }
        });
      }, options);
      // starting with observe the element with id = idElementActivation
      io.observe(target);
    };

    const initComponent = _ => {
      // identify the HTML element with id = idElementActivation
      let targetElement = document.querySelector(
        `div[data-index="${dataIndexElement}"]`
      );
      lazyLoading(targetElement);
    };

    useEffect(_ => {
      // activate the IntersectionObserver
      initComponent();
    }, []);

    return (
      // 'lazy-load-component' class has (padding: 50px 0;). DO NOT REMOVE IT :)
      <div
        data-index={dataIndexElement}
        className="lazy-load-component lazy-load-component--not-loaded"
      >
        {componentToLoad}
      </div>
    );
  }
);

export default LazyLoadingComponent;
