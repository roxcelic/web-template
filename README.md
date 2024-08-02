## Hey!

I have made this 'template' for my website because when I first started making websites, I had no clue where to start or where to go from there. So, I plan to update this repo with a basic and content-filled template for my websites. With them being open source anyway, it would be pretty easy to 'steal' it, so I guess I'm just making the process a lot more streamlined.

To use this, all you need to do is set up a Node.js project and clone this repo into it. But I guess if you're reading this, then you won't know how to do that. Simply download [Node.js](https://nodejs.org/en/download/package-manager/current).

Cool, you're halfway there!
Next, download [Git](https://git-scm.com/downloads). Git is a version control system. [Here is a blog post](https://marsh.zone/blog/2024/06/git-gud/) by one of my friends explaining it much better than I ever could.

(Remember to set up Git before continuing; my friend's blog post explains how to do this.)

Finally, in a terminal (remember to run the terminal as admin, or these commands may not work) wherever you want to make your website (file location-wise), run the following commands:
```sh
npm create astro@latest
# fill out as you need or would like, just go with the defaults if you don't understand
# please change `$ASTROPROJECTNAME` to what you named your project
cd $ASTROPROJECTNAME
git clone https://github.com/roxcelic/web-template/tree/siteV3
cd web-template
# choose one of the following depending on the operating system and installed apps:
# rsync -av --exclude='.git' ./ ../
# or 
# robocopy . .. /E /XD .git
cd ../
# this command has some difficulty with admin controls, if it is not working you can just delete the ./web-template directory yourself
rm -R web-template
npm install -D sass
```

Now you have your very own copy of my website to play with.
Before using this publicly, though, I do ask a few things:
please provide a link to this tutorial openly available on your page, in something that is not a popup, and credit the appropriate people:

> me

> the celeste developers for some assets used

Shouldn't be too hard, right?
If you would like to host your website publicly, then please follow these steps:
```sh
git init
git add .
git commit -m "Initial commit"
# Replace YOUR-REPO-URL with the actual URL of your GitHub repository
git remote add origin YOUR-REPO-URL
git push -u origin main
```
to deploy your website i recommend using github pages:
* Go to your GitHub repository.
* Click on "Settings".
* Scroll down to the "GitHub Pages" section.
* Under "Source", select the branch you want to deploy from (usually main).
* Your site will be available at https://your-username.github.io/your-repo-name/

### Contributions
If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Please make sure your code adheres to the coding standards and includes appropriate documentation.