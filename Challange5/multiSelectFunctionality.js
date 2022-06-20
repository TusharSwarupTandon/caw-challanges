let episodesInUi;
let lastSelectedEpisode;

const checkMultipleEpisodes = (
    previouslySelectedCheckbox,
    currentSelectedCheckBox,
) => {
    episodesInUi = document.querySelectorAll('input');
    let selectCheckboxFrom = Array.prototype.indexOf.call(
        episodesInUi,
        previouslySelectedCheckbox,
    );
    let selectCheckboxTo = Array.prototype.indexOf.call(
        episodesInUi,
        currentSelectedCheckBox,
    );

    if (selectCheckboxFrom > selectCheckboxTo) {
        [selectCheckboxFrom, selectCheckboxTo] = [
            selectCheckboxTo,
            selectCheckboxFrom,
        ];
    }
    let currCheckbox = selectCheckboxFrom;
    while (currCheckbox < selectCheckboxTo) {
        episodesInUi[currCheckbox++].checked = true;
    }
};

export const updateLastSelectedEpisode = (event) => {
    if (lastSelectedEpisode && event.shiftKey) {
        checkMultipleEpisodes(lastSelectedEpisode, event.target);
    }
    lastSelectedEpisode = event.target;
    if (!lastSelectedEpisode.checked) {
        lastSelectedEpisode = undefined;
    }
};
