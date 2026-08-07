// Function to valdiate Inputs
export function validateInputs(username, password){

    //Tab Protection Check 
    if (username.includes('\t') || password.includes('\t')) {
      return 'Tabs are not allowed anywhere in the fields!';
    }

    // --- USERNAME VALIDATION RULES ---
    if (username.length < 6) {
      return 'Username must be at least 6 characters long.';
    }
    if (!/^[a-zA-Z]/.test(username)) {
      return 'Username must start with a letter.';
    }
    if (/[0-9]/.test(username)) {
      return 'Username cannot contain any numbers.';
    }
    if (!/[\.,%_!\*/]/.test(username)) {
      return 'Username must include a special character: . , % _ ! * /';
    }

    // --- PASSWORD VALIDATION RULES ---
    if (password.length < 8) {
      return 'Password must be at least 8 characters long.';
    }
    if (!/^[a-zA-Z0-9]/.test(password)) {
      return 'Password must start with a letter or a number.';
    }
    if (!/[0-9]/.test(password)) {
      return 'Password must contain at least one number.';
    }
    if (!/[a-zA-Z]/.test(password)) {
      return 'Password must contain letters.';
    }
    if (!/[\.,%_!\*/]/.test(password)) {
      return 'Password must include a special character: . , % _ ! * /';
    }

    return null; // Passes all validation checks successfully
  }

// Function to handle user login verification in local storage
export function handleUserLogin(username, password) {
  const storedUserPassword = localStorage.getItem(`user_${username}`);
  
  if (storedUserPassword && storedUserPassword === password) {
    localStorage.setItem('isAuthenticated', 'true');
    return { success: true, error: null };
  }
  
  return { success: false, error: 'Invalid username or password credentials.' };
}

// Handles the Registration Storage Creation
export function handleUserRegister(username, password) {
  const existingUser = localStorage.getItem(`user_${username}`);
  
  if (existingUser) {
    return { success: false, error: 'Username already exists!' };
  }
  
  localStorage.setItem(`user_${username}`, password);
  return { success: true, error: null };
}
