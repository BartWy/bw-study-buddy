import FormField from './FormField';

export default {
  title: 'Components/moleculs/FormField',
  component: FormField,
};

const Tempalte = (args) => <FormField name="story" {...args} />;

export const Default = Tempalte.bind({});
Default.args = {
  label: 'Login',
};
