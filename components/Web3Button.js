'use client';

import React, { useState } from 'react';

const Web3Button = () => {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div className="flex h-10 flex-row justify-end">
      <button
        onClick={() => setShowButtons(!showButtons)}
        className="specialShadowOrange py-1 font-press-start text-xl sm:px-2 sm:text-2xl"
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
