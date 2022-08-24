export default {
    title: 'Progress bar',
    component: 'pac-progress-bar',
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
        value: {
            control: {
                type: "number",
                min: 0,
                max: 100
            }
        },
        look: {
            control: "select",
            options: ["solid", "compact"]
        },
        indeterminate: {
            control: "boolean"
        },
        busy: {
            control: "boolean"
        }
    }
};

const Template = (args) => `<pac-progress-bar
                                color="${args.color}"
                                value="${args.value}"
                                look="${args.look}"
                                busy="${args.busy}"
                                indeterminate="${args.indeterminate}">
                            </pac-progress-bar>`;

export const Solid = Template.bind({});
Solid.args = {
    color: "blue",
    look: "solid",
    busy: true,
    indeterminate: false,
    value: 20
};


export const CompactIndeterminate = Template.bind({});
CompactIndeterminate.args = {
    color: "emerald",
    look: "compact",
    busy: true,
    indeterminate: true,
    value: 0
};