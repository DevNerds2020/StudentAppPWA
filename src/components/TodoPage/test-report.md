# To-Do Page Test Report

## Introduction
This report provides a detailed explanation of the code that automates the testing of a To-Do web page using Selenium, a web testing framework. The code performs various tests to verify the functionality of the To-Do web page.<br />

## Code Explanation
The code creates an instance of the TodoPageTest class and runs the test_todo_page() method to perform the tests.<br />

## Initialization
The TodoPageTest class initializes a web driver instance using the Chrome browser and navigates to the To-Do page at "http://127.0.0.1:5173/todo".<br />

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
### Check and Delete Test
1. Clicks the delete button with the "id" attribute "delete-button" to delete the input
2. Verifies if the element with "id" attribute "test-edit" is not present.
## Closing the Web Driver
The code closes the web driver using the close_driver() method.

## Conclusion
This code is a comprehensive test for the To-Do web page and verifies the functionality of the input field, editing, checking, and deleting of the To-Do items. The code provides a clear and effective way to automate the testing process, reducing manual efforts and ensuring the reliability of the To-Do web page.