import init, { TokenizerWasm } from './tokenizers_wasm.js';

const tokenizers = {};

onmessage = async function (event) {
  const { type, text, modelName, id } = event.data;

  if (type === 'ready') {
    await init(); // only initialize once
    const tokenizer = new TokenizerWasm(text);
    tokenizers[modelName] = tokenizer;
    console.log(`✅ Tokenizer loaded for model: ${modelName}`);
    postMessage({ id: id, type: 'ready', modelName: modelName });
  }

  if (type === 'encode') {
    const tokenizer = tokenizers[modelName];
    if (!tokenizer) {
      console.error(`Tokenizer for model ${modelName} is not loaded`);
      return;
    }

    const encoded = tokenizer.encode(text, true);
    const result = {
      input: text,
      input_ids: Array.from(encoded.input_ids),
      tokens: Array.from(encoded.tokens),
    };

    postMessage({ id: id, type: 'encode', result: result });
  }

  if (type === 'unload') {
    if (tokenizers[modelName]) {
      tokenizers[modelName] = null;
      delete tokenizers[modelName];
    }
    postMessage({ type: 'unload', modelName: modelName });
  }

  if (type === 'list_loaded_models') {
    postMessage({ type: 'list_loaded_models', result: Object.keys(tokenizers) });
  }

  if (type === 'is_model_loaded') {
    const isLoaded = !!tokenizers[modelName];
    postMessage({ id: id, type: 'is_model_loaded', result: isLoaded });
  }
};

onerror = function (error) {
  console.error("Worker error:", error);
};