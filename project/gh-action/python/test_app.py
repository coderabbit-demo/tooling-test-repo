import pytest
from main import calculate_total, validate_user_input

def test_calculate_total():
    items = [{'price': 10.0}, {'price': 20.0}]
    assert calculate_total(items) == 30.0

def test_validate_user_input():
    user_data = {
        'username': 'test_user',
        'email': 'test@example.com'
    }
    validated = validate_user_input(user_data)
    assert validated['email'] == 'test@example.com'