// Encapsulating helper functions in a global object called `helpers`
window.helpers = {
  // Function to format date for <input type="date"> (yyyy-mm-dd)
  formatDateForInput: function(dateString) {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];  // Returns the date in "yyyy-mm-dd" format
  },

  // Function to format date for display (dd-mm-yyyy)
  formatDateForDisplay: function(dateString) {
    const date = new Date(dateString);
    return [
      String(date.getDate()).padStart(2, '0'),  // Day, e.g., "08"
      String(date.getMonth() + 1).padStart(2, '0'),  // Month (add 1 because it's 0-indexed)
      date.getFullYear()  // Year
    ].join('-');  // Returns the date in "dd-mm-yyyy" format
  }
};
