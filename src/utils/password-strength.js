// hasNumber function
const hasNumber = (value) => {
    return /[0-9]/.test(value);
};

// has mix of small and capitals function
const hasMixed = (value) => {
    return /[a-z]/.test(value) && /[A-Z]/.test(value);
};

// has special chars function
const hasSpecial = (value) => {
    return /[!#@$%^&*)(+=._-]/.test(value);
};

// set color based on strength
const strengthColor = (count) => {
    if (count < 2) return { label: 'Poor', color: 'red' };
    if (count < 3) return { label: 'Weak', color: 'red' };
    if (count < 4) return { label: 'Normal', color: "orange" };
    if (count < 5) return { label: 'Good', color: "lightgreen" };
    if (count < 6) return { label: 'Strong', color: 'green'};
};

// strength indicator function
const strengthIndicator = (value) => {
    let strengths = 0;
    if (value.length > 5) strengths++;
    if (value.length > 7) strengths++;
    if (hasNumber(value)) strengths++;
    if (hasSpecial(value)) strengths++;
    if (hasMixed(value)) strengths++;
    return strengths;
};

// Export the functions
module.exports = {
    hasNumber,
    hasMixed,
    hasSpecial,
    strengthColor,
    strengthIndicator,
};
