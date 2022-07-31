/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PacButton {
        "color": "slate" | "gray" |
          "neutral" | "red" |
          "orange" | "yellow" |
          "green" | "emerald" |
          "teal" | "cyan" | "sky" |
          "blue" | "indigo" | "violet" |
          "purple" | "fuchsia" | "pink" | "rose";
        "enabled": boolean;
        "look": "solid" | "glass";
        "size": "small" | "normal" | "large";
        "text": string;
    }
}
declare global {
    interface HTMLPacButtonElement extends Components.PacButton, HTMLStencilElement {
    }
    var HTMLPacButtonElement: {
        prototype: HTMLPacButtonElement;
        new (): HTMLPacButtonElement;
    };
    interface HTMLElementTagNameMap {
        "pac-button": HTMLPacButtonElement;
    }
}
declare namespace LocalJSX {
    interface PacButton {
        "color"?: "slate" | "gray" |
          "neutral" | "red" |
          "orange" | "yellow" |
          "green" | "emerald" |
          "teal" | "cyan" | "sky" |
          "blue" | "indigo" | "violet" |
          "purple" | "fuchsia" | "pink" | "rose";
        "enabled"?: boolean;
        "look"?: "solid" | "glass";
        "size"?: "small" | "normal" | "large";
        "text"?: string;
    }
    interface IntrinsicElements {
        "pac-button": PacButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pac-button": LocalJSX.PacButton & JSXBase.HTMLAttributes<HTMLPacButtonElement>;
        }
    }
}
