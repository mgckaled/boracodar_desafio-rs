const input = document.getElementById('search-input')
const contacts = document.querySelectorAll('.contacts-list')

input.addEventListener('input', function () {
  const filterValue = this.value.toLowerCase()

  contacts.forEach(function (contact) {
    const name = contact.querySelector('.name').textContent.toLowerCase()
    const group = contact.closest('.contacts-group')
    if (name.indexOf(filterValue) > -1) {
      contact.style.display = ''
      if (group) {
        group.style.display = ''
      }
    } else {
      contact.style.display = 'none'
      if (group) {
        const groupContacts = group.querySelectorAll('.contacts-list')
        const visibleContacts = [...groupContacts].filter(function (groupContact) {
          return groupContact.style.display !== 'none'
        })
        if (visibleContacts.length === 0) {
          group.style.display = 'none'
        }
      }
    }
  })
})
