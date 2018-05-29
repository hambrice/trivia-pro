require 'pry'
require 'open-uri'

Question.destroy_all
resp = Faraday.get "https://opentdb.com/api_token.php?command=request"
session_token = JSON.parse(resp.body)["token"]
def url(amount, category_id, session_token)
  return "https://opentdb.com/api.php?amount=#{amount}&category=#{category_id}&type=multiple&token=#{session_token}"
end

def get_questions(amount, category_id, session_token)
  resp = Faraday.get url(amount, category_id, session_token)
  questions = JSON.parse(resp.body)["results"]
  questions.each do |question|
    Question.create(category: question["category"], of_type: question["type"], difficulty: question["difficulty"], question: question["question"], correct_answer: question["correct_answer"], incorrect_answers: question["incorrect_answers"])
  end
end

get_questions(50, 9, session_token)
get_questions(50, 9, session_token)
get_questions(50, 9, session_token)
get_questions(50, 10, session_token)
get_questions(50, 11, session_token)
get_questions(50, 11, session_token)
get_questions(50, 11, session_token)
get_questions(50, 12, session_token)
get_questions(50, 12, session_token)
get_questions(50, 12, session_token)
get_questions(50, 14, session_token)
get_questions(50, 14, session_token)
get_questions(50, 15, session_token)
get_questions(50, 15, session_token)
get_questions(50, 15, session_token)
get_questions(50, 17, session_token)
get_questions(50, 17, session_token)
get_questions(50, 18, session_token)
get_questions(50, 18, session_token)
get_questions(50, 21, session_token)
get_questions(50, 22, session_token)
get_questions(50, 22, session_token)
get_questions(50, 22, session_token)
get_questions(50, 23, session_token)
get_questions(50, 23, session_token)
get_questions(50, 23, session_token)
get_questions(50, 28, session_token)
get_questions(50, 31, session_token)
get_questions(50, 31, session_token)
get_questions(50, 32, session_token)
