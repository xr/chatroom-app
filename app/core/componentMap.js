import panel from '../components/panel';
import panelHeader from '../components/panel/header';
import panelSearch from '../components/panel/search';
import panelTab from '../components/panel/tab';
import panelListItem from '../components/panel/listItem';

import chat from '../components/chat';
import message from '../components/chat/message';
import footer from '../components/chat/footer';

import spinner from '../components/utils/spinner';

const components = {
	panel: panel,
	panelHeader: panelHeader,
	panelSearch: panelSearch,
	panelTab: panelTab,
	panelListItem: panelListItem,

	chat: chat,
	message: message,
	footer: footer,

	spinner: spinner
};

export default components;
