import { State } from '../main';

//TEXTINFO FOR THE STORIES 
//FIRST 'STORY'
export const textInfos: {
    id: number;
    text: string;
    options: { text: string; requiredState?: keyof State; nextText: number; setState?: State;}[];
  }[] = [
    {
      id: 1,
      text: 'You find yourself in a mysterious forest carrying a packet of salt. A pathway lies ahead of you.',
      options: [
        { text: 'Take the salt.', setState: { optionOne: true }, nextText: 2 },
        { text: 'Leave the salt.', nextText: 2 },
      ],
    },
    {
      id: 2,
      text: 'The path leads to a weird looking UFO. Next to it you see some items.',
      options: [
        {
          text: 'Take the ray gun.',
          requiredState: 'optionOne',
          setState: { optionOne: false, optionTwo: true },
          nextText: 3,
        },
        {
          text: 'Take the cloaking device.',
          requiredState: 'optionOne',
          setState: { optionOne: false, optionThree: true },
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
          requiredState: 'optionTwo',
          nextText: 9,
        },
        {
          text: 'Hide yourself using your cloaking device.',
          requiredState: 'optionThree',
          nextText: 10,
        },
        {
          text: 'Throw the salt at them.',
          requiredState: 'optionOne',
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
        { text: 'Congratulations. Play Again.', nextText: -1},
      ],
    },
  ];

  //SECOND 'STORY'
  
  export const textInfosSecondStory: {
    id: number;
    text: string;
    options: { text: string; requiredState?: keyof State; nextText: number; setState?: State; onSelected?: () => void }[];
  }[] = [
    {
      id: 1,
      text: "The sun is shining in the meadow. You look down and see a hand held mirror.",
      options: [
        { text: 'Take the mirror', setState: { optionOne: true }, nextText: 2 },
        { text: 'Leave the mirror.', nextText: 4 },
      ],
    },
    {
      id: 2,
      text: 'The mirror speaks to you, telling you it can grant you any wish',
      options: [
        {
          text: 'Wish for more wishes.',
          requiredState: 'optionOne',
          setState: { optionOne: false, optionTwo: true },
          nextText: 3,
        },
        {
          text: 'Wish for happiness..',
          requiredState: 'optionOne',
          setState: { optionOne: false, optionThree: true },
          nextText: 3,
        },
        {
          text: "Don't wish for anything.",
          nextText: 4,
        },
      ],
    },
    {
      id: 3,
      text: 'The mirror laughs evily, you become scared.',
      options: [
        { text: "Chuck the mirror away and hope it doesn't work", nextText: 4 },
        { text: 'Wait to see what the mirror has in store', nextText: 5 },
        { text: 'Ask to take back your wish.', nextText: 6 },
      ],
    },
    {
      id: 4,
      text: 'Without anyone to hold it, the genie escapes from the mirror trapping you inside.',
      options: [
        { text: 'Restart', nextText: -1 },
      ],
    },
    {
      id: 5,
      text: "The genie thrives on fear, he ruins your whole life and you're left all alone never to be seen again.",
      options: [
        { text: 'Restart', nextText: -1 },
      ],
    },
    {
      id: 6,
      text: 'The genie has never had anyone say this before and so instead grants you another wish, this time promising to be kind.',
      options: [
        { text: 'Make another wish', nextText: 7 },
      ],
    },
    {
      id: 7,
      text: "You realise the genie is living a sad lonely life.",
      options: [
        { text: 'Wish for the genie to be free', nextText: 8 },
        {
          text: 'Wish for everyone to have one wish, including him. .',
          requiredState: 'optionTwo',
          nextText: 9,
        },
        {
          text: 'Wish for the end of genies',
          requiredState: 'optionThree',
          nextText: 10,
        },
        {
          text: 'Ask to save the wish for later',
          requiredState: 'optionOne',
          nextText: 11,
        },
      ],
    },
    {
      id: 8,
      text: 'The genie becomes free and unleashes havoc on the rest of the world as payback for being trapped for so long',
      options: [
        { text: 'Restart', nextText: -1 },
      ],
    },
    {
      id: 9,
      text: "There's too many people in the world. THe genie gets overwhelemd and self-combusts.",
      options: [
        { text: 'Restart', nextText: -1 },
      ],
    },
    {
      id: 10,
      text: "The wish didn't free the genies but made them cease to exist. You go to jail.",
      options: [
        { text: 'Restart', nextText: -1 },
      ],
    },
    {
      id: 11,
      text: "You have succesffuly tricked the genie. You don't make another wish. The genie is trapped inside forever and you're free to live happily ever after.",
      options: [
        { text: 'Congratulations. Play Again.', nextText: -1},
      ],
    },
  ]