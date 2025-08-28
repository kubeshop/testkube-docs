import { useState, useRef, useCallback } from "react";

interface ResizeOptions {
  initialWidth?: number;
  initialHeight?: number;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  invertY?: boolean; // For bottom-anchored elements
}

interface UseResizeReturn {
  size: { width: number; height: number };
  elementRef: React.RefObject<HTMLDivElement>;
  handleMouseDown: (e: React.MouseEvent) => void;
}

export const useResize = (options: ResizeOptions = {}): UseResizeReturn => {
  const {
    initialWidth = 380,
    initialHeight = 500,
    minWidth = 320,
    maxWidth = 800,
    minHeight = 300,
    maxHeight = window.innerHeight - 100,
    invertY = false,
  } = options;

  const [size, setSize] = useState({ width: initialWidth, height: initialHeight });
  const elementRef = useRef<HTMLDivElement>(null);
  const isResizing = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const startSize = useRef({ width: 0, height: 0 });

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (!elementRef.current) return;

      isResizing.current = true;
      startPos.current = { x: e.clientX, y: e.clientY };
      startSize.current = { width: size.width, height: size.height };

      const handleMouseMove = (moveEvent: MouseEvent) => {
        if (!isResizing.current) return;

        const deltaX = moveEvent.clientX - startPos.current.x;
        const deltaY = moveEvent.clientY - startPos.current.y;

        const newWidth = Math.max(
          minWidth,
          Math.min(maxWidth, startSize.current.width + deltaX)
        );

        const newHeight = Math.max(
          minHeight,
          Math.min(
            maxHeight,
            startSize.current.height + (invertY ? -deltaY : deltaY)
          )
        );

        setSize({ width: newWidth, height: newHeight });
      };

      const handleMouseUp = () => {
        isResizing.current = false;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [size, minWidth, maxWidth, minHeight, maxHeight, invertY]
  );

  return {
    size,
    elementRef,
    handleMouseDown,
  };
};
