import { useShape } from "./shapes";

export default function MyComp() {
  const shape = useShape("my-shape", {
    name: "world",
  });
  return <div>MyComp: {shape.name}</div>;
}
