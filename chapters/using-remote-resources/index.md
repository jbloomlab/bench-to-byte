---
layout: doc
title: "3. Using remote computing resources"
sidebar: true
aside: true
---

# {{ $frontmatter.title }}

In this section, I'll describe how and why we use remote computational resources. I'll walk you though how to access remote file systems and how to run code on a cluster.

## Computing at Fred Hutch Cancer Center

:::tip
[There is a wiki](https://sciwiki.fredhutch.org/scicomputing/comp_index/) that's an invaluable resource for people doing scientific computing at Fred Hutch. It goes in depth on every topic that's covered in this section.
:::

In our lab, we use the Fred Hutch Cancer Center's file system to store our lab notebooks, data, and code. You can access the file system through a variety of methods. The most common way that people access our lab's files is by mounting the file system to their computer. This allows you to open and edit these files on your local machine with the advantage that you can navigate through files using a GUI (Graphical User Interface) like Finder on Mac or File Explorer on Windows.

The shared folders in the file system are all located at `/fh/`. There are several shared folders including `/fh/fast`, `/fh/scratch` and `/fh/secure`, but our lab's files are located under `/fh/fast` in `/fh/fast/bloom_j/`. Computational projects are stored under `/fh/fast/bloom_j/` in a directory called `computational_notebooks/` and organized by the lab member's Fred Hutch username and the year that a project was started.

```
/fh/fast/bloom_j/computational_notebooks/
|
|
––––– <username>/
    |
    |
    ––––– <year>/
        |
        |
        ––––– <project>/
```

For example, if I have a project called `HMPV-Antibody-Passaging` that I created in 2024, it's location on the file system should be `/fh/fast/bloom_j/computational_notebooks/whannon/2024/HMPV-Antibody-Passaging`. Aside from the organizational benefits of adhering to this convention, all of the _code_ in `/fh/fast/bloom_j/computational_notebooks/` is automatically backed up on a daily basis.

## Access through the command line

In addition to mounting the file system to your local computer as a network drive, you can connect to the file system by accessing a remote computer cluster called `Rhino`. `Rhino` is a cluster of 3 large memory, shared computers that are intended for interactively prototyping and developing your analyses. You can use `Rhino` to write and execute code to analyze your data, however, `Rhino` is **not** intended for intensive computational tasks. Fred Hutch has a [separate computer cluster called `Gizmo`](#computationally-intensive-computing-with-gizmo) for intensive tasks.

### Logging into `Rhino`

You log into `Rhino` through the command line or shell. If you're not familiar with the command line, check out this [excellent tutorial](https://missing.csail.mit.edu/2020/course-shell/).

Log into `Rhino` by opening up the command line and typing the `ssh` command.

```bash
ssh username@rhino
```

You'll be prompted to enter your Fred Hutch password. Note, you can only access `Rhino` like this while using the Fred Hutch wifi. You can log into `Rhino` without being on the wifi, but that requires an [alternative method described in a later section](#setting-up-a-proxy-jump). Now, you'll see that your terminal's prompt has changed to something like `username@rhino02:~$ `, and commands that you run on the command line will be executed by `Rhino`.

When you initially connect to `Rhino`, you're location on the file system is a special 'home' directory that's specific to each user and located at `/home/username`. We'll use this home directory [later](), but for now, most of our code and data should be located in the Bloom lab's directory (`/fh/fast/bloom_j/`). We could move there by navigating to our computational notebook like so.

```bash
cd /fh/fast/bloom_j/computational_notebooks/username/
```

But, it becomes annoying if you have to remember the full path every time you log onto `Rhino`. Instead, we can make our lives a little easier with 'symbolic links'. These are a way of making shortcuts between places on the file system. Instead of typing the full path each time, we can type a shortened version and it will jump us to the correct location.

Run the following command to make a symbolic link to your computational notebook.

```bash
ln -s fh/fast/bloom_j/computational_notebooks/username/ username/
```

Now, you can access you computational notebook from it's original path (`cd fh/fast/bloom_j/computational_notebooks/username/`) and a new path from your home directory (`cd username/`). Both paths will take you to the same place.

### Setting up SSH keys

The approach outlined above is a perfectly good way to log into `Rhino`, but entering your password each time gets annoying. Instead, I'd recommend setting up SSH to be password-free using SSH keys. This will allow you to log in securely without needing to enter your password every time.

SSH keys are a pair of cryptographic keys (one _public_, one _private_) used to authenticate your identity when connecting to a remote server like `Rhino`. The private key stays on your local machine and is kept secret, while the public key is placed with the server. When you log in, the server checks that the private key on your machine matches the public key it has, allowing you to authenticate without needing to enter a password.

:::warning
The process for generating SSH keys differs between operating systems. The following steps apply to a local computer with Mac OS and a remote computer with Ubuntu Linux (`Rhino`). There are tons of tutorials online for setting up SSH keys if your computer has a different operating system.
:::

#### Step 1: Generate an SSH Key Pair

First, you'll need to generate a pair of SSH keys on your local machine. To do this, open a terminal (make sure you're **not** logged into `Rhino`) and run the following command:

```bash
ssh-keygen -t rsa -b 4096 -C "rhino.fhcrc.org"
```

- `-t rsa` specifies that you're generating an RSA key.
- `-b 4096` generates a 4096-bit key for added security.
- `-C "rhino.fhcrc.org"` adds an optional label (in this case, the name of the remote host) to help identify your key.

When you're be prompted for a file location, press Enter to select the default (`~/.ssh/id_rsa`). When you're prompted to enter an optional passphrase, also press Enter to skip this step.

#### Step 2: Copy the public key to `Rhino`

Now you'll have two keys located at `~/.ssh/id_rsa`, one public and one private. Copy the **public** key to `Rhino` using the following command:

```bash
ssh-copy-id username@rhino
```

Your public SSH key will now be on `Rhino` in `~/.ssh/authorized_keys` where `~` is your home directory on the server (`/home/username`).

#### Step 3: Log in to make sure it worked

You should be able to log into `Rhino` without a password now. Test it out:

```bash
ssh username@rhino
```

If everything worked, you won't be prompted for a password.

#### Step 4: Edit your SSH config

This step is optional, but it will make life easier down the road. Make a new file called 'config' (no extension) in `~/ssh/` on your local machine and add the following line:

```text
Host rhino
  HostName rhino
  User username
  ForwardX11 yes
  ForwardAgent yes
  ForwardX11Trusted yes
  IdentityFile ~/.ssh/id_rsa
```

### Setting up a proxy jump

So far, the approaches detailed above will only work when you're on the Fred Hutch wifi. But what about if you're working from home and you want to access the sever? The simplest option is to log into the Fred Hutch VPN from a Fred Hutch managed computer and log into `Rhino` like you normally would. However, if you don't have a Fred Hutch managed computer, this won't work. In that case, the other option is to use a 'proxy jump'.

A proxy jump involves logging into `Rhino` through an intermediate host called `Snail`. First you log into `Snail`, then from `Snail` you log into `Rhino`. Thankfully, we can automate this process using SSH keys and the SSH config.

### Computationally intensive computing with `Gizmo`

The `Rhino` cluster is intended for accessing and manipulating files, running and developing programs, managing software environments, and interactive coding. It's **not** intended running for computationally intensive jobs (such as aligning sequencing reads) that take a long time or use many CPUs. For those kinds of jobs, we use the `Gizmo` cluster. Like `Rhino`, `Gizmo` is a computer cluster managed by Fred Hutch; unlike `Rhino`, it's very, very large.

There are two methods of running programs on `Gizmo`: (1) [submitting them as jobs with `Slurm`](#using-gizmo-with-slurm) or (2) [running them interactively with `grabnode`](#using-gizmo-interactively). I'll discuss both below.

:::tip Note
If you've never used `Gizmo` before, you'll need to ask Fred Hutch Scicomp for permissions. Shoot them a quick email and you'll usually hear back within an hour.
:::

#### Using `Gizmo` interactively

This is the easiest way to get access to `Gizmo`. Log into `Rhino` and type:

```bash
grabnode
```

You'll be prompted with several questions including how many CPU you want, how much memory you need, how much time you need, and whether you need a GPU. It can take a few minutes for the system to allocate you resources. When it's done, you'll see that you're prompt has changed from something like `username@rhino02:~$ ` to `username@gizmok3:~$ `. Now, anything you type into the command line will be run on the `Gizmo` cluster.

This is a great approach for troubleshooting computationally intensive tasks interactively. However, it's not a good approach for running jobs you expect to take a long time. The resources you request from `Gizmo` will be released when you log out. That means that any job that's running will be terminated if you log out or loose connection with the server. There's a way to [get around this constraint with `tmux`](#using-tmux), but it's better to submit long-running jobs with [`Slurm`](#using-gizmo-with-slurm).

#### Using `Gizmo` with `Slurm`

This is the more common use case for `Gizmo`. If you have a long-running computationally-intensive job, for example, a [Snakemake pipeline]() that performs many sequencing alignments, you can submit a 'job' to `Gizmo` and the code will run until it's finished. You're using the resources of `Gizmo` just [like you do above](#using-gizmo-interactively), but you don't need to leave `Rhino` and your jobs will keep running if you log out.

`Gizmo` uses a program called `Slurm` to handle job submission. `Slurm` (Simple Linux Utility for Resource Management) is an open-source job scheduling system used for managing and allocating computing resources in a cluster.

1. **Submitting a Job**

To submit a job in Slurm, you use the `sbatch` command with a job script. The script contains the commands you want to run and `Slurm` directives to request resources. A simple bash script (`run_job.bash`) looks like this:

```bash
#!/bin/bash
#
#SBATCH -c 16

snakemake -j 16 --software-deployment-method conda -s dms-vep-pipeline-3/Snakefile
```

The comments starting with `#SBATCH` configure `Slurm` by providing arguments like how many CPUs you need (`#SBATCH -c 16`). You submit the job script to `Slurm`  using the `sbatch` command as follows:

```bash
sbatch run_job.bash
```

You can check on the status of your jobs running on `Gizmo` with the `squeue` command. This command shows you the jobs you have running and how long they've been running for.

```bash
squeue -u username
```

If you want to cancel a job that's running, use the `scancel` command.

```bash
scancel -u username
```

There's [a lot more to `Slurm`](https://slurm.schedmd.com/documentation.html), but that's most of what you'll need to know.

### Using `tmux`

As I mentioned above, you may run into a scenario where you want to run something interactively and you don't want the process to terminate when you log off the server. That's where `tmux` comes in handy. `tmux` (Terminal Multiplexer) is software that's pre-loaded on `Rhino` and `Gizmo`. It allows you to create multiple terminal sessions within a single window, and more importantly, lets you _detach_ from a session while keeping it running in the background. This way, you can log off and later reconnect to the session to check on your processes or pick up where you left off.

#### 1. Start a new session

To start a new `tmux` session, use the command:

```bash
tmux
```

This opens a new terminal window with a little green bar at the bottom. You'd use this terminal as you would normally.

#### 2. Detach from a session

To detach from a session and leave it running, press `Ctrl + B`, followed by `D`. This will bring you back to your original terminal prompt, but your `tmux` session will continue to run in the background.

#### 3. List active sessions

If you want to see a list of all the running tmux sessions, use:

```bash
tmux ls
```

#### 4. Reattach to a session

To reattach to a session you previously detached from, use:

```bash
tmux attach -t <session_id>
```

Replace <session_id> with the number or name (if you named it) of the session you want to reconnect to, which can be found using the `tmux ls` command.

#### 5. Kill a session

When you're done, you can kill a `tmux` session by typing exit within the session or by pressing `Ctrl + D`.
