"use client";

import { useEffect, useState } from "react";

export default function CookieSettingsButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setVisible(window.location.hostname === "method.yourbalancerestored.com");
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!visible) return null;
  return <button type="button" onClick={() => window.dispatchEvent(new Event("method:open-cookie-settings"))} className="inline-flex min-h-11 items-center text-left text-xs text-deep-muted transition-colors hover:text-accent-dim focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Cookie settings</button>;
}
