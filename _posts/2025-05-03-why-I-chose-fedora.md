---
layout: post
title: Why I chose Fedora for my home server
date: 2025-05-03 23:55:01
description: I explain why I chose to use Fedora for my home server
tags:  linux server
categories: home-server
featured: true
---


As I was getting into home servers I was also looking for a suitable operating system.
There are many options, and the first one I was interested in was True NAS scale, since it is a NAS (Network Attached Storage) operating system with ability to run Docker containers---meaning it has more functionality than just being a NAS. While I did begin my journey from curiosity about NAS systems, I wanted to build something more than just a NAS, and use a Linux server not only to customize it for my needs but also to learn more about how Linux servers work. 

The first Linux distribution I considered using was Debian, since it is a stable distribution fit for servers, and it was the Linux distribution I saw mentioned the most when doing my research, along with Ubuntu which is based on Debian. (Most recommendations for new users, especially on YouTube, were Ubuntu, but I also didn’t want to use it and Debian seemed to be used more, although that might have just been Reddit being Reddit.) At first, I was set on trying Debian, but I thought to myself: “While Debian is stable and all, I want to try something more exciting, more cutting edge, since stability isn’t a concern for me.” 

At the same time I had wanted to test a Linux distribution by openSUSE, so I integrated that goal into my home server project and made a list of distributions to test for potential home server use:
1. openSUSE Leap
2. Fedora server
3. Debian

I would start by trying Leap, and if something didn’t work---or I just didn’t like it---I would move on to Fedora and if that wasn’t good either, I would fall back to Debian.

While I wanted more cutting edge (and I am less concerned about the stability thing as I am writing now than when I decided to test these), I ended up being more conservative, since I am new to doing this stuff, and picked the stable Leap instead of the rolling Tumbleweed, since servers are supposed to update less frequently as I learned on the internet. My choice of Fedora did reflect my desire for more cutting edge, but I also chose Fedora since I use Fedora desktop on my computer, and I was curious about the server side of the same distribution. As for Debian, it was a fall-back option, though I cannot say if I would have just went to try out something else instead. (After all, currently I can imagine wanting to try more exotic things such as rolling release distribution.) 

So, I downloaded openSUSE Leap and installed it into a virtual machine (VM) on my PC. From initial limited experience, I quite liked it. Even though I had to adjust to working with a server instead of a desktop environment, it was fun to learn about things like connecting to the server via SSH from outside the VM.  I set up Docker, Portainer, and a Minecraft server using Portainer. This process was flawless, and I enjoyed it, but I couldn’t get Cockpit, a web-based remote administration software, working. And this was critical, because I really wanted to use this tool---so much so that it was one of the reasons why I chose Fedora as my second option---to manage the server from my PC.

After light research and not finding a solution, I guessed that maybe there was some problem with using a VM and trying to connect to it via network---even though this was a bit of an unlikely scenario, as both Portainer web interface and Minecraft server LAN connection were working. Having guessed that, I set out to install Leap into my very old (probably over 20 years old at this point) Dell OptiPlex 360.

After some difficulties---to put it mildly---with my network (completely the fault of my terrible router given by my ISP) I lost a day of my life along with some sleep. Somehow, though, I was randomly able to connect to the network the next day. I once again tried to use Cockpit and failed. So it wasn’t the VM that was the issue. After doing some research I found out that I’m not the only one with this issue and concluded that Cockpit just didn’t work with Leap. Since it was a critical component of my server plans, I decided to move on to Fedora.

Currently, I am testing Fedora server, and it has been satisfactory, so I am thinking of continuing to use it for the foreseeable future. Switching to Fedora wasn’t all rainbows and sunshine either, because of SELinux. SELinux is a kernel security model I’m not too familiar with, but from what I understand, it increases security of the system. When it comes to computers, more security usually (always?) comes with some trade-off and for me that was Docker.

I didn’t know about SELinux at first, so my attempts at making a Minecraft server Docker container using an image failed. It refused to download the server or the mods no matter what version I put in the environment variable. After failing to fix the Docker issue, I decided to use Podman, an alternative to Docker from Red Hat that works natively in Fedora---and work it did. I quickly got Minecraft server set up, and now I can start it with a few clicks from Cockpit web interface.


So, the reason I am using Fedora is that I didn’t want to use a NAS operating system, even though my journey started by learning about NAS, Debian seemed too “boring” for my needs and openSUSE Leap didn’t work for me because I wanted to use Cockpit, and I was already familiar with using Fedora on my desktop, and I’ve had good experience with Fedora so far.



Update: As I’m writing this on 03/05/2025, I learned about Leap 16.0 that’s been released as beta a few days ago. It has some major changes including having Cockpit and support for parallel package downloads in Zypper, the package manager. When this comes out I might try this again and even migrate to it. (Although I might just stick with what I have working currently, one never knows what will happen.)
