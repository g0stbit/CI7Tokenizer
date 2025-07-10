
# Tokenizer Playground (WASM + Web Worker)

A lightweight, asynchronous, and extensible tokenizer playground powered by WebAssembly (WASM) and Web Workers — designed to support multiple language models with real-time tokenization.

## 🚀 Features

- ✅ **WebAssembly-powered**: Fast tokenization using Rust-based WASM modules.
- ⚙️ **Web Worker architecture**: Keeps the main thread responsive and prevents UI freezes.
- 🔁 **Asynchronous initialization**: Non-blocking loading of tokenizer configurations.
- 🧩 **Multiple model support**: Load built-in or custom models dynamically.
- 💡 **Model reuse**: Avoid redundant loads — reuse already initialized tokenizers.
- 📦 **Extensible design**: Add new models easily via JSON configs or direct URLs.
- 🌐 **Client-side only**: No backend required — runs entirely in the browser.

## 🌐 Demo

👉 [Live Demo](https://g0stbit.github.io/CI7Tokenizer/demo/) *(replace with actual link)*
Try it out in your browser to test different tokenizers interactively!

---

## 📦 How to Use

### 1. Include the Script

Add the following `<script>` tag to your HTML file:

```html
<script src="CI7Tokenizer.js"></script>
```

Make sure all dependencies (`CI7Tokenizer.worker.js`, `tokenizers_wasm.js`, tokenizer JSON files) are in the correct path.

---

## 🛠 API Reference

### `CI7Tokenizer.init(modelName[, url][, readyCallback])`

Initializes a tokenizer model. Supports both predefined and custom models.

#### Parameters

| Param | Type | Description |
|------|------|-------------|
| `modelName` | `string` | Name of the model to load |
| `url` | `string` (optional) | Custom URL to tokenizer config (if not predefined) |
| `readyCallback` | `function` (optional) | Callback when tokenizer is ready |

#### Example

```js
tokenizer.init('multilingual-e5-large', () => {
  console.log('Tokenizer ready');
});
```

---

### `CI7Tokenizer.encode(modelName, text, callback)`

Encodes the given `text` using the specified model.

#### Parameters

| Param | Type | Description |
|------|------|-------------|
| `modelName` | `string` | The name of the loaded model |
| `text` | `string` | Text to tokenize |
| `callback` | `function(result)` | Called with tokenization result |

#### Result Object

```json
{
  "input": "Hello world!",
  "input_ids": [123, 456],
  "tokens": ["Hello", "world!"]
}
```

#### Example

```js
tokenizer.encode('bge-m3', 'This is BERT.', (result) => {
  console.log(result.tokens);
});
```

---

### `CI7Tokenizer.unload(modelName)`

Unloads the specified tokenizer from memory.

#### Parameters

| Param | Type | Description |
|------|------|-------------|
| `modelName` | `string` | Name of the model to unload |

#### Example

```js
tokenizer.unload('my-custom-model');
```

---

### `CI7Tokenizer.loadedModels(callback)`

Lists all currently loaded models.

#### Parameters

| Param | Type | Description |
|------|------|-------------|
| `callback` | `function(models)` | Called with an array of model names |

#### Example

```js
tokenizer.loadedModels((models) => {
  console.log('Loaded models:', models);
});
```

---

### `CI7Tokenizer.isModelLoaded(modelName, callback)`

Checks whether a model is already loaded.

#### Parameters

| Param | Type | Description |
|------|------|-------------|
| `modelName` | `string` | Model to check |
| `callback` | `function(isLoaded)` | Called with boolean indicating status |

#### Example

```js
tokenizer.isModelLoaded('bge-m3', (loaded) => {
  if (loaded) console.log('BERT is already loaded.');
});
```

---

## 🧪 Sample HTML Page

You can use the provided `index.html` as a starting point to build your own interface or integrate into existing apps.

It includes:
- Dropdown for predefined models
- Input fields for custom models
- Real-time tokenization preview
- Dynamic section creation per model
- Unload functionality

---

## 🧱 Project Structure

```
/demo/
│
├── index.html                  # Interactive demo page
├── tokenizer.js                # Main wrapper API
├── worker.js                   # WASM communication handler
├── tokenizers_wasm.js          # Compiled WASM module
└── tokens/                     # Folder for tokenizer JSONs
    ├── multilingual-e5-large-tokenizer.json
    └── bge-m3-tokenizer.json
```

---

## 🧑‍💻 Development Tips

- To add more models, simply extend the `_configs` object in `CI7Tokenizer.js`.
- For dynamic environments, allow users to input custom URLs directly.
- Debounce input events in UI for smoother performance.
- Consider persisting loaded state in localStorage/sessionStorage for session continuity.

---

## 📜 License

MIT License – see `LICENSE` for details.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests for:

- New tokenizer integrations
- UI improvements
- Performance optimizations
- Documentation enhancements

---

## 📮 Questions?

For questions, feature suggestions, or support, open an issue on GitHub or reach out at [your-email@example.com] (or replace with actual contact).

---

> Built with ❤️ using WebAssembly, JavaScript Modules, and Web Workers.
> Designed for developers, educators, and NLP enthusiasts.