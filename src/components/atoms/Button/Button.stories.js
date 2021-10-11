import { Button } from './Button';

export default {
  title: 'Components/Atom/Button',
  component: Button,
};

const Tempalte = (args) => <Button {...args}>Read more</Button>;

export const Default = Tempalte.bind({});
export const Big = Tempalte.bind({});
Big.args = {
  isBig: true,
};
