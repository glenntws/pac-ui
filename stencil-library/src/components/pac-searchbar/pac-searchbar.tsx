import { Component, Host, h, Prop, State, Event, EventEmitter, Watch } from '@stencil/core';
import 'ionicons';
import { debounceEvent } from '../../utils/utils';

export interface ChangeEventInfo {
  value: string;
};

@Component({
  tag: 'pac-searchbar',
  styleUrl: 'pac-searchbar.scss',
  shadow: true,
})
export class PacSearchbar {

  @Prop()
  searchIconColor: Color = "blue";

  @Prop()
  cancelButtonColor: Color = "rose";

  @Prop()
  cancelButtonText: string = "Cancel";

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
  showCancelButton: "never" | "focus" | "always" = "focus";

  @Prop()
  showClearButton: "never" | "input" | "always" = "input";

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

  private onCancelPress = (ev?: Event) => {
    if (ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    this.pacCancel.emit();
    this.onClearPress();

    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  };

  private onClearPress = (ev?: Event, shouldFocus?: boolean) => {
    this.pacClear.emit();

    if (ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }

    // see https://github.com/ionic-team/ionic/issues/7527
    setTimeout(() => {
      const value = this.value;
      if (value !== '') {
        this.value = '';
        this.pacInput.emit();

        /**
         * When tapping clear button
         * ensure input is focused after
         * clearing input so users
         * can quickly start typing.
         */
        if (shouldFocus && !this.isFocused) {
          this.nativeInput.focus();
        }
      }
    }, 16 * 4);
  };

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

  private shouldShowCancelButton(): Boolean {
    return (this.showCancelButton === "always" || (this.showCancelButton === "focus" && this.isFocused));
  }

  private shouldShowClearButton(): Boolean {
    return (this.showClearButton === "always" || (this.showClearButton === "input" && this.value !== ""));
  }

  componentDidLoad() {
    this.debounceChanged();
  }
 
  render() {
    return (
      <Host class={((!this.enabled) ? "disabled" : "")}>
        <ion-icon id="searchIcon" name="search-outline" class={"color-" + this.searchIconColor}></ion-icon>
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
              spellcheck={this.enableSpellcheck}
              class={(this.value === "") ? "text-centered" : ""}></input>
        <button id="clearBtn" class={(this.shouldShowClearButton() ? "show" : "")}
              onMouseDown={this.onClearPress}
              onTouchStart={this.onClearPress}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <pac-button id="cancelBtn"
                    color={this.cancelButtonColor}
                    size="small"
                    look="clear"
                    class={(this.shouldShowCancelButton() ? " show" : "")}
                    //onClick={this.onCancelPress}
                    onMouseDown={this.onCancelPress}
                    onTouchStart={this.onCancelPress}
                    >
          {this.cancelButtonText}
        </pac-button>
      </Host>
    );
  }

}
