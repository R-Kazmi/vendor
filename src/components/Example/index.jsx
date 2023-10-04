import React, { useState } from "react";

const Example = () => {
  const [variantOptions, setVariantOptions] = useState({});

  const addVariant = (variant) => {
    setVariantOptions({
      ...variantOptions,
      [variant]: [],
    });
  };

  const addVariant2 = (variation, value) => {
    setVariantOptions({
      ...variantOptions,
      [variation]: [...variantOptions[variation], value],
    });
  };
  return (
    <div className="mt-4 rounded-lg border border-secondary-100 p-2 h-fit w-full">
      <h2 className="text-lg font-semibold">Variants</h2>
      <button onClick={() => addVariant("material", "rubber")}>click</button>
      <p
        onClick={addVariant}
        className="text-blue-400 underline cursor-pointer"
      >
        Add options like color, style and material...
      </p>

      <div className="mb-2">
        <label htmlFor="Option-name">Option Name</label>
        <select
          className="input-field"
          onChange={(e) => {
            addVariant(e.target.value);
          }}
        >
          <option value="#">select type</option>
          {["size", "color", "style", "material"].map((variant) => (
            <option value={variant} key={variant}>
              {variant}
            </option>
          ))}
        </select>
        {variantOptions.entries.map((variant) => {
          <input type="text" value={vari} />;
        })}
      </div>
    </div>
  );
};

export default Example;
