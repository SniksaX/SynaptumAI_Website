//src/components/BookAppointment.jsx
"use client";

import React, { useEffect } from "react";

const BookAppointment = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
    script.async = true;

    const tidycalEmbedDiv = document.createElement("div");
    tidycalEmbedDiv.className = "tidycal-embed";
    tidycalEmbedDiv.setAttribute(
      "data-path",
      "sirajrahaldev/book-an-appointment"
    );

    document.body.appendChild(tidycalEmbedDiv);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(tidycalEmbedDiv);
    };
  }, []);

  return <div>{/* The TidyCal booking form will be inserted here */}</div>;
};

export default BookAppointment;
