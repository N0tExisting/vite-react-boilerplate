import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header, type HeaderProps } from './Header';

export default {
	title: 'Example/Header',
	component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args: HeaderProps) => (
	<Header {...args} />
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
	user: {
		name: 'Bob',
	},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
