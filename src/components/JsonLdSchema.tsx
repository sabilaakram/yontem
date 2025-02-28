import React from "react";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";

const JsonLdSchema: React.FC<{ schema: string }> = ({ schema }) => {
  const window = new JSDOM("").window;
  const DOMPurifyServer = DOMPurify(window);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: DOMPurifyServer.sanitize(schema) }}
    />
  );
};

export default JsonLdSchema;