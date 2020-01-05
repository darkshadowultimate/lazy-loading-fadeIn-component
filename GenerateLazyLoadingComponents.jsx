import React, { useState, useEffect, memo } from "react";
import LazyLoadingComponent from "./LazyLoadingComponent";

const GenerateLazyLoadingComponents = memo(({ componentsInfo }) => {
  const [components, setComponents] = useState([]);

  const init = () =>
    componentsInfo.map((item, index) => (
      <LazyLoadingComponent
        dataIndexElement={index}
        pathComponent={item.pathComponent}
        fadeInEffect={item.fadeInEffect}
        key={index}
      />
    ));

  useEffect(() => {
    setComponents(init());
  }, componentsInfo);

  return <>{components.length === componentsInfo.length ? components : null}</>;
});

export default GenerateLazyLoadingComponents;
