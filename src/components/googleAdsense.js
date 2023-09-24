import React, { useEffect } from "react";
// import { css } from "theme-ui"

const Ad = props => {
    const { currentPath } = props

    useEffect(() => {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
    }, [currentPath])

    return (

        <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-6815803998948370"
            data-ad-slot="5802022489"
            data-ad-format="fluid"
            data-ad-layout="in-article"
        />

    )
}

export default Ad;