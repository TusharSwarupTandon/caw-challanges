import { episodes } from "./episodesList.js";
import { createEpisodeListItem } from "./create.js";

let episodeInUi = document.querySelector(".episodes");

const addEpisodesToUi = () => {
	episodes.forEach((episode) => {
		episodeInUi.appendChild(createEpisodeListItem(episode));
	});
};
addEpisodesToUi();
