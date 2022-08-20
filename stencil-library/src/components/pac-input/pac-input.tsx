import { Component, Host, h, Prop, State, Event, EventEmitter, Watch } from '@stencil/core';
import { debounceEvent } from '../../utils/utils';

export interface ChangeEventInfo {
  value: string;
};

@Component({
  tag: 'pac-input',
  styleUrl: 'pac-input.scss',
  shadow: true,
})
export class PacInput {

  @Prop()
  placeholder: string = "Search...";

  @Prop()
  enableAutocorrect: Boolean = false;

  @Prop()
  autocompleteMode: AutocompleteMode = "off";

  @Prop()
  enableSpellcheck: Boolean = true;

  @Prop()
  inputType: typeof HTMLInputElement.prototype.type = "text";

  @Prop()
  inputMode: typeof HTMLInputElement.prototype.inputMode = "text";

  @Prop()
  inputDebounce: number = 200;

  @Watch('inputDebounce')
  protected debounceChanged() {
    this.pacChange = debounceEvent(this.pacChange, this.inputDebounce);
  }

  @Prop()
  enabled: Boolean = true;

  @Prop({ mutable: true })
  value: string = "";

  @Watch('value')
  protected valueChanged() {
    const inputEl = this.nativeInput;
    const value = this.value;
    if (inputEl && inputEl.value !== value) {
      inputEl.value = value;
    }
    this.pacChange.emit({ value });
  }
  
  @State()
  isFocused: Boolean = false;

  @Event()
  pacInput!: EventEmitter<KeyboardEvent>;

  @Event()
  pacChange!: EventEmitter<ChangeEventInfo>;

  @Event()
  pacFocus!: EventEmitter<void>;

  @Event()
  pacBlur!: EventEmitter<void>;

  @Event()
  pacCancel!: EventEmitter<void>;

  @Event()
  pacClear!: EventEmitter<void>;

  private nativeInput: HTMLInputElement;

  private onBlur = () => {
    this.isFocused = false;
    this.pacBlur.emit();
  };

  private onFocus = () => {
    this.isFocused = true;
    this.pacFocus.emit();
  };

  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value;
    }
    this.pacInput.emit(ev as KeyboardEvent);
  };

  render() {
    return (
      <Host>
        <input ref={(el) => (this.nativeInput = el)}
              type={this.inputType}
              inputMode={this.inputMode}
              placeholder={this.placeholder}
              onInput={this.onInput}
              onBlur={this.onBlur}
              onFocus={this.onFocus}
              disabled={!this.enabled}
              autoComplete={this.autocompleteMode}
              autoCorrect={this.enableAutocorrect ? "on" : "off"}
              spellcheck={this.enableSpellcheck}></input>
      </Host>
    );
  }

}
