# schmud-de

Personal Website

## Prerequisites

You will need [Leiningen][] 2.0.0 or above installed.

[leiningen]: https://github.com/technomancy/leiningen

## Running

### CSS

Requires [Bootstrap 3.3.7](https://github.com/twbs/bootstrap/archive/v3.3.7.zip) in `css/bootstrap-3.3.7`.

To compile the CSS, install Less and run `lessc -x main.less > main.min.css`.

### Leinigen

To start a web server for the application, run:

    lein ring server

## License

None
