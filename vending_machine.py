class VendingMachine:
    def __init__(self):
        self.drinks = {
            "Coca Cola": 3.35,
            "Pepsi": 2.10,
            "Orange": 2.85
        }
        self.balance = 0

    def insert_money(self):
        while True:
            try:
                amount = float(input("Insert money (5, 10, 15, 20): "))
                if amount in [5, 10, 15, 20]:
                    self.balance += amount
                    print(f"Current balance: ${self.balance:.2f}")
                    break
                else:
                    print("Invalid amount. Please insert 5, 10, 15, or 20.")
            except ValueError:
                print("Invalid input. Please enter a valid number.")

    def select_drink(self):
        print("\nAvailable drinks:")
        for name, price in self.drinks.items():
            print(f"{name} - ${price:.2f}")

        while True:
            choice = input("Select a drink: ")
            if choice in self.drinks:
                if self.balance >= self.drinks[choice]:
                    self.balance -= self.drinks[choice]
                    print(f"You purchased {choice}. Remaining balance: ${self.balance:.2f}")
                    return True
                else:
                    print("Not enough money. Insert more money.")
                    self.insert_money()
            else:
                print("Invalid choice. Please select a valid drink.")

    def run(self):
        print("Welcome to the Vending Machine!")
        self.insert_money()

        while True:
            self.select_drink()
            another = input("Do you want another drink? (yes/no): ").strip().lower()
            if another != "yes":
                print("Thank you for using the vending machine!")
                break

if __name__ == "__main__":
    vm = VendingMachine()
    vm.run()
