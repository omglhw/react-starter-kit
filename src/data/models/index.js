/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import sequelize from '../sequelize';

import User from './User';
import UserLogin from './UserLogin';
import UserClaim from './UserClaim';
import UserProfile from './UserProfile';

import Category from './Category';
import Products from './Products';
import Photos from './Photos';
import PhotoCategory from './PhotoCategory';

import Blogs from './Blogs';
import Tags from './Tags';
import BlogCategory from './BlogCategory';

User.hasMany(UserLogin, {
  foreignKey: 'userId',
  as: 'logins',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});
User.hasMany(UserClaim, {
  foreignKey: 'userId',
  as: 'claims',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

User.hasOne(UserProfile, {
  foreignKey: 'userId',
  as: 'profile',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

Category.hasMany(Products, {
  foreignKey: 'categoryId',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});
Products.belongsTo(Category, {
  foreignKey: 'categoryId',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});
PhotoCategory.hasMany(Photos, {
  foreignKey: 'phtCateId',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});
Photos.belongsTo(PhotoCategory, {
  foreignKey: 'phtCateId',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});
Products.belongsToMany(Photos, {
  foreignKey: 'productId',
  through: 'ProductPhotos',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});
Photos.belongsToMany(Products, {
  foreignKey: 'photoId',
  through: 'ProductPhotos',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

BlogCategory.hasMany(Blogs, {
  foreignKey: 'blogCategoryId',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});
Blogs.belongsTo(BlogCategory, {
  foreignKey: 'blogCategoryId',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

Blogs.belongsToMany(Tags, {
  foreignKey: 'blogId',
  through: 'BlogTags',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});
Tags.belongsToMany(Blogs, {
  foreignKey: 'tagId',
  through: 'BlogTags',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

function sync(...args) {
  return sequelize.sync({ force: true, ...args });
}

export default { sync };
export {
  User,
  UserLogin,
  UserClaim,
  UserProfile,
  Category,
  Products,
  Photos,
  PhotoCategory,
  Blogs,
  Tags,
  BlogCategory,
};
