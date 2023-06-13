import pandas as pd
import csv
import random
from flask import Flask,request,jsonify
from flask_cors import CORS


app=Flask(__name__)
CORS(app)

no_of_ques=3
ques=[no_of_ques]
ans=[no_of_ques]
topic=''
question_no=0


def ask_topic():
    topic=input('\nselect python or c++')
    return topic



def extract(topic):
    read_file = pd.read_excel (r'quiz.xlsx')
    read_file.to_csv (r'quiz.csv', index = None, header=True)
    with open('quiz.csv', newline='') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            i=0
            if row[3] == topic:
                ques.append(row[1])
                ans.append(row[2])
                i=i+1

def generate_ques(no_of_ques):
    x=random.randint(1, no_of_ques)
    print(x)
    print('QUESTION: ',ques[x])
    return x

def get_ans(question_no):
    return ans[question_no]


@app.route("/topic", methods=['POST'])
def start():
    # end=0
    # topic=ask_topic()
    # 
    print("fdsfdsfsdfds")
    p=request.get_json()
    print(p['topic'])
    topic=p['topic']
    extract(topic)  
    question_no=generate_ques(no_of_ques)
    get_ans(question_no)
    print({"question": ques[question_no], "answer": ans[question_no]})
    return jsonify({"question": ques[question_no], "answer": ans[question_no]})

if __name__ == "__main__":
    app.run(debug=True)
