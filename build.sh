#!/bin/bash

# Clean dist
rm -rf dist/*
mkdir -p dist/tokens

# Copy JS/WASM files
cp demo/CI7Tokenizer.js dist/
cp demo/CI7Tokenizer.worker.js dist/
cp demo/tokenizers_wasm*.js dist/
cp demo/tokenizers_wasm_bg.wasm dist/

# Minify JS
npx terser dist/CI7Tokenizer.js -o dist/CI7Tokenizer.min.js
npx terser dist/tokenizers_wasm.js -o dist/tokenizers_wasm.min.js

# Copy tokens
cp demo/tokens/*.json dist/tokens/