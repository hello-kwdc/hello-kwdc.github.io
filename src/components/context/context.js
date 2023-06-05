import React from "react";

const LandingContext = React.createContext();

export const LandingProvider = LandingContext.Provider;
export const LandingConsumer = LandingContext.Consumer;

export default LandingContext;
