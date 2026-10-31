"use client";

import { useState } from "react";
import Script from "next/script";
import { ExternalLink } from "lucide-react";
import { programme } from "../lib/programme";

export default function TypeformEmbed() {
  const [scriptFailed, setScriptFailed] = useState(false);

  function initializeEmbed() {
    // Next.js caches the script. Initialize new containers on client navigation too.
    const typeform = (window as Window & { tf?: { load: () => void } }).tf;
    typeform?.load();
  }

  return (
    <section className="interest-card typeform-card" aria-label="Register your interest">
      <div
        className="typeform-embed"
        data-tf-live={programme.typeformLiveId}
        data-tf-inline-on-mobile=""
        data-tf-auto-focus="false"
        data-tf-iframe-props="title=Pwani Innovators registration form"
      />
      <div className="typeform-footer">
        {scriptFailed && (
          <p role="status">The form couldn’t load here. Open it in a new tab to continue.</p>
        )}
        <noscript>Open the form in a new tab to register your interest.</noscript>
        <a
          href={programme.typeformUrl}
          className="text-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open the form in a new tab <ExternalLink size={15} />
        </a>
      </div>
      <Script
        id="typeform-embed-script"
        src="https://embed.typeform.com/next/embed.js"
        strategy="afterInteractive"
        onReady={initializeEmbed}
        onError={() => setScriptFailed(true)}
      />
    </section>
  );
}
