export default (editor, opts = {}) => {
  const bm = editor.BlockManager;

  bm.add('merge-field-firstname', {
    label: 'Prénom Contact',
    category: 'Champs de fusion',
    content: {
      type: 'text',
      content: '{{Contact.FirstName}}',
    },
  });
};

