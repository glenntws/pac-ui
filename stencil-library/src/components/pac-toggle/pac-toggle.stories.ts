export default {
    title: 'Toggle',
    component: 'pac-toggle',
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
        }
    }
};

const Template = (args) => `<pac-toggle color="${args.color}" enabled="${args.enabled}"></pac-toggle>`;

export const Solid = Template.bind({});
Solid.args = {
    color: "blue",
    enabled: true
};