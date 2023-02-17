import { Meta, Story } from "@storybook/react";
import { default as CardListComponent } from "./CardList";

export default {
  title: "Organisms/Card List",
  component: CardListComponent,
} as Meta;

const Template: Story = (args: object) => <CardListComponent {...args} />;

export const CardList = Template.bind({});
CardList.args = {
  posts: [
    {
      id: 1,
      title: "His mother had always taught him",
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      userId: 9,
      tags: ["history", "american", "crime"],
      reactions: 2,
    },
    {
      id: 2,
      title: "He was an expert but not in a discipline",
      body: "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
      userId: 13,
      tags: ["french", "fiction", "english"],
      reactions: 2,
    },
    {
      id: 3,
      title: "Dave watched as the forest burned up on the hill.",
      body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
      userId: 32,
      tags: ["magical", "history", "french"],
      reactions: 5,
    },
    {
      id: 4,
      title: "All he wanted was a candy bar.",
      body: "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
      userId: 12,
      tags: ["mystery", "english", "american"],
      reactions: 1,
    },
    {
      id: 5,
      title: "Hopes and dreams were dashed that day.",
      body: "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
      userId: 41,
      tags: ["crime", "mystery", "love"],
      reactions: 2,
    },
    {
      id: 6,
      title: "Dave wasn't exactly sure how he had ended up",
      body: "Dave wasn't exactly sure how he had ended up in this predicament. He ran through all the events that had lead to this current situation and it still didn't make sense. He wanted to spend some time to try and make sense of it all, but he had higher priorities at the moment. The first was how to get out of his current situation of being naked in a tree with snow falling all around and no way for him to get down.",
      userId: 47,
      tags: ["english", "classic", "american"],
      reactions: 3,
    },
    {
      id: 7,
      title: "This is important to remember.",
      body: "This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.",
      userId: 12,
      tags: ["magical", "crime"],
      reactions: 0,
    },
    {
      id: 8,
      title: "One can cook on and with an open fire.",
      body: "One can cook on and with an open fire. These are some of the ways to cook with fire outside. Cooking meat using a spit is a great way to evenly cook meat. In order to keep meat from burning, it's best to slowly rotate it.",
      userId: 31,
      tags: ["american", "english"],
      reactions: 9,
    },
    {
      id: 9,
      title: "There are different types of secrets.",
      body: "There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did.",
      userId: 42,
      tags: ["american", "history", "magical"],
      reactions: 2,
    },
    {
      id: 10,
      title: "They rushed out the door.",
      body: "They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all.",
      userId: 1,
      tags: ["fiction", "magical", "history"],
      reactions: 4,
    },
    {
      id: 11,
      title: "It wasn't quite yet time to panic.",
      body: "It wasn't quite yet time to panic. There was still time to salvage the situation. At least that is what she was telling himself. The reality was that it was time to panic and there wasn't time to salvage the situation, but he continued to delude himself into believing there was.",
      userId: 25,
      tags: ["mystery", "american", "history"],
      reactions: 5,
    },
    {
      id: 12,
      title: "She was aware that things could go wrong.",
      body: "She was aware that things could go wrong. In fact, she had trained her entire life in anticipation that things would go wrong one day. She had quiet confidence as she started to see that this was the day that all her training would be worthwhile and useful. At this point, she had no idea just how wrong everything would go that day.",
      userId: 26,
      tags: ["love", "english"],
      reactions: 7,
    },
  ],
  total: 150,
  skip: 0,
  limit: 30,
};
