import { useState } from "react";

export function useSelectedFile() {
  const [hasFile, setHasFile] = useState(false);

  return {hasFile, setHasFile}
}