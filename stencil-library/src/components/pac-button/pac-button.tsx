import { Component, Host, h, Prop } from '@stencil/core';

/*
const solidColors = {
  "slate": "text-white bg-slate-500 hover:bg-slate-400 active:bg-slate-600",
  "gray": "text-white bg-gray-500 hover:bg-gray-400 active:bg-gray-600",
  "zinc": "text-white bg-zinc-500 hover:bg-zinc-400 active:bg-zinc-600",
  "neutral": "text-white bg-neutral-500 hover:bg-neutral-400 active:bg-neutral-600",
  "stone": "text-white bg-stone-500 hover:bg-stone-400 active:bg-stone-600",
  "red": "text-white bg-red-500 hover:bg-red-400 active:bg-red-600",
  "orange": "text-white bg-orange-500 hover:bg-orange-400 active:bg-orange-600",
  "amber": "text-white bg-amber-500 hover:bg-amber-400 active:bg-amber-600",
  "yellow": "text-white bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600",
  "lime": "text-white bg-lime-500 hover:bg-lime-400 active:bg-lime-600",
  "green": "text-white bg-green-500 hover:bg-green-400 active:bg-green-600",
  "emerald": "text-white bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600",
  "teal": "text-white bg-teal-500 hover:bg-teal-400 active:bg-teal-600",
  "cyan": "text-white bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600",
  "sky": "text-white bg-sky-500 hover:bg-sky-400 active:bg-sky-600",
  "blue": "text-white bg-blue-500 hover:bg-blue-400 active:bg-blue-600",
  "indigo": "text-white bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600",
  "violet": "text-white bg-violet-500 hover:bg-violet-400 active:bg-violet-600",
  "purple": "text-white bg-purple-500 hover:bg-purple-400 active:bg-purple-600",
  "fuchsia": "text-white bg-fuchsia-500 hover:bg-fuchsia-400 active:bg-fuchsia-600",
  "pink": "text-white bg-pink-500 hover:bg-pink-400 active:bg-pink-600",
  "rose": "text-white bg-rose-500 hover:bg-rose-400 active:bg-rose-600"
};

const insetColors = {
  "slate": "text-white bg-slate-500 hover:bg-slate-400 active:bg-slate-600",
  "gray": "text-white bg-gray-500 hover:bg-gray-400 active:bg-gray-600",
  "zinc": "text-white bg-zinc-500 hover:bg-zinc-400 active:bg-zinc-600",
  "neutral": "text-white bg-neutral-500 hover:bg-neutral-400 active:bg-neutral-600",
  "stone": "text-white bg-stone-500 hover:bg-stone-400 active:bg-stone-600",
  "red": "text-white bg-red-500 hover:bg-red-400 active:bg-red-600",
  "orange": "text-white bg-orange-500 hover:bg-orange-400 active:bg-orange-600",
  "amber": "text-white bg-amber-500 hover:bg-amber-400 active:bg-amber-600",
  "yellow": "text-white bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600",
  "lime": "text-white bg-lime-500 hover:bg-lime-400 active:bg-lime-600",
  "green": "text-white bg-green-500 hover:bg-green-400 active:bg-green-600",
  "emerald": "text-white bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600",
  "teal": "text-white bg-teal-500 hover:bg-teal-400 active:bg-teal-600",
  "cyan": "text-white bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600",
  "sky": "text-white bg-sky-500 hover:bg-sky-400 active:bg-sky-600",
  "blue": "text-white bg-white/0 hover:bg-blue-500/10 active:bg-blue-500",
  "indigo": "text-white bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600",
  "violet": "text-white bg-violet-500 hover:bg-violet-400 active:bg-violet-600",
  "purple": "text-white bg-purple-500 hover:bg-purple-400 active:bg-purple-600",
  "fuchsia": "text-white bg-fuchsia-500 hover:bg-fuchsia-400 active:bg-fuchsia-600",
  "pink": "text-white bg-pink-500 hover:bg-pink-400 active:bg-pink-600",
  "rose": "text-white bg-rose-500 hover:bg-rose-400 active:bg-rose-600"
};
*/

@Component({
  tag: 'pac-button',
  styleUrl: 'pac-button.scss',
  shadow: true,
})
export class PacButton {

  @Prop()
  text: string = "Button";

  @Prop()
  color: "slate" | "gray" |
          "neutral" | "red" |
          "orange" | "yellow" |
          "green" | "emerald" |
          "teal" | "cyan" | "sky" |
          "blue" | "indigo" | "violet" |
          "purple" | "fuchsia" | "pink" | "rose" = "blue";

  @Prop()
  look: "solid" | "glass" = "solid";

  @Prop()
  size: "small" | "normal" | "large" = "normal";

  @Prop()
  enabled: boolean = true;

  render() {
    return (
      <Host>
        <button class={"size-" + this.size + " " + (!this.enabled ? " disabled " : "") + " color-" + this.color + " look-" + this.look}> 
          {this.text}
        </button>
      </Host>
    );
  }

}
