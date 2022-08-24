export default {
    title: 'Button',
    component: 'pac-button',
    argTypes:
    {
        text: {
            control: "text"
        },
        color: {
            control: "select",
            options: ["slate" , "gray" ,
                        "neutral" , "red" ,
                        "orange", "yellow" , "green" , "emerald" ,
                        "teal" , "cyan" , "sky" ,
                        "blue" , "indigo" , "violet" ,
                        "purple" , "fuchsia" , "pink" , "rose"]
        },
        look: {
            control: "radio",
            options: ["solid", "inset", "clear"]
        },
        size: {
            control: "radio",
            options: ["small", "normal", "large"]
        },
        enabled: {
            control: "boolean"
        }
    }
};

const Template = (args) => `<pac-button color="${args.color}" look="${args.look}" size="${args.size}" enabled="${args.enabled}">${args.text}</pac-button>`;

export const Solid = Template.bind({});
Solid.args = {
    text: "Button text",
    color: "blue",
    look: "solid",
    size: "normal",
    enabled: true
};

export const Inset = Template.bind({});
Inset.args = {
    text: "Button text",
    color: "blue",
    look: "inset",
    size: "normal",
    enabled: true
};


export const Clear = Template.bind({});
Clear.args = {
    text: "Button text",
    color: "blue",
    look: "clear",
    size: "normal",
    enabled: true
};