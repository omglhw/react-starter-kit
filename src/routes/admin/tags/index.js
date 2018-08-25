import React from 'react';
import AdminLayout from 'components/AdminLayout';
import Tags from './Tags';

const title = 'tags';

function action() {
  return {
    chunks: ['admin/tags'],
    title,
    component: (
      <AdminLayout title={title}>
        <Tags title={title} />
      </AdminLayout>
    ),
  };
}

export default action;
