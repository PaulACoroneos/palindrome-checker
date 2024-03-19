const submitBtn = document.querySelector('#check-btn');

/**
 * This is a very quick and ugly check for a palindrome. This could be made faster by using a hasttable to store the character count and then checking if the count is even or odd.
 * @param {*} str 
 * @returns boolean
 */
const isPalindrome = (str) => {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

submitBtn.addEventListener('click', () => {
  const input = document.querySelector('#text-input');
  if(input.value === '') {
    alert('Please input a value');
    result.innerText='';
    return;
  }
  const sanitizedValue = input.value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  if(isPalindrome(sanitizedValue)) {
    const result = document.querySelector('#result');
    result.innerHTML = `<span id="palindrome">${input.value}</span> is a palindrome`;
  }
  else {
    result.innerHTML = `<span id="palindrome">${input.value}</span> is not a palindrome`;
  }
  
})