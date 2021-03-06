require 'test_helper'

class StudentInformationsControllerTest < ActionController::TestCase
  setup do
    @student_information = student_informations(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:student_informations)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create student_information" do
    assert_difference('StudentInformation.count') do
      post :create, student_information: { Color: @student_information.Color, GPA: @student_information.GPA, Height: @student_information.Height, Name: @student_information.Name, Region: @student_information.Region, Weight: @student_information.Weight }
    end

    assert_redirected_to student_information_path(assigns(:student_information))
  end

  test "should show student_information" do
    get :show, id: @student_information
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @student_information
    assert_response :success
  end

  test "should update student_information" do
    patch :update, id: @student_information, student_information: { Color: @student_information.Color, GPA: @student_information.GPA, Height: @student_information.Height, Name: @student_information.Name, Region: @student_information.Region, Weight: @student_information.Weight }
    assert_redirected_to student_information_path(assigns(:student_information))
  end

  test "should destroy student_information" do
    assert_difference('StudentInformation.count', -1) do
      delete :destroy, id: @student_information
    end

    assert_redirected_to student_informations_path
  end
end
