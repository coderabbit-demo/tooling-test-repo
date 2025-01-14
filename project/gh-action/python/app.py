def calculate_total(items):
    """Calculate total price of items with proper validation."""
    if not isinstance(items, list):
        raise TypeError("Items must be a list")
    
    return sum(float(item.get('price', 0)) for item in items)

def validate_user_input(user_data):
    """Safely validate user input with proper checks."""
    required_fields = ['username', 'email']
    
    if not all(field in user_data for field in required_fields):
        raise ValueError("Missing required fields")
    
    # Sanitize email
    email = user_data['email'].lower().strip()
    if not '@' in email:
        raise ValueError("Invalid email format")
    
    return {
        'username': user_data['username'].strip(),
        'email': email
    }