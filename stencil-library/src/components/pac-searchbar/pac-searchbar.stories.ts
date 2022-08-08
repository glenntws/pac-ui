export default {
    title: 'Searchbar',
    component: 'pac-searchbar',
    argTypes:
    {
        searchIconColor: {
            control: "select",
            options: ["slate" , "gray" ,
                        "neutral" , "red" ,
                        "orange", "yellow" , "green" , "emerald" ,
                        "teal" , "cyan" , "sky" ,
                        "blue" , "indigo" , "violet" ,
                        "purple" , "fuchsia" , "pink" , "rose"]
        },
        cancelButtonColor: {
            control: "select",
            options: ["slate" , "gray" ,
                        "neutral" , "red" ,
                        "orange", "yellow" , "green" , "emerald" ,
                        "teal" , "cyan" , "sky" ,
                        "blue" , "indigo" , "violet" ,
                        "purple" , "fuchsia" , "pink" , "rose"]
        },
        cancelButtonText: {
            control: "text"
        },
        placeholder: {
            control: "text"
        },
        enableAutocorrect: {
            control: "boolean"
        },
        autocompleteMode: {
            control: "select",
            options: ["off", "on", "name", "honorific-prefix", "given-name", "additional-name", "family-name",
                        "honorific-suffix", "nickname", "email", "username", "new-password", "current-password",
                        "one-time-code", "organization-title", "organization", "street-address", "address-line1",
                        "address-line2", "address-line3", "address-level4", "address-level3", "address-level2",
                        "address-level1", "country", "country-name", "postal-code", "cc-name", "cc-given-name",
                        "cc-additional-name", "cc-family-name", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year",
                        "cc-csc", "cc-type", "transaction-currency", "transaction-amount", "language", "bday",
                        "bday-day", "bday-month", "bday-year", "sex", "tel", "tel-country-code", "tel-national",
                        "tel-area-code", "tel-local", "tel-extension", "impp", "url", "photo"]
        },
        enableSpellcheck: {
            control: "boolean"
        },
        inputType: {
            control: "select",
            options: ["email", "number", "password", "search", "tel", "text", "url"]
        },
        inputMode: {
            control: "select",
            options: ["decimal", "email", "none", "numeric", "search", "tel", "text", "url"]
        },
        showCancelButton: {
            control: "select",
            options: ["never", "focus", "always"]
        },
        showClearButton: {
            control: "select",
            options: ["never", "input", "always"]
        },
        inputDebounce: {
            control: "text"
        },
        enabled: {
            control: "boolean"
        },
        value: {
            control: "text"
        }
    }
};

const Template = (args) => `<pac-searchbar
                                search-icon-color="${args.searchIconColor}"
                                cancel-button-color="${args.cancelButtonColor}"
                                cancel-button-text="${args.cancelButtonText}"
                                placeholder="${args.placeholder}"
                                enable-autocorrect="${args.enableAutocorrect}"
                                autocomplete-mode="${args.autocompleteMode}"
                                enable-spellcheck="${args.enableSpellcheck}"
                                input-type="${args.inputType}"
                                input-mode="${args.inputMode}"
                                show-cancel-button="${args.showCancelButton}"
                                show-clear-button="${args.showClearButton}"
                                input-debounce="${args.inputDebounce}"
                                enabled="${args.enabled}"
                                value="${args.value}">
                            </pac-searchbar>`;

export const Solid = Template.bind({});
Solid.args = {
    searchIconColor:"blue",
    cancelButtonColor:"rose",
    cancelButtonText:"Cancel",
    placeholder:"Search...",
    enableAutocorrect:true,
    autocompleteMode:"text",
    enableSpellcheck:true,
    inputType:"text",
    inputMode:"text",
    showCancelButton:"focus",
    showClearButton:"input",
    inputDebounce:"200",
    enabled:true,
    value:""
};