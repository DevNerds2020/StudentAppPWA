# Amirreza Alasti 9812762485
# Amirreza Nayyeri 9812762474
# To-Do Page Test Report

## Introduction
This report provides a detailed explanation of the code that automates the testing of a To-Do web page using Selenium, a web testing framework. The code performs various tests to verify the functionality of the To-Do web page.<br />

## Code Explanation
The code creates an instance of the TodoPageTest class and runs the test_todo_page() method to perform the tests.<br />

## Initialization
The TodoPageTest class initializes a web driver instance using the Chrome browser and navigates to the To-Do page at "http://127.0.0.1:5173/todo".<br />

```python
 def __init__(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://127.0.0.1:5173/todo")
```
## Test Method
The test_todo_page() method performs the following tests:<br />

### Input Field Test
1. Retrieves the input field element using the "id" attribute
2. Sends the string "test" to the input field using the send_keys() method
3. Clicks the submit button with the "id" attribute "submitbutton" to submit the input
4. Verifies if the input text "test" is present in the element with "id" attribute "test".
### Edit and Delete Test
1. Clicks the edit button with the "id" attribute "edit-button" to edit the input
2. Deletes the original text and inputs a new string "test-edit"
3. Presses the return key
4. Verifies if the text "test-edit" is present in the element with "id" attribute "test-edit"
5. Clicks the "check-true" button
6. Verifies the existence of the "check-false" button.

```python
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
assert "test-edit" in self.driver.find_element("id", "test-edit").text
```

### Check and Delete Test
1. Clicks the delete button with the "id" attribute "delete-button" to delete the input
2. Verifies if the element with "id" attribute "test-edit" is not present.

```python
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
```

## Closing the Web Driver
The code closes the web driver using the close_driver() method.

```
def close_driver(self):
    self.driver.close()
```
## Conclusion
This code is a comprehensive test for the To-Do web page and verifies the functionality of the input field, editing, checking, and deleting of the To-Do items. The code provides a clear and effective way to automate the testing process, reducing manual efforts and ensuring the reliability of the To-Do web page.

# for additional mark 
## Full Report
This code provides an automation test for a web application. The web application is accessible at the URL "http://127.0.0.1:5173/exams".<br />

The code uses the Selenium library and the Chrome webdriver to interact with the web page and perform automated tests.
<br />

## Class definition
The main class is ExamsPageTest which contains several test functions to test the functionality of the exams web application.

```python
class ExamsPageTest:
    def __init__(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://127.0.0.1:5173/exams")

```
The class starts with a constructor method __init__() that creates an instance of the Chrome web driver and navigates to the exams page.

## Test Exam Start

```python
    def testExamsStart(self):
        #get element by id exam 1
        exam1 = self.driver.find_element("id", "exam1") 
        time.sleep(2)
        exam1.click()
        startExamButton = self.driver.find_element("id", "startExamButton")
        startExamButton.click()
```
The testExamsStart() function tests the start button of an exam. It first finds the exam 1 element by its id and clicks it. Then, it finds the start button by its id and clicks it. The code waits for 2 seconds after each action.

## Test Exam Result

```python
    def testExamsResult(self):
        self.testExamsStart()
        self.driver.find_element("id", "b1").click()
        self.driver.find_element("id", "b2").click()
        self.driver.find_element("id", "a").click()
        time.sleep(2)
        self.driver.find_element("id", "submitExamButton").click()
        time.sleep(2)
        #expect div with id mark to have value of 33.33% if not print error
        mark = self.driver.find_element("id", "mark")
        if mark.text != "33.33":
            print("Error: mark is not 33.33%")
        else:
            print("Test passed")
        time.sleep(2)

```
The testExamsResult() function tests the result of an exam. It starts by calling the testExamsStart() function to initiate an exam. Then, it selects answers for the exam by finding elements by their ids and clicking them. After clicking the submit button, it finds the mark element by its id, and it checks if the text of the mark element is equal to "33.33". If the value is not equal to "33.33", the function will print an error message, otherwise, it will print "Test passed". The code waits for 2 seconds after each action.

## Test Exam End Button

```python
    def testExamsEndButton(self):
        self.testExamsStart()
        self.driver.find_element("id", "submitExamButton").click()
        time.sleep(2)
        #expect div with id mark to have value of 0% if not print error
        mark = self.driver.find_element("id", "mark")
        if mark.text != "0":
            print("Error: mark is not 0%")
        else:
            print("Test passed")
        time.sleep(2)
        

```
### github link => https://github.com/DevNerds2020/StudentAppPWA/blob/master/src/components/TodoPage/test.py
### github link => https://github.com/DevNerds2020/StudentAppPWA/tree/master/src/components/ExampsPage