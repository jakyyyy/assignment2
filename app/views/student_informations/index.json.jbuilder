json.array!(@student_informations) do |student_information|
  json.extract! student_information, :id, :Name, :Weight, :Height, :Color, :GPA, :Region
  json.url student_information_url(student_information, format: :json)
end
