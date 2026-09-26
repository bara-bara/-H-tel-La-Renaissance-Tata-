// Ensure window.fetch has a setter in environments where it is defined as getter-only
(function () {
  function ensureFetchSetter(target: any) {
    if (!target) return;
    try {
      const desc = Object.getOwnPropertyDescriptor(target, "fetch");
      if (desc && !desc.set && desc.configurable) {
        let currentFetch = target.fetch;
        Object.defineProperty(target, "fetch", {
          get() {
            return currentFetch;
          },
          set(v) {
            currentFetch = v;
          },
          configurable: true,
          enumerable: desc.enumerable !== undefined ? desc.enumerable : true,
        });
      } else if (!desc) {
        let cur = target.fetch;
        Object.defineProperty(target, "fetch", {
          get() {
            return cur;
          },
          set(v) {
            cur = v;
          },
          configurable: true,
          enumerable: true,
        });
      }
    } catch {}
  }
  ensureFetchSetter(window);
  if (typeof Window !== "undefined" && Window.prototype) {
    ensureFetchSetter(Window.prototype);
  }
})();

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
