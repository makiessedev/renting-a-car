# Story: Renting a car

## Use Case 01

As a system user
In order to get an available car in a specific category
Given a car category containing 3 different cars
When I check if there's a car available
Then it should choose randomly a car from the category chosen

## Use Case 02

As a system user
In order to calculate the final renting price
Given a customer eho wants to rent a car for 5 days
And he is 50 years old
When he chooses a car category that costs 57.611,614 AOA per day
Then I must add the Tax of his age which is 30% to the car category price
Then the final formula will be `((price per day * Tax) * number of days)`
And the final result will be `((57.611,614 * 1.3) * 5) = 374.475,491`
And the final price will be printed in Angolan Portuguese format as "374.475,491 AOA"

## Use Case 03

As a system user
In order to register a renting transaction
Given a registered customer who is 50 years old
And a car model that costs 57.611,614 AOA per day
And a delivery date that is for 05 days behind
And given a actual date 05/11/2020
When I rent a car I should see the customer data
And the car selected
And the final price which will be 374.475,491 AOA
And DueDate Which will be printed in Angolan Portuguese format "10 de Novembro de 2020"
