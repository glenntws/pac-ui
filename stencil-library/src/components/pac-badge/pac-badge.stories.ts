export default {
    title: 'Badge',
    component: 'pac-badge',
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
        effect: {
            control: "radio",
            options: ["none", "fast-glow", "slow-glow"]
        }
    }
};

const Template = (args) => `<pac-badge color="${args.color}" effect="${args.effect}" text="${args.text}"></pac-button>`;

export const NoEffect = Template.bind({});
NoEffect.args = {
    text: "Badge",
    color: "blue",
    effect: "none"
};