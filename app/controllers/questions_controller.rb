require 'pry'

class QuestionsController < ApplicationController
  def show
    settings = JSON.parse(params[:id])
    if settings["category"] != "random"
      questions = Question.where(category: settings["category"]).shuffle.first(settings["questionAmount"])
      render json: questions
    else
      render json: Question.all.shuffle.first(settings["questionAmount"])
    end
  end
  # def index
  #   render json: Question.first(20)
  # end
end
