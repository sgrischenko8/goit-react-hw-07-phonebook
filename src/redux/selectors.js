import { createSelector } from '@reduxjs/toolkit';

export const selectLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectTheme = state => state.theme.theme;

export const selectFilter = state => state.filter;

export const selectContacts = state => state.contacts.items;

export const selectContactsToRender = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const sortedContacts = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    if (!filter) {
      return sortedContacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return sortedContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
