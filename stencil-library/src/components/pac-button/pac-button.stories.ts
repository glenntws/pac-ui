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
            options: ["slate" , "gray" , "zinc" ,
                        "neutral" , "stone" , "red" ,
                        "orange", "amber" , "yellow" ,
                        "lime" , "green" , "emerald" ,
                        "teal" , "cyan" , "sky" ,
                        "blue" , "indigo" , "violet" ,
                        "purple" , "fuchsia" , "pink" , "rose"]
        },
        look: {
            control: "radio",
            options: ["solid", "inset"]
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

const Template = (args) => `<pac-button text="${args.text}" color="${args.color}" look="${args.look}" size="${args.size}" enabled="${args.enabled}"></pac-button>`;

export const Solid = Template.bind({});
Solid.args = {
    text: "Button text",
    color: "blue",
    look: "solid",
    size: "normal",
    enabled: true
};