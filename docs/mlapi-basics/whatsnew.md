---
id: whatsnew
title: What's New in Netcode for GameObjects (Netcode)
sidebar_label: What's New
---

Here are the high-level features and changes for each release. For a detailed change list, see the lastest changelog [here](link).

## 2021

<!-- Release Template
### {Month}

For our {Month Year} release, the following major features were released:

#### Netcode for GameObjects

{Content}

#### Tools

{Content}

#### UTP

{Content}

#### BossRoom

{Content}
-->

### October

For our October 2021 release, the following major features were released:

#### Netcode for GameObjects

* Streamlined RPC layer with support for serialization of custom data types
* Improved scene management which includes additive scene workflows support
* Support for network animations
* Improved network transforms with interpolation support
* Network object parenting support

#### Tools

Profiler support for Netcode. The new network profiler module allows you to inspect detailed information about the network activity performed on a given tick, especially considering the incoming and outgoing bytes related to that activity.

#### UTP

* Enables Relay Service
* Includes DTLS encryption (required for console support)
* OSS UTP Adapter for NGO

#### BossRoom