export default {
    title: 'Status',
    component: 'pac-status',
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
        mode: {
            control: "radio",
            options: ["off", "on", "blinking"]
        }
    }
};

const Template = (args) => `<pac-status color="${args.color}" mode="${args.mode}"></pac-status>`;

export const On = Template.bind({});
On.args = {
    color: "green",
    mode: "on"
};