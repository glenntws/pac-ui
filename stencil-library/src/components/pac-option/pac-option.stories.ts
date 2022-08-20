export default {
    title: 'Option',
    component: 'pac-option',
    argTypes:
    {
        color: {
            control: "select",
            options: ["slate" , "gray" ,
                        "neutral" , "red" ,
                        "orange", "yellow" , "green" , "emerald" ,
                        "teal" , "cyan" , "sky" ,
                        "blue" , "indigo" , "violet" ,
                        "purple" , "fuchsia" , "pink" , "rose"]
        },
        enabled: {
            control: "boolean"
        },
        value: {
            control: "text"
        }
    }
};

const Template = (args) => `<pac-option color="${args.color}" enabled="${args.enabled}">${args.value}</pac-option>`;

export const Solid = Template.bind({});
Solid.args = {
    color: "blue",
    enabled: true,
    value: "B"
};