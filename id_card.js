document.addEventListener('DOMContentLoaded', function() {
    // 1. Get references to input elements
    const nameInput = document.getElementById('studentName');
    const idInput = document.getElementById('idNumber');
    const groupSelect = document.getElementById('studentGroup');
    const expiryInput = document.getElementById('expiry');

    // 2. Get references to display elements on the ID card
    const displayName = document.getElementById('display-name');
    const displayId = document.getElementById('display-id');
    const displayGroup = document.getElementById('display-group');
    const displaySession = document.getElementById('display-session');
    
    // 3. Update Function
    function updateIDCard() {
        displayName.textContent = nameInput.value || '[Name]';
        displayId.textContent = idInput.value || '[ID No.]';
        displayGroup.textContent = groupSelect.value;
        displaySession.textContent = expiryInput.value;
    }

    // 4. Event Listeners
    // Add an event listener to update the card whenever an input changes
    nameInput.addEventListener('input', updateIDCard);
    idInput.addEventListener('input', updateIDCard);
    groupSelect.addEventListener('change', updateIDCard);

    // Run the function once on load to populate the card with default values
    updateIDCard(); 
});