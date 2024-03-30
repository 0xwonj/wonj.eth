'use client';

import React, { useState } from 'react';

const Web3Button = () => {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div className="flex flex-row justify-end h-10">
      <button
        onClick={() => setShowButtons(!showButtons)}
        className="font-press-start text-xl sm:text-2xl specialShadowOrange sm:px-2 py-1"
      >
        {showButtons ? '>' : '<'}
      </button>
      {showButtons && (
        <div className="flex gap-1">
          <w3m-network-button />
          <w3m-button label="Connect" />
        </div>
      )}
    </div>
  );
};

export default Web3Button;
