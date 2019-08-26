import React from 'react'

// FadeInComponent return its children inside a div which shows an animation from animate.css passed as props.
// If fadeInEffect has value of undefined, only the children will be returned
const FadeInComponent = ({ fadeInEffect = "undefined", children }) => {
    const returnHTMLCode = _ => (
        // if no fadeInEffect was passed as argument, then only the children will be returned,
        // otherwise a div (containing the children) with a fadeInEffect class will be returned
        (fadeInEffect !== "undefined" && fadeInEffect !== null && fadeInEffect !== '') ? (
            // 'animated' class is necessary for using animate.css class effects
            <div className={`animated ${fadeInEffect}`}>
                { children }
            </div>
        ) : (
            <>
                { children }
            </>
        )
    )

    return( returnHTMLCode() )
}

export default FadeInComponent