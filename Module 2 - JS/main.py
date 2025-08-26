try:
    a = int(input("Enter the first number: "))
    b = int(input("Enter the second number: "))
    
    print("What kind of operation do u want to perform. \n Press + for additon \n Press - for subtraction \n Press * for multiplication \n Press / for division")
    
    o = input("Enter operation: ")
    match o:
        case "+":
            print(f"The result is: {a+b}")    
        case "-":
            print(f"The result is: {a-b}")    
        case "*":
            print(f"The result is: {a*b}")    
        case "/":
            print(f"The result is: {a/b}")    
        case default:
            print(f"There was an error")
            
except Exception as e:
    print("Enter a valid value of a and b")