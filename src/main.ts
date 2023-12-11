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

const textInfos: {
  id: number;
  text: string;
  options: { text: string; requiredState?: keyof State; nextText: number; setState?: State }[];
}[] = [
  {
    id: 1,
    text: 'You find yourself in a mysterious forest carrying a packet of salt. A pathway lies ahead of you.',
    options: [
      { text: 'Take the salt.', setState: { salt: true }, nextText: 2 },
      { text: 'Leave the salt.', nextText: 2 },
    ],
  },
  {
    id: 2,
    text: 'The path leads to weird looking UFO. Next to it you see some items.',
    options: [
      {
        text: 'Take the ray gun.',
        requiredState: 'salt',
        setState: { salt: false, rayGun: true },
        nextText: 3,
      },
      {
        text: 'Take the cloaking device.',
        requiredState: 'salt',
        setState: { salt: false, cloakingDevice: true },
        nextText: 3,
      },
      {
        text: "Don't take anything and leave empty handed.",
        nextText: 3,
      },
    ],
  },
  {
    id: 3,
    text: 'Whilst walking away from the spaceship you come across some sort of town.',
    options: [
      { text: 'Try to find someone to ask if they know whats going on.', nextText: 4 },
      { text: 'Bang on someones door repeatedly until they answer.', nextText: 5 },
      { text: 'Keep what you know to yourself and hide in the shadows.', nextText: 6 },
    ],
  },
  {
    id: 4,
    text: 'Word caught on you were asking about aliens and government agents showed up to take you to Area 51.',
    options: [
      { text: 'Restart', nextText: -1 },
    ],
  },
  {
    id: 5,
    text: 'The owner of the house gets scared and calls the police. You end up getting arrested.',
    options: [
      { text: 'Restart', nextText: -1 },
    ],
  },
  {
    id: 6,
    text: 'Whilst lurking in the shadows you come across a mysterious character. He says he can give you all the answers.',
    options: [
      { text: 'Follow the mysterious man to a secret location.', nextText: 7 },
    ],
  },
  {
    id: 7,
    text: "When you get there you realise it's an ambush!",
    options: [
      { text: 'Try to run', nextText: 8 },
      {
        text: 'Attack it with your ray gun.',
        requiredState: 'rayGun',
        nextText: 9,
      },
      {
        text: 'Hide yourself using your cloaking device.',
        requiredState: 'cloakingDevice',
        nextText: 10,
      },
      {
        text: 'Throw the salt at them.',
        requiredState: 'salt',
        nextText: 11,
      },
    ],
  },
  {
    id: 8,
    text: 'Your attempts to run are in vain and the aliens easily catch you. You are abducted.',
    options: [
      { text: 'Restart', nextText: -1 },
    ],
  },
  {
    id: 9,
    text: "You don't know how to use the ray gun and end up being helpless and surrounded!",
    options: [
      { text: 'Restart', nextText: -1 },
    ],
  },
  {
    id: 10,
    text: 'The monster laughed as you hid behind your cloaking device and ate you.',
    options: [
      { text: 'Restart', nextText: -1 },
    ],
  },
  {
    id: 11,
    text: 'You threw your bag of salt at the aliens and they exploded. After the dust settled you saw the aliens were destroyed. The whole world congratulated you and you recieve a medal of honour!',
    options: [
      { text: 'Congratulations. Play Again.', nextText: -1 },
    ],
  },
];

startGame();
