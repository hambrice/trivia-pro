require 'pry'
require 'open-uri'

Question.destroy_all
resp = Faraday.get "https://opentdb.com/api_token.php?command=request"
session_token =
10.times do
url = "https://opentdb.com/api.php?amount=50&type=multiple"
resp = Faraday.get url
questions = JSON.parse(resp.body)["results"]
questions.each do |question|
  Question.create(category: question["category"], of_type: question["type"], difficulty: question["difficulty"], question: question["question"], correct_answer: question["correct_answer"], incorrect_answers: question["incorrect_answers"])
end
end
