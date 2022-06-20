import {updateLastSelectedEpisode} from './multiSelectFunctionality.js';

const createEpisodeLabelName = (episodeId) => {
    return 'episode-' + episodeId;
};

const createEpisodeLabel = (episodeLabelNameForUi) => {
    const labelItem = document.createElement('label');
    labelItem.setAttribute('for', episodeLabelNameForUi);
    return labelItem;
};

const createEpisodeCheckbox = (episodeLabelNameForUi) => {
    const episodeCheckBox = document.createElement('input');
    episodeCheckBox.setAttribute('type', 'checkbox');
    episodeCheckBox.setAttribute('name', episodeLabelNameForUi);
    episodeCheckBox.setAttribute('id', episodeLabelNameForUi);

    episodeCheckBox.addEventListener('click', updateLastSelectedEpisode);
    return episodeCheckBox;
};

const createEpisodeSpanItem = (episodeName, episodeId) => {
    const spanItem = document.createElement('span');
    spanItem.innerHTML = episodeId + ' || ' + episodeName;
    return spanItem;
};

export const createEpisodeListItem = (episode) => {
    const episodeName = episode.name;
    const episodeId = episode.id;
    const listItem = document.createElement('li');
    const episodeLabelNameForUi = createEpisodeLabelName(episodeId);

    const labelItem = createEpisodeLabel(episodeLabelNameForUi);
    const inputItem = createEpisodeCheckbox(episodeLabelNameForUi);
    const spanItem = createEpisodeSpanItem(episodeName, episodeId);

    labelItem.appendChild(inputItem);
    labelItem.appendChild(spanItem);
    listItem.appendChild(labelItem);

    return listItem;
};
