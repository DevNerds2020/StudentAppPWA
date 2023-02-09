from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

class ExamsPageTest:
    def __init__(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://127.0.0.1:5173/exams")

    def testExamsStart(self):
        #get element by id exam 1
        exam1 = self.driver.find_element("id", "exam1") 
        time.sleep(2)
        exam1.click()
        startExamButton = self.driver.find_element("id", "startExamButton")
        startExamButton.click()
        
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
        

    def close_driver(self):
        self.driver.close()

if __name__ == '__main__':
    test = ExamsPageTest()
    test.testExamsEndButton()
    test.close_driver()
