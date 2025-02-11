import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from qdrant_client import QdrantClient
from openai import OpenAI
from sentence_transformers import SentenceTransformer
from dotenv import load_dotenv  # Import dotenv

# Load environment variables from .env file
load_dotenv()

def get_sentenceTF_embeddings(sentences):
    model = SentenceTransformer('all-MiniLM-L6-v2')
    embeddings = []
    for chunk in sentences:
        embeddings.append(model.encode(chunk))
    return embeddings

def custom_prompt(query, results):
    # Extract the text content from the results
    source_knowledge = "\n".join([result.payload.get('text', '') for result in results])
    
    # Create the augmented prompt
    augment_prompt = f"""Using the contexts below, answer the query:

    Contexts:
    {source_knowledge}

    Query: {query}"""
    
    return augment_prompt

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize clients using environment variables
qdrant_client = QdrantClient(
    url=os.getenv("QDRANT_URL"), 
    api_key=os.getenv("QDRANT_API_KEY")
)
nim_client = OpenAI(
    base_url=os.getenv("NIM_URL"), 
    api_key=os.getenv("NIM_API_KEY")
)

@app.route('/query', methods=['POST'])
def query():
    data = request.json
    user_query = data.get('query')

    # Get query embedding
    query_embedding = get_sentenceTF_embeddings([user_query])[0]

    # Perform similarity search
    results = qdrant_client.search(collection_name="income_tax", query_vector=query_embedding)

    # Generate response using NVIDIA API
    prompt = custom_prompt(user_query, results)
    response = nim_client.chat.completions.create(
        model="meta/llama-3.1-8b-instruct",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7,
        max_tokens=500,
    )
    
    return jsonify({"response": response.choices[0].message.content})

if __name__ == "__main__":
    app.run(debug=True)
