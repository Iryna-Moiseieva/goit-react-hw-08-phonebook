export const selectLoading = state => state.contacts.loading;

export const selectFilter = state => state.contacts.filter;

export const selectAllContacts = state => state.contacts.items;

// export const getVisibleContacts = (contacts, filter) => {
//   const optimizedFilter = filter.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(optimizedFilter)
//   );
// };

// export const checkContact = (contacts, name) => {
//   const normalizedName = name.toLowerCase();

//   return contacts.find(
//     contact => contact.name.toLowerCase() === normalizedName
//   );
// };