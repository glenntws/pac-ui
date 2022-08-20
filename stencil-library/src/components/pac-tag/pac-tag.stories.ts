export default {
    title: 'Tag',
    component: 'pac-hashtag',
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
        deletable: {
            control: "boolean"
        },
        showIcon: {
            control: "boolean"
        },
        icon: {
            control: "text"
        },
        text: {
            control: "text"
        }
    }
};

const Template = (args) => `<pac-tag color="${args.color}" deletable="${args.deletable}">` +
                            (args.showIcon ? `<ion-icon name="${args.icon}" slot="icon"></ion-icon>` : "") +
                            `${args.text}
                            </pac-tag>`;

export const Solid = Template.bind({});
Solid.args = {
    color: "blue",
    deletable: true,
    showIcon: true,
    icon: "airplane-outline",
    text: "Berlin"
};