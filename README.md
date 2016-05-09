# Turbolinks Challenge

| **Objectives** |
| :---- |
| Explore javascript in rails |
| Discover Turbolinks & Turbolinks Events |
| Organize javascript to only execute on specific pages |

**Terms:**
- Javascript Events
- Event Listener / Event Binding
- Turbolinks

##Instructions

This lab does not have a database! Just clone, bundle, and run `rails server`. Then launch the home page ("/") in your browser.

You should work exclusively in your javascript directory: `app/assets/javascripts/`.

#### Challenge 1 - Color Changer

When you click on a color page, your background color should change to match the name of the color in your url path. Can you fix the current javascript?

- Does it work on refresh?
- Does it work when you click through to the page?
- Is your solution DRY?

<details>
<summary>**Hint**: How would you grab the url path of the current page? (Click Here)</summary>
<br>
```js
window.location.pathname
// or, just
location.pathname
```
</details>

<details>
<summary>**Hint**: How would you dynamically grab the current color from the path? (Click Here)</summary>
<br>
```js
location.pathname.split("/")[1]; // warning: returns "" if path is "/"!
```
</details>

#### Challenge 2 - Page View Counter

The counter should increase for every individual page view.  Can you fix the current javascript?

- Do all the numbers reset when you refresh? (good!)
- Do specific numbers increment on each pageview?
- Is your solution DRY?

## Resources
- [Turbolinks Events](https://github.com/turbolinks/turbolinks-classic#events)
- [Conditional Execution of Page Specific Javascript](https://railsapps.github.io/rails-javascript-include-external.html#conditional)

<img width="400" src="https://media.giphy.com/media/l2Je2UKgDMm2HMqha/giphy.gif">
