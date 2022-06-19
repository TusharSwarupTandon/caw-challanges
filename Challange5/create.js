import { updateLastSelectedEpisode } from "./multiSelectFunctionality.js";

const createEpisodeLabelName = (episodeId) => {
	return "episode-" + episodeId;
};

const createEpisodeLabel = (episodeLabelNameForUi) => {
	let labelItem = document.createElement("label");
	labelItem.setAttribute("for", episodeLabelNameForUi);
	return labelItem;
};

const createEpisodeCheckbox = (episodeLabelNameForUi) => {
	let episodeCheckBox = document.createElement("input");
	episodeCheckBox.setAttribute("type", "checkbox");
	episodeCheckBox.setAttribute("name", episodeLabelNameForUi);
	episodeCheckBox.setAttribute("id", episodeLabelNameForUi);

	episodeCheckBox.addEventListener("click", updateLastSelectedEpisode);
	return episodeCheckBox;
};

const createEpisodeSpanItem = (episodeName, episodeId) => {
	let spanItem = document.createElement("span");
	spanItem.innerHTML = episodeId + " || " + episodeName;
	return spanItem;
};

export const createEpisodeListItem = (episode) => {
	const episodeName = episode.name,
		episodeId = episode.id;
	let listItem = document.createElement("li");
	let episodeLabelNameForUi = createEpisodeLabelName(episodeId);

	let labelItem = createEpisodeLabel(episodeLabelNameForUi);
	let inputItem = createEpisodeCheckbox(episodeLabelNameForUi);
	let spanItem = createEpisodeSpanItem(episodeName, episodeId);

	labelItem.appendChild(inputItem);
	labelItem.appendChild(spanItem);
	listItem.appendChild(labelItem);

	return listItem;
};
