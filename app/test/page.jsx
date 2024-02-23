"use client";
import Pattern2 from "@/components/Pattern2";
import { useRef } from "react";
import * as htmlToImage from "html-to-image";

export default function page() {
  const svgRef = useRef();
  
  function handleClick() {
    const svgNode = svgRef.current;

    // Convert the SVG node to an image
    htmlToImage
      .toPng(svgNode)
      .then(function (dataUrl) {
        // Once converted, you can handle the dataUrl (image URL)
        console.log(dataUrl);
        // You can also create an <img> element and append it wherever you want, or use it in any other way
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
    // const blob = new Blob([svgRef]);
    // console.log(blob);
  }

  return (
    <>
      <div
        ref={svgRef}
        className="grid grid-rows-3 grid-cols-3 w-[600px] h-[600px]"
      >
        {[...Array(9)].map((_, i) => (
          <Pattern2 key={i} />
        ))}
      </div>
      <button className="bg-green-500 p-4 rounded-lg" onClick={handleClick}>
        Save
      </button>
      <button className="bg-red-500 p-4 rounded-lg" onClick={}>
        Clear All
      </button>
    </>
  );
}
