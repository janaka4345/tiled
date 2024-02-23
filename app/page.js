"use client";
import Pattern2 from "@/components/Pattern2";
import { useRef } from "react";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

export default function page() {
  const svgRef = useRef();
  let img

  function handleClick() {
    const svgNode = svgRef.current;
    let blob = "";

    // Convert the SVG node to an image
    htmlToImage
      .toPng(svgNode)
      .then(function (dataUrl) {
        // Once converted, you can handle the dataUrl (image URL)
        // console.log(dataUrl);
        // You can also create an <img> element and append it wherever you want, or use it in any other way
        // img = new Image();
        // img.src = dataUrl;
        download(dataUrl, 'my-node.png');
        // blob = new Blob([dataUrl], { type: "image/png" });
        // console.log(blob);
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <div
        ref={svgRef}
        className="grid grid-rows-9 grid-cols-9 w-[600px] h-[600px]"
      >
        {[...Array(81)].map((_, i) => (
          <Pattern2 key={i} />
        ))}
      </div>
      <button className="bg-green-500 p-4 rounded-lg" onClick={handleClick}>
        Save
      </button>
      <button
        className="bg-red-500 p-4 rounded-lg"
        onClick={() => console.log("clear")}
      >
        Clear All
      </button>
      <img src={img} alt="image" />
    </>
  );
}
