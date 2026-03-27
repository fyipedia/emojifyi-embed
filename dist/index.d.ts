/**
 * emojifyi-embed — TypeScript declarations
 *
 * The embed script is self-executing. Simply import it to activate widgets.
 * All configuration is provided via data-* attributes on DOM elements.
 */

export {};

declare global {
  interface HTMLElement {
    dataset: DOMStringMap & {
      /** Widget type for EmojiFYI */
      'emojifyi'?: 'entity' | 'compare' | 'glossary' | 'guide' | 'search' | 'tooltip' | 'encoder' | 'picker' | 'emoji-inline';
      /** Entity slug (e.g. "emojis") */
      slug?: string;
      /** Visual theme */
      theme?: 'light' | 'dark' | 'sepia' | 'auto';
      /** Widget design style */
      style?: 'modern' | 'minimal';
      /** Widget size */
      size?: 'default' | 'compact' | 'large';
      /** Search box placeholder text */
      placeholder?: string;
    };
  }
}
