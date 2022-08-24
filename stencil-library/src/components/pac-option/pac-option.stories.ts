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
        look: {
            control: "select",
            options: ["box", "inset"]
        },
        enabled: {
            control: "boolean"
        },
        value: {
            control: "text"
        }
    }
};

const Template = (args) => `<pac-option color="${args.color}" enabled="${args.enabled}" look="${args.look}">${args.value}</pac-option>`;

export const Box = Template.bind({});
Box.args = {
    color: "blue",
    look: "box",
    enabled: true,
    value: "B"
};

export const Inset = Template.bind({});
Inset.args = {
    color: "orange",
    look: "inset",
    enabled: true,
    value: "<ion-icon name='airplane'></ion-icon>"
};