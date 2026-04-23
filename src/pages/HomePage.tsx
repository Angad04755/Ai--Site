import { Suspense, lazy } from "react";
const Hero = lazy(() => import("../components/home/Hero"));
const Partners = lazy(() => import("../components/home/Partners"));
const WhatWeOffer = lazy(() => import("../components/home/WhatWeOffer"));
function HomePage() {
    return (
        <>
        <Hero/>
        <WhatWeOffer/>
        <Partners/>
        </>
    )    
} 

export default HomePage;