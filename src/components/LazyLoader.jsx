import React, { Suspense } from "react";
import LoadingModal from "./_root/LoadingModel"; // Adjust path if needed

const LazyLoader = ({ children }) => {
  return (
    <Suspense fallback={<LoadingModal isVisible={true} text="Loading..." />}>
      {children}
    </Suspense>
  );
};

export default LazyLoader;
