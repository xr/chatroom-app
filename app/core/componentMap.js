import app from '../components/app';

import panel from '../components/panel';
import panelHeader from '../components/panel/header';
import panelSearch from '../components/panel/search';
import panelTab from '../components/panel/tab';
import panelListItem from '../components/panel/listItem';
import createRoom from '../components/panel/createRoom';

import chat from '../components/chat';
import control from '../components/chat/control';
import message from '../components/chat/message';
import footer from '../components/chat/footer';

import spinner from '../components/utils/spinner';

const components = {
	app: app,

	panel: panel,
	panelHeader: panelHeader,
	panelSearch: panelSearch,
	panelTab: panelTab,
	panelListItem: panelListItem,
	createRoom: createRoom,

	chat: chat,
	control: control,
	message: message,
	footer: footer,

	spinner: spinner
};

export default components;
