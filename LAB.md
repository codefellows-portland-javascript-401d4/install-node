![cf](http://i.imgur.com/7v5ASc8.png) Install Node from Source
===

## Objectives
1. Install node from source
2. Submit this lab the 401 way

### Install node from Source
#### Out with the old
First type `which node && which npm` if you get anything other than a blank line you already have node installed and need to remove it. 

If you used the node installer from their website use these commands:
```sh
sudo rm -rf $(which node)
sudo rm -rf $(which npm)
sudo rm -rf ~/.node
sudo rm -rf ~/.npm
```
Now if you type `which node && which npm` you should have a blank line.

#### In with the new
These instructions will help you install the latest version of node in a way the prevents you from needing root to install
global packages. You will need curl, python v2.x a C compiler(gcc or clang) and make installed. 
These can be obtained through whatever package manager your operating system uses (homebrew on Mac, apt-get on Ubuntu, etc).

```sh
curl -O https://nodejs.org/dist/latest/node-v6.8.0.tar.gz
tar -vxzf node-v6.8.0.tar.gz
cd node-v6.8.0
./configure --prefix=$HOME/.node
make && make install
```

These commands will download the latest stable version of node (currently 6.8.0) configure it to install into a .node folder in your 
home directory and will then compile it from source. Next you need to tell your shell to look for the node command in $HOME/.node/bin   

On Linux:

```sh
echo "export PATH=$HOME/.node/bin:$PATH" >> ~/.bashrc
echo "export NODE_PATH=$HOME/.node/lib/node_modules" >> ~/.bashrc
source ~/.bashrc
```

On Mac:

```sh
echo "export PATH=$HOME/.node/bin:$PATH" >> ~/.bash_profile
echo "export NODE_PATH=$HOME/.node/lib/node_modules" >> ~/.bash_profile
source ~/.bash_profile
```

If you now enter the command `node --version` you should see `v6.8.0` (or newer)

## How code labs will be sumbitted

Unless stated otherwise in the lab instructions, coding labs for the 401 class will 
be submitted through a pull request to the _assignment repository_ of the class organization.  

Each Lab has a github repository under the class organization with a LAB.md with the instructions 
for the assignment. Any special materials needed for the assignment will also be included in the _assignment repository_.  

For each assignment you will fork the _assignment repository_, `git clone` your fork onto your computer. 

As you work in your fork: use branches, write meaningful commit messages, and follow *good git pratices*.

A destination branch will be created for you or your team in the _assignment repository_. By default, 
we'll use your github user name as your branch name.

When you are ready to submit your assignment, you will make a pull request from the master branch (or 
whatever branch is your main submittal branch) of your GitHub fork to your named branch 
in the repo of the original Assignment. Then submit the url of your pull request into canvas as the assignment submission.

Some labs may be follow-on assignments and will allow you to use the same repository for subsequent labs. When this is the
case, you will see sequentially labelled `LAB.md`, `LAB1.md` files that describe each lab.

__You will also need to include a travis.yml file__, but we haven't covered `npm` and testing yet. So for now, it's not required.

### Submit a pull request with a hello world program

The final instruction for this assignment is to write a hello world program, 
and submit it by following the previous instructions.

* In your repo, make a javascript file called `helloworld.js`
* In `helloworld.js` write:

```js
console.log('hello, <your name>');
```

* run the program by typing `node helloworld.js` in your shell
	* if you get an error, fix you code before you submit!
	* if the program runs with out errors:
		* merge changes into master
		* push it up to github
		* create a pull request to this assignment from your fork.
