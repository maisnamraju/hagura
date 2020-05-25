---
lastModified: '2020-05-24'
---

## Working with TailwindCSS inside Nuxt

TailwindCSS is a low level css library that makes it possible for developers to build websites and apps without writing an amount of css using just 
a bunch of pre-defined class names. The way it differs from Bootstrap or similar CSS/UI libraries is that Tailwind doesn't restrict you to follow 
any design guidelines. You could easily use it to build a material design based UI or a Bootstrap inspired UI.

Using tailwind with nuxt is pretty straightforward but there are some things to consider while building your Vue components on top of Tailwind. Here are 
a few things I learned while developing with tailwind and hopefully you find them helpful. (Most of the things should hold true when building using just Vue alone as well)

##### Note: They maynot be best practices. 

### 1) Have a seperate folder for tailwind configuration 
It might get too messy to have so many config files in the root folder itself, the tailwind config file can be moved to a seperate folder where all our tailwind config file can be stored. Also, the folder can be used to store other config files. To do this you can add a ```tailwindcss``` property inside the ```nuxt.config.js``` file like the one below

	tailwindcss: {
	    configPath: '~/config/tailwind.config.js',
	    cssPath: '~/assets/css/tailwind.css',
	    purgeCSSInDev: true,
	    exposeConfig: true
  	}
 ### 2) Generating your own color schemes
 Next, you may not want to use all the colors that come prepackaged with tailwind or you would like to replace the colors that come with it. To generate a color scheme you can use the color scheme generator[https://javisperez.github.io/tailwindcolorshades] to generate your own color schemes and paste the generated colors inside your `tailwind.config.js` 
 
  ```
 module.exports = {
  theme: {
    colors: {
    	'concrete': {
		100: '#FEFEFE',
		200: '#FCFCFC',
		300: '#FAFAFA',
		400: '#F6F6F6',
		500: '#F2F2F2',
		600: '#DADADA',
		700: '#919191',
		800: '#6D6D6D',
		900: '#494949',
		},
  },
  variants: {},
  plugins: []
};
```
The tool produces the hex color codes in the same manner as the default tailwind theme. So it could now be used using `.bg-concrete-100` which is the tailwind convention for using colors in your code. 
This may not be suitable for everyone as you may not need to use different variants of the same color. An alternative way to use the colors would be to have your own color schemes like the following 
```
light: {
        'primary': '#FFFFFF',
        'secondary': '#F5F5F5',
        'accent': '#F8F6E7',
        'primary-text': '#707070',
        'secondary-text': '#707070',
        'border': '#DBDBDB',
        'icon': '#999999',
        'active-link': '#B7A60F'
      },
      dark: {
        'primary': '#2A2F32',
        'secondary': '#464C50',
        'accent': '#363C40',
        'primary-text': '#AAAAAA',
        'secondary-text': '#CCCCCC',
        'border': '#000000',
        'icon': '#999999',
        'active-link': '#B7A60F'
     }
```
### 3) Using tailwind inside Vue components with dynamic css class names
The nuxt tailwind package comes with ```purgecss``` installed to remove unused css while building for production. Because of this, using class names in your component like 
```
<div :class="`text-primary ${dynamicClassname}`" ></div>
```
will cause the the dynamic class names to disappear. To avoid this it is better to use computed properties instead for example
```
<template>
<div class="text-primary" :class="{ `text-green-100`: isGreen, 'text-yellow-100': isYellow" ></div>
</template>
<script>
export default {
  props: {
    color: String,
  },
  computed:{
   isGreen() {
     return this.color === 'green';
   },
   isYellow() {
     return this.color === 'yellow';
   }
}
  
}
</script>
```
### 4) Avoiding long classes by using @apply properties
One of the things I assumed while starting out was that using the css class names in my html was the only way to make things work with tailwind but it is possible to use the `@apply` property to import the styles without having to pollute the class property so the following code 

```
<template>
  <input id="docsearch" class="transition-colors duration-100 ease-in-out bg-white">
</template>
```
could become 
```
<template>
  <input id="docsearch" class="custom-input-class">
</template>
<style lang="scss">
.custom-input-class {
  @apply .transition-colors .bg-white .shadow-md .focus-outline-0 .duration-100 ease-in-out;
}
</style>
```
or one could simply create custom classes based on their functionality to build up our own CSS libraries.
```
<template>
  <input id="docsearch" class="animation colors">
</template>
<style lang="scss">
.colors {
  @apply .transition-colors .bg-white .shadow-md;
}
.animation {
@apply .focus-outline-0 .duration-100 ease-in-out;
}
</style>
```
This encourages DRY principle and makes it easy to reference common styles in our components. 
