from flask import Flask, render_template, url_for, request
import time
app = Flask(__name__)


@app.route('/')
def hello_world():
    ajax_amount = list(range(1, 5))
    return render_template('home.html', ajax_amount=ajax_amount)


@app.route('/ajax/<int:ajax_id>')
def ajax(ajax_id):
    to_render = f'ajax{ajax_id}.html'
    return render_template(to_render)


@app.route('/process', methods=['GET', 'POST'])
def process_func():
    time.sleep(1)
    if request.method == 'GET':
        if 'name' in request.args:
            name = request.args['name']
            return name
    if request.method == 'POST':
        return f'Your name is {request.form["name"]}'
    return 'In process...'


if __name__ == '__main__':
    app.run()
