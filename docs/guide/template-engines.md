# Template engines

Following template engines are supported. They can be also used separately outside of **Vituum** as plugin in **Vite**. But you loose the support for extname of template engines.

You can add pages in the **📁 views** directory, your templates files should be located in **📁&nbsp;templates** directory.<br><br>
Here is an example of how to use Twig as a template engine inside the views directory:
* `*.json` (or `*.json.html`) - for defining a page with data, template is auto-loaded from the `template` variable which can be added in config or in **📁 data** directory
* `*.twig` (or `*.twig.html`) - classic twig template file, `.twig.json` file with the same name can be added to add data to the template
* `*.json.twig` (or `*.json.twig.html`) - for non-html data such as json. `twig` is input and `json` is output as a `.json` file

Same goes for any other template engine, just change the twig to something else. You even use more template engines at the same time.<br><br>
Only one template engine can be used defined as `*.json`, you can change the default template engine via `templates.format` in config.
<br><br>
See [Template Options](/config/templates-options) to learn more how to configure the plugins.
<br><br>
See [Trying Vituum Online ](/guide/#trying-vituum-online) for various examples of template engines

## Twig _([@vituum/vite-plugin-twig](https://github.com/vituum/vite-plugin-twig))_

```twig
<ul id="navigation">
    {% for item in ['Home', 'About'] %}
        <li>{{ item }}</li>
    {% endfor %}
</ul>
```

See [docs](https://twig.symfony.com/doc/3.x/) for more info about the syntax

## Latte _([@vituum/vite-plugin-latte](https://github.com/vituum/vite-plugin-latte))_

```handlebars
<ul id="navigation">
    {foreach ['Home', 'About'] as $item}
        <li>{$item}</li>
    {/foreach}
</ul>

or

<ul id="navigation">
    <li n:foreach="['Home', 'About'] as $item">{$item}</li>
</ul>
```

See [docs](https://latte.nette.org/en/) for more info about the syntax

## Liquid _([@vituum/vite-plugin-liquid](https://github.com/vituum/vite-plugin-liquid))_

```twig
<ul id="navigation">
    {% for item in ['Home', 'About'] %}
        <li>{{ item }}</li>
    {% endfor %}
</ul>
```

See [docs](https://liquidjs.com/) for more info about the syntax

## Pug _([@vituum/vite-plugin-pug](https://github.com/vituum/vite-plugin-pug))_

```pug
ul(id='navigation')
  each item in ['Home', 'About']
    li= item
```

See [docs](https://pugjs.org) for more info about the syntax

## Nunjucks _([@vituum/vite-plugin-nunjucks](https://github.com/vituum/vite-plugin-nunjucks))_

```twig
<ul id="navigation">
    {% for item in ['Home', 'About'] %}
        <li>{{ item }}</li>
    {% endfor %}
</ul>
```

See [docs](https://mozilla.github.io/nunjucks/) for more info about the syntax

## Handlebars _([@vituum/vite-plugin-handlebars](https://github.com/vituum/vite-plugin-handlebars))_
```handlebars
```twig
<ul id="navigation">
    {{#each item as |navigation|}}
        <li>{{ item }}</li>
    {{/each}}
</ul>
```

See [docs](https://handlebarsjs.com/) for more info about the syntax

## Make your own plugin

Vituum can be used with any template engine plugin, the only requirement is that the plugin supports file ext-names such as following (in case of twig)
* `.json.html` - for defining a page with data, `template` param is used to load default template which is layout for all pages
* `.twig.html` - classic template engine syntax
* `.twig.json` - data for the template engine syntax

Template engine syntax should be also possible to process in any `.html` file like this

```html
<script type="application/json" data-format="twig">
    {
        "template": "path/to/template",
        "title": "Hello nested"
    }
</script>
```
