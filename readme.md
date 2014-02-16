# AngularJS Picturefill directive

An AngularJS directive to work with Scott Jehl's [Picturefill](https://github.com/scottjehl/picturefill) plugin for responsive images.

This directive works with dynamic content populated by the `$scope`.

See the demo [here](http://tinacious.github.io/angular-picturefill/).


## Usage

1. Include [Picturefill](https://github.com/scottjehl/picturefill) in your HTML.
2. Add `ng.picturefill` as an app dependency.
3. Use the `picture-fill` directive.
4. Implement Picturefill as usual. Below is an example implementation but you can specify as many options as you like. The only difference is that `data-src` must be `pf-src` to avoid conflict.
5. Use the provided `trimExt` filter on all URLs to remove the file extension so that you can append your custom image sizes. Don't forget to put it back. 

**Note:** All files must share the same file extension for this directive to work properly and all file sizes must be available for each file.

### With static images

```html
<span picture-fill data-alt="Juicy hanger steak on a croissant.">
  <span pf-src="images/sizes/steak-croissant.png"></span>
  <span pf-src="images/sizes/steak-croissant-100.png" data-media="(min-width: 1px)"></span>
  <span pf-src="images/sizes/steak-croissant-300.png" data-media="(min-width: 400px)"></span>
  <span pf-src="images/sizes/steak-croissant-600.png" data-media="(min-width: 645px)"></span>
  <span pf-src="images/sizes/steak-croissant-1024.png" data-media="(min-width: 960px)"></span>
  <span pf-src="images/sizes/steak-croissant.png" data-media="(min-width: 1200px)"></span>
</span>
```

### With `$scope` data

The filter `trimExt` is provided for working with `$scope` data.

```html
<span picture-fill data-alt="{{post.thumbnail.description}}" ng-if="post.thumbnail">
  <span pf-src="{{post.thumbnail.url}}"></span>
  <span pf-src="{{post.thumbnail.url | trimExt}}-150x150.jpg" data-media="(min-width: 1px)"></span>
  <span pf-src="{{post.thumbnail.url | trimExt}}-300x300.jpg" data-media="(min-width: 1px) and (-webkit-min-device-pixel-ratio: 1.5),(min-resolution: 144dpi),(min-resolution: 1.5dppx)"></span>
  <span pf-src="{{post.thumbnail.url | trimExt}}-300x225.jpg" data-media="(min-width: 320px)"></span>
  <span pf-src="{{post.thumbnail.url | trimExt}}-600x450.jpg" data-media="(min-width: 320px) and (-webkit-min-device-pixel-ratio: 1.5),(min-resolution: 144dpi),(min-resolution: 1.5dppx)"></span>
  <span pf-src="{{post.thumbnail.url | trimExt}}-1024x768.jpg" data-media="(min-width: 645px)"></span>
  <span pf-src="{{post.thumbnail.url | trimExt}}.jpg" data-media="(min-width: 645px) and (-webkit-min-device-pixel-ratio: 1.5),(min-resolution: 144dpi),(min-resolution: 1.5dppx)"></span>
  <span pf-src="{{post.thumbnail.url | trimExt}}.jpg" data-media="(min-width: 2068px)"></span>
</span>
```

## Roadmap

In the future I would like to implement the following:

- Not requiring all file extensions to be the same