from flask import Flask, render_template, url_for

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('home.html')


@app.route('/ajax1')
def ajax1():
    return render_template('ajax1.html')


if __name__ == '__main__':
    app.run()
