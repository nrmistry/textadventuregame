import './style.scss'
import { textInfos, textInfosSecondStory } from './modules/textInfos';

//GAME LOGIC + GAME

const textElement = document.getElementById('text') as HTMLElement;
const optionButtonsElement = document.getElementById('option-buttons') as HTMLElement;

//TYPES 

export interface State {
  optionOne?: boolean;
  optionTwo?: boolean;
  optionThree?: boolean;
}

let state: State = {};

const startGame = () => {
  state = {};
  showStorySelection();
};

// CREATE DISPLAY TWO OPTIONS FOR STORY
const showStorySelection = () => {
  textElement.innerText = 'Choose Your Adventure, will you survive...';
  clearOptionButtons();
  const buttonStory1 = createOptionButton('Alien Adventure', () => startStory(textInfos));
  const buttonStory2 = createOptionButton('Fairytale Adventure', () => startStory(textInfosSecondStory));
  optionButtonsElement.appendChild(buttonStory1);
  optionButtonsElement.appendChild(buttonStory2);
};

const startStory = (story: typeof textInfos) => {
  showTextContent(1, story);
};

const showTextContent = (textIndex: number, story: typeof textInfos) => {
  const textInfo = story.find((text) => text.id === textIndex);

  if (!textInfo) {
    console.error(`Text info with ID ${textIndex} not found.`);
    return;
  }

  textElement.innerText = textInfo.text;

  //FUNCTION TO CLEAR OPTION BUTTONS 
  clearOptionButtons();

  textInfo.options.forEach((option) => {
    const button = createOptionButton(option.text, () => selectOption(option, story));
    optionButtonsElement.appendChild(button);
  });
};

const clearOptionButtons = () => {
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }
};

//FUNCTION TO CREATE OPTION BUTTON + EVENT LISTENER 

const createOptionButton = (text: string, onClick: () => void) => {
  const button = document.createElement('button');
  button.innerText = text;
  button.classList.add('btn');
  button.addEventListener('click', onClick);
  return button;
};

/*const showOption = (option: { requiredState?: keyof State; setState?: State }) => {
  const { requiredState } = option;

  if (requiredState !== undefined) {
    return state[requiredState] !== undefined;
  }

  return true;
};
*/

//FUNCTION TO SELECT OPTION

const selectOption = (
  option: { nextText: number; setState?: State; onSelected?: () => void },
  story: typeof textInfos
) => {
  const nextTextInfoId = option.nextText;

  if (nextTextInfoId <= 0) {
    return startGame();
  }

  state = { ...state, ...option.setState };

  if (option.onSelected) {
    option.onSelected();
  }

  showTextContent(nextTextInfoId, story);
};

startGame();
