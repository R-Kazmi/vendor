"use client";
import React from "react";
import { useState, useMemo } from "react";
import { MdDelete } from "react-icons/md";

const AddVariants = ({ register, setValue }) => {
  const [variants, setVariants] = useState([]);
  const [combinations, setCombinations] = useState([]);
  const [combinationStocks, setCombinationStocks] = useState({});
  const [combinationSKU, setCombinationSKU] = useState({});
  const [combinationPrices, setCombinationPrices] = useState({});

  const addVariant = (e) => {
    e.preventDefault();
    if (variants.length < 3) {
      setVariants([...variants, { name: "", values: [""] }]);
      setValue("variants", [...variants, { name: "", values: [""] }]);
    }
  };

  const addOption = (e, variantIndex) => {
    e.preventDefault();
    const updatedVariants = [...variants];
    updatedVariants[variantIndex].values.push("");
    setVariants(updatedVariants);
    setValue("variants", updatedVariants);
  };

  const updateVariantName = (e, variantIndex, name) => {
    e.preventDefault();
    const updatedVariants = [...variants];
    updatedVariants[variantIndex].name = name;
    setVariants(updatedVariants);
    setValue("variants", updatedVariants);
  };

  const updateOption = (e, variantIndex, optionIndex, option) => {
    e.preventDefault();
    const updatedVariants = [...variants];
    updatedVariants[variantIndex].values[optionIndex] = option;
    setVariants(updatedVariants);
    setValue("variants", updatedVariants);
  };

  const deleteVariant = (e, variantIndex) => {
    e.preventDefault();
    const updatedVariants = [...variants];
    updatedVariants.splice(variantIndex, 1);
    setVariants(updatedVariants);
    setValue("variants", updatedVariants);
  };

  const deleteOption = (e, variantIndex, optionIndex) => {
    e.preventDefault();
    const updatedVariants = [...variants];
    updatedVariants[variantIndex].values.splice(optionIndex, 1);
    setVariants(updatedVariants);
    setValue("variants", updatedVariants);
  };

  const generateCombinations = useMemo(() => {
    const newCombinations = [];
    const variantsLength = variants.length;

    if (variantsLength > 0) {
      const variantOptions = variants.map((variant) => variant.values);

      const combine = (current, index) => {
        if (index === variantsLength) {
          newCombinations.push([...current]);
          return;
        }
        for (let i = 0; i < variantOptions[index].length; i++) {
          combine([...current, variantOptions[index][i]], index + 1);
        }
      };

      combine([], 0);
    }
    setCombinations(newCombinations);
    setValue("combinations", newCombinations);
    return newCombinations;
  }, [variants]);

  const handleStockChange = (combination, value) => {
    setCombinationStocks({ ...combinationStocks, [combination]: value });
    setValue("combinationStocks", {
      ...combinationStocks,
      [combination]: value,
    });
  };

  const handleSKUChange = (combination, value) => {
    setCombinationSKU({
      ...combinationSKU,
      [combination]: value,
    });
    setValue("combinationSKU", {
      ...combinationSKU,
      [combination]: value,
    });
  };

  const handlePriceChange = (combination, value) => {
    setCombinationPrices({ ...combinationPrices, [combination]: value });
    setValue("combinationPrices", {
      ...combinationPrices,
      [combination]: value,
    });
  };

  const handleDeleteCombination = (e, combination) => {
    e.preventDefault();
    const newCombinations = { ...combinationStocks };
    delete newCombinations[combination];
    setCombinationStocks(newCombinations);
    setValue("combinationStocks", newCombinations);

    const newQuantities = { ...combinationSKU };
    delete newQuantities[combination];
    setCombinationSKU(newQuantities);
    setValue("combinationSKU", newQuantities);

    const newPrices = { ...combinationPrices };
    delete newPrices[combination];
    setCombinationPrices(newPrices);
    setValue("combinationPrices", newPrices);

    setCombinations(combinations.filter((c) => c !== combination));
    setValue(
      "combinations",
      combinations.filter((c) => c !== combination)
    );
  };

  return (
    <div className="flex flex-col">
      {variants.map((variant, variantIndex) => (
        <div key={variantIndex} className="flex flex-col">
          <div className="flex">
            <input
              type="text"
              placeholder={`Variant ${variantIndex + 1} Name`}
              className="input-field"
              value={variant.name}
              onChange={(e) =>
                updateVariantName(e, variantIndex, e.target.value)
              }
            />
            <button
              onClick={(e) => deleteVariant(e, variantIndex)}
              className="ml-2 text-2xl text-black"
            >
              <MdDelete />
            </button>
          </div>
          <div className="my-2" />
          {variant.values.map((option, optionIndex) => (
            <div className="flex" key={optionIndex}>
              <input
                type="text"
                placeholder={`Option ${optionIndex + 1}`}
                value={option}
                className="input-field mt-1"
                onChange={(e) =>
                  updateOption(e, variantIndex, optionIndex, e.target.value)
                }
              />
              <button
                onClick={(e) => deleteOption(e, variantIndex, optionIndex)}
                className="ml-2 text-xl text-black"
              >
                <MdDelete />
              </button>
            </div>
          ))}
          <div className="mt-1 mb-4">
            <button
              onClick={(e) => addOption(e, variantIndex)}
              className="text-xs text-gray-500 italic"
            >
              Add Option
            </button>
            <hr className="mt-2 border-t-2 border-gray-400" />
          </div>
        </div>
      ))}
      <div className="flex justify-center">
        <button onClick={(e) => addVariant(e)} className="cursor-pointer">
          {variants.length > 0 ? (
            <span
              className={`${
                variants.length < 3 ? "bg-blue-400" : "bg-gray-300"
              }  text-white rounded-lg py-1 px-2`}
            >
              Add Variant
            </span>
          ) : (
            <span className="underline text-blue-400">
              Add options like size or color
            </span>
          )}
        </button>
      </div>
      {/* combinations */}
      {variants.length > 0 && (
        <div className="overflow-x-scroll">
          <table className="mt-5 w-full">
            <thead>
              <tr className="text-gray-600 text-xs leading-normal">
                <th className="py-3 px-6 text-left">Combination</th>
                <th className="py-3 px-6 text-center">Stock</th>
                <th className="py-3 px-6 text-center">SKU</th>
                <th className="py-3 px-6 text-center">Price</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {combinations.map((combination, index) => (
                <tr className="border-b border-gray-200" key={combination}>
                  <td className="py-3 px-6 text-left whitespace-nowrap font-normal">
                    {combination.join(",")}
                  </td>
                  <td className="py-3 px-6 text-left">
                    <input
                      className="input-field"
                      type="number"
                      value={combinationStocks[combination] || 0}
                      onChange={(e) =>
                        handleStockChange(
                          combination,
                          parseInt(e.target.value, 10)
                        )
                      }
                    />
                  </td>
                  <td className="py-3 px-6 text-center">
                    <input
                      className="input-field"
                      type="number"
                      value={combinationSKU[combination] || 0}
                      onChange={(e) =>
                        handleSKUChange(
                          combination,
                          parseInt(e.target.value, 10)
                        )
                      }
                    />
                  </td>
                  <td className="py-3 px-6 text-center">
                    <input
                      className="input-field"
                      type="number"
                      value={combinationPrices[combination] || 0}
                      onChange={(e) =>
                        handlePriceChange(
                          combination,
                          parseFloat(e.target.value)
                        )
                      }
                    />
                  </td>
                  <td
                    className="py-3 px-6 text-center"
                    onClick={(e) => handleDeleteCombination(e, combination)}
                  >
                    <div className="flex item-center justify-center">
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AddVariants;
