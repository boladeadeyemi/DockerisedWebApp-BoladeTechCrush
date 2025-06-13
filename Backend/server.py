from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins='*')

#Members API route
@app.route("/api/groupmembers", methods=['GET'])

def groupMembers():
    return jsonify(
        {
            "groupMembers":
              [
                
        'Bolade',
        'Felix',
        'Idowu',
        'James',
        'Agape',
        'Oyerinde',
        'John',
        'Folashade',
        'Ifeoluwa',
        'Paul',
        'Peter',
        'Peace',
        'Esther',
        'Covenant',
        'Hassan', 
        'Ingrid'
                   ]

        }
        
        
    )


if __name__ == '__main__':
    app.run(debug=True, port = 5000)
