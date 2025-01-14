"""
Test module for the GitHub Action application.
Contains test cases to verify the functionality of the app module.
"""
import pytest
from app import calculate_total, validate_user_input


def test_calculate_total():
    """
    Test case to verify the functionality of the calculate_total function.
    Add description of what this test actually verifies.
    """
    items = [{"price": 10.0}, {"price": 20.0}]
    assert calculate_total(items) == 30.0


def test_validate_user_input():
    """
    Test case to verify the functionality of the validate_user_input function.
    Add description of what this test actually verifies.
    """
    user_data = {"username": "test_user", "email": "test@example.com"}
    validated = validate_user_input(user_data)
    assert validated["email"] == "test@example.com"
