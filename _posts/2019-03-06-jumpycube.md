---
layout: post
title: Jumpy Cube
description: A physics-based endless scroller and RL environment
image: assets/images/jumpyCube/jumpyCube1.png
idx: 2
---
<!--  Links -->
[l1]: https://gym.openai.com/
[l2]: https://gym.openai.com/envs/BipedalWalker-v2/
[l3]: https://gym.openai.com/envs/LunarLanderContinuous-v2/

### <a class="toc_item" name="1"></a>About

Jumpy Cube started as a quick prototype ((i.e.: developed in one day) for an endless scroller type of game, targeting mobile devices. The game consists of a (partially) physics-based cube which must keep jumping and rolling forward and onto a series of tiles which are randomly generated as the game progresses.

The game is also suitable as a test environment for RL (reinforcement learning) agents. Particularly, the state-space for the game is virtually infinite (since new configurations of tiles are continuously generated) and involves different types of features, including some physics-based like angular velocity and momentum. This puts it roughly on par with continuous control [OpenAI Gym][l1] environments such as [Bipedal Walker][l2] and [Lunar Lander][l3].

The project is still a work in progress but below you can see a couple videos of the main game mechanics.

{% include media.html
  sources="https://www.youtube.com/embed/8RMg5ClCeZ8"
  types="2"
  sizes=""
  titles="Jumpy Cube (prototype)."
  descriptions="Gameplay mechanics."
%}

{% include media.html
  sources="https://www.youtube.com/embed/ZIQWxMjokmo"
  types="2"
  sizes=""
  titles="Jumpy Cube (prototype)."
  descriptions="Detail of the random tile generation mechanism."
%}
