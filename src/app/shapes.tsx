declare global {
  interface Window {
    __electricShapes?: Record<string, any>;
  }
}

const shapes: Record<string, any> =
  typeof window !== "undefined" ? window.__electricShapes || {} : {};

export function ShapeSsrStore({ children }: { children: React.ReactNode }) {
  const getScriptContent = () => `
    window.__electricShapes = {
      ...window.__electricShapes || {},
      ...${JSON.stringify(shapes)}
    };
  `;
  return (
    <>
      {children}
      {typeof window === "undefined" && (
        <script dangerouslySetInnerHTML={{ __html: getScriptContent() }} />
      )}
    </>
  );
}

export function useShape(shapeId: string, data: any) {
  if (typeof window === "undefined") {
    console.log("setting shape date on server", shapeId);
    shapes[shapeId] = data;
  }
  if (shapes[shapeId]) {
    console.log("using shape date from server", shapeId);
    return shapes[shapeId];
  } else {
    console.log("using shape date from client", shapeId);
    return data;
  }
}
