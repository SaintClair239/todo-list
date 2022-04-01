const categoryLists = ["All"]
const getCategories = function(category) {
      categoryLists.push(category)
}

const displayCategories = function() {
      const categories = document.querySelector('.categories');
      categories.innerHTML = "";
      categoryLists.forEach(category => {
            const p = document.createElement('p');
            p.textContent = category
            categories.appendChild(p);  
      })
}
export { categoryLists, getCategories, displayCategories }