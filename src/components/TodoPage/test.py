# a test with selenium for todo page 

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome()
driver.get("http://127.0.0.1:5173/todo")
#get input field
input = driver.find_element("id", "input")
#write something in the input field
input.send_keys("test")
#click the button by id submitbutton
driver.find_element("id", "submitbutton").click()

assert "test" in driver.find_element("id", "test").text

editButton = driver.find_element("id", "edit-button").click()
time.sleep(2)
#edit the text
input = driver.find_element("id", "edit-field")
#delete the text
input.send_keys(Keys.CONTROL + "a")
input.send_keys(Keys.DELETE)
time.sleep(2)
#write something in the input field
input.send_keys("test-edit")
#press enter
input.send_keys(Keys.RETURN)
time.sleep(2)

#find the button with id check-true
driver.find_element("id", "check-true").click()
time.sleep(2)
#check button with id check-false exists
driver.find_element("id", "check-false")
#check if the text is in the list by id test-edit
assert "test-edit" in driver.find_element("id", "test-edit").text

#find the button with id delete-button
driver.find_element("id", "delete-button").click()

#there should be no element with id test-edit
try:
    element = driver.find_element("id", "test-edit")
    if element:
        raise Exception("element found")
except:
    print("element not found")

time.sleep(10)
#check if the text is in the list by id test

driver.close()
