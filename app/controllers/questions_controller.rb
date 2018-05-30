class QuestionsController < ApplicationController
  def show
    render json: Question.all
  end
end
