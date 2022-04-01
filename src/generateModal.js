const generateModal = function() {
    const container = document.querySelector('.container');
    
    const modal = document.createElement('div');
    modal.classList.add('modal');
    container.appendChild(modal);
    
    const form = document.createElement('form');
    modal.appendChild(form);

    const formCategory = document.createElement('div');
    formCategory.classList.add('form')
    formCategory.classList.add('category')
    form.appendChild(formCategory);

    const label1 = document.createElement('label');
    label1.setAttribute('for', 'categories-form')
    label1.textContent = "Category"

    const select = document.createElement('select');
    select.name = 'categories-form';
    select.id = 'categories-form';

    formCategory.appendChild(label1)
    formCategory.appendChild(select)

    const formName = document.createElement('div');
    formName.classList.add('form')
    formName.classList.add('name')
    form.appendChild(formName);

    const label2 = document.createElement('label');
    label2.setAttribute('for', 'name')
    label2.textContent = "Name";

    const input1 = document.createElement('input');
    input1.type = 'text'
    input1.name = 'name'
    input1.classList.add('names-form');

    formName.appendChild(label2);
    formName.appendChild(input1);

    const formDescription = document.createElement('div');
    formDescription.classList.add('form')
    formDescription.classList.add('description')
    form.appendChild(formName);

    const label3 = document.createElement('label');
    label3.setAttribute('for', 'description')
    label3.textContent = "Description";

    const input2 = document.createElement('input');
    input2.type = 'text'
    input2.name = 'description'
    input2.classList.add('descriptions-form');

    formDescription.appendChild(label3);
    formDescription.appendChild(input2);

    const formDueDate = document.createElement('div');
    formDueDate.classList.add('form')
    formDueDate.classList.add('due-date')
    form.appendChild(formDueDate);

    const label4 = document.createElement('label');
    label4.setAttribute('for', 'due-date')
    label4.textContent = "Date";

    const input3 = document.createElement('input');
    input3.type = 'date'
    input3.name = 'due-date'
    input3.classList.add('due-dates-form');

    formDueDate.appendChild(label4);
    formDueDate.appendChild(input3);

    const formButtons = document.createElement('div');
    formButtons.classList.add('form')
    formButtons.classList.add('form-buttons')
    form.appendChild(formButtons);

    const button1 = document.createElement('button');
    button1.classList.add('submit');
    button1.textContent = "Submit"
    const button2 = document.createElement('button');
    button2.classList.add('close');
    button2.textContent = "Close"
    
    formButtons.appendChild(button1);
    formButtons.appendChild(button2);

    const overlay = document.createElement('div');
    overlay.id = 'overlay'
    container.appendChild(overlay)
};

export { generateModal }
