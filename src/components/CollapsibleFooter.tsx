import { FC, useState, useRef } from "react";
import Footer from "./Footer";

const CollapsibleFooter: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  const collapsedRef = useRef<HTMLDivElement>(null);

  // 切换展开/折叠状态
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* 折叠状态 - 左侧底部的竖直小块 */}
      {!isExpanded && (
        <div
          enable-xr
          ref={collapsedRef}
          className="folded-footer fixed left-0 bottom-16 text-white py-4 px-3 cursor-pointer"
          onClick={toggleExpand}
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span className="text-xl font-semibold tracking-wide">See More</span>
        </div>
      )}

      {/* 展开状态 - 完整的 Footer */}
      {isExpanded && (
        <div enable-xr ref={footerRef} className="unfolded-footer w-full">
          <Footer />
          <button
            enable-xr
            className="absolute top-4 right-4 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-colors z-20"
            onClick={toggleExpand}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default CollapsibleFooter;
