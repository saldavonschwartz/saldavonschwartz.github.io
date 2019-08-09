---
layout: post
title: VR Teleport
description: A plugin for customizable VR locomotion in Unreal Engine
<!-- image: assets/images/pic05.jpg -->
repo: https://github.com/saldavonschwartz/VRTeleport
---
<!-- Links: -->

- **[About](#1)**
- **[Architecture](#2)**
- **[Setup and Customization](#3)**

### <a class="toc_item" name="1"></a>About

VRTeleportComponent is a C++ plugin for Unreal Engine that allows adding teleportation capabilities to any pawn in the context of VR. The plugin implements an engine component (`VRTeleportComponent`) which automatically takes care of a number of things involved in teleportation:

- ray-casting and hit-testing (in *line* or *projectile/parabola* mode).
- avoiding blocking the ray cast with its owning actor.
- checking for the hit point being orthogonal to the ground.
- showing and hiding a marker of the teleport location.
- accounting for camera offset from the VR bounds when teleporting to a new target location.
- providing a default animation for teleportation (fade out and translate).

The component also handles replication / authority for multiplayer scenarios and has a number of events which can be implemented in either C++ or Blueprints to further customize its behavior.

{% include media.html
  sources="https://www.youtube.com/embed/slwddLluUA8"
  types="2"
  sizes="560-315"
  titles="Video 1."
  descriptions="VR teleport component demonstration."
%}

### <a class="toc_item" name="2"></a>Architecture

The component can be thought of as a state machine with three states:

Idle
: The component is in standby.

Probing
: The component periodically ray-casts and hit-tests against objects in the world, probing for a suitable location (i.e. orthogonal to the ground) to potentially teleport to.

Teleporting
: The component translates the owning pawn to an arbitrary location.

Figure 1 shows the main methods which trigger transitioning between states (above bar) and the delegate events (below bar) dispatched on each transition.

{% include latex/vrteleport/stateMachine.md%}

Methods that trigger transitions can only execute on the server, to prevent clients in a multiplayer environment from cheating. Delegates however are dispatched to all replicated versions of a pawn. This is to avoid costly syncing between server and clients (such as when ray-tracing during probing). Instead, clients use their own resources while probing and teleporting and the server ultimately replicates the final position of the pawn to all clients.

### <a class="toc_item" name="3"></a>Setup and Customization

A basic setup (as the one in Video 1) can be achieved in 4 steps:

1. Start with a pawn with a camera and motion controller, with a cube for the hand mesh (Figure 2).
2. Add the teleport component as a child of the motion controller, so it follows the controller (Figure 3).
3. Add a decal as a child of the teleport component; the component uses its first child as a marker, if one is present (Figure 3).
4. Connect a controller input (i.e.: the pad in the HTC Vive wand) to the appropriate methods of the teleport component (Figure 4).

{% include media.html
  sources="vrteleport/PawnNoTeleport.png; vrteleport/PawnTeleport.png"
  types="1; 1"
  sizes="100%-100%; 100%-100%"
  titles="Figure 2.; Figure 3."
  descriptions="Pawn without teleport component.; Pawn with teleport component and decal as a marker."
%}

{% include media.html
  sources="vrteleport/TeleportHook.png"
  types="1"
  sizes="100%-100%"
  titles="Figure 4."
  descriptions="Connecting a controller input (i.e.: HTC Vive wand pad) to the teleport component."
%}

For delegate events with a response, you can set the response parameter `ShouldPerformDefaultImplementation` to `false` if you want to bypass the default behavior of the component. An example would be to perform a teleport effect different than the default one:

{% include media.html
  sources="vrteleport/CustomizeExample.png"
  types="1"
  sizes="100%-auto"
  titles="Figure 5."
  descriptions="Bypassing default teleport behavior and implementing custom behavior."
%}
