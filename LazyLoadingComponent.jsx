import React, { useEffect, useState } from 'react'
// import FadeInComponent to apply to the component that we wanna lazy load a fadeIn effect (optional)
import FadeInComponent from './FadeInComponent'
import './LazyLoadingComponent.css'

/**
 *  ***********************WARNING**************************
 *  Before using this component there are a couple things you need to know:
 *  1) The dinamic import must have a relative path specified. LazyLoadingComponent has a static path specified inside the dinamic import ==> '../', so keep in mind when you'll use it
 *      Example: path LazyLoadingComponent.jsx: src > components > LazyLoadingComponent > LazyLoadingComponent.jsx
 *               path App.jsx (the 'alpha' component): src > components > App > App.jsx
 *               path MYCOMPONENT.jsx: src > components > manyComponentsFolder > MYCOMPONENT > MYCOMPONENT.jsx
 *               path_MYCOMPONENT_to_pass_as_argument_to_LazyLoadingComponent: 'manyComponentsFolder/MYCOMPONENT/MYCOMPONENT' (I didn't leave nothing behind)
 *  
 *  2) This component cannot be used to lazy load the first component of the page (there are no components before it)
 *  3) If this component is used only to load the second component of the page, the lazy loading will the same as using React.lazy loading inside the page where you're calling LazyLoadingComponent
 *  4) To use all this component's power, I recommend you to leave every div with 'lazy-load-component' class having (padding: 50px 0;)
 *  5) It's still a work in progress so, I'll try to find new solutions and ANY HELP IT'S APPRECIATED ;)
 */

/**
 * 
 *  @param idElementActivation ==> the id of the component that will cause the dynamic loading of the component whose path was passed as parameter if the user's view will encouter the section containing that id
 *  @param idElementForNextLazyLoading ==> the id that the next LazyLoadingComponent will check with the IntersectionObserver to understand when dinamically load the component whose path was passed as argument
 *  @param pathComponent ==> relative path of the component to load
 *  @param fadeInEffect ==> fadeIn class listed in animate.css file (https://daneden.github.io/animate.css/) or (https://github.com/daneden/animate.css)
 *  @param debugMode ==> if its value is true, then it will show some console.log message to help the developer understand what's happening. Otherwise it won't show anything.
 * 
 *  LazyLoadingComponent goal's is to allow the user to lazy loading the component
 *  which relative path is passed by argument with an optional fadeIn effect from animate.css
 */
const LazyLoadingComponent = ({ idElementActivation = "", idElementForNextLazyLoading = "", pathComponent = "", fadeInEffect = "undefined", debugMode = "false" }) => {
    // ComponentToLoad (is the state of the component)
    // ComponentToLoad final's value will be the component to load inside the FadeInComponent
    // Example: ComponentToLoad ==> <FadeInComponent><MYCOMPONENTLAZYLOADED/></FadeInComponent>
    const [ComponentToLoad, setComponentToLoad] = useState(null)

    // lazyLoading function will check if the element with the id (idElementActivation) has already intersected the screen
    // and if yes, then the component with path (pathComponent) will be dinamically loaded and returned inside the FadeInComponent
    // which will apply the animation if it was passed by argument (fadeInEffect)
    const lazyLoading = target => {
        const io = new IntersectionObserver((entries, observer) => {
            if (debugMode === "true") {
                console.log(`intersection observer activated for component having idElementForNextLazyLoading ==> ${idElementForNextLazyLoading}`)
            }
            // for each entry the code verifies with isIntersecting if the user's view
            // is already been intersecting with the component having id (idElementActivation)
            entries.forEach(entry => {
                // if the component with id = idElementActivation intersect the user's view,
                // isIntersecting's value will be true
                if (entry.isIntersecting) {
                    // using a dynamic import to 'lazy load' the component
                    import(`../${pathComponent}`)
                        .then(async res => {
                            const ComponentLazyLoaded = res.default
                            await setComponentToLoad(
                                <FadeInComponent fadeInEffect={fadeInEffect}>
                                    <ComponentLazyLoaded />
                                </FadeInComponent>
                            )
                            if(debugMode === "true") {
                                let splitPathComponentToLoad = pathComponent.split('/')
                                console.log(`Loaded ==> ${splitPathComponentToLoad[splitPathComponentToLoad.length - 1]}`)
                            }
                        })
                    // disable the observer (further checks aren't necessary)
                    observer.disconnect()
                }
            })
        })
        // starting with observe the element with id = idElementActivation
        io.observe(target)
    }

    const initComponent = _ => {
        // identify the HTML element with id = idElementActivation
        let targetElement = document.getElementById(idElementActivation)
        lazyLoading(targetElement)
    }

    useEffect(_ => {
        // activate the IntersectionObserver
        initComponent()
    }, [])

    return (
        // 'lazy-load-component' class has (padding: 50px 0;). DO NOT REMOVE IT :)
        <div className="lazy-load-component">
            {ComponentToLoad}
            {/* the div with id-absolute-div class has the id that will trigger the IntersetionObserver of the next LazyLoadingComponent */}
            <div className="id-absolute-div" id={idElementForNextLazyLoading}></div>
        </div>
    )
}

export default LazyLoadingComponent