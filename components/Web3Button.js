'use client';

import React, { useState } from 'react';

const Web3Button = () => {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div className="flex h-10 flex-row justify-end gap-2">
      <button
        onClick={() => setShowButtons(!showButtons)}
        className="orangeShadow py-1 font-press-start text-xl text-orange-500 hover:text-yellow-300 sm:px-2 sm:text-2xl"
      >
        {showButtons ? '>' : '<'}
      </button>
      {showButtons && (
        <div className="flex items-center gap-1">
          <div className="hidden sm:block">
            <w3m-network-button />
          </div>
          <w3m-button label="Connect" />
        </div>
      )}
    </div>
  );
};

export default Web3Button;
