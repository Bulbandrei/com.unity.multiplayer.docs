---
id: gp_scenemanagement_bootstrap
title: Netcode Scene Management Golden Path with Bootstrap
---

For this Golden Path, we refer to the term `bootstrap` as the intial scene that always loads when your Unity application starts. It is always the first scene listed in your **Build Settings** > **Scenes in Build List**. Using the bootstrap usage pattern creates a single `NetworkManager` instance when the first scene loads and all scene loading is done with `LoadSceneMode.Additive` going forward.

The bootstrap scene will only be `LoadSceneMode.Single` for this tutorial.

The idea behind a bootstrap is that when you are running (whether in editor **Play Mode** or runtime), a specific set of assets is always loaded.  The `BootStrapSceneLoad` script assures that when you enter **Play Mode** from any scene currently opened in the editor, the `NetworkManager` instance configured in the BootStrap scene is always available.

:::note
This Golden Path functions without the need of the Golden Path Foundation module and starts with a new, empty Unity 3D Project.
:::

## Prerequisites

Before working through the Scene Management Golden Path, take time to familiarize yourself with the [Scene Management overview](../../mlapi-basics/scene-management.md). The overview explains scene management concepts and best practices that may not be fully explained in the Golden Path.

## Creating the Primary Bootstrap Scripts

## Creating a Simple UI for Scene Navigation

## Adding More Netcode Elements

:::contribution Special Thanks
This guide would not have been possible without the hard work and support of Noel Stephens, Unity.
:::