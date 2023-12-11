import './style.scss'
const textElement = document.getElementById('text') as HTMLElement;
const optionButtonsElement = document.getElementById('option-buttons') as HTMLElement;

interface State {
  salt?: boolean;
  rayGun?: boolean;
  cloakingDevice?: boolean;
}

let state: State = {};

const startGame = () => {
  state = {};
  showTextContent(1);
};

const showTextContent = (textIndex: number) => {
  const textInfo = textInfos.find((text) => text.id === textIndex)!;
  textElement.innerText = textInfo.text;

  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textInfo.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement('button');
      button.innerText = option.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
};

const showOption = (option: { requiredState?: keyof State; setState?: State }) => {
  const { requiredState } = option;

  if (requiredState !== undefined) {
    return state[requiredState] !== undefined;
  }

  return true;
};

const selectOption = (option: { nextText: number; setState?: State }) => {
  const nextTextInfoId = option.nextText;
  if (nextTextInfoId <= 0) {
    return startGame();
  }
  state = { ...state, ...option.setState };
  showTextContent(nextTextInfoId);
};