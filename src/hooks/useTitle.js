import { useEffect } from "react";

export const useTitle = (title) => {

  useEffect(() => {
    document.title = `${title} | NorZah Shopping Cart`
  }, [title]);

  return null;
}
