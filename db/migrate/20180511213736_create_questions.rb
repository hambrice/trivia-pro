class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.string :category
      t.string :of_type
      t.string :difficulty
      t.string :question
      t.string :correct_answer
      t.string :incorrect_answers

      t.timestamps
    end
  end
end
