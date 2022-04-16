# Docsify Image Caption

## What is it

**docsify-image-caption** is a simple plugin to show the title/caption of image.
Using it, the caption of image will be shown under the image.

In addtion to caption, docsify-image-caption will automatically convert the image into a block element based on the position of the image.

## Usage and preview

The usage and the corresponding effects are as follow.

<!-- tabs:start -->

<!-- tab:Markdown -->
```markdown
This is an inline image, ![](docsify.png 'logo'), with the title "logo".
```

<!-- tab:Preview -->
This is an inline image, ![](docsify.png 'logo'), with the title "logo".

<!-- tabs:end -->

<!-- tabs:start -->

<!-- tab:Markdown -->
```markdown
This is an inline image, ![](docsify.png), without title.
```

<!-- tab:Preview -->
This is an inline image, ![](docsify.png), without title.

<!-- tabs:end -->

<!-- tabs:start -->

<!-- tab:Markdown -->
```markdown
This is a block image.

![](docsify.png 'logo')

It has a title named logo.
```

<!-- tab:Preview -->
This is a block image.

![](docsify.png 'logo')

It has a title named logo.
<!-- tabs:end -->

<!-- tabs:start -->

<!-- tab:Markdown -->
```markdown
This is a block image .

![](docsify.png)

It has no title.
```

<!-- tab:Preview -->
This is a block image .

![](docsify.png)

It has no title.
<!-- tabs:end -->

## How to install

```html
<!DOCTYPE html>
<head>
  <!-- ... -->
</head>

<body>
  <div id="app"></div>
  <script>
    window.$docsify = {
      // ...
    }
  </script>
  <script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/h-hg/docsify-image-caption/dist/docsify-image-caption.min.js"></script>
</body>
</html>
```

## Support

Create a GitHub issue for bug reports, feature requests, or questions
Add a star star on GitHub to support the plugin!

## License

This project is licensed under the terms of the [MIT](https://github.com/h-hg/docsify-image-caption/blob/master/LICENSE) license.
