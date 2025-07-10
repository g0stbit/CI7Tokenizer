/* tslint:disable */
/* eslint-disable */
export class EncodingWasm {
  private constructor();
  free(): void;
  readonly input_ids: Uint32Array;
  readonly tokens: Array<any>;
}
export class TokenizerWasm {
  free(): void;
  constructor(json: string);
  encode(text: string, add_special_tokens: boolean): EncodingWasm;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_tokenizerwasm_free: (a: number, b: number) => void;
  readonly tokenizerwasm_from_buffer: (a: number, b: number) => number;
  readonly tokenizerwasm_encode: (a: number, b: number, c: number, d: number) => number;
  readonly __wbg_encodingwasm_free: (a: number, b: number) => void;
  readonly encodingwasm_get_ids: (a: number) => any;
  readonly encodingwasm_get_tokens: (a: number) => any;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
