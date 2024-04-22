import { BaseLoginProvider } from "@abacritt/angularx-social-login";

export abstract class CustomBaseLoginProvider extends BaseLoginProvider {
  /**
   * Dynamically loads a module script into the DOM.
   *
   * @remarks
   * This function is intended for use in a browser environment and dynamically loads a module script
   * with the specified ID and source URL into the DOM. It allows importing specific elements from
   * the module and executes a callback function once the script is loaded.
   *
   * @param id - The ID of the script element. Used to prevent duplicate loading.
   * @param src - The URL of the module to load.
   * @param elements - An array of named exports from the module to import.
   * @param onload - A callback function to execute when the script has finished loading.
   * @param parentElement - Optional. The parent HTML element where the script should be appended.
   * If not provided, defaults to the <head> element of the document.
   *
   * @returns void
   *
   * @example
   * ```typescript
   * loadModule('myModule', 'path/to/module.js', ['foo', 'bar'], () => {
   *   console.log('Module loaded successfully.');
   * });
   * ```
   */
  protected loadModule(
    id: string,
    src: string,
    elements: string[],
    onload: any,
    parentElement?: HTMLElement
  ): void {
    // get document if platform is only browser
    if (typeof document !== "undefined" && !document.getElementById(id)) {
      const signInJS = document.createElement("script");

      signInJS.async = true;
      signInJS.type = "module";

      let inner = `import {${elements.join(",")}} from "${src}";`;
      for (const element of elements) {
        inner = inner.concat(`window["${element}"] = ${element};`);
      }
      signInJS.innerText = inner;

      signInJS.onload = onload;

      if (!parentElement) {
        parentElement = document.head;
      }

      parentElement.appendChild(signInJS);
    }
  }
}
