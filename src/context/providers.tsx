"use client";

import { JSX, ReactNode } from "react";
import { NotFoundProvider } from "./NotFoundContext";

/**
 * Providers component that wraps its children with a ThemeProvider.
 *
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The child components to be wrapped by the ThemeProvider.
 *
 * @returns {JSX.Element} The ThemeProvider component wrapping the children.
 */
export function Providers({ children }: { children: ReactNode }): JSX.Element {
  return <NotFoundProvider>{children}</NotFoundProvider>;
}
