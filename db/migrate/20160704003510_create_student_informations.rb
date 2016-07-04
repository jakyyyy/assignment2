class CreateStudentInformations < ActiveRecord::Migration
  def change
    create_table :student_informations do |t|
      t.string :Name
      t.string :Weight
      t.string :Height
      t.string :Color
      t.string :GPA
      t.string :Region

      t.timestamps null: false
    end
  end
end
