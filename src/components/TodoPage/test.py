from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

class TodoPageTest:
    def __init__(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://127.0.0.1:5173/todo")

    def test_todo_page(self):
        #get input field
        input_field = self.driver.find_element("id", "input")
        #write something in the input field
        input_field.send_keys("test")
        #click the button by id submitbutton
        self.driver.find_element("id", "submitbutton").click()

        assert "test" in self.driver.find_element("id", "test").text

        edit_button = self.driver.find_element("id","edit-button").click()
        time.sleep(2)
        #edit the text
        input_field = self.driver.find_element("id", "edit-field")
        #delete the text
        input_field.send_keys(Keys.CONTROL + "a")
        input_field.send_keys(Keys.DELETE)
        time.sleep(2)
        #write something in the input field
        input_field.send_keys("test-edit")
        #press enter
        input_field.send_keys(Keys.RETURN)
        time.sleep(2)

        #find the button with id check-true
        self.driver.find_element("id", "check-true").click()
        time.sleep(2)
        #check button with id check-false exists
        self.driver.find_element("id", "check-false")
        #check if the text is in the list by id test-edit
        assert "test-edit" in self.driver.find_element("id", "test-edit").text

        #find the button with id delete-button
        self.driver.find_element("id", "delete-button").click()

        #there should be no element with id test-edit
        try:
            element = self.driver.find_element("id", "test-edit")
            if element:
                raise Exception("element found")
        except:
            print("element not found")

        time.sleep(10)

    def close_driver(self):
        self.driver.close()

if __name__ == '__main__':
    test = TodoPageTest()
    test.test_todo_page()
    test.close_driver()
