export default {
    title: 'List',
    component: 'pac-list',
    argTypes:
    {
    }
};

const Template = () => `
<pac-list>
    <pac-list-header>
        Demo list
    </pac-list-header>
    
    <pac-list-item>
        <pac-label>First item</ion-label>
    </pac-list-item>
    <pac-list-item>
        <pac-label position="fixed">Last name</pac-label>
        <pac-input placeholder="Mustermann"></pac-input>
    </pac-list-item>
    <pac-list-item>
        <pac-label position="stacked">Interests</pac-label>
        <pac-input placeholder="Skiing"></pac-input
    </pac-list-item>
</pac-list>
`;

export const Demo = Template.bind({});
Demo.args = {};