from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)

@app.route('/recon', methods=['POST'])
def recon():
    data = request.get_json()
    if not data or 'domain' not in data:
        return jsonify({'error': 'No domain provided'}), 400

    domain = data['domain']
    try:
        # Run whois
        whois_output = subprocess.check_output(['whois', domain], stderr=subprocess.STDOUT, text=True)

        # Run nslookup
        nslookup_output = subprocess.check_output(['nslookup', domain], stderr=subprocess.STDOUT, text=True)

        output = f"=== WHOIS ===\n{whois_output}\n\n=== NSLOOKUP ===\n{nslookup_output}"

    except subprocess.CalledProcessError as e:
        output = f"Error during reconnaissance:\n{e.output}"

    return jsonify({'output': output})

if __name__ == '__main__':
    app.run(debug=False)
