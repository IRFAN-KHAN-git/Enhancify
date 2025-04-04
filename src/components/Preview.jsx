import React from "react";
import Loading from "./Loading";

const Preview = ({ image }) => {
  // If image is null or undefined, don't render anything
  if (!image) return null;

  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
      {/* Original Image */}
      {image.original && (
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-medium mb-2">Original</h2>
          <img
            src={image.original}
            alt="Original"
            className="rounded-lg max-w-full"
          />
        </div>
      )}

      {/* Enhanced Image or Loader */}
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-medium mb-2">Enhanced</h2>
        {image.enhanced ? (
          <img
            src={image.enhanced}
            alt="Enhanced"
            className="rounded-lg max-w-full"
          />
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Preview;
